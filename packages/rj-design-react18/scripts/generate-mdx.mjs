#!/usr/bin/env node

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 配置
const STORYBOOK_URL = 'http://localhost:6006'
const DOCS_OUTPUT_DIR = path.resolve(__dirname, '../primitives/docs')
const STORYBOOK_STATIC_DIR = path.resolve(__dirname, '../storybook-static')

/**
 * 检查 Storybook 是否正在运行
 */
async function checkStorybookRunning() {
  try {
    const response = await fetch(`${STORYBOOK_URL}/iframe.html`)
    return response.ok
  } catch {
    return false
  }
}

/**
 * 检查并安装Chrome浏览器
 */
async function ensureChrome() {
  try {
    // 尝试检测系统Chrome
    const chromePaths = [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // macOS
      '/usr/bin/google-chrome', // Linux
      '/usr/bin/chromium-browser', // Linux Chromium
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Windows
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' // Windows x86
    ]
    
    for (const chromePath of chromePaths) {
      try {
        await fs.access(chromePath)
        console.log(`✅ 找到系统Chrome: ${chromePath}`)
        return chromePath
      } catch {
        // 继续尝试下一个路径
      }
    }
    
    // 如果找不到系统Chrome，尝试安装Puppeteer的Chrome
    console.log('⚠️  未找到系统Chrome，尝试安装Puppeteer浏览器...')
    try {
      execSync('npx puppeteer browsers install chrome', { stdio: 'inherit' })
      console.log('✅ Puppeteer Chrome安装成功')
      return null // 使用Puppeteer默认Chrome
    } catch (error) {
      console.error('❌ 安装Puppeteer Chrome失败:', error.message)
      throw new Error('无法找到或安装Chrome浏览器')
    }
  } catch (error) {
    console.error('❌ Chrome检测失败:', error.message)
    throw error
  }
}

/**
 * 解析 Storybook 的 index.json 文件获取组件元数据
 */
async function parseStorybookIndex() {
  try {
    const response = await fetch(`${STORYBOOK_URL}/index.json`)
    const data = await response.json()
    return data.entries
  } catch (error) {
    console.error('❌ 无法获取 Storybook 索引:', error.message)
    process.exit(1)
  }
}

/**
 * 从组件条目中提取有 autodocs 的组件信息
 */
function extractComponentsWithAutodocs(entries) {
  const components = new Map()
  
  for (const [id, entry] of Object.entries(entries)) {
    // 只处理 docs 类型且有 autodocs 标签的条目
    if (entry.type === 'docs' && entry.tags && entry.tags.includes('autodocs')) {
      const componentId = entry.title
      
      components.set(componentId, {
        id: entry.id,
        title: entry.title,
        name: entry.name,
        importPath: entry.importPath,
        url: `${STORYBOOK_URL}/?path=/docs/${entry.id}`
      })
    }
  }
  
  return Array.from(components.values())
}

/**
 * 使用 Puppeteer 提取组件文档内容
 */
