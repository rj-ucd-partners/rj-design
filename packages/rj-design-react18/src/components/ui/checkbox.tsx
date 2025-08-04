import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { IndeterminateIcon } from "../icon/indeterminate"
import { YesIcon } from "../icon/yes"

const checkboxVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: 'text-text h-3.5 w-3.5 data-[state=unchecked]:border-border-hover data-[state=unchecked]:hover:border-primary data-[state=indeterminate]:bg-primary dark:data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary disabled:data-[state=unchecked]:border-primary-disabled disabled:data-[state=unchecked]:bg-fill-dark-hover-active-disabled disabled:data-[state=indeterminate]:bg-primary-disabled disabled:data-[state=indeterminate]:border-primary-disabled dark:disabled:data-[state=indeterminate]:bg-primary-disabled dark:disabled:data-[state=indeterminate]:border-primary-disabled disabled:data-[state=checked]:bg-primary-disabled disabled:data-[state=checked]:border-primary-disabled dark:disabled:data-[state=checked]:bg-primary-disabled dark:disabled:data-[state=checked]:border-primary-disabled'
      },
    },
    defaultVariants: {
    },
  }
)

function Checkbox({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>
  & VariantProps<typeof checkboxVariants>
) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed",
        className,
        checkboxVariants({ variant })
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        {props.checked === "indeterminate" ? (
          <IndeterminateIcon />
        ) : (
          <YesIcon />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
