<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { drawerDetailsVariants, type DrawerDetailsVariants } from '.'

// ============ Props ============

interface DrawerDetailsProps {
  /** 样式变体 */
  variant?: DrawerDetailsVariants['variant']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DrawerDetailsProps>(), {
  variant: 'default',
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(drawerDetailsVariants({ variant: props.variant }), props.class)
)
</script>

<template>
  <div v-bind="$attrs" data-slot="drawer-details" :class="classes">
    <slot />
  </div>
</template>
