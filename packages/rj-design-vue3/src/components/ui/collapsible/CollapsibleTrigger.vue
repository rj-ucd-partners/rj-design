<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { CollapsibleTrigger as CollapsibleTriggerPrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'
import { collapsibleTriggerVariants, type CollapsibleTriggerVariants } from '.'

// ============ Props ============

interface CollapsibleTriggerProps {
  /** 样式变体 */
  variant?: CollapsibleTriggerVariants['variant']
  /** 尺寸 */
  size?: CollapsibleTriggerVariants['size']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
  /** 使用子元素作为渲染元素 */
  asChild?: boolean
}

const props = withDefaults(defineProps<CollapsibleTriggerProps>(), {
  variant: 'primary',
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(collapsibleTriggerVariants({ variant: props.variant, size: props.size }), props.class)
)
</script>

<template>
  <CollapsibleTriggerPrimitive
    v-bind="$attrs"
    :as-child="asChild"
    data-slot="collapsible-trigger"
    :class="classes"
  >
    <slot />
  </CollapsibleTriggerPrimitive>
</template>
