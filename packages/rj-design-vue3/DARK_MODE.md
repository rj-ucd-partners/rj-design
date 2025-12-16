# 🌓 Dark Mode 使用指南

## 概述

RJ Design Vue3 组件库内置了完整的暗色模式支持，提供了流畅的主题切换体验。

## ✨ 特性

- ✅ **自动保存用户偏好** - 使用 localStorage 持久化主题选择
- ✅ **系统主题检测** - 自动检测并应用系统主题偏好
- ✅ **防止闪烁** - HTML 内联脚本确保页面加载时主题正确
- ✅ **流畅过渡** - 使用 CSS transitions 实现平滑的主题切换动画
- ✅ **完整的组件支持** - 所有组件都完美适配亮色/暗色模式

## 🚀 快速开始

### 1. 使用 Composable

```vue
<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
</script>

<template>
  <button @click="toggleDark">
    {{ isDark ? '切换到亮色' : '切换到暗色' }}
  </button>
</template>
```

### 2. 使用内置的 ThemeToggle 组件

```vue
<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <ThemeToggle />
</template>
```

## 🎨 主题定制

### Tailwind CSS 变量

主题颜色定义在 `src/style.css` 中：

```css
/* Light Mode */
:root {
  --background: #FFFFFF;
  --foreground: #08121A;
  --primary: #00B9FF;
  /* ... 更多变量 ... */
}

/* Dark Mode */
.dark {
  --background: #101920;
  --foreground: #FFFFFF;
  --primary: #00CFF4;
  /* ... 更多变量 ... */
}
```

### 使用 Dark Mode 变体

Tailwind CSS 配置了 `dark:` 变体：

```vue
<template>
  <div class="bg-white dark:bg-gray-900 text-black dark:text-white">
    这段文字会根据主题自动调整颜色
  </div>
</template>
```

## 📦 API 参考

### useDarkMode()

返回一个包含以下属性和方法的对象：

| 名称 | 类型 | 描述 |
|------|------|------|
| `isDark` | `Ref<boolean>` | 当前是否为暗色模式 |
| `toggleDark` | `() => void` | 切换主题的函数 |

### ThemeToggle 组件

一个现成的主题切换按钮组件，固定定位在页面右上角。

**Props**: 无

**特性**:
- 固定在页面右上角（`fixed top-4 right-4`）
- 带有 hover 效果
- 显示太阳/月亮图标
- 包含无障碍支持（title 和 sr-only）

## 🔧 工作原理

1. **初始化**: 
   - 从 localStorage 读取用户上次的主题选择
   - 如果没有保存，则检测系统主题偏好
   - 应用相应的主题类到 `<html>` 元素

2. **切换主题**:
   - 调用 `toggleDark()` 方法
   - 更新 `isDark` 响应式引用
   - 自动添加/移除 `dark` 类到 `<html>`
   - 保存选择到 localStorage

3. **防止闪烁**:
   - `index.html` 中的内联脚本在页面加载前执行
   - 立即应用正确的主题类，避免闪烁

## 💡 最佳实践

### 1. 使用 CSS 变量而非硬编码颜色

❌ **不推荐**:
```vue
<div class="bg-white text-black dark:bg-gray-900 dark:text-white">
```

✅ **推荐**:
```vue
<div class="bg-background text-foreground">
```

### 2. 为自定义组件添加主题支持

```vue
<template>
  <div class="bg-card text-card-foreground border border-border">
    <!-- 自动适配主题的内容 -->
  </div>
</template>
```

### 3. 测试两种主题

在开发时，确保在两种主题下测试你的组件：

```vue
<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
const { isDark, toggleDark } = useDarkMode()
</script>

<template>
  <div>
    <button @click="toggleDark">切换主题测试</button>
    <YourComponent />
  </div>
</template>
```

## 🎯 示例

查看 `src/components/ButtonStories.vue` 获取完整的实际应用示例。

### 条件渲染不同主题的内容

```vue
<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
const { isDark } = useDarkMode()
</script>

<template>
  <div>
    <p v-if="isDark">🌙 当前是暗色模式</p>
    <p v-else>☀️ 当前是亮色模式</p>
  </div>
</template>
```

### 动态样式绑定

```vue
<template>
  <div 
    :class="{ 
      'bg-primary': isDark, 
      'bg-success': !isDark 
    }"
  >
    主题相关的样式
  </div>
</template>
```

## 🛠️ 故障排除

### 主题切换无效

1. 检查是否正确导入了 `useDarkMode`
2. 确认 `src/style.css` 中定义了 `.dark` 类的样式
3. 检查浏览器控制台是否有错误

### 页面加载时有闪烁

确保 `index.html` 中包含了防闪烁脚本：

```html
<script>
  (function() {
    const theme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark')
    }
  })()
</script>
```

### 某些组件在暗色模式下显示异常

检查组件是否使用了硬编码的颜色值，应该使用 CSS 变量或 Tailwind 的主题颜色。

## 📚 相关资源

- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Web.dev: prefers-color-scheme](https://web.dev/prefers-color-scheme/)
