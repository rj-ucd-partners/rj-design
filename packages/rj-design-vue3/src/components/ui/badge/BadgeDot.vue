<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { badgeDotVariants, type BadgeDotVariants } from '.'

interface BadgeDotProps {
  variant?: BadgeDotVariants['variant']
  class?: HTMLAttributes['class']
}

const props = defineProps<BadgeDotProps>()

const classes = computed(() =>
  cn(badgeDotVariants({ variant: props.variant }), props.class)
)
</script>

<template>
  <span data-slot="badge-dot" :class="classes" />
</template>
