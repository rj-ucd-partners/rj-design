import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"
export { default as BadgeDot } from "./BadgeDot.vue"

// ============ Badge 变体 ============

export const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "px-1 min-w-4 w-fit",
    "text-[13px] leading-[20px] text-center font-normal",
    "whitespace-nowrap shrink-0 overflow-hidden",
    "[&>svg]:size-3 [&>svg]:pointer-events-none gap-1",
    "hover:outline hover:outline-1 hover:outline-border-split",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "transition-[color,box-shadow]",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary-light text-secondary-information hover:text-secondary",
        "primary-light": "bg-primary-light text-primary",
        "primary-heavy": "bg-primary text-text border border-border-split",
        "success-light": "bg-success-light text-success",
        "success-heavy": "bg-success text-text border border-border-split",
        "abnormal-light": "bg-warning-light text-abnormal",
        "abnormal-heavy": "bg-abnormal text-text border border-border-split",
      },
      corner: {
        default: "rounded-[2px]",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      corner: "default",
    },
  }
)

// ============ BadgeDot 变体 ============

export const badgeDotVariants = cva("size-1.5 rounded-full", {
  variants: {
    variant: {
      destructive: "bg-danger",
      down: "bg-fill",
      primary: "bg-primary-light",
      success: "bg-success",
      abnormal: "bg-abnormal-light",
      purple: "bg-data-8",
      warning: "bg-warning",
      alarm: "bg-[#E69800]",
      online: "bg-[#6D9CC1]",
      "secondary-danger": "bg-danger-hover",
      main: "bg-data-2",
      secondary: "bg-data-3",
      blueness: "bg-primary",
      rose: "bg-data-9",
      green: "bg-data-4",
      offline: "bg-disabled",
      blue: "bg-[#1162FF]",
    },
  },
})

// ============ 类型导出 ============

export type BadgeVariants = VariantProps<typeof badgeVariants>
export type BadgeDotVariants = VariantProps<typeof badgeDotVariants>
