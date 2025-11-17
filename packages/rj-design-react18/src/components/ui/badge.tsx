import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "px-1 min-w-4 text-[13px] leading-[20px] text-center font-normal leading-tight hover:outline hover:outline-1 hover:outline-border-split w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary-light text-secondary-information hover:text-secondary",
        'primary-light': 'bg-primary-light text-primary',
        'primary-heary': 'bg-primary text-text border border-border-split',
        'success-light': "bg-success-light text-success",
        'success-heary': "bg-success text-text border border-border-split",
        'abnormal-light': "bg-warning-light text-abnormal",
        'abnormal-heary': 'bg-abnormal text-text border border-border-split'
      },
      corner: {
        default: 'rounded-[2px]',
        rounded: 'rounded-[30px]',
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  corner,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, corner }), className)}
      {...props}
    />
  )
}
const badgeDotVariants = cva(
  "size-1.5 rounded-full",
  {
    variants: {
      variant: {
        destructive: "bg-danger",
        down: 'bg-fill',
        primary: 'bg-primary-light',
        success: "bg-success",
        abnormal: "bg-abnormal-light",
        purple: 'bg-data-8',
        warning: 'bg-warning',
        alarm: 'bg-[#E69800]',
        online: 'bg-[#6D9CC1]',
        'secondary-danger': 'bg-danger-hover',
        main: 'bg-data-2',
        secondary: 'bg-data-3',
        blueness: 'bg-primary',
        rose: 'bg-data-9',
        green: 'bg-data-4',
        offline: 'bg-disabled',
        blue: 'bg-[#1162FF]'
      },
    },
    defaultVariants: {
    },
  }
)


function BadgeDot({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeDotVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeDotVariants({ variant }),
        className)}
      {...props}
    />
  )
}

export { Badge, BadgeDot }
