<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
</script>

<template>
  <button
    @click="toggleDark"
    class="fixed top-4 right-4 z-50 p-3 rounded-lg bg-card border border-border shadow-lg hover:bg-fill-light-hover-bg transition-all duration-200 group"
    :title="isDark ? '切换到亮色模式' : '切换到暗色模式'"
  >
    <!-- 太阳图标 (Light Mode) -->
    <svg
      v-if="!isDark"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text-secondary group-hover:text-primary transition-colors"
    >
      <circle cx="10" cy="10" r="4" fill="currentColor" />
      <path
        d="M10 1V3M10 17V19M19 10H17M3 10H1M16.364 16.364L14.95 14.95M5.05 5.05L3.636 3.636M16.364 3.636L14.95 5.05M5.05 14.95L3.636 16.364"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>

    <!-- 月亮图标 (Dark Mode) -->
    <svg
      v-else
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      class="text-secondary group-hover:text-primary transition-colors"
    >
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      />
    </svg>

    <!-- 提示文本 -->
    <span class="sr-only">{{ isDark ? '切换到亮色模式' : '切换到暗色模式' }}</span>
  </button>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
