import { cn } from "@/lib/utils"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cva, type VariantProps } from "class-variance-authority"

const collapsibleVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: '',
      },
      size: {
        sm: "",
        lg: "",
      }
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)


function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>
  & VariantProps<typeof collapsibleVariants>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible"
    className={cn(
      collapsibleVariants({ variant: props.variant, size: props.size }),
      props.className
    )}
    {...props} />
}

const collapsibleHeaderVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: 'bg-card',
        tree: 'bg-transparent'
      },
      size: {
        sm: 'px-4 py-2',
        lg: 'px-4 py-2',
        tree: ''
      },
      layout: {
        forward: 'inline-flex items-center flex-row gap-2 flex-1',
        back: 'inline-flex items-center flex-row justify-between flex-1',
      },
      border: {
        none: '',
        bottom: 'border-b border-border-split',
      }
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

function CollapsibleHeader({
  ...props
}: React.ComponentProps<'div'>
  & VariantProps<typeof collapsibleHeaderVariants>
  &
  {
    disabled?: boolean
  }
) {
  return <div
    data-slot="collapsible-header"
    className={cn(
      props.disabled ? 'cursor-not-allowed text-disabled' : '',
      collapsibleHeaderVariants({ variant: props.variant, size: props.size, layout: props.layout, border: props.border }),
      props.className)}
    {...props}
  />
}


const collapsibleTriggerVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: '',
      },
      size: {
        sm: '',
        lg: '',
      }
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>
  & VariantProps<typeof collapsibleTriggerVariants>
) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn(
        collapsibleTriggerVariants({
          variant: props.variant,
          size: props.size,
        }),
        props.className)}
      {...props}
    />
  )
}

const collapsibleContentVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: 'bg-fill text-center',
        tree: '',
      },
      size: {
        sm: 'pt-3 pr-4 pb-3 pl-10',
        lg: 'pt-3 pr-4 pb-3 pl-10',
        tree: '',
      }
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>
  & VariantProps<typeof collapsibleContentVariants>
  & {
    disabled?: boolean
  }
) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      className={cn(
        props.disabled ? 'cursor-not-allowed text-disabled' : '',
        collapsibleContentVariants({ variant: props.variant, size: props.size }),
        props.className
      )}
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleHeader }
