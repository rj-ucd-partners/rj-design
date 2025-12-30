<script setup lang="ts">
import type { HTMLAttributes, Component } from 'vue'
import { computed, ref } from 'vue'
import { DialogDescription as DialogDescriptionPrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'
import { dialogDescriptionVariants, type DialogDescriptionVariants } from '.'
import { Button } from '@/components/ui/button'
import {
  InfoCircledIcon,
  SuccessIcon,
  AbnormalIcon,
  DangerIcon,
  CloseIcon,
} from '@/components/icon'

// ============ Props ============

interface DialogDescriptionProps {
  /** 样式变体 */
  variant?: DialogDescriptionVariants['variant']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DialogDescriptionProps>(), {
  variant: 'primary',
})

// ============ 状态 ============

const show = ref(true)

// ============ 图标映射 ============

const iconMap: Record<string, { icon: Component; class: string }> = {
  primary: { icon: InfoCircledIcon, class: 'text-primary' },
  success: { icon: SuccessIcon, class: 'text-success' },
  abnormal: { icon: AbnormalIcon, class: 'text-abnormal' },
  danger: { icon: DangerIcon, class: 'text-danger' },
}

const iconConfig = computed(() =>
  props.variant && props.variant !== 'default' ? iconMap[props.variant] : null
)

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'text-muted-foreground text-sm',
    dialogDescriptionVariants({ variant: props.variant }),
    props.class
  )
)

// ============ 方法 ============

const handleClose = () => {
  show.value = false
}
</script>

<template>
  <DialogDescriptionPrimitive
    v-if="show"
    v-bind="$attrs"
    data-slot="dialog-description"
    :class="classes"
  >
    <div class="flex flex-row items-center justify-center gap-0.5">
      <span v-if="iconConfig" class="size-[22px] flex items-center justify-center">
        <component :is="iconConfig.icon" :class="iconConfig.class" />
      </span>
      <slot />
    </div>
    <Button variant="transparent" size="link" @click="handleClose">
      <CloseIcon />
    </Button>
  </DialogDescriptionPrimitive>
</template>
