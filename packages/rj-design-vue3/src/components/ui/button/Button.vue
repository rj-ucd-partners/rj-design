<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "."

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
})

// 定义组件发出的事件
defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <Primitive 
    data-slot="button" 
    :as="as" 
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    @click="$emit('click', $event)"
  >
    <slot />
  </Primitive>
</template>
