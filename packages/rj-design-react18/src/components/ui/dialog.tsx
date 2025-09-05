import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Button } from "./button"
import { InfoCirecledIcon } from "../icon/infoCirecledIcon"
import { AbnormalIcon } from "../icon/abnormalIcon"
import { SuccessIcon } from "../icon/successIcon"
import { DestructiveIcon } from "../icon/dangerIcon"
import { CloseIcon } from "../icon/closeIcon"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close"  {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

const dialogContentVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: 'p-0 bg-card border-none gap-0',
      },
      size: {
        default: "",
        sm: "sm:max-w-[500px]",
        md: "sm:max-w-[600px]",
        lg: "sm:max-w-[1000px]",
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
)


function DialogContent({
  className,
  children,
  variant,
  size = 'sm',
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>
  & VariantProps<typeof dialogContentVariants>
  & {
    showCloseButton?: boolean
  }) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border  shadow-lg duration-200 sm:max-w-lg p-6",
          className,
          dialogContentVariants({ variant, size })
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs transition-opacity focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}


const dialogHeaderVariants = cva(
  " border-solid border-border-split p-4",
  {
    variants: {
      variant: {
        primary: '',
      },
    },
    defaultVariants: {
    },
  }
)

function DialogHeader({
  hasBorder = true,
  className,
  variant,
  ...props }: React.ComponentProps<"div">
  & VariantProps<typeof dialogHeaderVariants>
  & {
    hasDescription?: boolean,
    hasBorder?: boolean
  }
) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col text-center sm:text-left",
        hasBorder ? 'border-b' : 'border-none',
        dialogHeaderVariants({ variant }),
        className)}
      {...props}
    >
      {props.children}
    </div>
  )
}

const dialogFooterVariants = cva(
  "inline-flex py-2.5 px-4 h-14",
  {
    variants: {
      variant: {
        primary: '',
      },
    },
    defaultVariants: {
    },
  }
)


function DialogFooter({
  className,
  variant,
  ...props }: React.ComponentProps<"div">
  & VariantProps<typeof dialogFooterVariants>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
        dialogFooterVariants({ variant })
      )}
      {...props}
    />
  )
}

const dialogTitleVariants = cva(
  "gap-1 flex  flex-row",
  {
    variants: {
      variant: {
        default: '',
        primary: '',
        success: '',
        abnormal: '',
        danger: '',
      },
      size: {
        default: "font-medium font-[17px] leading-[24px] not-italic",
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function DialogTitle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>
  & VariantProps<typeof dialogTitleVariants>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={
        cn("text-lg leading-none font-semibold",
          className,
          dialogTitleVariants({ variant, size }))}
      {...props}
    >
      {
        variant === 'primary' && (<InfoCirecledIcon />)
      }
      {
        variant === 'success' && (<SuccessIcon />)
      }
      {
        variant === 'abnormal' && (<AbnormalIcon />)
      }
      {
        variant === 'danger' && (<DestructiveIcon />)
      }
      {props.children}
    </DialogPrimitive.Title>
  )
}

const dialogDetailsVariants = cva(
  "min-h-20 text-secondary-information",
  {
    variants: {
      variant: {
        default: '',
        icon: 'pl-10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function DialogDetails({
  variant,
  hasBorder = true,
  className,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof dialogDetailsVariants> & {
  hasBorder?: boolean
}) {
  return (
    <div
      data-slot="dialog-details"
      className={
        cn("p-4 min-h-40  border-border-split inline-flex items-center justify-center",
          className,
          hasBorder ? 'border-b' : 'border-none',
          dialogDetailsVariants({ variant }))}
      {...props}
    />
  )
}

const dialogDescriptionVariants = cva(
  "px-4 py-2 flex items-center justify-between",
  {
    variants: {
      variant: {
        default: '',
        primary: 'bg-primary-light',
        success: '',
        abnormal: 'bg-amber-500-10',
        danger: ''
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

function DialogDescription({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>
  & VariantProps<typeof dialogDescriptionVariants>) {

  const [show, setShow] = React.useState<boolean>(true)

  return (
    show && <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-muted-foreground text-sm",
        className,
        dialogDescriptionVariants({ variant }))}
      {...props}
    >
      <div className="flex flex-row items-center justify-center gap-0.5">
        {
          variant === 'primary' && (<InfoCirecledIcon />)
        }
        {
          variant === 'abnormal' && (<AbnormalIcon />)
        }
        {props.children}
      </div>
      <Button variant={'transparent'} size={"link"} onClick={() => setShow(false)}>
        <CloseIcon />
      </Button>
    </DialogPrimitive.Description>

  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogDetails
}
