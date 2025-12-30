<script setup lang="ts">
interface IconProps {
  /** 图标尺寸 */
  size?: number | string
}

withDefaults(defineProps<IconProps>(), {
  size: 15,
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor" />
  </svg>
</template>
