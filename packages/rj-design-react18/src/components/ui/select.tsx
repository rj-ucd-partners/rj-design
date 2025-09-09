import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { BaseNode } from "@/common/type"
import { useCallback, useState } from "react"
import { TriangleDownIcon } from "../icon/TriangleDownIcon"
import { Button } from "./button"
import { Empty } from "./empty"


function SelectRoot({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props}>

  </SelectPrimitive.Value>
}

function SelectIcon({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Icon>) {
  return <SelectPrimitive.Icon data-slot="select-icon" {...props}>
  </SelectPrimitive.Icon>
}

// const selectTriggerVariants = cva(
//   "tracking-wider focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] data-[state=open]:outline data-[state=open]:outline-1 [&_[data-slot=select-value]]:font-normal [&_[data-slot=select-value]]:font-['PingFang_SC'] data-[state=open]:outline-offset-[-1px] [&_[data-slot=select-item]]:transition-transform [&_svg]:duration-200 data-[state=open]:[&_[data-slot=tran-icon]]:rotate-180",
//   {
//     variants: {
//       variant: {
//         default: 'bg-third-background data-[placeholder]:text-secondary-information hover:bg-fill-light-hover-bg disabled:bg-fill-dark-hover-active-disabled disabled:text-disabled focus-visible:outline-primary data-[state=open]:outline-primary',
//       },
//       size: {
//         sm: 'rounded-sm w-60 pl-2 pr-6.5 py-0.5 [&_[data-slot=select-value]]:h-5 [&_[data-slot=select-value]]:text-xs [&_[data-slot=select-value]]:leading-tight',
//         md: 'rounded-md w-80 pl-2 pr-6.5 py-[5px] [&_[data-slot=select-value]]:h-5 [&_[data-slot=select-value]]:text-xs [&_[data-slot=select-value]]:leading-tight',
//         lg: 'rounded-md w-80 px-2 pr-7.5 py-2 [&_[data-slot=select-value]]:h-6 [&_[data-slot=select-value]]:text-base [&_[data-slot=select-value]]:leading-snug',
//         dropdown: 'w-20 px-2 py-[5px] rounded-md'
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'md',
//     },
//   }
// )

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex w-full items-center justify-between whitespace-nowrap bg-transparent data-[placeholder]:text-secondary-information disabled:cursor-not-allowed [&>span]:line-clamp-1",
        className,
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.Trigger>
  )
}

// const selectContentVariants = cva(
//   'inline-flex [&_[data-slot=select-item]]:self-stretch shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)] gap-0.5',
//   {
//     variants: {
//       variant: {
//         default: 'bg-secondary-background text-text-deep [&_[data-slot=select-item]]:focus:bg-fill-light-hover-bg',
//       },
//       size: {
//         sm: '[&_[data-slot=select-item]]:rounded-sm [&_[data-slot=select-item]]:text-[12px] [&_[data-slot=select-item]]:leading-[20px] [&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-px [&_[data-slot=select-item]]:h-4.5 [&_[data-slot=select-item]]:tracking-wider',
//         md: '[&_[data-slot=select-item]]:rounded-md [&_[data-slot=select-item]]:text-xs [&_[data-slot=select-item]]:leading-tight [&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[3px] [&_[data-slot=select-item]]:h-6.5 [&_[data-slot=select-item]]:tracking-wider',
//         lg: '[&_[data-slot=select-item]]:rounded-md [&_[data-slot=select-item]]:text-base [&_[data-slot=select-item]]:leading-snug [&_[data-slot=select-item]]:px-3 [&_[data-slot=select-item]]:py-1.5 [&_[data-slot=select-item]]:h-8.5',
//       }
//     },
//     defaultVariants: {
//       variant: 'default',
//     },
//   }
// )

function SelectContent({
  size,
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & {
  size: "sm" | "md" | "lg";
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'rounded-md',
          'text-text-deep',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
          position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-slot="select-view-port"
          className={cn(
            'bg-secondary-background flex gap-0.5 flex-col',
            size === "sm" && [
              'p-1',
              '[&_[data-slot=select-item]]:text-[12px] [&_[data-slot=select-item]]:leading-[20px] [&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[2px]',
            ],
            size === "md" && [
              'p-2',
              '[&_[data-slot=select-item]]:text-[13px] [&_[data-slot=select-item]]:leading-[20px] [&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[3px]',
            ],
            size === "lg" && [
              'p-3',
              '[&_[data-slot=select-item]]:text-[15px] [&_[data-slot=select-item]]:leading-[22px] [&_[data-slot=select-item]]:px-3 [&_[data-slot=select-item]]:py-[6px]',
            ],
            position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
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
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
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
        "relative flex w-full cursor-default select-none items-center outline-none focus:bg-fill-light-hover-bg focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:text-disabled active:bg-fill-dark-hover-active-disabled",
        'rounded-md',
        'data-[state=checked]:text-primary data-[state=checked]:bg-primary-light data-[state=checked]:[&_svg]:text-primary',
        className
      )}
      {...props}
    >
      {/* <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span> */}
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
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
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


const selectVariants = cva(
  "",
  {
    variants: {
      size: {
        sm: [
          '[&_[data-slot=select-trigger]]:py-0.5 px-2',
          '[&_[data-slot=select-value]]:text-[12px] [&_[data-slot=select-value]]:leading-[20px]',
        ],
        md: [
          '[&_[data-slot=select-trigger]]:py-[5px] px-2',
          '[&_[data-slot=select-value]]:text-[12px] [&_[data-slot=select-value]]:leading-[22px]',],
        lg: [
          '[&_[data-slot=select-trigger]]:py-2 px-3',
          '[&_[data-slot=select-value]]:text-[15px] [&_[data-slot=select-value]]:leading-[22px]',
        ]
      }
    }
  }
);

function Select({
  placeholder = '请选择',
  disabled = false,
  size = 'md',
  datasource,
  value,
  onValueChange,
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof selectVariants> & {
  placeholder?: string,
  datasource?: BaseNode[],
  disabled?: boolean,
  value?: string,
  onValueChange?: (value: string) => void,
}) {
  const [open, setOpen] = useState(false);
  const onOpenChange = useCallback((state: boolean) => {
    setOpen(state)
  }, [])

  return (
    <div className={cn(
      'rounded-md',
      disabled ? 'bg-fill-dark-hover-active-disabled text-disabled' :
        ['bg-third-background hover:bg-fill-light-hover-bg  hover:outline outline-primary',
          open && 'outline'
        ],
      selectVariants({ size }),
      className
    )} {...props}>
      <SelectRoot open={open} onOpenChange={onOpenChange} disabled={disabled} value={value} onValueChange={onValueChange}>
        <div className="flex flex-row items-center gap-1">
          <SelectTrigger>
            <SelectValue placeholder={placeholder ?? '请选择'} />
          </SelectTrigger>
          <Button variant={'transparent'} size={'link'} onClick={() => { onOpenChange(!open) }} >
            <TriangleDownIcon className={cn(
              "size-2 text-secondary-informatio transition-transform duration-200",
              open && "rotate-180"
            )} />
          </Button>
        </div>
        <SelectContent size={size ?? 'sm'} >
          {
            datasource?.map(item => {
              return (<SelectItem value={item.key} disabled={item.disabled}>{item.label}</SelectItem>)
            })
          }{
            (!datasource || datasource.length === 0) &&
            <Empty size={'md'} />
          }
        </SelectContent>
      </SelectRoot>
    </div>
  );
}

export {
  Select,
  SelectRoot,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectIcon
}
