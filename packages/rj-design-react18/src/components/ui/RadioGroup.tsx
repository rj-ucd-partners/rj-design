import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const radioGroupVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: "[&_[data-slot=radio-group-item]]:border-border-hover [&_[data-slot=radio-group-item]]:data-[state=checked]:border-primary [&_[data-slot=radio-group-item]]:disabled:border-primary-disabled [&_[data-slot=radio-group-item]]:data-[state=checked]:disabled:border-primary-disabled [&_[data-slot=radio-group-item]]:disabled:[&_[data-slot=radio-group-indicator]]:[&_svg]:fill-primary-disabled [&_[data-slot=radio-group-item]]:disabled:[&_[data-slot=radio-group-indicator]]:[&_svg]:stroke-primary-disabled [&_[data-slot=radio-group-item]]:hover:border-primary",
      },
      flex: {
        row: "flex-row",
        col: "flex-col"
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

function RadioGroup({
  className,
  variant,
  flex,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> & VariantProps<typeof radioGroupVariants>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn(
        "flex gap-3",
        className,
        radioGroupVariants({ variant, flex }))}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-border-hover text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
