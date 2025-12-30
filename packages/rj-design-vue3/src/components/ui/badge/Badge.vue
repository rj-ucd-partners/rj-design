<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { badgeVariants, type BadgeVariants } from '.'

interface BadgeProps extends PrimitiveProps {
  variant?: BadgeVariants['variant']
  corner?: BadgeVariants['corner']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<BadgeProps>(), {
  as: 'span',
  variant: 'default',
  corner: 'default',
})

const classes = computed(() =>
  cn(badgeVariants({ variant: props.variant, corner: props.corner }), props.class)
)
</script>

<template>
  <Primitive :as="as" :as-child="asChild" data-slot="badge" :class="classes">
    <slot />
  </Primitive>
</template>
