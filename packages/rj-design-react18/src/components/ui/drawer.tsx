import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Button } from "./button"
import { InfoCirecledIcon } from "../icon/infoCirecledIcon"

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

const drawerContentVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: 'border-none bg-card',
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


function DrawerContent({
  className,
  children,
  variant,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>
  & VariantProps<typeof drawerContentVariants>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-0 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className,
          drawerContentVariants({ variant })
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

const drawerHeaderVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "border-b border-solid border-border-split",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


function DrawerHeader({
  className,
  variant,
  ...props }: React.ComponentProps<"div">
  & VariantProps<typeof drawerHeaderVariants>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className,
        drawerHeaderVariants({ variant })
      )}
      {...props}
    />
  )
}

const drawerFootVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "flex-row justify-end border-t border-solid border-border-split",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function DrawerFooter({
  className,
  variant,
  ...props }: React.ComponentProps<"div">
  & VariantProps<typeof drawerFootVariants>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className,
        drawerFootVariants({ variant })
      )}
      {...props}
    />
  )
}

const drawerTitleVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "flex flex-row items-center justify-between text-[17px] leading-[24px] font-normal not-italic text-text-deep",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function DrawerTitle({
  className,
  showClose = false,
  variant,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>
  & VariantProps<typeof drawerTitleVariants>
  & { showClose?: boolean }) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className,
        drawerTitleVariants({ variant })
      )}
      {...props}
    >
      {props.children}
      {
        showClose && (
          <DrawerClose className="absolute right-4 top-6">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.99999 6.14899L8.84486 9.99386L9.99391 8.84482L6.14903 4.99994L9.99391 1.15506L8.84486 0.00601474L4.99999 3.85089L1.15508 0.00598145L0.00602722 1.15503L3.85094 4.99994L0.00602722 8.84485L1.15508 9.9939L4.99999 6.14899Z" fill="white" />
            </svg>
          </DrawerClose>
        )
      }
    </DrawerPrimitive.Title>
  )
}

const drawerrDescriptionVariants = cva(
  "flex flex-row items-center justify-between px-4 py-2 rounded-lg text-[13px] leading-[20px] text-text-deep font-normal not-italic",
  {
    variants: {
      variant: {
        primary: "bg-cyan-400-20",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

function DrawerDescription({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>
  & VariantProps<typeof drawerrDescriptionVariants>) {
  const [show, setShow] = React.useState<boolean>(true)
  return (
    show && <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className,
        drawerrDescriptionVariants({ variant })
      )}
      {...props}
    >
      {
        variant === "primary" &&
        <div className="flex flex-row items-center gap-1">
          <InfoCirecledIcon />
          {props.children}</div>}
      <Button variant="ghost" size={"link"} onClick={() => setShow(false)}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM10.046 4.71554L7.7615 7.00004L10.046 9.28454L9.2845 10.046L7 7.76154L4.7155 10.046L3.954 9.28454L6.2385 7.00004L3.954 4.71554L4.7155 3.95405L7 6.23854L9.2845 3.95405L10.046 4.71554Z" fill="#97A7B5" />
        </svg>
      </Button>
    </DrawerPrimitive.Description>
  )
}

const drawerDetailsVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "p-4",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function DrawerDetails({
  className,
  variant,
  ...props }: React.ComponentProps<"div">
  & VariantProps<typeof drawerDetailsVariants>) {
  return (
    <div
      data-slot="drawer-details"
      className={cn(
        className,
        drawerDetailsVariants({ variant })
      )}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerDetails
}
