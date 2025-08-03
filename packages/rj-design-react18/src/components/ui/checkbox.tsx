import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { IndeterminateIcon } from "../icon/indeterminate"

const checkboxVariants = cva(
  "text-text-deep data-[state=indeterminate]:bg-primary dark:data-[state=indeterminate]:bg-primary data-[state=unchecked]:hover:border-primary disabled:bg-primary-disabled dark:disabled:bg-primary-disabled  disabled:data-[state=indeterminate]:bg-primary-disabled dark:disabled:data-[state=indeterminate]:bg-primary-disabled disabled:data-[state=indeterminate]:text-border-disabled dark:disabled:data-[state=indeterminate]:text-border-disabled",
  {
    variants: {
      variant: {
      },
    },
    defaultVariants: {
    },
  }
)

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>
  & VariantProps<typeof checkboxVariants>
) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed ",
        className,
        checkboxVariants({})
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        {/* <CheckIcon className="size-3.5" /> */}
        {props.checked === "indeterminate" ? (
          <IndeterminateIcon />
        ) : (
          <CheckIcon className="size-3.5 text-text-deep" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
