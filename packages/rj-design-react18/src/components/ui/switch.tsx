import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const switchRootVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: '',
        primary: 'data-[state=checked]:bg-primary data-[state=unchecked]:bg-fill-emphasize data-[state=checked]:disabled:bg-fill-dark-hover-active-disabled'
      },
      size: {
        sm: 'w-7 h-4 rounded-md',
        md: 'w-9 h-5 rounded-lg',
        lg: 'w-11 h-6 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const switchThumbVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: '',
        primary: 'data-[state=unchecked]:bg-card data-[state=checked]:bg-card'
      },
      size: {
        sm: 'w-3 h-3 rounded-sm',
        md: 'w-4 h-4 rounded-md',
        lg: 'w-5 h-5 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

function Switch({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & VariantProps<typeof switchRootVariants>) {
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
          "pointer-events-none block transition-transform data-[state=checked]:translate-x-[calc(100%)] data-[state=unchecked]:translate-x-1",
          switchThumbVariants({ variant, size })
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
