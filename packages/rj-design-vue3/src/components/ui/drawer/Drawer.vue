<script setup lang="ts">
import { DrawerRoot } from 'vaul-vue'

// ============ Props ============

interface DrawerProps {
  /** 是否打开（受控） */
  open?: boolean
  /** 默认打开状态（非受控） */
  defaultOpen?: boolean
  /** 抽屉方向 */
  direction?: 'left' | 'right' | 'top' | 'bottom'
  /** 是否为模态框 */
  modal?: boolean
  /** 是否允许拖动关闭 */
  shouldScaleBackground?: boolean
}

const props = withDefaults(defineProps<DrawerProps>(), {
  direction: 'bottom',
  modal: true,
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()
</script>

<template>
  <DrawerRoot
    v-bind="$attrs"
    :open="open"
    :default-open="defaultOpen"
    :direction="direction"
    :modal="modal"
    :should-scale-background="shouldScaleBackground"
    data-slot="drawer"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </DrawerRoot>
</template>
