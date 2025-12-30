<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { collapsibleHeaderVariants, type CollapsibleHeaderVariants } from '.'

// ============ Props ============

interface CollapsibleHeaderProps {
  /** 样式变体 */
  variant?: CollapsibleHeaderVariants['variant']
  /** 尺寸 */
  size?: CollapsibleHeaderVariants['size']
  /** 布局方向 */
  layout?: CollapsibleHeaderVariants['layout']
  /** 边框样式 */
  border?: CollapsibleHeaderVariants['border']
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<CollapsibleHeaderProps>(), {
  variant: 'primary',
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    props.disabled ? 'cursor-not-allowed text-disabled' : '',
    collapsibleHeaderVariants({
      variant: props.variant,
      size: props.size,
      layout: props.layout,
      border: props.border,
    }),
    props.class
  )
)
</script>

<template>
  <div v-bind="$attrs" data-slot="collapsible-header" :class="classes">
    <slot />
  </div>
</template>
