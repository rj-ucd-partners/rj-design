<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { CollapsibleRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { collapsibleVariants, type CollapsibleVariants } from '.'

// ============ Props ============

interface CollapsibleProps {
  /** 样式变体 */
  variant?: CollapsibleVariants['variant']
  /** 尺寸 */
  size?: CollapsibleVariants['size']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
  /** 是否展开（受控） */
  open?: boolean
  /** 默认展开状态（非受控） */
  defaultOpen?: boolean
  /** 是否禁用 */
  disabled?: boolean
}

const props = withDefaults(defineProps<CollapsibleProps>(), {
  variant: 'primary',
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

// ============ 计算属性 ============

const classes = computed(() =>
  cn(collapsibleVariants({ variant: props.variant, size: props.size }), props.class)
)
</script>

<template>
  <CollapsibleRoot
    v-bind="$attrs"
    :open="open"
    :default-open="defaultOpen"
    :disabled="disabled"
    data-slot="collapsible"
    :class="classes"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </CollapsibleRoot>
</template>
