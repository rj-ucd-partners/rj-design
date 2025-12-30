<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import {
  DialogPortal,
  DialogContent as DialogContentPrimitive,
  DialogClose,
} from 'reka-ui'
import { cn } from '@/lib/utils'
import { dialogContentVariants, type DialogContentVariants } from '.'
import DialogOverlay from './DialogOverlay.vue'
import { CloseIcon } from '@/components/icon'

// ============ Props ============

interface DialogContentProps {
  /** 样式变体 */
  variant?: DialogContentVariants['variant']
  /** 尺寸 */
  size?: DialogContentVariants['size']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
  /** 是否显示关闭按钮 */
  showCloseButton?: boolean
  /** 强制挂载 */
  forceMount?: boolean
}

const props = withDefaults(defineProps<DialogContentProps>(), {
  variant: 'primary',
  size: 'sm',
  showCloseButton: true,
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border shadow-lg duration-200 sm:max-w-lg p-6',
    dialogContentVariants({ variant: props.variant, size: props.size }),
    props.class
  )
)
</script>

<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContentPrimitive
      v-bind="$attrs"
      :force-mount="forceMount"
      data-slot="dialog-content"
      :class="classes"
    >
      <slot />
      <DialogClose
        v-if="showCloseButton"
        data-slot="dialog-close"
        class="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs transition-opacity focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      >
        <CloseIcon />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContentPrimitive>
  </DialogPortal>
</template>