async function extractComponentDocs(browser, component) {
  const page = await browser.newPage()
  
  try {
    console.log(`📖 正在访问: ${component.title}`)
    
    // 访问组件的 docs 页面
    await page.goto(component.url, { waitUntil: 'networkidle2', timeout: 30000 })
    
    // 等待页面加载完成
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // 等待并切换到 iframe（Storybook 的实际内容在 iframe 中）
    await page.waitForSelector('iframe[id*="storybook-preview-iframe"]', { timeout: 10000 })
    const frameHandle = await page.$('iframe[id*="storybook-preview-iframe"]')
    const docFrame = await frameHandle.contentFrame()
    
    // 等待文档内容完全加载
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    // 提取文档信息
    const docInfo = await docFrame.evaluate(() => {
      const result = {
        title: '',
        description: '',
        props: [],
        stories: []
      }
      
      // 提取标题
      const titleEl = document.querySelector('h1.sbdocs-title')
      if (titleEl) {
        result.title = titleEl.textContent.trim()
      }
      
      // 提取描述（可能在多个地方）
      const descriptionSelectors = [
        '.sbdocs-content > p',
        '.sbdocs-content .css-1f9domv p',
        '.sbdocs-content .markdown p'
      ]
      
      for (const selector of descriptionSelectors) {
        const descEl = document.querySelector(selector)
        if (descEl && descEl.textContent.trim() && descEl.textContent.length > 10) {
          result.description = descEl.textContent.trim()
          break
        }
      }
      
      // 提取属性表格
      const propsTable = document.querySelector('.docblock-argstable')
      if (propsTable) {
        const rows = propsTable.querySelectorAll('tbody tr')
        rows.forEach(row => {
          const cells = row.querySelectorAll('td')
          if (cells.length >= 3) {
            const nameCell = cells[0]
            const typeCell = cells[1]
            const defaultCell = cells[2]
            
            let propName = nameCell?.textContent?.trim() || ''
            let propType = typeCell?.textContent?.trim() || ''
            let propDefault = defaultCell?.textContent?.trim() || ''
            
            // 处理类型信息 - 清理 Storybook 控件格式
            if (propType.includes('Choose option') || propType.includes('...')) {
              // 提取 "Choose option...xxxyyy" 或类似格式中的选项
              const match = propType.match(/(?:Choose option|Set \w+)\.\.\.(.+)/) || 
                           propType.match(/^[^.]*\.\.\.(.+)/)
              
              if (match) {
                const optionsStr = match[1]
                // 尝试智能分割选项 - 基于常见的分隔模式
                let options = []
                
                // 方法1：按驼峰命名分割
                const camelCaseOptions = optionsStr.split(/(?=[A-Z][a-z])/)
                  .filter(opt => opt && opt.length > 1)
                  .map(opt => opt.toLowerCase())
                
                // 方法2：按常见单词边界分割
                const wordBoundaryOptions = optionsStr.split(/(?<=\w)(?=[A-Z])|(?<=[a-z])(?=[A-Z])|_|-/)
                  .filter(opt => opt && opt.length > 0)
                  .map(opt => opt.toLowerCase())
                
                // 选择分割结果更合理的方法
                if (camelCaseOptions.length > 1 && camelCaseOptions.length < 10) {
                  options = camelCaseOptions
                } else if (wordBoundaryOptions.length > 1 && wordBoundaryOptions.length < 10) {
                  options = wordBoundaryOptions
                } else {
                  // 保持原始字符串
                  options = [optionsStr.toLowerCase()]
                }
                
                if (options.length > 1) {
                  propType = options.join(' | ')
                } else if (options.length === 1) {
                  propType = options[0]
                }
              }
            }
            
            if (propName) {
              result.props.push({
                name: propName,
                type: propType,
                defaultValue: propDefault === '-' ? '' : propDefault,
                description: ''
              })
            }
          }
        })
      }
      
             // 提取 Stories - 查找所有 story 容器，过滤掉重复的和内部容器
       const storyContainers = document.querySelectorAll('[id*="story--"]')
       const processedStories = new Set()
       const uniqueStories = []
       
       for (const container of storyContainers) {
         const storyId = container.id
         
         // 跳过内部容器（包含 -inner 的）
         if (storyId.includes('-inner')) continue
         
         // 跳过已处理的 Stories
         if (processedStories.has(storyId)) continue
         
         // 提取 story 名称
         const innerDiv = container.querySelector('[data-name]')
         const storyName = innerDiv?.getAttribute('data-name') || 
                          container.id.split('--').pop()?.replace(/-/g, ' ')
         
         if (!storyName) continue
         
         // 跳过重复的 story 名称
         const storyNameKey = storyName.toLowerCase().trim()
         if (processedStories.has(storyNameKey)) continue
         
         // 查找对应的 h3 标题（如果有）
         let storyTitle = storyName
         const headingId = storyName.toLowerCase().replace(/\s+/g, '-')
         const headingEl = document.querySelector(`#${headingId}`)
         if (headingEl) {
           storyTitle = headingEl.textContent.trim()
         }
         
         // 查找组件元素 - 完全通用的策略，不依赖具体组件类型
         let componentEl = null
         
         // 查找最有可能是组件根元素的DOM节点
         // 1. 优先查找有明确组件标识的元素
         componentEl = container.querySelector('[data-component]') ||
                      container.querySelector('[data-testid]') ||
                      container.querySelector('[data-slot]')
         
         // 2. 如果没有明确标识，查找第一个有样式类的元素（通常是组件根元素）
         if (!componentEl) {
           const candidates = container.querySelectorAll('[class]')
           // 找到第一个有实际样式类的元素（排除只有基础容器类的）
           for (const candidate of candidates) {
             if (candidate.className && 
                 candidate.className.trim() && 
                 !candidate.className.includes('story-') &&
                 !candidate.className.includes('sb-')) {
               componentEl = candidate
               break
             }
           }
         }
         
         // 3. 最后兜底：取第一个子元素
         if (!componentEl) {
           componentEl = container.firstElementChild
         }
         let componentContent = storyTitle
         let componentProps = {}
         
         if (componentEl) {
           // 提取文本内容
           if (componentEl.textContent && componentEl.textContent.trim()) {
             componentContent = componentEl.textContent.trim()
           }
           
                      // 通过外部Puppeteer点击按钮来获取源代码
           // 由于在evaluate内部无法有效点击，我们需要标记这个story以便外部处理
           componentProps._storyIndex = Array.from(document.querySelectorAll('[id*="story--"]:not([id*="-inner"])')).indexOf(container)
         }
         
         uniqueStories.push({
           id: storyId,
           name: storyName,
           title: storyTitle,
           content: componentContent,
           props: componentProps
         })
         
         processedStories.add(storyId)
         processedStories.add(storyNameKey)
       }
       
       // 进一步去重，确保没有重复的 story 名称
       const finalStories = []
       const seenNames = new Set()
       
       for (const story of uniqueStories) {
         const key = story.name.toLowerCase().trim()
         if (!seenNames.has(key)) {
           finalStories.push(story)
           seenNames.add(key)
         }
       }
       
       result.stories = finalStories
      
      return result
    })
    
    // 为每个story获取真实的源代码
    for (let i = 0; i < docInfo.stories.length; i++) {
      const story = docInfo.stories[i]
      if (story.props && story.props._storyIndex !== undefined) {
        try {
          const storyIndex = story.props._storyIndex
          
          // 点击对应的"Show code"按钮
          const showCodeButton = await docFrame.$('.docblock-code-toggle')
          if (showCodeButton) {
            const buttons = await docFrame.$$('.docblock-code-toggle')
            if (buttons[storyIndex]) {
              await buttons[storyIndex].click()
              
              // 等待代码面板出现
              await new Promise(resolve => setTimeout(resolve, 2000))
              
              // 提取源代码
              const sourceCodeInfo = await docFrame.evaluate(() => {
                const prismjsElements = document.querySelectorAll('pre.prismjs')
                
                for (const prismElement of prismjsElements) {
                  const sourceCode = prismElement.textContent || prismElement.innerText
                  if (sourceCode && sourceCode.trim() && sourceCode.includes('<') && sourceCode.includes('>')) {
                    return sourceCode.trim()
                  }
                }
                return null
              })
              
              if (sourceCodeInfo) {
                // 解析源代码中的props
                const propsMatches = sourceCodeInfo.matchAll(/(\w+)=["']([^"']*?)["']/g)
                for (const match of propsMatches) {
                  const [, propName, propValue] = match
                  if (propName && propName !== 'children') {
                    // 处理不同类型的值
                    if (propValue === 'true') {
                      story.props[propName] = true
                    } else if (propValue === 'false') {
                      story.props[propName] = false
                    } else if (propValue && !isNaN(propValue)) {
                      story.props[propName] = Number(propValue)
                    } else if (propValue) {
                      story.props[propName] = propValue
                    }
                  }
                }
                
                // 保存完整的源代码
                story.props._sourceCode = sourceCodeInfo
              }
              
              // 关闭代码面板
              await buttons[storyIndex].click()
            }
          }
        } catch (error) {
          console.warn(`   ⚠️  获取 ${story.name} 源代码失败:`, error.message)
        }
        
        // 清理临时属性
        delete story.props._storyIndex
      }
    }
    
    console.log(`   ✅ 提取到 ${docInfo.stories.length} 个 Stories`)
    return docInfo
    
  } catch (error) {
    console.error(`❌ 提取 ${component.title} 文档失败:`, error.message)
    return null
  } finally {
    await page.close()
  }
}

