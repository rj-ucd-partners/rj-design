import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "flex w-full rounded-md bg-transparent focus:outline focus-visible:outline shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed ",
  {
    variants: {
      variant: {
        primary: 'bg-third-background hover:bg-fill-light-hover-bg focus:outline-primary disabled:hover:bg-fill-dark-hover-active-disabled disabled:bg-fill-dark-hover-active-disabled disabled:text-disabled',
        success: 'bg-success-light outline-success',
        destructive: 'bg-danger-light outline-danger',
        warning: 'bg-warning-light outline-warning',
        page: 'bg-card text-secondary text-center outline-1 outline-solid outline-offset-[-1px] outline-border-split w-20',
        transparent: 'bg-transparent outline-none',
        number: 'text-center bg-third-background focus-visible:outline-primary disabled:bg-border-disabled disabled:text-disabled',
        'select-title': 'bg-transparent text-secondary-information text-[13px]'
      },
      format: {
        sm: 'px-2 py-0.5 rounded-md text-[12px] leading-[20px]',
        md: 'px-2 py-[5px] rounded-md text-[13px] leading-[20px]',
        lg: 'px-3 py-2 rounded-md text-[15px] leading-[22px]',
      },
    }
  },
)
export interface InputProps extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> { }
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    placeholder = "请输入",
    className, type, ...props }, ref) => {
    return (
      <input
        placeholder={placeholder}
        type={type}
        className={cn(
          inputVariants({ variant: props.variant, format: props.format }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
