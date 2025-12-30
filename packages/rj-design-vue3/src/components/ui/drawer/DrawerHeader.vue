<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { drawerHeaderVariants, type DrawerHeaderVariants } from '.'

// ============ Props ============

interface DrawerHeaderProps {
  /** 样式变体 */
  variant?: DrawerHeaderVariants['variant']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DrawerHeaderProps>(), {
  variant: 'default',
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
    drawerHeaderVariants({ variant: props.variant }),
    props.class
  )
)
</script>

<template>
  <div v-bind="$attrs" data-slot="drawer-header" :class="classes">
    <slot />
  </div>
</template>
