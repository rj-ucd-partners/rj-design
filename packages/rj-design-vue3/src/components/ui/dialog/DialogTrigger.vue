<script setup lang="ts">
import { DialogTrigger as DialogTriggerPrimitive } from 'reka-ui'

// ============ Props ============

interface DialogTriggerProps {
  /** 使用子元素作为渲染元素 */
  asChild?: boolean
}

defineProps<DialogTriggerProps>()
</script>

<template>
  <DialogTriggerPrimitive v-bind="$attrs" :as-child="asChild" data-slot="dialog-trigger">
    <slot />
  </DialogTriggerPrimitive>
</template>
