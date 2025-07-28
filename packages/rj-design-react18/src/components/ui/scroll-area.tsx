import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const scrollAreaVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: '[&_[data-slot=scroll-area-thumb]]:bg-scroll',
      },
      vertical: {
        left: '[&_[data-slot=scroll-area-scrollbar]]:left-0',
        right: '[&_[data-slot=scroll-area-scrollbar]]:right-0'
      },
      horizontal: {
        top: '[&_[data-slot=scroll-area-scrollbar]]:top-0',
        bottom: '[&_[data-slot=scroll-area-scrollbar]]:bottom-0'
      }
    },
    defaultVariants: {
      variant: 'default',
      vertical: 'left',
      horizontal: 'top'
    },
  }
)

function ScrollArea({
  className,
  variant,
  vertical,
  horizontal,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root> & VariantProps<typeof scrollAreaVariants>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className,
        scrollAreaVariants({ variant, vertical, horizontal })
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
