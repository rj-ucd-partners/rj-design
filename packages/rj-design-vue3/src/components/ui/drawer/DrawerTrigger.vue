<script setup lang="ts">
import { DrawerTrigger as DrawerTriggerPrimitive } from 'vaul-vue'

// ============ Props ============

interface DrawerTriggerProps {
  /** 使用子元素作为渲染元素 */
  asChild?: boolean
}

defineProps<DrawerTriggerProps>()
</script>

<template>
  <DrawerTriggerPrimitive v-bind="$attrs" :as-child="asChild" data-slot="drawer-trigger">
    <slot />
  </DrawerTriggerPrimitive>
</template>
