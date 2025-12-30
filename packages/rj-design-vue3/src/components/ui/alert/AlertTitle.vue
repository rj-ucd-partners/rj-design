<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div data-slot="alert-title" :class="cn(
        'inline-flex flex-row items-center justify-center gap-[2px]',
        'text-[13px] leading-[20px] font-normal text-text-deep',
        $props.class
    )">
        <slot />
    </div>
</template>
