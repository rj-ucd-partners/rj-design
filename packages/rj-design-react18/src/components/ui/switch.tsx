import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const switchRootVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: 'data-[state=checked]:bg-primary data-[state=unchecked]:bg-fill-emphasize disabled:data-[state=checked]:bg-primary-disabled disabled:data-[state=unchecked]:bg-fill-dark-hover-active-disabled'
      },
      size: {
        sm: 'min-w-[28px] h-4 rounded-md',
        md: 'min-w-9 h-5 rounded-lg',
        lg: 'min-w-11 h-6 rounded-lg',
      },
    },
  }
)

const switchThumbVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: 'data-[state=unchecked]:bg-card data-[state=checked]:bg-card'
      },
      size: {
        sm: 'w-3 h-3 rounded-sm',
        md: 'w-4 h-4 rounded-md',
        lg: 'w-5 h-5 rounded-md',
      },
    },
  }
)

function Switch({
  checkedDesc,
  uncheckedDesc,
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & VariantProps<typeof switchRootVariants> & {
  checkedDesc?: string,
  uncheckedDesc?: string
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex shrink-0 items-center",
        className,
        switchRootVariants({ variant, size })
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block transition-transform data-[state=checked]:translate-x-[calc(100%+2px)] data-[state=unchecked]:translate-x-[2px]",
          switchThumbVariants({ variant, size })
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
