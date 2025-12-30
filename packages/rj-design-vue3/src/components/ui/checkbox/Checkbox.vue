<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui'
import { cn } from '@/lib/utils'
import { checkboxVariants, type CheckboxVariants } from '.'
import { CheckIcon, IndeterminateIcon } from '@/components/icon'

// ============ Props ============

interface CheckboxProps {
  /** 样式变体 */
  variant?: CheckboxVariants['variant']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
  /** 选中状态 */
  checked?: boolean | 'indeterminate'
  /** 默认选中状态（非受控） */
  defaultChecked?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否必填 */
  required?: boolean
  /** 表单字段名 */
  name?: string
  /** 表单值 */
  value?: string
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  variant: 'default',
})

const emit = defineEmits<{
  'update:checked': [value: boolean | 'indeterminate']
}>()

// ============ 计算属性 ============

const classes = computed(() =>
  cn(checkboxVariants({ variant: props.variant }), props.class)
)

// 判断是否为半选状态
const isIndeterminate = computed(() => props.checked === 'indeterminate')
</script>

<template>
  <CheckboxRoot
    v-bind="$attrs"
    :checked="checked"
    :default-checked="defaultChecked"
    :disabled="disabled"
    :required="required"
    :name="name"
    :value="value"
    data-slot="checkbox"
    :class="classes"
    @update:checked="emit('update:checked', $event)"
  >
    <CheckboxIndicator
      data-slot="checkbox-indicator"
      class="flex items-center justify-center text-current transition-none"
    >
      <IndeterminateIcon v-if="isIndeterminate" />
      <CheckIcon v-else />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
