<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { DrawerOverlay as DrawerOverlayPrimitive } from 'vaul-vue'
import { cn } from '@/lib/utils'

// ============ Props ============

interface DrawerOverlayProps {
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = defineProps<DrawerOverlayProps>()

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
    props.class
  )
)
</script>

<template>
  <DrawerOverlayPrimitive v-bind="$attrs" data-slot="drawer-overlay" :class="classes" />
</template>
