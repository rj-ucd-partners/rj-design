import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, Circle } from "lucide-react"
import { TriangleRightIcon } from "../icon/triangle-right-icon"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
export interface DropdownMenuVariantsProps {
  variant?: 'primary',
}
const DropdownMenuContext = React.createContext<DropdownMenuVariantsProps | undefined>(undefined)
function useSelectContext() {
  const context = React.useContext(DropdownMenuContext)
  if (context === undefined) {
    throw new Error('useSelectContext must be used within a Select')
  }
  return context
}
const dropdownMenuContentVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: [
          "bg-secondary-background border-border-line",
          "text-text-deep",
          "shadow-[0px_6px_16px_rgba(0,0,0,0.08)]",
          "rounded-lg",
          "p-2",
          "gap-[2px]"
        ],
      },
    }
  }
);

const dropdownMenuItemVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: [
          "active:bg-fill-dark-hover-active-disabled",
          "rounded-sm px-2 py-[3px]",
          "text-[13px] leading-[22px]",
          "data-[disabled]:text-disabled",
        ],
      },
      status: {
        primary: [
          "[&>svg]:text-secondary-information",
          "focus:data-[state=open]:bg-primary-light data-[state=open]:bg-primary-light data-[state=open]:text-primary",
        ],
        success: [
          'text-success focus:text-success data-[disabled]:text-success-disabled data-[state=open]:bg-success/10 data-[disabled]:bg-transparent'
        ],
        warning: [
          'text-abnormal focus:text-abnormal data-[disabled]:text-abnormal-disabled data-[state=open]:bg-abnormal-hover/10 data-[disabled]:bg-transparent'
        ],
        destructive: [
          "text-danger focus:text-danger data-[disabled]:text-danger-disabled data-[state=open]:bg-danger-hover/10 data-[disabled]:bg-transparent"
        ],
      }
    }
  }
);
function DropdownMenu({
  variant,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root> & DropdownMenuVariantsProps) {
  return <DropdownMenuContext.Provider value={{ variant }}>
    <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
  </DropdownMenuContext.Provider>
}
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => {
  const { variant } = useSelectContext()
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 [&>svg]:shrink-0",
        inset && "pl-8",
        // 默认样式（无variant时）
        !variant ? "focus:bg-accent data-[state=open]:bg-accent" : "focus:data-[state=open]:bg-primary-light data-[state=open]:bg-primary-light data-[state=open]:text-primary",
        dropdownMenuItemVariants({ variant }),
        className
      )}
      {...props}
    >
      {children}
      <TriangleRightIcon className="ml-auto text-secondary size-2" />
    </DropdownMenuPrimitive.SubTrigger>
  )
})
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  const { variant } = useSelectContext()
  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        dropdownMenuContentVariants({ variant }),
        className
      )}
      {...props}
    />
  )
}
)
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  const { variant } = useSelectContext();
  return (

    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
          dropdownMenuContentVariants({ variant }),
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
})
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName


const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean,
    status?: 'primary' | 'success' | 'warning' | 'destructive'
  }
>(({ className, inset, ...props }, ref) => {
  const { variant } = useSelectContext()
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
        inset && "pl-8",
        variant && "focus:bg-fill-light-hover-bg",
        dropdownMenuItemVariants({ variant, status: props.status }),
        className
      )}
      {...props}
    />
  )
})
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const dropdownMenuLabelVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: [
          "text-secondary-information",
          "text-[12px] leading-[20px] font-normal",
          "px-2 py-[3px]"
        ],
      },
    }
  }
);

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => {
  const { variant } = useSelectContext()
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        dropdownMenuLabelVariants({ variant }),
        className
      )}
      {...props}
    />
  )
})
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const dropdownMenuSeparatorVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: [
          "bg-border",
        ],
      },
    }
  }
);

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { variant } = useSelectContext()
  return (<DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("mx-2 my-1 h-px bg-muted",
      dropdownMenuSeparatorVariants({ variant }),
      className)}
    {...props}
  />
  )
})
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