/**
 * 生成 MDX 内容
 */
function generateMDXContent(component, docInfo) {
  const componentName = component.title.split('/').pop()
  const componentNameLowerCase = componentName.toLowerCase()
  
  // 生成默认描述
  const getDefaultDescription = (name) => {
    return `A ${name.toLowerCase()} component.`
  }
  
  // 生成基础示例 - 从第一个 Story 中提取默认用法
  const generateBasicExample = () => {
    if (docInfo.stories && docInfo.stories.length > 0) {
      const firstStory = docInfo.stories[0]
      
      // 如果有真实的源代码，直接使用它
      if (firstStory.props && firstStory.props._sourceCode) {
        return firstStory.props._sourceCode
      }
      
      // 否则构建属性字符串
      let propsString = ''
      if (firstStory.props && Object.keys(firstStory.props).length > 0) {
        const propArray = []
        for (const [key, value] of Object.entries(firstStory.props)) {
          if (key === 'children' || key === '_sourceCode') continue
          
          // 格式化属性值
          if (typeof value === 'boolean') {
            propArray.push(value ? `${key}` : `${key}={false}`)
          } else if (typeof value === 'string') {
            propArray.push(`${key}="${value}"`)
          } else {
            propArray.push(`${key}={${value}}`)
          }
        }
        if (propArray.length > 0) {
          propsString = ' ' + propArray.join(' ')
        }
      }
      
      const content = firstStory.content || componentName
      return `<${componentName}${propsString}>${content}</${componentName}>`
    }
    
    return `<${componentName}>${componentName}</${componentName}>`
  }
  
  // 根据实际的 Stories 生成示例
  const generateExamples = () => {
    const examples = []
    
    if (docInfo.stories && docInfo.stories.length > 0) {
      docInfo.stories.forEach(story => {
        const storyNameForFile = story.name.toLowerCase().replace(/\s+/g, '-')
        const storyNameForFunction = story.name.replace(/\s+/g, '')
        
        // 如果有真实的源代码，直接使用它
        if (story.props && story.props._sourceCode) {
          const sourceCode = story.props._sourceCode
          
          examples.push(`\`\`\`${componentNameLowerCase}-${storyNameForFile}.tsx
import { ${componentName} } from "@/components/ui/${componentNameLowerCase}"

export default function ${componentName}${storyNameForFunction}() {
  return ${sourceCode}
}
\`\`\``)
        } else {
          // 如果没有源代码，使用提取的props构建
          let propsString = ''
          if (story.props && Object.keys(story.props).length > 0) {
            const propArray = []
            for (const [key, value] of Object.entries(story.props)) {
              if (key === 'children' || key === '_sourceCode') continue
              
              // 格式化属性值
              if (typeof value === 'boolean') {
                propArray.push(value ? `${key}` : `${key}={false}`)
              } else if (typeof value === 'string') {
                propArray.push(`${key}="${value}"`)
              } else {
                propArray.push(`${key}={${value}}`)
              }
            }
            if (propArray.length > 0) {
              propsString = ' ' + propArray.join(' ')
            }
          }
          
          // 根据内容生成示例
          const content = story.content || story.title
          
          examples.push(`\`\`\`${componentNameLowerCase}-${storyNameForFile}.tsx
import { ${componentName} } from "@/components/ui/${componentNameLowerCase}"

export default function ${componentName}${storyNameForFunction}() {
  return <${componentName}${propsString}>${content}</${componentName}>
}
\`\`\``)
        }
      })
    } else {
      // 如果没有 Stories，生成默认示例
      examples.push(`\`\`\`${componentNameLowerCase}-demo.tsx
import { ${componentName} } from "@/components/ui/${componentNameLowerCase}"

export default function ${componentName}Demo() {
  return <${componentName}>${componentName}</${componentName}>
}
\`\`\``)
    }
    
    return examples.join('\n\n')
  }

  const mdxContent = `Name : ${componentName}
Description : ${docInfo.description || getDefaultDescription(componentName)}

---

### import

\`\`\`
import { ${componentName} } from "@/components/ui/${componentNameLowerCase}"
\`\`\`

---

### use

\`\`\`${componentNameLowerCase}.mdx
import { ${componentName} } from "@/components/ui/${componentNameLowerCase}"

export default function ${componentName}Demo() {
  return ${generateBasicExample()}
}
\`\`\`

### examples

${generateExamples()}
`

  return mdxContent
}

