<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { dialogDetailsVariants, type DialogDetailsVariants } from '.'

// ============ Props ============

interface DialogDetailsProps {
  /** 样式变体 */
  variant?: DialogDetailsVariants['variant']
  /** 是否有边框 */
  hasBorder?: boolean
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DialogDetailsProps>(), {
  variant: 'default',
  hasBorder: true,
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'p-4 min-h-40 border-border-split inline-flex items-center justify-center',
    props.hasBorder ? 'border-b' : 'border-none',
    dialogDetailsVariants({ variant: props.variant }),
    props.class
  )
)
</script>

<template>
  <div v-bind="$attrs" data-slot="dialog-details" :class="classes">
    <slot />
  </div>
</template>
