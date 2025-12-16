# 🚀 快速开始

## 🎯 Dark Mode 已添加！

恭喜！你的 RJ Design Vue3 组件库现在已经完整支持暗色模式了！

## 🌟 新功能

### 1️⃣ 主题切换按钮

页面右上角有一个固定的主题切换按钮：
- ☀️ 点击切换到暗色模式
- 🌙 点击切换到亮色模式

### 2️⃣ 自动保存偏好

- 你的主题选择会自动保存到浏览器
- 下次访问时会自动应用你上次选择的主题
- 如果没有保存的偏好，会自动检测系统主题

### 3️⃣ 完整的组件支持

所有 Button 变体都完美适配两种主题：
- 主要按钮 (Primary)
- 默认按钮 (Default)
- 次强调按钮 (Secondary)
- 文字按钮 (Text)
- 危险按钮 (Destructive)
- 等等...

## 📖 如何使用

### 在你的组件中使用主题

\`\`\`vue
<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
</script>

<template>
  <div>
    <p>当前主题: {{ isDark ? '暗色' : '亮色' }}</p>
    <button @click="toggleDark">切换主题</button>
  </div>
</template>
\`\`\`

### 使用主题相关样式

\`\`\`vue
<template>
  <!-- 使用 CSS 变量（推荐） -->
  <div class="bg-background text-foreground">
    自动适配主题
  </div>

  <!-- 使用 dark: 变体 -->
  <div class="bg-white dark:bg-gray-900">
    暗色模式下会变成灰色
  </div>
</template>
\`\`\`

## 🎨 查看效果

1. **访问示例页面**: http://localhost:5173/
2. **点击右上角的太阳/月亮图标**
3. **观察所有按钮的颜色变化**
4. **刷新页面** - 主题会保持你的选择

## 📁 新增文件

\`\`\`
src/
├── composables/
│   └── useDarkMode.ts          # ✨ 新增：主题管理 Composable
├── components/
│   ├── ThemeToggle.vue         # ✨ 新增：主题切换按钮
│   └── ButtonStories.vue       # 🔄 更新：添加主题展示
└── env.d.ts                    # 🔄 更新：JSX 类型支持

docs/
└── FEATURES.md                 # ✨ 新增：功能特性文档

DARK_MODE.md                    # ✨ 新增：Dark Mode 使用指南
QUICK_START.md                  # ✨ 新增：快速开始（本文档）
\`\`\`

## 🎯 主要特性

### ✅ 已实现

- [x] **亮色模式** - 清晰明亮的界面
- [x] **暗色模式** - 护眼的深色界面
- [x] **流畅切换** - 平滑的过渡动画
- [x] **自动保存** - 记住用户偏好
- [x] **系统检测** - 自动跟随系统主题
- [x] **防止闪烁** - 页面加载时正确显示主题
- [x] **完整文档** - 详细的使用说明

### 🎨 主题颜色对比

| 颜色 | 亮色模式 | 暗色模式 |
|------|---------|---------|
| 背景 | `#FFFFFF` | `#101920` |
| 主色 | `#00B9FF` | `#00CFF4` |
| 成功 | `#24CB72` | `#00FFA8` |
| 危险 | `#FF6A6A` | `#D02600` |
| 文字 | `#08121A` | `#FFFFFF` |

## 🔧 故障排除

### 问题：主题切换不生效

**解决方案**：
1. 检查浏览器控制台是否有错误
2. 清除浏览器缓存和 localStorage
3. 确认 `src/style.css` 已正确导入

### 问题：页面刷新后主题重置

**解决方案**：
1. 检查 `index.html` 是否包含防闪烁脚本
2. 检查浏览器是否阻止了 localStorage
3. 打开开发者工具 → Application → Local Storage 查看 `theme` 键

### 问题：某些组件颜色不对

**解决方案**：
1. 确保使用了 CSS 变量而不是硬编码颜色
2. 使用 `bg-background text-foreground` 等语义化类名
3. 检查 `src/style.css` 中的 `.dark` 类定义

## 📚 相关文档

- **详细使用指南**: 查看 `DARK_MODE.md`
- **功能特性**: 查看 `docs/FEATURES.md`
- **Button 组件**: 查看 `src/components/ButtonStories.vue`

## 💡 提示

1. **推荐使用 CSS 变量** - 如 `bg-background` 而不是 `bg-white`
2. **测试两种主题** - 确保组件在两种主题下都正常显示
3. **使用语义化颜色** - 如 `text-primary` 而不是 `text-blue-500`
4. **查看示例代码** - ButtonStories.vue 提供了完整的使用示例

## 🎉 开始体验

现在就去右上角点击主题切换按钮，体验完整的暗色模式支持吧！

---

**开发愉快！** 🚀

如有问题，请查看 `DARK_MODE.md` 获取更详细的说明。
