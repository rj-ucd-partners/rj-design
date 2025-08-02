import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { FavoriteIcon } from "../icon/FavoriteIcon"
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} onValueChange={() => {
    console.log("值改变")
  }} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}
const selectTriggerVariants = cva(
  "tracking-wider focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] data-[state=open]:outline data-[state=open]:outline-1 [&_[data-slot=select-value]]:font-normal [&_[data-slot=select-value]]:font-['PingFang_SC'] data-[state=open]:outline-offset-[-1px] [&_[data-slot=select-item]]:transition-transform [&_svg]:duration-200 data-[state=open]:[&_[data-slot=select-item]]:rotate-180",
  {
    variants: {
      variant: {
        default: 'bg-third-background data-[placeholder]:text-secondary-information hover:bg-fill-light-hover-bg disabled:bg-fill-dark-hover-active-disabled disabled:text-disabled focus-visible:outline-primary data-[state=open]:outline-primary',
      },
      size: {
        sm: 'rounded-sm w-60 px-2 py-0.5 [&_[data-slot=select-value]]:h-5 [&_[data-slot=select-value]]:text-xs [&_[data-slot=select-value]]:leading-tight',
        md: 'rounded-md w-80 px-2 py-[5px] [&_[data-slot=select-value]]:h-5 [&_[data-slot=select-value]]:text-xs [&_[data-slot=select-value]]:leading-tight',
        lg: 'rounded-md w-80 px-3 py-2 [&_[data-slot=select-value]]:h-6 [&_[data-slot=select-value]]:text-base [&_[data-slot=select-value]]:leading-snug',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

function SelectTrigger({
  className,
  front = false,
  frontIcon,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & VariantProps<typeof selectTriggerVariants> & {
  front?: boolean
  frontIcon?: React.ReactNode
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "inline-flex w-full max-w-full items-center justify-between whitespace-nowrap transition-[color,box-shadow] [&_svg]:pointer-events-none gap-2 *:data-[slot=select-value]:flex",
        className,
        selectTriggerVariants({ variant, size })
      )}
      {...props}
    >
      <div className="flex gap-2 min-w-0 flex-1 items-center">
        {(!front) ? null : frontIcon ? (
          <SelectPrimitive.Icon asChild>
            {frontIcon}
          </SelectPrimitive.Icon>
        ) : (
          <SelectPrimitive.Icon asChild>
            <FavoriteIcon size={size ?? 'md'} />
          </SelectPrimitive.Icon>
        )}
        <div className="line-clamp-1 min-w-0 flex-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center">
          {children}
        </div>
      </div>
      <TriangleDownIcon data-slot="tran-icon" />
    </SelectPrimitive.Trigger>
  )
}

const selectContentVariants = cva(
  'inline-flex [&_[data-slot=select-item]]:self-stretch shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)] gap-0.5',
  {
    variants: {
      variant: {
        default: 'bg-secondary-background text-text [&_[data-slot=select-item]]:focus:bg-primary-light [&_[data-slot=select-item]]:focus:text-primary',
      },
      size: {
        sm: '[&_[data-slot=select-item]]:rounded-sm [&_[data-slot=select-item]]:text-xs [&_[data-slot=select-item]]:leading-tight [&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-px [&_[data-slot=select-item]]:h-4.5 [&_[data-slot=select-item]]:tracking-wider',
        md: '[&_[data-slot=select-item]]:rounded-md [&_[data-slot=select-item]]:text-xs [&_[data-slot=select-item]]:leading-tight [&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[3px] [&_[data-slot=select-item]]:h-5.5 [&_[data-slot=select-item]]:tracking-wider',
        lg: '[&_[data-slot=select-item]]:rounded-md [&_[data-slot=select-item]]:text-base [&_[data-slot=select-item]]:leading-snug [&_[data-slot=select-item]]:px-3 [&_[data-slot=select-item]]:py-1.5 [&_[data-slot=select-item]]:h-8.5',
      }
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)
const paddingSizeRecord: Record<string, string> = {
  'sm': 'p-1',
  'md': 'p-2',
  'lg': 'p-3',
}
function SelectContent({
  className,
  children,
  variant,
  size,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> &
  VariantProps<typeof selectContentVariants>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
          "data-[side=bottom]:translate-y-0 data-[side=left]:-translate-x-0 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
          selectContentVariants({ variant, size })
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            paddingSizeRecord[size ?? 'md'],
            position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
