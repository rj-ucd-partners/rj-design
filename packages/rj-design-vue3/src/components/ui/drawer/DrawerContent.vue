<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { DrawerPortal, DrawerContent as DrawerContentPrimitive } from 'vaul-vue'
import { cn } from '@/lib/utils'
import { drawerContentVariants, type DrawerContentVariants } from '.'
import DrawerOverlay from './DrawerOverlay.vue'

// ============ Props ============

interface DrawerContentProps {
  /** 样式变体 */
  variant?: DrawerContentVariants['variant']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DrawerContentProps>(), {
  variant: 'default',
})

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'group/drawer-content bg-background fixed z-50 flex h-auto flex-col',
    // top
    'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
    // bottom
    'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-0 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
    // right
    'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
    // left
    'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
    drawerContentVariants({ variant: props.variant }),
    props.class
  )
)
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContentPrimitive v-bind="$attrs" data-slot="drawer-content" :class="classes">
      <!-- 底部抽屉的拖动指示条 -->
      <div
        class="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
      />
      <slot />
    </DrawerContentPrimitive>
  </DrawerPortal>
</template>
