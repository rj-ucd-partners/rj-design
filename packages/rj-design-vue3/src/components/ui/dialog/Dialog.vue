<script setup lang="ts">
import { DialogRoot } from 'reka-ui'

// ============ Props ============

interface DialogProps {
  /** 是否打开（受控） */
  open?: boolean
  /** 默认打开状态（非受控） */
  defaultOpen?: boolean
  /** 是否为模态框 */
  modal?: boolean
}

const props = withDefaults(defineProps<DialogProps>(), {
  modal: true,
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()
</script>

<template>
  <DialogRoot
    v-bind="$attrs"
    :open="open"
    :default-open="defaultOpen"
    :modal="modal"
    data-slot="dialog"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </DialogRoot>
</template>
