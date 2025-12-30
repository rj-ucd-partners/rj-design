<script setup lang="ts">
import type { HTMLAttributes, Component } from 'vue'
import { computed } from 'vue'
import { DialogTitle as DialogTitlePrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'
import { dialogTitleVariants, type DialogTitleVariants } from '.'
import {
  InfoCircledIcon,
  SuccessIcon,
  AbnormalIcon,
  DangerIcon,
} from '@/components/icon'

// ============ Props ============

interface DialogTitleProps {
  /** 样式变体 */
  variant?: DialogTitleVariants['variant']
  /** 尺寸 */
  size?: DialogTitleVariants['size']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DialogTitleProps>(), {
  variant: 'default',
  size: 'default',
})

// ============ 图标映射 ============

const iconMap: Record<string, { icon: Component; class: string }> = {
  primary: { icon: InfoCircledIcon, class: 'text-primary' },
  success: { icon: SuccessIcon, class: 'text-success' },
  abnormal: { icon: AbnormalIcon, class: 'text-abnormal' },
  danger: { icon: DangerIcon, class: 'size-6 text-danger' },
}

const iconConfig = computed(() =>
  props.variant && props.variant !== 'default' ? iconMap[props.variant] : null
)

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'text-lg leading-none font-semibold',
    dialogTitleVariants({ variant: props.variant, size: props.size }),
    props.class
  )
)
</script>

<template>
  <DialogTitlePrimitive v-bind="$attrs" data-slot="dialog-title" :class="classes">
    <component
      :is="iconConfig.icon"
      v-if="iconConfig"
      :class="iconConfig.class"
    />
    <slot />
  </DialogTitlePrimitive>
</template>
