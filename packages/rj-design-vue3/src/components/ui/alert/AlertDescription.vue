<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { inject, ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { alertDescriptionVariants, ALERT_INJECTION_KEY } from '.'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  foldable?: boolean
}>(), {
  foldable: false,
})

const ctx = inject(ALERT_INJECTION_KEY)

const hasIcon = computed(() => ctx?.icon.value ?? false)

// 展开/收起状态
const expanded = ref(true)
</script>

<template>
  <div
    data-slot="alert-description"
    :class="cn(
      'inline-flex flex-col items-start gap-2',
      'text-muted-foreground text-[13px] leading-[20px] font-normal text-secondary',
      alertDescriptionVariants({ icon: hasIcon }),
      props.class
    )"
  >
    <!-- 内容 -->
    <div :class="expanded ? 'line-clamp-none' : 'line-clamp-1'">
      <slot />
    </div>
    
    <!-- 折叠按钮 -->
    <Button 
      v-if="foldable" 
      variant="link" 
      size="link" 
      @click="expanded = !expanded"
    >
      {{ expanded ? '收起' : '展开更多' }}
    </Button>
  </div>
</template>
