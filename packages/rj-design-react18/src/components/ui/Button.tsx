/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center font-normal justify-center whitespace-nowrap transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        primary: 'bg-primary text-text text-center hover:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled',
        // default:
        //   "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
        default: 'bg-fill text-text-deep hover:bg-fill-light-hover-bg active:bg-fill-dark-hover-active-disabled disabled:bg-fill-dark-hover-active-disabled disabled:text-disabled',
        //     secondary:
        // "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        secondary: 'border border-primary text-primary hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active disabled:border-primary-disabled disabled:text-primary-disabled',
        'secondary-text': 'text-primary hover:bg-fill-light-hover-bg hover:text-primary-hover active:bg-fill-dark-hover-active-disabled active:text-primary-active disabled:text-primary-disabled',
        text: 'text-secondary hover:bg-fill-light-hover-bg active:bg-fill-dark-hover-active-disabled disabled:text-disabled',
        // destructive:
        //   "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        destructive: 'bg-danger text-text-deep text-center hover:bg-danger-hover active:bg-danger-active disabled:text-disabled disabled:bg-danger-disabled',
        'secondary-destructive': 'bg-danger-light text-danger hover:bg-danger-special active:bg-danger-light active:text-danger-active disabled:text-danger-disabled disabled:bg-danger-light',
        dashed: 'outline outline-dashed outline-1 outline-offset-[-1px] outline-border-special text-secondary hover:outline-primary-hover hover:text-primary-hover active:outline-primary-active active:text-primary-active disabled:text-disabled',
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        ghost:
          "hover:bg-accent",
        link: "text-primary hover:text-primary-hover active:text-primary-active disabled:text-primary-disabled",
        page: 'bg-card text-secondary border border-border-split active:bg-background hover:bg-fill-dark-hover-active-disabled disabled:text-border disabled:bg-border-disabled',
        'page-active': 'bg-card text-primary outline-1 outline-solid outline-offset-[-1px] outline-primary',
        icon: 'text-secondary bg-transparent hover:bg-fill-light-hover-bg active:bg-fill-dark-hover-active-disabled disabled:text-disabled',
        'hover-icon': 'text-secondary bg-fill hover:bg-fill-light-hover-bg active:bg-fill-dark-hover-active-disabled disabled:text-disabled disabled:bg-border-disabled',
        day: 'bg-transparent text-secondary',
        number: 'bg-third-background text-secondary-information active:bg-background hover:bg-fill-emphasize',
        transparent: 'bg-transparent',
        collapsible: 'bg-transparent hover:bg-fill-light-hover-bg',
        toggle: 'bg-transparent text-secondary hover:bg-fill-light-hover-bg hover:text-secondary-information',
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-6 px-2 py-1 rounded-sm text-[11px] leading-[16px] gap-1 [&_svg:not([class*='size-'])]:size-3",
        md: "h-8 px-3 py-1 rounded-md text-[13px] leading-[20px] gap-1 [&_svg:not([class*='size-'])]:size-4",
        lg: "h-10 px-4 py-2 rounded-md text-[15px] leading-[22px] gap-2 [&_svg:not([class*='size-'])]:size-5",
        icon: "size-9",
        'page-sm': "size-6 rounded-sm text-[11px] leading-[16px]",
        'page-md': "size-8 rounded-md",
        link: "",
        'sm-icon': 'p-1.5 rounded-sm [&_svg:not([class*=\'size-\'])]:size-3',
        "md-icon": 'p-2 rounded-md [&_svg:not([class*=\'size-\'])]:size-4',
        "lg-icon": 'p-2.5 rounded-md [&_svg:not([class*=\'size-\'])]:size-5',
        'sm-link': 'text-[11px] leading-[16px] gap-1',
        'md-link': 'text-[13px] leading-[20px] gap-2',
        'lg-link': 'text-[15px] leading-[22px] gap-2',
        day: 'size-4'
      },
    },
    defaultVariants: {
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
