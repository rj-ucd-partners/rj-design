<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { dialogFooterVariants, type DialogFooterVariants } from '.'

// ============ Props ============

interface DialogFooterProps {
  /** 样式变体 */
  variant?: DialogFooterVariants['variant']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = defineProps<DialogFooterProps>()

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    dialogFooterVariants({ variant: props.variant }),
    props.class
  )
)
</script>

<template>
  <div v-bind="$attrs" data-slot="dialog-footer" :class="classes">
    <slot />
  </div>
</template>
