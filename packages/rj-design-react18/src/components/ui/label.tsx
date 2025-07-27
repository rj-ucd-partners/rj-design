import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const labelVariants = cva(
  "",
  {
    variants: {
      variant: {
        defalt: '',
        primary: '',
        disable: 'text-disabled',
      },

    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

function Label({
  variant,
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
        labelVariants({ variant })
      )}
      {...props}
    />
  )
}

export { Label }
