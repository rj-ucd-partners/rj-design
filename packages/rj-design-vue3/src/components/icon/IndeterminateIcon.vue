<script setup lang="ts">
interface IconProps {
  width?: string | number
  height?: string | number
}

defineProps<IconProps>()
</script>

<template>
  <svg
    width="8"
    height="2"
    viewBox="0 0 8 2"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <rect width="8" height="2" />
  </svg>
</template>
