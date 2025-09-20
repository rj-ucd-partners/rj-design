import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { useRef, useState } from 'react'
import { Button } from './button'
import { CloseIcon } from '../icon/closeIcon'

const inputVariants = cva(
  '',
  {
    variants: {
      variant: {
        primary: 'bg-third-background hover:bg-fill-light-hover-bg',
        success: 'bg-success-active',
        destructive: 'bg-danger-light',
        warning: 'bg-warning-light',
        page: 'bg-card text-secondary text-center outline-1 outline-solid outline-offset-[-1px] outline-border-split w-20',
        transparent: 'bg-transparent outline-none',
        number: 'text-center bg-third-background focus-visible:outline-primary disabled:bg-border-disabled disabled:text-disabled',
        'select-title': 'bg-transparent text-secondary-information text-[13px]'
      },
      format: {
        default: '',
        sm: 'px-2 py-0.5 rounded-md text-[12px] leading-[20px]',
        md: 'px-2 py-[5px] rounded-md text-[13px] leading-[20px]',
        lg: 'px-3 py-2 rounded-md text-[15px] leading-[22px]',
        'borderless-sm': 'h-5 px-2 w-full',
        'borderless-md': 'h-5 px-2 w-full',
        'borderless-lg': 'h-6 px-2 w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      format: 'default',
    },
  },
)

function Input({
  value,
  onValueChange,
  description,
  variant,
  format,
  type = 'text',
  disabled = false,
  frontIcon,
  postIcon,
  onClickCallback,
  showClose = false,
  onCloseCallback,
  className,
  ...props
}: React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants> & {
    description?: string,
    disabled?: boolean
    frontIcon?: React.ReactNode | React.JSX.Element,
    postIcon?: React.ReactNode | React.JSX.Element,
    onClickCallback?: () => void,
    showClose?: boolean,
    onValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onCloseCallback?: () => void
  }) {
  const hideNumberArrows = '[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&[type=number]]:[-moz-appearance:textfield]'
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };
  return (
    <div className='flex flex-col gap-1 hover:[&_[data-slot=close-button]]:block' {...props}>
      <div className={cn(
        'w-full overflow-hidden font-[PingFang_SC] font-normal text-text-deep',
        'flex flex-1 flex-row items-center justify-between gap-1',
        inputVariants({ variant, format }),
        focused &&
        [variant === 'primary' && 'border border-primary',
        variant === 'success' && 'border border-success-hover',
        variant === 'destructive' && 'border border-danger',
        variant === 'warning' && 'border border-warning',],
        disabled && 'hover:bg-fill-dark-hover-active-disabled bg-fill-dark-hover-active-disabled text-disabled',
        className
      )}>
        <div className='flex flex-1 w-full flex-row items-center justify-center gap-1' >
          {
            frontIcon &&
            <div className={cn(
              [
                'size-4',
                format === 'sm' && 'size-3',
                format === 'md' && 'size-4',
                format === 'sm' && 'size-5',
              ],
              'flex items-center justify-center',
            )}>
              {frontIcon}
            </div>
          }
          <input
            ref={inputRef}
            type={type}
            data-slot='input'
            disabled={disabled}
            placeholder='请输入'
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onValueChange}
            className={cn(
              'w-full',
              'border-none outline-none bg-transparent',
              hideNumberArrows,
            )}
          />
        </div>
        <div className='relative'>
          {
            showClose && value &&
            <div
              data-slot='close-button'
              className='hidden z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            >
              <Button
                variant={'transparent'} size={'link'} onClick={onCloseCallback}>
                <CloseIcon className='text-secondary-information size-3' />
              </Button>
            </div>


          }
          {
            postIcon &&
            <div className={cn(
              [
                'size-4',
                format === 'sm' && 'size-3',
                format === 'md' && 'size-4',
                format === 'sm' && 'size-5',
              ],
              'flex items-center justify-center',
            )}>
              <Button variant={'transparent'} size={'link'} onClick={onClickCallback}>
                {postIcon}
              </Button>
            </div>
          }
        </div>
      </div>
      {
        description &&
        <div className={cn(
          'text-[12px] leading-[20px] p-1',
          variant === 'primary' && 'text-text-secondary-information',
          variant === 'destructive' && 'text-danger',
          variant === 'warning' && 'text-abnormal',
          variant === 'success' && 'text-success'
        )}>
          {description}
        </div>
      }
    </div>
  )
}


export { Input, inputVariants }
