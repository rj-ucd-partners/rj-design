<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Label as LabelPrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'

defineProps<{
  for?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <LabelPrimitive
    :for="$props.for"
    data-slot="label"
    :class="cn(
      'text-sm font-medium leading-none',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      'select-none',
      $props.class
    )"
  >
    <slot />
  </LabelPrimitive>
</template>
