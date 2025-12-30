<script setup lang="ts">
import { DialogClose as DialogClosePrimitive } from 'reka-ui'

// ============ Props ============

interface DialogCloseProps {
  /** 使用子元素作为渲染元素 */
  asChild?: boolean
}

defineProps<DialogCloseProps>()
</script>

<template>
  <DialogClosePrimitive v-bind="$attrs" :as-child="asChild" data-slot="dialog-close">
    <slot />
  </DialogClosePrimitive>
</template>
