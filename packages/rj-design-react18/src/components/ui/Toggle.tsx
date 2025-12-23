"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 text-sm font-medium hover:bg-muted hover:text-text disabled:pointer-events-none disabled:text-disabled data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
        primary: 'text-secondary data-[state=on]:text-text data-[state=on]:bg-primary disabled:data-[state=on]:bg-primary-disabled hover:text-secondary hover:bg-fill-light-hover-bg rounded-md'
      },
      size: {
        sm: "[&:not(:has(svg))]:text-[12px] [&:not(:has(svg))]:leading-[20px] [&:not(:has(svg))]:px-2 [&_svg:not([class*='size-'])]:size-3 [&:has(svg)]:p-[6px] [&:has(svg)]:w-6 [&:has(svg)]:h-5",
        md: "[&:not(:has(svg))]:text-[13px] [&:not(:has(svg))]:leading-[22px] [&:not(:has(svg))]:px-4 [&:not(:has(svg))]:py-[1px] [&_svg:not([class*='size-'])]:size-4 [&:has(svg)]:p-2 [&:has(svg)]:w-8 [&:has(svg)]:h-6",
        lg: "[&:not(:has(svg))]:text-[15px] [&:not(:has(svg))]:leading-[26px] [&:not(:has(svg))]:px-4 [&:not(:has(svg))]:py-[1px] [&_svg:not([class*='size-'])]:size-5 [&:has(svg)]:p-2.5 [&:has(svg)]:w-10 [&:has(svg)]:h-7",
      },

    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
)

function Toggle({
  variant,
  size,
  className,
  children,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </TogglePrimitive.Root>
  )
}

export { Toggle, toggleVariants }
