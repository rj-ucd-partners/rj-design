<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface BreadcrumbLinkProps extends PrimitiveProps {
  class?: HTMLAttributes['class']
}

withDefaults(defineProps<BreadcrumbLinkProps>(), {
  as: 'a',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-slot="breadcrumb-link"
    :class="cn('hover:text-foreground transition-colors cursor-pointer', $props.class)"
  >
    <slot />
  </Primitive>
</template>
