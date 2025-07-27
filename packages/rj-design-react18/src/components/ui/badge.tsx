import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "h-4 px-1 min-w-4 inline-flex text-xs text-center font-normal leading-tight hover:outline hover:outline-1 hover:outline-border-split w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary-light text-secondary-information hover:text-secondary  [a&]:hover:bg-primary/90 ",
        primary: 'bg-primary-light text-primary hover:bg-primary hover:text-text-deep',
        success:
          "bg-success-light text-success hover:bg-success hover:text-text-deep [a&]:hover:bg-secondary/90",
        abnormal:
          "bg-abnormal-light text-abnormal hover:bg-abnormal hover:text-text-deep [a&]:hover:bg-destructive/90",
      },
      corner: {
        default: 'rounded-sm',
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

export { Badge, badgeVariants }
