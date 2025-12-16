<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { ButtonTsx } from '@/components/ui/button/Button.tsx'
import ThemeToggle from './ThemeToggle.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const clickCount = ref(0)
const { isDark } = useDarkMode()

const handleClick = () => {
  clickCount.value++
  console.log('Button clicked!', clickCount.value)
}
</script>

<template>
  <!-- 主题切换器 -->
  <ThemeToggle />

  <div class="min-h-screen bg-background text-foreground transition-colors duration-200">
    <div class="p-8 space-y-8 max-w-7xl mx-auto">
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <h1 class="text-3xl font-bold">Button 使用用例</h1>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-card border border-border">
            <div class="w-2 h-2 rounded-full transition-colors" :class="isDark ? 'bg-primary' : 'bg-success'"></div>
            <span class="text-sm font-medium">
              {{ isDark ? '🌙 Dark Mode' : '☀️ Light Mode' }}
            </span>
          </div>
        </div>
        <p class="text-secondary">基于 reka-ui 的 Button 组件示例，展示各种变体和尺寸</p>
        <p class="text-sm text-secondary mt-2">点击次数: {{ clickCount }}</p>
      </div>

      <!-- 主要变体 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">按钮变体 (Variants)</h2>

        <div class="space-y-6">
          <!-- Primary 主要按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">Primary - 主要按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="primary" size="sm" @click="handleClick">主要按钮 (SM)</Button>
              <Button variant="primary" size="md" @click="handleClick">主要按钮 (MD)</Button>
              <Button variant="primary" size="lg" @click="handleClick">主要按钮 (LG)</Button>
              <Button variant="primary" size="md" disabled>禁用状态</Button>
            </div>
          </div>

          <!-- Default 默认按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">Default - 默认按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="default" size="sm" @click="handleClick">默认按钮 (SM)</Button>
              <Button variant="default" size="md" @click="handleClick">默认按钮 (MD)</Button>
              <Button variant="default" size="lg" @click="handleClick">默认按钮 (LG)</Button>
              <Button variant="default" size="md" disabled>禁用状态</Button>
            </div>
          </div>

          <!-- Secondary 次强调按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">Secondary - 次强调按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="secondary" size="sm" @click="handleClick">次强调按钮 (SM)</Button>
              <Button variant="secondary" size="md" @click="handleClick">次强调按钮 (MD)</Button>
              <Button variant="secondary" size="lg" @click="handleClick">次强调按钮 (LG)</Button>
              <Button variant="secondary" size="md" disabled>禁用状态</Button>
            </div>
          </div>

          <!-- Secondary Text 文字强调按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">Secondary Text - 文字强调按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="secondary-text" size="sm" @click="handleClick">文字强调按钮 (SM)</Button>
              <Button variant="secondary-text" size="md" @click="handleClick">文字强调按钮 (MD)</Button>
              <Button variant="secondary-text" size="lg" @click="handleClick">文字强调按钮 (LG)</Button>
              <Button variant="secondary-text" size="md" disabled>禁用状态</Button>
            </div>
          </div>

          <!-- Text 文字按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">Text - 文字按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="text" size="sm" @click="handleClick">文字按钮 (SM)</Button>
              <Button variant="text" size="md" @click="handleClick">文字按钮 (MD)</Button>
              <Button variant="text" size="lg" @click="handleClick">文字按钮 (LG)</Button>
              <Button variant="text" size="md" disabled>禁用状态</Button>
            </div>
          </div>

          <!-- Destructive 危险按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">Destructive - 危险按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="destructive" size="sm" @click="handleClick">危险按钮 (SM)</Button>
              <Button variant="destructive" size="md" @click="handleClick">危险按钮 (MD)</Button>
              <Button variant="destructive" size="lg" @click="handleClick">危险按钮 (LG)</Button>
              <Button variant="destructive" size="md" disabled>禁用状态</Button>
            </div>
          </div>

          <!-- Secondary Destructive 危险描边按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">Secondary Destructive - 危险描边按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="secondary-destructive" size="sm" @click="handleClick">危险描边按钮 (SM)</Button>
              <Button variant="secondary-destructive" size="md" @click="handleClick">危险描边按钮 (MD)</Button>
              <Button variant="secondary-destructive" size="lg" @click="handleClick">危险描边按钮 (LG)</Button>
              <Button variant="secondary-destructive" size="md" disabled>禁用状态</Button>
            </div>
          </div>

          <!-- Dashed 虚线按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">Dashed - 虚线按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="dashed" size="sm" @click="handleClick">虚线按钮 (SM)</Button>
              <Button variant="dashed" size="md" @click="handleClick">虚线按钮 (MD)</Button>
              <Button variant="dashed" size="lg" @click="handleClick">虚线按钮 (LG)</Button>
              <Button variant="dashed" size="md" disabled>禁用状态</Button>
            </div>
          </div>
        </div>
      </section>

      <!-- 带图标的按钮 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">带图标的按钮</h2>

        <div class="space-y-6">
          <!-- 前置图标 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">前置图标按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="primary" size="md" @click="handleClick">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.50845 3C4.50844 3 4.50847 3 4.50845 3L7.4915 3C7.49149 3 7.49152 3 7.4915 3L9.75 3C10.1642 3 10.5 2.66421 10.5 2.25C10.5 1.83579 10.1642 1.5 9.75 1.5H7.5V0.766968C7.5 0.756787 7.4966 0.75 7.4915 0.75H4.5085C4.5034 0.75 4.5 0.756787 4.5 0.766968V1.5H2.25C1.83579 1.5 1.5 1.83579 1.5 2.25C1.5 2.66421 1.83579 3 2.25 3H4.50845Z"
                    fill="currentColor" />
                  <path
                    d="M3.37248 11.25H8.62726C8.9018 11.25 9.12914 11.0443 9.14777 10.7785L9.59871 4.28881C9.61859 3.99776 9.38008 3.75 9.07821 3.75H2.92154C2.61967 3.75 2.38115 3.99655 2.40103 4.28881L2.85197 10.7785C2.87061 11.0443 3.09794 11.25 3.37248 11.25ZM4.49991 5.25H5.24991V10.2981H4.49991V5.25ZM7.49991 5.25V10.2981H6.74991V5.25H7.49991Z"
                    fill="currentColor" />
                </svg>
                删除
              </Button>
              <Button variant="secondary" size="md" @click="handleClick">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 2.5H5.5V5.5H2.5V6.5H5.5V9.5H6.5V6.5H9.5V5.5H6.5V2.5Z" />
                </svg>
                添加
              </Button>
            </div>
          </div>

          <!-- 后置图标 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">后置图标按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="primary" size="md" @click="handleClick">
                下拉菜单
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8L2.5 4.5L3.5 3.5L6 6L8.5 3.5L9.5 4.5L6 8Z" />
                </svg>
              </Button>
              <Button variant="secondary-text" size="md" @click="handleClick">
                展开更多
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6L6 9L9 6H3Z" />
                </svg>
              </Button>
            </div>
          </div>

          <!-- 纯图标按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">纯图标按钮 (Icon Buttons)</h3>
            <div class="flex flex-wrap gap-3 items-center">
              <Button variant="icon" size="sm-icon" @click="handleClick">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 2.5H5.5V5.5H2.5V6.5H5.5V9.5H6.5V6.5H9.5V5.5H6.5V2.5Z" />
                </svg>
              </Button>
              <Button variant="icon" size="md-icon" @click="handleClick">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 4.5H7.5V7.5H4.5V8.5H7.5V11.5H8.5V8.5H11.5V7.5H8.5V4.5Z" />
                </svg>
              </Button>
              <Button variant="icon" size="lg-icon" @click="handleClick">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 5.5H9.5V9.5H5.5V10.5H9.5V14.5H10.5V10.5H14.5V9.5H10.5V5.5Z" />
                </svg>
              </Button>
            </div>
          </div>

          <!-- 悬浮图标按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">悬浮图标按钮 (Hover Icon)</h3>
            <div class="flex flex-wrap gap-3 items-center">
              <Button variant="hover-icon" size="sm-icon" @click="handleClick">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 2.5H5.5V5.5H2.5V6.5H5.5V9.5H6.5V6.5H9.5V5.5H6.5V2.5Z" />
                </svg>
              </Button>
              <Button variant="hover-icon" size="md-icon" @click="handleClick">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 4.5H7.5V7.5H4.5V8.5H7.5V11.5H8.5V8.5H11.5V7.5H8.5V4.5Z" />
                </svg>
              </Button>
              <Button variant="hover-icon" size="lg-icon" @click="handleClick">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 5.5H9.5V9.5H5.5V10.5H9.5V14.5H10.5V10.5H14.5V9.5H10.5V5.5Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- 链接按钮 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">链接按钮 (Link Buttons)</h2>

        <div class="space-y-6">
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">纯文字链接</h3>
            <div class="flex flex-wrap gap-3 items-center">
              <Button variant="link" size="sm-link" @click="handleClick">小号链接</Button>
              <Button variant="link" size="md-link" @click="handleClick">中号链接</Button>
              <Button variant="link" size="lg-link" @click="handleClick">大号链接</Button>
              <Button variant="link" size="md-link" disabled>禁用链接</Button>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">带图标的链接</h3>
            <div class="flex flex-wrap gap-3 items-center">
              <Button variant="link" size="sm-link" @click="handleClick">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.73312 2.27601C10.0889 1.92023 10.6648 1.92023 11.0206 2.27601L13.724 4.97937C14.0797 5.33515 14.0797 5.91106 13.724 6.26684L6.26684 13.724C6.09959 13.8912 5.87017 13.9858 5.63088 13.9858H2.92752C2.42876 13.9858 2.02637 13.5834 2.02637 13.0846V10.3813C2.02637 10.142 2.12101 9.91256 2.28826 9.74531L9.73312 2.27601Z" />
                </svg>
                编辑链接
              </Button>
              <Button variant="link" size="md-link" @click="handleClick">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2ZM8.5 12.5V8H9.5V12.5H8.5ZM9 7C8.44772 7 8 6.55228 8 6C8 5.44772 8.44772 5 9 5C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7Z" />
                </svg>
                详情链接
              </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- TSX 版本对比 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">TSX 版本 (ButtonTsx)</h2>
        <p class="text-sm text-secondary">使用 JSX/TSX 语法编写的 Button 组件，功能与 SFC 版本完全一致</p>

        <div class="flex flex-wrap gap-3">
          <ButtonTsx variant="primary" size="md" @click="handleClick">TSX 主要按钮</ButtonTsx>
          <ButtonTsx variant="secondary" size="md" @click="handleClick">TSX 次要按钮</ButtonTsx>
          <ButtonTsx variant="destructive" size="md" @click="handleClick">TSX 危险按钮</ButtonTsx>
          <ButtonTsx variant="icon" size="md-icon" @click="handleClick">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 4.5H7.5V7.5H4.5V8.5H7.5V11.5H8.5V8.5H11.5V7.5H8.5V4.5Z" />
            </svg>
          </ButtonTsx>
        </div>
      </section>

      <!-- 特殊用途按钮 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">特殊用途按钮</h2>

        <div class="space-y-6">
          <!-- 分页按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">分页按钮 (Page Buttons)</h3>
            <div class="flex flex-wrap gap-2 items-center">
              <Button variant="page" size="page-sm">1</Button>
              <Button variant="page-active" size="page-sm">2</Button>
              <Button variant="page" size="page-sm">3</Button>
              <Button variant="page" size="page-sm">...</Button>
              <Button variant="page" size="page-sm">10</Button>
            </div>
          </div>

          <!-- 其他特殊按钮 -->
          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-medium">其他特殊按钮</h3>
            <div class="flex flex-wrap gap-3">
              <Button variant="collapsible" size="md" @click="handleClick">可折叠按钮</Button>
              <Button variant="toggle" size="md" @click="handleClick">切换按钮</Button>
              <Button variant="transparent" size="md" @click="handleClick">透明按钮</Button>
            </div>
          </div>
        </div>
      </section>

      <!-- 使用示例代码 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">使用示例</h2>
        <div class="bg-card border border-border rounded-lg p-4 space-y-4">
          <div>
            <h3 class="text-sm font-semibold mb-2">基础用法</h3>
            <pre class="bg-third-background p-3 rounded text-xs overflow-x-auto border border-border-split"><code class="text-secondary-information">&lt;Button variant="primary" size="md" @click="handleClick"&gt;
  主要按钮
