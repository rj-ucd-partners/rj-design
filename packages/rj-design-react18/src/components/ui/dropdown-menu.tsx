import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const dropdownVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: '',
        primary: '',
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root> & VariantProps<typeof dropdownVariants>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

const dropdownPortalVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: '',
        primary: '',
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal> & VariantProps<typeof dropdownVariants>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

const dropdownContentVariants = cva(
  "bg-secondary-background p-2 rounded-lg shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)] outline outline-[0.50px] outline-offset-[-0.50px] outline-solid outline-border",
  {
    variants: {
      variant: {
        default: '',
        page: 'bg-card'
      },
      itemVariant: {
        default: ''
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function DropdownMenuContent({
  className,
  variant,
  itemVariant,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> & VariantProps<typeof dropdownContentVariants>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className,
          dropdownContentVariants({ variant, itemVariant })
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

const dropdownMenuItemVariants = cva(
  "text-[13px] font-normal",
  {
    variants: {
      hasSeparator: {
        default: 'px-2 py-1 h-7 focus:bg-fill-light-hover-bg leading-[20px] active:bg-fill-dark-hover-active-disabled data-[state=open]:bg-fill-light-hover-bg',
        separator: 'px-0 py-0 focus:bg-transparent focus:text-accent-transparent [&_[data-slot=dropdown-menu-item-core]]:h-7 [&_[data-slot=dropdown-menu-item-core]]:hover:bg-fill-light-hover-bg [&_[data-slot=dropdown-menu-item-core]]:active:bg-fill-dark-hover-active-disabled [&_[data-slot=dropdown-menu-item-core]]:data-[state=open]:bg-fill-light-hover-bg'
      },
      status: {
        default: 'text-text hover:text-text focus:text-text data-[disabled]:text-disabled',
        success: 'text-success hover:text-success focus:text-success data-[disabled]:text-success-disabled',
        danger: 'text-danger hover:text-danger focus:text-danger data-[disabled]:text-danger-disabled',
        abnormal: 'text-abnormal hover:text-abnormal focus:text-abnormal data-[disabled]:text-abnormal-disabled',
        page: 'text-text-deep hover:text-text-deep focus:text-text-deep data-[disabled]:text-disabled',
      }
    },
    defaultVariants: {
      status: "default"
    },
  }
)

function DropdownMenuItem({
  className,
  children,
  inset,
  variant = "default",
  hasSeparator = 'default',
  status,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item>
  & VariantProps<typeof dropdownMenuItemVariants>
  & {
    inset?: boolean
    variant?: "default" | "destructive"
  }
  & {
    hasSeparator?: 'default' | 'separator'
  }
) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
        dropdownMenuItemVariants({ hasSeparator, status }),
      )}
      {...props}
    >
      {hasSeparator === 'separator' ?
        <div className="flex flex-col w-full justify-start items-start gap-0.5">
          <div data-slot="dropdown-menu-item-core" className="relative flex w-full cursor-default items-center px-2 py-1 rounded-sm">
            {children}
          </div>
          <div className="self-stretch px-2 py-0.5 flex flex-col justify-start items-start">
            <div className="self-stretch h-px bg-border" />
          </div>
        </div>
        : children}
    </DropdownMenuPrimitive.Item>
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

const dropdownMenuLabelVariants = cva(
  "text-secondary-information px-2 py-1 text-[12px] leading-[20px]",
  {
    variants: {
    },
    defaultVariants: {
    },
  }
)

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label>
  & VariantProps<typeof dropdownMenuLabelVariants>
  & {
    inset?: boolean
  }) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className,
        dropdownMenuLabelVariants({})
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  hasSeparator = 'default',
  status = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>
  & VariantProps<typeof dropdownMenuItemVariants>
  & {
    inset?: boolean
  }) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className,
        dropdownMenuItemVariants({ hasSeparator, status })
      )}
      {...props}
    >
      {/* {children}
      <ChevronRightIcon className="ml-auto size-4" /> */}

      {hasSeparator === 'separator' ?
        <div className="flex flex-col w-full justify-start items-start gap-0.5">
          <div data-slot="dropdown-menu-item-core" className="relative flex w-full cursor-default items-center px-2 py-1 rounded-sm">
            {children}
            <ChevronRightIcon className="ml-auto size-4" />
          </div>
          <div className="self-stretch px-2 py-0.5 flex flex-col justify-start items-start">
            <div className="self-stretch h-px bg-border" />
          </div>
        </div>
        : <div className="flex flex-row flex-1">
          {children}
          <ChevronRightIcon className="ml-auto size-4" />
        </div>}
    </DropdownMenuPrimitive.SubTrigger>
  )
}

const dropdownMenuSubContentVariants = cva(
  "bg-secondary-background p-1.5 rounded-lg shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)] outline outline-[0.50px] outline-offset-[-0.50px] outline-solid outline-border",
  {
    variants: {
    },
    defaultVariants: {
    },
  }
)

function DropdownMenuSubContent({
  className,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>
  & VariantProps<typeof dropdownMenuSubContentVariants>
) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      sideOffset={sideOffset}
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className,
        dropdownMenuSubContentVariants({})
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
