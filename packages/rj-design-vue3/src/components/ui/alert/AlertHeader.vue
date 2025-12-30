<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { inject, computed } from 'vue'
import { cn } from '@/lib/utils'
import { CloseIcon, InfoCircledIcon, SuccessIcon, AbnormalIcon } from '@/components/icon'
import { ALERT_INJECTION_KEY, type AlertVariant } from '.'
import { Button } from '@/components/ui/button'

defineProps<{
    class?: HTMLAttributes['class']
}>()

const ctx = inject(ALERT_INJECTION_KEY)

if (!ctx) {
    throw new Error('AlertHeader must be used within Alert')
}

// 图标映射
const iconMap: Record<AlertVariant, { component: typeof InfoCircledIcon; class: string }> = {
    primary: { component: InfoCircledIcon, class: 'text-primary' },
    success: { component: SuccessIcon, class: 'text-success' },
    abnormal: { component: AbnormalIcon, class: 'text-abnormal' },
    destructive: { component: CloseIcon, class: 'text-danger' },
}

const currentIcon = computed(() => iconMap[ctx.variant.value])
</script>

<template>
    <div data-slot="alert-header" :class="cn(
        'inline-flex flex-row w-full items-center justify-between',
        '[&_svg:not([class*=\'size-\'])]:size-4',
        $props.class
    )">
        <div class="inline-flex flex-row items-center justify-start">
            <!-- 图标 -->
            <div v-if="ctx.icon.value" class="flex w-[22px] h-[22px] items-center justify-center">
                <component :is="currentIcon.component" :class="currentIcon.class" />
            </div>

            <!-- 标题 -->
            <slot />

            <!-- 标题功能区 -->
            <span v-if="$slots.titleFuncArea" class="ml-2 text-[13px] leading-[20px] font-normal">
                <slot name="titleFuncArea" />
            </span>
        </div>

        <!-- 关闭区域 -->
        <div class="inline-flex flex-row items-center gap-1 text-[13px] leading-[20px]">
            <slot name="closeFuncArea" />
            <Button variant="transparent" size="link" @click="ctx.onClose">
                <CloseIcon class="size-4 text-secondary-information" />
            </Button>
        </div>
    </div>
</template>