&lt;/Button&gt;</code></pre>
          </div>

          <div>
            <h3 class="text-sm font-semibold mb-2">带图标</h3>
            <pre class="bg-third-background p-3 rounded text-xs overflow-x-auto border border-border-split"><code class="text-secondary-information">&lt;Button variant="primary" size="md"&gt;
  &lt;svg&gt;...&lt;/svg&gt;
  前置图标按钮
&lt;/Button&gt;</code></pre>
          </div>

          <div>
            <h3 class="text-sm font-semibold mb-2">禁用状态</h3>
            <pre class="bg-third-background p-3 rounded text-xs overflow-x-auto border border-border-split"><code class="text-secondary-information">&lt;Button variant="primary" size="md" disabled&gt;
  禁用按钮
&lt;/Button&gt;</code></pre>
          </div>

          <div>
            <h3 class="text-sm font-semibold mb-2">主题切换</h3>
            <pre class="bg-third-background p-3 rounded text-xs overflow-x-auto border border-border-split"><code class="text-secondary-information">&lt;script setup&gt;
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* 自定义样式 */
section {
  border-bottom: 1px solid var(--border-split, #e5e7eb);
  padding-bottom: 2rem;
}

section:last-child {
  border-bottom: none;
}

pre {
  font-family: 'Courier New', monospace;
}

code {
  color: var(--text-deep, #1f2937);
}
</style>
