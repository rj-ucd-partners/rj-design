<script setup lang="ts">
import { DrawerClose as DrawerClosePrimitive } from 'vaul-vue'

// ============ Props ============

interface DrawerCloseProps {
  /** 使用子元素作为渲染元素 */
  asChild?: boolean
}

defineProps<DrawerCloseProps>()
</script>

<template>
  <DrawerClosePrimitive v-bind="$attrs" :as-child="asChild" data-slot="drawer-close">
    <slot />
  </DrawerClosePrimitive>
</template>
