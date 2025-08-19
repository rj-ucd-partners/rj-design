"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
        primary: 'bg-secondary-background'
      },
      size: {
        // default: "h-9 px-2 min-w-9",
        sm: "p-0.5",
        md: "p-1",
        lg: "p-1",
      },
      direction: {
        left: 'rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg',
        center: 'rounded-none',
        right: 'rounded-tr-lg rounded-tl-none rounded-bl-none rounded-br-lg'
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  direction,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, direction, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
