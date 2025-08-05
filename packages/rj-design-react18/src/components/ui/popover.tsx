import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

const popoverContentVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'bg-fill-light-hover-bg text-text',
      },
      arrow: {
        default: 'bg-fill-light-hover-bg fill-fill-light-hover-bg',
      }
    },
    defaultVariants: {
    },
  })

function PopoverContent({
  className,
  variant,
  arrow,
  side = "left",
  align = "center",
  sideOffset = 0,
  alignOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>
  & VariantProps<typeof popoverContentVariants>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        side={side}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden grid grid-cols-[auto_1fr_auto] gap-x-2 gap-y-2",
          className,
          popoverContentVariants({ variant })
        )}
        {...props}
      >
        {children}
        <PopoverPrimitive.Arrow className={cn("bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
          popoverContentVariants({ arrow }))} />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

interface PopoverCustomProps
  extends React.HTMLAttributes<HTMLDivElement> {
  grid?: 'default' | 'icon'
}

//自定义的Content 用来定位
//前置图标
function PopoverIcon({
  children,
  className,
  ...props
}: PopoverCustomProps) {
  return (
    <div
      data-slot="popover-icon"
      className={cn('col-start-1 row-start-1 inline-flex items-center justify-center', className)}
      {...props}
    >
      {children}
    </div>
  );
}
//标题
function PopoverTitle({
  children,
  className,
  ...props
}: PopoverCustomProps) {
  return (
    <div
      data-slot="popover-title"
      className={cn('col-start-2 row-start-1 inline-flex items-center justify-start text-text-deep text-[15px] leading-[22px] font-normal', className)}
      {...props}
    >
      {children}
    </div>
  );
}

//关闭
function PopoverClose({
  children,
  className,
  ...props
}: PopoverCustomProps) {
  return (
    <div
      data-slot="popover-close"
      className={cn('col-start-3 row-start-1 inline-flex items-center justify-end', className)}
      {...props}
    >
      {children}
    </div>
  );
}

const popoverDescVariants = cva(
  '',
  {
    variants: {
      grid: {
        default: 'col-start-2 row-start-2',
        icon: 'col-span-3 row-start-2',
      },

    },
    defaultVariants: {
    },
  })


//关闭
function PopoverDesc({
  children,
  className,
  grid = 'default',
  ...props
}: PopoverCustomProps) {
  return (
    <div
      data-slot="popover-desc"
      className={cn('inline-flex items-center justify-start text-secondary', className, popoverDescVariants({ grid }))}
      {...props}
    >
      {children}
    </div>
  );
}


//工具栏
function PopoverToolbar({
  children,
  className,
  ...props
}: PopoverCustomProps) {
  return (
    <div
      data-slot="popover-toolbar"
      className={cn('col-span-3 row-start-3 inline-flex items-center justify-end', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverIcon,
  PopoverTitle,
  PopoverClose,
  PopoverDesc,
  PopoverToolbar
}
