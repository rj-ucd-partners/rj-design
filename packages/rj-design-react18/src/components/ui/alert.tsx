import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { CrossCircledIcon } from "@radix-ui/react-icons"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-2 text-sm grid items-start outline outline-solid outline-1 outline-offset-[-1px]",
  {
    variants: {
      variant: {
        primary: "bg-cyan-400-20 outline-primary-disabled",
        success: "bg-teal-400-20 outline-success-special",
        abnormal: "bg-amber-500-20 outline-abnormal-special",
        danger: "bg-orange-600-20 outline-danger-special"
      },
      grid: {
        title: 'grid-rows-1 grid-cols-[0_1fr]',
        icon: 'grid-rows-1 grid-cols-[auto_1fr_auto_auto] gap-x-3',
        desc: 'grid-rows-2 grid-cols-[auto_1fr] gap-x-3 gap-y-1'
      }
    },
    defaultVariants: {
      variant: "primary",
      grid: 'title'
    },
  }
)

interface AlertIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof alertVariants> { }

function Alert({
  className,
  children,
  variant,
  grid,
  close = false,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants> & {
  close?: boolean,
  toClose?: () => void,
}) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, grid }), className)}
      {...props}
    >
      {children}
      {
        close && (
          <Button
            data-slot="alert-close"
            className={cn("col-start-4 row-start-1 h-auto p-1 flex items-center justify-center")}
            size="sm"
            variant='ghost'
          >
            <CrossCircledIcon />
          </Button>
        )
      }
    </div>
  )
}

function AlertIcon({ children, className, ...props }: AlertIconProps) {
  return (
    <div
      data-slot="alert-icon"
      className={cn('shrink-0 col-start-1 row-start-1 m-auto', className)}
      {...props}
    >
      {children}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 row-start-1 line-clamp-1 min-h-4 font-medium tracking-tight flex items-center text-[13px] leading-[24px] font-normal text-text-deep",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 row-start-2 text-[13px] leading-[20px] font-normal text-secondary",
        className
      )}
      {...props}
    />
  )
}

function AlertToolbar({ children, className, ...props }: AlertIconProps) {
  return (
    <div data-slot="alert-toolbar" className={cn("col-start-3 row-start-1 flex items-center justify-end", className)} {...props}>
      {children}
    </div>
  );
}

export { Alert, AlertIcon, AlertTitle, AlertDescription, AlertToolbar }
