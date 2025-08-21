import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { CloseIcon } from "../icon/closeIcon"

const alertVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: "bg-cyan-400-20 border-primary-disabled",
        success: "bg-teal-400-20 border-[#0C6E4C]",
        abnormal: "bg-amber-500-20 border-abnormal-special",
        destructive: "bg-orange-600-20 border-danger-special"
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

function Alert({
  className,
  variant,
  show = true,
  ...props
}: React.ComponentProps<"div">
  & VariantProps<typeof alertVariants> & {
    show?: boolean | undefined,
  }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        "w-full rounded-lg border px-4 py-[9px]",
        "inline-flex flex-col items-center justify-center",
        'gap-1',
        show ? '' : 'hidden',
        alertVariants({ variant }),
        className)}
      {...props}
    />
  )
}

function AlertHeader({
  className,
  ...props }: React.ComponentProps<"div">
) {
  return (
    <div data-slot="alert-header"
      className={
        cn(
          "inline-flex flex-row w-full items-center justify-between",
          className)} {...props} />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "inline-flex flex-row items-center justify-center",
        "text-[13px] leading-[20px] font-normal not-italic text-text-deep",
        "gap-[2px]",
        className
      )}
      {...props}
    />
  )
}

function AlertClose({
  className,
  onClose,
  ...props }: React.ComponentProps<"div">
  & {
    onClose?: () => void | undefined,
  }
) {
  return (
    <div
      data-slot="alert-close"
      className={cn(
        "inline-flex flex-row items-center gap-1",
        'text-[13px] leading-[20px] font-normal not-italic',
        className
      )}
      {...props}
    >
      {props.children}
      <Button variant={'transparent'} size={'link'} onClick={onClose}>
        <CloseIcon className="size-4" color="#97A7B5" />
      </Button>
    </div>
  )
}

const alertDescriptionVariants = cva(
  "",
  {
    variants: {
      layout: {
        default: "",
        hasIcon: "pl-5.5",
      },
    },
    defaultVariants: {
    },
  }
)


function AlertDescription({
  className,
  expand = false,
  ...props
}: React.ComponentProps<"div">
  & VariantProps<typeof alertDescriptionVariants>
  & {
    expand?: boolean,
  }
) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "inline-flex flex-col items-center justify-center",
        "text-muted-foreground text-[13px] leading-[20px] font-normal text-secondary",
        expand ? "line-clamp-none" : "line-clamp-1",
        alertDescriptionVariants({ layout: props.layout }),
        className
      )}
      {...props}
    />
  )
}

function AlertToolbar({ children, className, ...props }: React.ComponentProps<"div">
  & VariantProps<typeof alertDescriptionVariants>) {
  return (
    <div data-slot="alert-toolbar" className={cn(
      "inline-flex flex-col items-start justify-center",
      "w-full",
      "text-muted-foreground text-[13px] leading-[20px] font-normal text-secondary",
      alertDescriptionVariants({ layout: props.layout }), className)}
      {...props}>
      {children}
    </div>
  );
}

export { Alert, AlertTitle, AlertDescription, AlertToolbar, AlertHeader, AlertClose }
