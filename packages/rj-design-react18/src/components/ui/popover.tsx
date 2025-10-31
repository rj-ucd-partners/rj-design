import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

export interface PopoverProps extends PopoverPrimitive.PopoverProps, PopoverPrimitive.PopoverContentProps {
  className?: string
  variant?: 'primary'
}

export interface PopoverContentProps {
  className?: string
  variant?: 'primary'
}

const PopoverContext = React.createContext<PopoverContentProps | undefined>(undefined)
function usePopoverContext() {
  const context = React.useContext(PopoverContext)
  if (context === undefined) {
    throw new Error('useSelectContext must be used within a Select')
  }
  return context
}

const Popover = React.forwardRef<
  unknown,
  PopoverProps>(({ variant, ...props }) => {
    return <PopoverContext.Provider value={{ variant: variant }}>
      <PopoverPrimitive.Root {...props} />
    </PopoverContext.Provider>

  })

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

const PopoverAnchor = PopoverPrimitive.Anchor

const popoverArrowVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: 'fill-fill-light-hover-bg',
      }
    },
    defaultVariants: {
    },
  }
)

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, ref) => {
  const { variant } = usePopoverContext()
  return (
    <PopoverPrimitive.Arrow
      ref={ref}
      className={cn(
        popoverArrowVariants({ variant }),
        className
      )}
      {...props}
    />
  );
});
PopoverArrow.displayName = "PopoverArrow";

const popoverContentVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: 'bg-fill-light-hover-bg',
      }
    },
    defaultVariants: {
    },
  }
)


const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
  const { variant } = usePopoverContext()
  return <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
        popoverContentVariants({ variant: variant }),
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
})
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverArrow }
