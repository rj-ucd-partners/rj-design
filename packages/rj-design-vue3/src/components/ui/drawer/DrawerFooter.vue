<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { drawerFooterVariants, type DrawerFooterVariants } from '.'

// ============ Props ============

interface DrawerFooterProps {
  /** 样式变体 */
  variant?: DrawerFooterVariants['variant']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DrawerFooterProps>(), {
  variant: 'default',
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'mt-auto flex flex-col gap-2 px-4 py-2.5',
    drawerFooterVariants({ variant: props.variant }),
    props.class
  )
)
</script>

<template>
  <div v-bind="$attrs" data-slot="drawer-footer" :class="classes">
    <slot />
  </div>
</template>
