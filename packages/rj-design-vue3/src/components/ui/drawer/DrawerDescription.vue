<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { DrawerDescription as DrawerDescriptionPrimitive } from 'vaul-vue'
import { cn } from '@/lib/utils'
import { drawerDescriptionVariants, type DrawerDescriptionVariants } from '.'
import { Button } from '@/components/ui/button'
import { InfoCircledIcon } from '@/components/icon'

// ============ Props ============

interface DrawerDescriptionProps {
  /** 样式变体 */
  variant?: DrawerDescriptionVariants['variant']
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DrawerDescriptionProps>(), {
  variant: 'primary',
})

// ============ 状态 ============

const show = ref(true)

// ============ 计算属性 ============

const classes = computed(() =>
  cn(
    'text-muted-foreground text-sm',
    drawerDescriptionVariants({ variant: props.variant }),
    props.class
  )
)

// ============ 方法 ============

const handleClose = () => {
  show.value = false
}
</script>

<template>
  <DrawerDescriptionPrimitive
    v-if="show"
    v-bind="$attrs"
    data-slot="drawer-description"
    :class="classes"
  >
    <div v-if="variant === 'primary'" class="flex flex-row items-center gap-1">
      <InfoCircledIcon class="text-primary" />
      <slot />
    </div>
    <template v-else>
      <slot />
    </template>
    <Button variant="ghost" size="link" @click="handleClose">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM10.046 4.71554L7.7615 7.00004L10.046 9.28454L9.2845 10.046L7 7.76154L4.7155 10.046L3.954 9.28454L6.2385 7.00004L3.954 4.71554L4.7155 3.95405L7 6.23854L9.2845 3.95405L10.046 4.71554Z"
          fill="#97A7B5"
        />
      </svg>
    </Button>
  </DrawerDescriptionPrimitive>
</template>
