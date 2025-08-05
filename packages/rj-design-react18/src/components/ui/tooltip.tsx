import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}



function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}


const tooltipContentVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'bg-text text-text-deep',
        primary: 'bg-primary text-text',
        custom: 'bg-primary-disabled text-text-deep'
      },
      arrow: {
        default: 'bg-text fill-text',
        primary: 'bg-primary fill-primary',
        custom: 'bg-primary-disabled fill-primary-disabled'
      }
    },
    defaultVariants: {
    },
  })

function TooltipContent({
  className,
  variant,
  arrow,
  sideOffset = 0,
  alignOffset = 0,
  children,
  side = "right",
  align = "start",
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & VariantProps<typeof tooltipContentVariants>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        align={align}
        side={side}
        className={cn(
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md text-[13px] leading-[20px] font-normal px-3 py-3",
          className,
          tooltipContentVariants({ variant })
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow
          className={cn("bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
            tooltipContentVariants({ arrow }))} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
