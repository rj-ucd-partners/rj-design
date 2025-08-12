import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva(
  'inline-flex flex-col justify-center items-start overflow-hidden font-[PingFang_SC] font-normal text-text-deep placeholder:text-secondary-information focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px]',
  {
    variants: {
      variant: {
        default: 'bg-third-background focus-visible:outline-primary hover:bg-fill-light-hover-bg disabled:bg-border-disabled disabled:text-disabled',
        success: 'bg-success-active focus-visible:outline-success-hover',
        error: 'bg-danger-light focus-visible:outline-danger',
        warning: 'bg-warning-light focus-visible:outline-abnormal',
        page: 'bg-card text-secondary text-center outline-1 outline-solid outline-offset-[-1px] outline-border-split w-20',
        transparent: 'bg-transparent outline-none',
        number: 'text-center bg-third-background focus-visible:outline-primary disabled:bg-border-disabled disabled:text-disabled'
      },
      dimension: {
        sm: 'h-6 px-2 py-0.5 rounded text-xs leading-tight placeholder:text-xs placeholder:leading-tight',
        md: 'h-8 px-2 py-[5px] rounded-md text-xs leading-tight placeholder:text-xs placeholder:leading-tight',
        lg: 'h-10 px-3 py-2 rounded-md text-base leading-snug',
        'borderless-sm': 'h-5 px-2 w-full',
        'borderless-md': 'h-5 px-2 w-full',
        'borderless-lg': 'h-6 px-2 w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      dimension: 'md',
    },
  },
)

function Input({
  className,
  variant,
  dimension,
  type,
  disabled = false,
  ...props
}: React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants> & {
    disabled?: boolean
  }) {
  const hideNumberArrows = '[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&[type=number]]:[-moz-appearance:textfield]'
  return (
    <input
      type={type}
      data-slot='input'
      disabled={disabled}
      placeholder='请输入'
      className={cn(
        className,
        hideNumberArrows,
        inputVariants({ variant, dimension }))}
      {...props}
    />
  )
}

export { Input, inputVariants }
