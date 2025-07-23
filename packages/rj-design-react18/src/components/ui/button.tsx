import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-[PingFang_SC] font-normal text-center",
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled',
        default: 'bg-fill text-text hover:bg-fill-light-hover-bg active:bg-fill-dark-hover-active-disabled disabled:bg-fill-dark-hover-active-disabled disabled:text-disabled',
        secondary: 'border border-primary text-primary hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active disabled:border-primary-disabled disabled:text-primary-disabled',
        'secondary-text': 'text-primary hover:bg-fill-light-hover-bg hover:text-primary-hover active:bg-fill-dark-hover-active-disabled active:text-primary-active disabled:text-primary-disabled',
        link: 'text-primary hover:text-primary-hover active:text-primary-active disabled:text-primary-disabled',
        text: 'text-secondary hover:bg-fill-light-hover-bg active:bg-fill-dark-hover-active-disabled disabled:text-disabled',
        destructive: 'bg-danger text-text hover:bg-danger-hover active:bg-danger-active disabled:text-disabled disabled:bg-danger-disabled',
        'secondary-destructive': 'bg-danger-light text-danger hover:bg-danger-special active:bg-danger-light active:text-danger-active disabled:text-light disabled:bg-danger-disabled',
        dashed: 'outline outline-dashed outline-1 outline-offset-[-1px] outline-border-special text-secondary hover:outline-primary-hover hover:text-primary-hover active:outline-primary-active active:text-primary-active disabled:text-disabled'
      },
      size: {
        "borderless-sm": "text-xs leading-none",
        "borderless-md": "text-xs leading-tight",
        "borderless-lg": "text-base leading-snug",
        sm: 'h-6 rounded-sm px-2 py-1 text-xs leading-none has-[>svg]:py-0.5 has-[>svg]:gap-1',
        md: 'h-8 rounded-md px-3 py-1 text-xs leading-tight has-[>svg]:gap-1',
        lg: 'h-10 rounded-md px-4 py-2 text-base leading-snug has-[>svg]:gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  disabled = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean,
    disabled?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      disabled={disabled}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
