import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Checkbox } from "./Checkbox.vue"

// ============ 样式变体 ============

export const checkboxVariants = cva(
  [
    // 基础样式
    "peer size-3.5 shrink-0 rounded-[4px] border shadow-xs",
    "transition-shadow outline-none",
    "disabled:cursor-not-allowed",
    // focus 样式
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    // 选中样式
    "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    "data-[state=checked]:border-primary",
    "dark:data-[state=checked]:bg-primary",
  ],
  {
    variants: {
      variant: {
        default: [
          "text-text",
          // 未选中
          "data-[state=unchecked]:border-border-hover",
          "data-[state=unchecked]:hover:border-primary",
          // 半选中
          "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary",
          "dark:data-[state=indeterminate]:bg-primary",
          // 禁用 - 未选中
          "disabled:data-[state=unchecked]:border-primary-disabled",
          "disabled:data-[state=unchecked]:bg-fill-dark-hover-active-disabled",
          // 禁用 - 半选中
          "disabled:data-[state=indeterminate]:bg-primary-disabled",
          "disabled:data-[state=indeterminate]:border-primary-disabled",
          // 禁用 - 选中
          "disabled:data-[state=checked]:bg-primary-disabled",
          "disabled:data-[state=checked]:border-primary-disabled",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type CheckboxVariants = VariantProps<typeof checkboxVariants>
