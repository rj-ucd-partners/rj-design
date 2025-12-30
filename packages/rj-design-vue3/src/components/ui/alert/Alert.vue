<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { provide, ref, computed, watch, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { alertVariants, ALERT_INJECTION_KEY, type AlertVariant } from '.'

// ============ Props & Emits ============

const props = withDefaults(defineProps<{
  variant?: AlertVariant
  border?: boolean
  show?: boolean
  time?: number
  icon?: boolean
  class?: HTMLAttributes['class']
}>(), {
  variant: 'primary',
  border: false,
  icon: false,
})

const emit = defineEmits<{
  close: []
}>()

// ============ 显示状态管理 ============

// 内部状态（非受控模式）
const internalShow = ref(true)

// 是否受控
const isControlled = computed(() => props.show !== undefined)

// 实际显示状态
const isVisible = computed(() => 
  isControlled.value ? props.show : internalShow.value
)

// 关闭处理
const handleClose = () => {
  isControlled.value ? emit('close') : (internalShow.value = false)
}

// ============ 自动关闭定时器 ============

let timer: ReturnType<typeof setTimeout> | null = null

const resetTimer = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  if (props.time && props.time > 0 && isVisible.value) {
    timer = setTimeout(handleClose, props.time)
  }
}

watch([() => props.time, isVisible], resetTimer, { immediate: true })

onUnmounted(() => timer && clearTimeout(timer))

// ============ 提供上下文 ============

provide(ALERT_INJECTION_KEY, {
  variant: computed(() => props.variant),
  icon: computed(() => props.icon),
  onClose: handleClose,
})
</script>

<template>
  <div
    v-if="isVisible"
    data-slot="alert"
    role="alert"
    :class="cn(
      'w-full rounded-lg px-4 py-[9px]',
      'inline-flex flex-col items-center justify-center',
      'gap-1 box-border animate-fade-in',
      alertVariants({ variant, border }),
      props.class
    )"
  >
    <slot />
  </div>
</template>
