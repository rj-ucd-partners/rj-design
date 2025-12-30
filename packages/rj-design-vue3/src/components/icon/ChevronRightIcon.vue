<script setup lang="ts">
interface IconProps {
  width?: string | number
  height?: string | number
}

defineProps<IconProps>()
</script>

<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
</template>
