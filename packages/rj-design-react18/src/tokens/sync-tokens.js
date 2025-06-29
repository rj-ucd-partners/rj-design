// sync-tokens.js
import * as Figma from 'figma-api'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 配置区 =============================================================
const FIGMA_TOKEN = 'xxx' // 从环境变量读取Token
const FILE_KEY = 'xxx' // 替换为你的Figma文件Key
const TOKENS_PATH = path.resolve(__dirname, 'tokens.json') // 令牌文件路径
const COLLECTION_NAME = 'Design Tokens' // Figma变量集合名称
const MODES = ['light', 'dark'] // 多主题模式定义
// ===================================================================

// 初始化Figma API客户端
const api = new Figma.Api({ personalAccessToken: FIGMA_TOKEN })

// 主同步函数
async function syncTokens() {
  try {
    // 1. 读取设计令牌文件
    const tokensData = JSON.parse(fs.readFileSync(TOKENS_PATH, 'utf8'))
    console.log(`✅ 成功加载 ${Object.keys(tokensData.color).length} 个颜色令牌`)

    // 2. 获取Figma文件现有变量
    const { data: figmaVariables } = await api.getFile(FILE_KEY)
    const collections = figmaVariables.collections
    const variables = figmaVariables.variables

    console.log('Figma 文件变量:', variables)
    console.log('Figma 文件变量集合:', collections)
    // 3. 创建或更新变量集合
    let collection = collections.find(c => c.name === COLLECTION_NAME)
    if (!collection) {
      const newCollection = await api.createVariableCollection(FILE_KEY, {
        name: COLLECTION_NAME,
        modes: MODES.map(name => ({ name })),
      })
      collection = newCollection.data
      console.log(`🆕 创建新集合: ${COLLECTION_NAME} (ID: ${collection.id})`)
    } else {
      console.log(`🔁 使用现有集合: ${COLLECTION_NAME} (ID: ${collection.id})`)
    }

    // 4. 同步颜色变量
    await syncColorVariables(tokensData.color, collection.id, variables)

    console.log('🎉 同步完成！')
  } catch (error) {
    console.error('❌ 同步失败:', error.response?.data || error.message)
    process.exit(1)
  }
}

// 同步颜色变量核心逻辑
async function syncColorVariables(colorTokens, collectionId, existingVariables) {
  const variableUpdates = []

  for (const [tokenName, tokenData] of Object.entries(colorTokens)) {
    const varName = formatVariableName(tokenName)
    const existingVar = existingVariables.find(v => v.name === varName)

    // 构建变量数据结构
    const variablePayload = {
      name: varName,
      collectionId,
      resolvedType: 'COLOR',
      scopes: ['ALL_SCOPES'],
      codeSyntax: {
        WEB: `var(--${tokenName})`,
        ANDROID: `ResourceManager.getColor(R.color.${tokenName})`,
        iOS: `UIColor(named: "${tokenName}")`,
      },
    }

    // 5. 创建或更新变量
    if (existingVar) {
      variableUpdates.push(api.updateVariable(FILE_KEY, existingVar.id, variablePayload))
    } else {
      variableUpdates.push(api.createVariable(FILE_KEY, variablePayload))
    }

    // 6. 设置多主题值
    if (typeof tokenData.value === 'object') {
      for (const [mode, colorValue] of Object.entries(tokenData.value)) {
        const modeId = collectionId + '_' + mode
        await api.setVariableValue(FILE_KEY, existingVar?.id || 'new', modeId, {
          type: 'COLOR',
          value: normalizeColor(colorValue),
        })
      }
    }
  }

  // 批量执行变量操作
  await Promise.all(variableUpdates)
  console.log(`🔄 更新 ${variableUpdates.length} 个颜色变量`)
}

// 辅助函数 ===========================================================
function formatVariableName(tokenName) {
  return tokenName
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('/')
}

function normalizeColor(value) {
  if (value.startsWith('#')) {
    const hex = value.slice(1)
    const r = parseInt(hex.slice(0, 2), 16) / 255
    const g = parseInt(hex.slice(2, 4), 16) / 255
    const b = parseInt(hex.slice(4, 6), 16) / 255
    return { r, g, b, a: 1 }
  }
  // 处理rgba等其他格式
  return value
}
// ===================================================================

// 执行同步
syncTokens()
