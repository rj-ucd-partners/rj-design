<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { CollapsibleContent as CollapsibleContentPrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'
import { collapsibleContentVariants, type CollapsibleContentVariants } from '.'

// ============ Props ============

interface CollapsibleContentProps {
  /** 样式变体 */
  variant?: CollapsibleContentVariants['variant']
  /** 尺寸 */
  size?: CollapsibleContentVariants['size']
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义类名 */
  class?: HTMLAttributes['class']
  /** 强制挂载（用于动画控制） */
  forceMount?: boolean
}

const props = withDefaults(defineProps<CollapsibleContentProps>(), {
  variant: 'primary',
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    props.disabled ? 'cursor-not-allowed text-disabled' : '',
    collapsibleContentVariants({ variant: props.variant, size: props.size }),
    props.class
  )
)
</script>

<template>
  <CollapsibleContentPrimitive
    v-bind="$attrs"
    :force-mount="forceMount"
    data-slot="collapsible-content"
    :class="classes"
  >
    <slot />
  </CollapsibleContentPrimitive>
</template>
