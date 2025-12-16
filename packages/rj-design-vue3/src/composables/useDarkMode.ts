import { ref, watch, onMounted } from 'vue'

/**
 * Dark Mode Composable
 * 管理暗色模式状态
 */
export function useDarkMode() {
  const isDark = ref(false)

  // 初始化：从 localStorage 读取或使用系统偏好
  onMounted(() => {
    const stored = localStorage.getItem('theme')
    if (stored) {
      isDark.value = stored === 'dark'
    } else {
      // 检查系统偏好
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    updateTheme()
  })

  // 监听变化并更新 DOM
  watch(isDark, () => {
    updateTheme()
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  })

  function updateTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function toggleDark() {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleDark,
  }
}
