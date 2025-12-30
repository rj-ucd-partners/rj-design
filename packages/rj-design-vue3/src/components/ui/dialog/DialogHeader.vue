<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { dialogHeaderVariants, type DialogHeaderVariants } from '.'

// ============ Props ============

interface DialogHeaderProps {
  /** 样式变体 */
  variant?: DialogHeaderVariants['variant']
  /** 是否有边框 */
  hasBorder?: boolean
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DialogHeaderProps>(), {
  hasBorder: true,
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'flex flex-col text-center sm:text-left',
    props.hasBorder ? 'border-b' : 'border-none',
    dialogHeaderVariants({ variant: props.variant }),
    props.class
  )
)
</script>

<template>
  <div v-bind="$attrs" data-slot="dialog-header" :class="classes">
    <slot />
  </div>
</template>
