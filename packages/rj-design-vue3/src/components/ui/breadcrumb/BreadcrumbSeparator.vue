<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronRightIcon } from '@/components/icon'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li
    data-slot="breadcrumb-separator"
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-3.5', $props.class)"
  >
    <slot>
      <ChevronRightIcon />
    </slot>
  </li>
</template>
