import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva(
  'inline-flex flex-col justify-center items-start overflow-hidden font-[PingFang_SC] font-normal w-52 text-text placeholder:text-secondary-information focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px]',
  {
    variants: {
      variant: {
        normal: 'bg-third-background focus-visible:outline-primary hover:bg-fill-light-hover-bg disabled:bg-border-disabled disabled:text-disabled',
        success: 'bg-success-active focus-visible:outline-success-hover',
        error: 'bg-danger-light focus-visible:outline-danger',
        warning: 'bg-warning-light focus-visible:outline-abnormal'
      },
      dimension: {
        sm: 'h-6 px-2 py-0.5 rounded text-xs leading-tight placeholder:text-xs placeholder:leading-tight',
        md: 'h-7.5 px-2 py-[5px] rounded-md text-xs leading-tight placeholder:text-xs placeholder:leading-tight',
        lg: 'h-10 px-3 py-2 rounded-md text-base leading-snug'
      },
    },
    defaultVariants: {
      variant: 'normal',
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

  return (
    <input
      type={type}
      data-slot='input'
      disabled={disabled}
      placeholder='请输入'
      className={cn(inputVariants({ variant, dimension, className }))}
      {...props}
    />
  )
}

export { Input, inputVariants }
