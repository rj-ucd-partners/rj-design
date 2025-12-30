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
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM11.5313 6.23225L10.8242 5.52515L7.28871 9.06059L5.53593 7.30781L4.8288 8.01489L7.28862 10.4749L11.5313 6.23225Z" />
  </svg>
</template>
