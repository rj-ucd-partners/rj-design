import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const progressVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'bg-third-background',
        primary: 'bg-third-background',
        destructive: 'bg-third-background',
        success: 'bg-third-background',
        warning: 'bg-third-background',
      },
      size: {
        sm: 'h-1',
        md: 'h-1.5',
        lg: 'h-1.5',
      }
    },
    defaultVariants: {
    },
  })

const progressIndicatorVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'bg-secondary-information',
        primary: 'bg-primary',
        destructive: 'bg-danger',
        success: 'bg-success',
        warning: 'bg-abnormal',
      },
    },
    defaultVariants: {
    },
  })


function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>
  & VariantProps<typeof progressVariants>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        progressVariants({ variant: props.variant }),
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn("bg-primary h-full w-full flex-1 transition-all",
          progressIndicatorVariants({ variant: props.variant }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

const progressContextVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'has-[>svg]:text-secondary-information',
        primary: 'has-[>svg]:text-primary',
        destructive: 'has-[>svg]:text-danger',
        success: 'has-[>svg]:text-success',
        warning: 'has-[>svg]:text-abnormal',
      },
    },
    defaultVariants: {
    },
  })

function ProgressContext({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>
  & VariantProps<typeof progressVariants>) {
  return (
    <div className={cn("inline-flex flex-row items-center gap-2 w-full",
      progressContextVariants({ variant: props.variant }),
    )}>
      <Progress className={className} {...props} />
      {props.children}
    </div>
  );
}

const progressBlocksVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'has-[>svg]:text-secondary-information',
        primary: 'has-[>svg]:text-primary',
        destructive: 'has-[>svg]:text-danger',
        success: 'has-[>svg]:text-success',
        warning: 'has-[>svg]:text-abnormal',
      },
    },
    defaultVariants: {
    },
  })

function ProgressBlocks({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>
  & VariantProps<typeof progressVariants>) {
  const blocks = 10;
  return (
    <div className={cn("inline-flex flex-row items-center gap-2",
      progressBlocksVariants({ variant: props.variant }),
      className,
    )}>
      <div className={cn("inline-flex flex-row items-center gap-[1px]",)}>
        {Array.from({ length: blocks }).map((_, index) => (
          <div key={index} className={cn("size-2 bg-third-background",
            (props.value ?? 0) / 10 >= index ? progressIndicatorVariants({ variant: props.variant }) : ""
          )}>
          </div>
        ))}
      </div>
      {props.children}
    </div>
  );
}


export { Progress, ProgressContext, ProgressBlocks }