/**
 * 确保目录存在
 */
async function ensureDir(dirPath) {
  try {
    await fs.access(dirPath)
  } catch {
    await fs.mkdir(dirPath, { recursive: true })
  }
}

/**
 * 生成 MDX 文件
 */
async function generateMDXFile(component, docInfo) {
  const componentName = component.title.split('/').pop().toLowerCase()
  const fileName = `${componentName}.mdx`
  const filePath = path.join(DOCS_OUTPUT_DIR, fileName)
  
  const mdxContent = generateMDXContent(component, docInfo)
  
  await fs.writeFile(filePath, mdxContent, 'utf-8')
  console.log(`✅ 生成 MDX 文件: ${fileName}`)
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 开始解析 Storybook 文档...\n')
  
  let browser = null
  
  try {
    // 检查 Storybook 是否在运行
    const isRunning = await checkStorybookRunning()
    if (!isRunning) {
      console.error('❌ Storybook 未运行，请先启动 Storybook 服务器')
      console.log('💡 运行命令: npm run storybook')
      process.exit(1)
    }
    
    console.log('✅ Storybook 已在运行')
    
    // 检查并准备浏览器
    console.log('🌐 检查浏览器环境...')
    const chromePath = await ensureChrome()
    
    // 启动浏览器
    console.log('🚀 启动浏览器...')
    const launchOptions = {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-extensions',
        '--disable-gpu',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor'
      ]
    }
    
    // 如果找到了系统Chrome，使用它
    if (chromePath) {
      launchOptions.executablePath = chromePath
    }
    
    browser = await puppeteer.launch(launchOptions)
    
    // 解析 Storybook 索引
    console.log('📖 读取 Storybook 索引...')
    const entries = await parseStorybookIndex()
    
    // 提取有 autodocs 的组件
    console.log('🔍 提取组件信息...')
    const components = extractComponentsWithAutodocs(entries)
    
    if (components.length === 0) {
      console.log('⚠️  未找到带有 autodocs 标签的组件')
      console.log('💡 请确保在组件的 stories 文件中添加了 tags: ["autodocs"]')
      return
    }
    
    console.log(`📋 找到 ${components.length} 个组件:\n`)
    components.forEach(comp => {
      console.log(`   - ${comp.title}`)
    })
    
    // 确保输出目录存在
    await ensureDir(DOCS_OUTPUT_DIR)
    
    // 为每个组件生成 MDX 文件
    console.log('\n📝 开始提取文档并生成 MDX 文件...\n')
    
    for (const component of components) {
      try {
        const docInfo = await extractComponentDocs(browser, component)
        if (docInfo) {
          await generateMDXFile(component, docInfo)
        }
      } catch (error) {
        console.error(`❌ 处理 ${component.title} 失败:`, error.message)
      }
    }
    
    console.log(`\n🎉 完成！共生成了 ${components.length} 个 MDX 文件`)
    console.log(`📁 文件保存在: ${DOCS_OUTPUT_DIR}`)
    
  } catch (error) {
    console.error('❌ 脚本执行失败:', error.message)
    process.exit(1)
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}

// 如果直接运行此脚本则执行主函数
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export { extractComponentDocs, generateMDXContent }
