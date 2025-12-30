<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { DialogOverlay as DialogOverlayPrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'

// ============ Props ============

interface DialogOverlayProps {
  /** 自定义类名 */
  class?: HTMLAttributes['class']
  /** 强制挂载 */
  forceMount?: boolean
}

const props = defineProps<DialogOverlayProps>()

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
    props.class
  )
)
</script>

<template>
  <DialogOverlayPrimitive
    v-bind="$attrs"
    :force-mount="forceMount"
    data-slot="dialog-overlay"
    :class="classes"
  />
</template>
