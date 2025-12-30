<script setup lang="ts">
import { ref } from 'vue'
import { Alert, AlertHeader, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import ThemeToggle from './ThemeToggle.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()

// 各个 Alert 的显示状态
const showPrimary = ref(true)
const showSuccess = ref(true)
const showDestructive = ref(true)
const showAbnormal = ref(true)
const showPrimaryBorder = ref(true)
const showSuccessBorder = ref(true)
const showDestructiveBorder = ref(true)
const showAbnormalBorder = ref(true)
const showPrimaryIcon = ref(true)
const showSuccessIcon = ref(true)
const showDestructiveIcon = ref(true)
const showAbnormalIcon = ref(true)
const showPrimaryFunc = ref(true)
const showPrimaryDesc = ref(true)
const showPrimaryFoldable = ref(true)
const showAutoClose = ref(true)

// 重置所有 Alert
const resetAll = () => {
  showPrimary.value = true
  showSuccess.value = true
  showDestructive.value = true
  showAbnormal.value = true
  showPrimaryBorder.value = true
  showSuccessBorder.value = true
  showDestructiveBorder.value = true
  showAbnormalBorder.value = true
  showPrimaryIcon.value = true
  showSuccessIcon.value = true
  showDestructiveIcon.value = true
  showAbnormalIcon.value = true
  showPrimaryFunc.value = true
  showPrimaryDesc.value = true
  showPrimaryFoldable.value = true
  showAutoClose.value = true
}

// 自定义操作点击
const handleCustomAction = () => {
  alert('自定义操作被点击！')
}
</script>

<template>
  <!-- 主题切换器 -->
  <ThemeToggle />

  <div class="min-h-screen bg-background text-foreground transition-colors duration-200">
    <div class="p-8 space-y-8 max-w-4xl mx-auto">
      <!-- 标题区域 -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <h1 class="text-3xl font-bold">Alert 使用用例</h1>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-card border border-border">
              <div 
                class="w-2 h-2 rounded-full transition-colors"
                :class="isDark ? 'bg-primary' : 'bg-success'"
              ></div>
              <span class="text-sm font-medium">
                {{ isDark ? '🌙 Dark Mode' : '☀️ Light Mode' }}
              </span>
            </div>
            <Button variant="secondary" size="sm" @click="resetAll">
              重置所有 Alert
            </Button>
          </div>
        </div>
        <p class="text-secondary">基于 React Alert 组件迁移的 Vue3 版本，展示各种变体和功能</p>
      </div>

      <!-- 基础变体 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">基础变体 (无边框)</h2>
        
        <div class="space-y-3">
          <!-- Primary -->
          <Alert 
            :show="showPrimary" 
            variant="primary" 
            @close="showPrimary = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条普通的消息提示</AlertTitle>
            </AlertHeader>
          </Alert>

          <!-- Success -->
          <Alert 
            :show="showSuccess" 
            variant="success" 
            @close="showSuccess = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条成功的消息提示</AlertTitle>
            </AlertHeader>
          </Alert>

          <!-- Destructive -->
          <Alert 
            :show="showDestructive" 
            variant="destructive" 
            @close="showDestructive = false"
          >
            <AlertHeader>
              <AlertTitle>高危操作/出错信息提示</AlertTitle>
            </AlertHeader>
          </Alert>

          <!-- Abnormal (Warning) -->
          <Alert 
            :show="showAbnormal" 
            variant="abnormal" 
            @close="showAbnormal = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条警示的消息提示</AlertTitle>
            </AlertHeader>
          </Alert>
        </div>
      </section>

      <!-- 带边框变体 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">带边框变体 (With Border)</h2>
        
        <div class="space-y-3">
          <!-- Primary with border -->
          <Alert 
            :show="showPrimaryBorder" 
            variant="primary" 
            :border="true"
            @close="showPrimaryBorder = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条普通的消息提示（带边框）</AlertTitle>
            </AlertHeader>
          </Alert>

          <!-- Success with border -->
          <Alert 
            :show="showSuccessBorder" 
            variant="success" 
            :border="true"
            @close="showSuccessBorder = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条成功的消息提示（带边框）</AlertTitle>
            </AlertHeader>
          </Alert>

          <!-- Destructive with border -->
          <Alert 
            :show="showDestructiveBorder" 
            variant="destructive" 
            :border="true"
            @close="showDestructiveBorder = false"
          >
            <AlertHeader>
              <AlertTitle>高危操作/出错信息提示（带边框）</AlertTitle>
            </AlertHeader>
          </Alert>

          <!-- Abnormal with border -->
          <Alert 
            :show="showAbnormalBorder" 
            variant="abnormal" 
            :border="true"
            @close="showAbnormalBorder = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条警示的消息提示（带边框）</AlertTitle>
            </AlertHeader>
          </Alert>
        </div>
      </section>

      <!-- 带图标变体 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">带图标变体 (With Icon)</h2>
        
        <div class="space-y-3">
          <!-- Primary with icon -->
          <Alert 
            :show="showPrimaryIcon" 
            variant="primary" 
            :border="true"
            :icon="true"
            @close="showPrimaryIcon = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条普通的消息提示（带图标）</AlertTitle>
            </AlertHeader>
          </Alert>

          <!-- Success with icon -->
          <Alert 
            :show="showSuccessIcon" 
            variant="success" 
            :border="true"
            :icon="true"
            @close="showSuccessIcon = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条成功的消息提示（带图标）</AlertTitle>
            </AlertHeader>
          </Alert>

          <!-- Destructive with icon -->
          <Alert 
            :show="showDestructiveIcon" 
            variant="destructive" 
            :border="true"
            :icon="true"
            @close="showDestructiveIcon = false"
          >
            <AlertHeader>
              <AlertTitle>高危操作/出错信息提示（带图标）</AlertTitle>
            </AlertHeader>
          </Alert>

          <!-- Abnormal with icon -->
          <Alert 
            :show="showAbnormalIcon" 
            variant="abnormal" 
            :border="true"
            :icon="true"
            @close="showAbnormalIcon = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条警示的消息提示（带图标）</AlertTitle>
            </AlertHeader>
          </Alert>
        </div>
      </section>

      <!-- 带功能区 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">带功能区 (With Function Area)</h2>
        
        <div class="space-y-3">
          <!-- 带关闭功能区和标题功能区 -->
          <Alert 
            :show="showPrimaryFunc" 
            variant="primary" 
            :border="true"
            :icon="true"
            @close="showPrimaryFunc = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条普通的消息提示</AlertTitle>
              <template #titleFuncArea>
                <Button variant="link" size="link" @click="handleCustomAction">
                  相关操作
                </Button>
              </template>
              <template #closeFuncArea>
                <Button variant="link" size="link" @click="handleCustomAction">
                  相关操作
                </Button>
              </template>
            </AlertHeader>
          </Alert>
        </div>
      </section>

      <!-- 带描述信息 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">带描述信息 (With Description)</h2>
        
        <div class="space-y-3">
          <!-- 带描述 -->
          <Alert 
            :show="showPrimaryDesc" 
            variant="primary" 
            :border="true"
            :icon="true"
            @close="showPrimaryDesc = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条普通的消息提示</AlertTitle>
              <template #titleFuncArea>
                <Button variant="link" size="link" @click="handleCustomAction">
                  相关操作
                </Button>
              </template>
              <template #closeFuncArea>
                <Button variant="link" size="link" @click="handleCustomAction">
                  相关操作
                </Button>
              </template>
            </AlertHeader>
            <AlertDescription>
              这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息
            </AlertDescription>
          </Alert>

          <!-- 带可折叠描述 -->
          <Alert 
            :show="showPrimaryFoldable" 
            variant="primary" 
            :border="true"
            :icon="true"
            @close="showPrimaryFoldable = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条普通的消息提示（可折叠）</AlertTitle>
              <template #titleFuncArea>
                <Button variant="link" size="link" @click="handleCustomAction">
                  相关操作
                </Button>
              </template>
              <template #closeFuncArea>
                <Button variant="link" size="link" @click="handleCustomAction">
                  相关操作
                </Button>
              </template>
            </AlertHeader>
            <AlertDescription :foldable="true">
              这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <!-- 自动关闭 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">自动关闭 (Auto Close)</h2>
        <p class="text-sm text-secondary">此 Alert 将在 10 秒后自动关闭</p>
        
        <div class="space-y-3">
          <Alert 
            :show="showAutoClose" 
            variant="primary" 
            :border="true"
            :icon="true"
            :time="10000"
            @close="showAutoClose = false"
          >
            <AlertHeader>
              <AlertTitle>这是一条带过期时间的消息提示（10秒后自动关闭）</AlertTitle>
            </AlertHeader>
          </Alert>
        </div>
      </section>

      <!-- 使用示例 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">使用示例</h2>
        <div class="bg-card border border-border rounded-lg p-4 space-y-4">
          <div>
            <h3 class="text-sm font-semibold mb-2">基础用法</h3>
            <pre class="bg-third-background p-3 rounded text-xs overflow-x-auto border border-border-split"><code class="text-secondary-information">&lt;Alert :show="show" variant="primary" @close="show = false"&gt;
  &lt;AlertHeader&gt;
    &lt;AlertTitle&gt;这是一条消息提示&lt;/AlertTitle&gt;
  &lt;/AlertHeader&gt;
&lt;/Alert&gt;</code></pre>
          </div>
          
          <div>
            <h3 class="text-sm font-semibold mb-2">带图标和边框</h3>
            <pre class="bg-third-background p-3 rounded text-xs overflow-x-auto border border-border-split"><code class="text-secondary-information">&lt;Alert 
  :show="show" 
  variant="success" 
  :border="true"
  :icon="true"
  @close="show = false"
&gt;
  &lt;AlertHeader&gt;
    &lt;AlertTitle&gt;操作成功&lt;/AlertTitle&gt;
  &lt;/AlertHeader&gt;
&lt;/Alert&gt;</code></pre>
          </div>
          
          <div>
            <h3 class="text-sm font-semibold mb-2">带功能区和描述</h3>
            <pre class="bg-third-background p-3 rounded text-xs overflow-x-auto border border-border-split"><code class="text-secondary-information">&lt;Alert :show="show" variant="primary" :border="true" :icon="true"&gt;
  &lt;AlertHeader&gt;
    &lt;AlertTitle&gt;消息标题&lt;/AlertTitle&gt;
    &lt;template #titleFuncArea&gt;
      &lt;Button variant="link"&gt;操作&lt;/Button&gt;
    &lt;/template&gt;
    &lt;template #closeFuncArea&gt;
      &lt;Button variant="link"&gt;操作&lt;/Button&gt;
    &lt;/template&gt;
  &lt;/AlertHeader&gt;
  &lt;AlertDescription :foldable="true"&gt;
    描述内容...
  &lt;/AlertDescription&gt;
&lt;/Alert&gt;</code></pre>
          </div>

          <div>
            <h3 class="text-sm font-semibold mb-2">自动关闭</h3>
            <pre class="bg-third-background p-3 rounded text-xs overflow-x-auto border border-border-split"><code class="text-secondary-information">&lt;Alert 
  :show="show" 
  variant="primary" 
  :time="5000"
  @close="show = false"
&gt;
  &lt;AlertHeader&gt;
    &lt;AlertTitle&gt;5秒后自动关闭&lt;/AlertTitle&gt;
  &lt;/AlertHeader&gt;
&lt;/Alert&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- API 文档 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">API 文档</h2>
        <div class="bg-card border border-border rounded-lg p-4 space-y-4">
          <div>
            <h3 class="text-lg font-semibold mb-2">Alert Props</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-border-split">
                    <th class="text-left py-2 px-3">属性</th>
                    <th class="text-left py-2 px-3">类型</th>
                    <th class="text-left py-2 px-3">默认值</th>
                    <th class="text-left py-2 px-3">说明</th>
                  </tr>
                </thead>
                <tbody class="text-secondary">
                  <tr class="border-b border-border-split">
                    <td class="py-2 px-3 font-mono text-primary">variant</td>
                    <td class="py-2 px-3">'primary' | 'success' | 'destructive' | 'abnormal'</td>
                    <td class="py-2 px-3">'primary'</td>
                    <td class="py-2 px-3">Alert 变体样式</td>
                  </tr>
                  <tr class="border-b border-border-split">
                    <td class="py-2 px-3 font-mono text-primary">show</td>
                    <td class="py-2 px-3">boolean</td>
                    <td class="py-2 px-3">-</td>
                    <td class="py-2 px-3">受控模式下的显示状态</td>
                  </tr>
                  <tr class="border-b border-border-split">
                    <td class="py-2 px-3 font-mono text-primary">border</td>
                    <td class="py-2 px-3">boolean</td>
                    <td class="py-2 px-3">false</td>
                    <td class="py-2 px-3">是否显示边框</td>
                  </tr>
                  <tr class="border-b border-border-split">
                    <td class="py-2 px-3 font-mono text-primary">icon</td>
                    <td class="py-2 px-3">boolean</td>
                    <td class="py-2 px-3">false</td>
                    <td class="py-2 px-3">是否显示图标</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-3 font-mono text-primary">time</td>
                    <td class="py-2 px-3">number</td>
                    <td class="py-2 px-3">-</td>
                    <td class="py-2 px-3">自动关闭时间（毫秒）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">Alert Events</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-border-split">
                    <th class="text-left py-2 px-3">事件名</th>
                    <th class="text-left py-2 px-3">说明</th>
                  </tr>
                </thead>
                <tbody class="text-secondary">
                  <tr>
                    <td class="py-2 px-3 font-mono text-primary">@close</td>
                    <td class="py-2 px-3">关闭 Alert 时触发</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">AlertHeader Slots</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-border-split">
                    <th class="text-left py-2 px-3">插槽名</th>
                    <th class="text-left py-2 px-3">说明</th>
                  </tr>
                </thead>
                <tbody class="text-secondary">
                  <tr class="border-b border-border-split">
                    <td class="py-2 px-3 font-mono text-primary">default</td>
                    <td class="py-2 px-3">标题内容（通常放 AlertTitle）</td>
                  </tr>
                  <tr class="border-b border-border-split">
                    <td class="py-2 px-3 font-mono text-primary">#titleFuncArea</td>
                    <td class="py-2 px-3">标题右侧功能区</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-3 font-mono text-primary">#closeFuncArea</td>
                    <td class="py-2 px-3">关闭按钮左侧功能区</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">AlertDescription Props</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-border-split">
                    <th class="text-left py-2 px-3">属性</th>
                    <th class="text-left py-2 px-3">类型</th>
                    <th class="text-left py-2 px-3">默认值</th>
                    <th class="text-left py-2 px-3">说明</th>
                  </tr>
                </thead>
                <tbody class="text-secondary">
                  <tr>
                    <td class="py-2 px-3 font-mono text-primary">foldable</td>
                    <td class="py-2 px-3">boolean</td>
                    <td class="py-2 px-3">false</td>
                    <td class="py-2 px-3">是否可折叠</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
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
</style>
