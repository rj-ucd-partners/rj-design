import type { VariantProps } from "class-variance-authority"
import type { ComputedRef, InjectionKey } from "vue"
import { cva } from "class-variance-authority"

export { default as Alert } from "./Alert.vue"
export { default as AlertHeader } from "./AlertHeader.vue"
export { default as AlertTitle } from "./AlertTitle.vue"
export { default as AlertDescription } from "./AlertDescription.vue"

// ============ 类型定义 ============

export type AlertVariant = 'primary' | 'success' | 'destructive' | 'abnormal'

export interface AlertContext {
  variant: ComputedRef<AlertVariant>
  icon: ComputedRef<boolean>
  onClose: () => void
}

// 使用 Symbol 作为注入 key，更安全
export const ALERT_INJECTION_KEY: InjectionKey<AlertContext> = Symbol('alert')

// ============ 样式变体 ============

export const alertVariants = cva("", {
  variants: {
    variant: {
      primary: "bg-[#00CFF4]/20 border-primary-disabled",
      success: "bg-[#00FFA8]/20 border-success-disabled",
      abnormal: "bg-[#FFA800]/20 border-abnormal-special",
      destructive: "bg-[#FF3C00]/20 border-danger-special"
    },
    border: {
      true: "border",
      false: "border-none",
    }
  },
})

export const alertDescriptionVariants = cva("", {
  variants: {
    icon: {
      false: "",
      true: "pl-5.5",
    },
  },
})

export type AlertVariants = VariantProps<typeof alertVariants>
export type AlertDescriptionVariants = VariantProps<typeof alertDescriptionVariants>
