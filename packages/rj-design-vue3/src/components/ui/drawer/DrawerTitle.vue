<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { DrawerTitle as DrawerTitlePrimitive, DrawerClose } from 'vaul-vue'
import { cn } from '@/lib/utils'
import { drawerTitleVariants, type DrawerTitleVariants } from '.'

// ============ Props ============

interface DrawerTitleProps {
  /** 样式变体 */
  variant?: DrawerTitleVariants['variant']
  /** 是否显示关闭按钮 */
  showClose?: boolean
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DrawerTitleProps>(), {
  variant: 'default',
  showClose: false,
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'text-foreground font-semibold',
    drawerTitleVariants({ variant: props.variant }),
    props.class
  )
)
</script>

<template>
  <DrawerTitlePrimitive v-bind="$attrs" data-slot="drawer-title" :class="classes">
    <slot />
    <DrawerClose v-if="showClose" class="absolute right-4 top-6">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.99999 6.14899L8.84486 9.99386L9.99391 8.84482L6.14903 4.99994L9.99391 1.15506L8.84486 0.00601474L4.99999 3.85089L1.15508 0.00598145L0.00602722 1.15503L3.85094 4.99994L0.00602722 8.84485L1.15508 9.9939L4.99999 6.14899Z"
          fill="white"
        />
      </svg>
    </DrawerClose>
  </DrawerTitlePrimitive>
</template>
