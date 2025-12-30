<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ol
    data-slot="breadcrumb-list"
    :class="cn(
      'flex flex-wrap items-center gap-1.5 break-words',
      'text-sm text-secondary-information',
      '[&_[data-slot=breadcrumb-item]]:text-[13px]',
      '[&_[data-slot=breadcrumb-item]]:leading-[20px]',
      '[&_[data-slot=breadcrumb-item]]:font-normal',
      $props.class
    )"
  >
    <slot />
  </ol>
</template>
