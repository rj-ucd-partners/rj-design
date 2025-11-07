import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { useState } from 'react'
import { TriangleUpIcon } from '../icon/TriangleUpIcon'
import { TriangleDownIcon } from '../icon/TriangleDownIcon'

const inputVariants = cva(
    'flex flex-row items-center hover:[&_[data-slot=func-menu-bar]]:flex',
    {
        variants: {
            variant: {
                primary: 'bg-third-background hover:bg-fill-emphasize outline outline-transparent focus-within:outline-primary focus-within:bg-primary-light'
            },
            format: {
                sm: 'rounded-sm pl-2 py-[1px]',
                md: 'rounded-md pl-2 py-[1px]',
                lg: 'rounded-md pl-2 py-[1px]'
            },
        },
        defaultVariants: {
        },
    }
)

const inputNumberSidebarVariants = cva(
    'outline-none w-full',
    {
        variants: {
            variant: {
                primary: 'disabled:text-disabled'
            },
            format: {
                sm: 'text-[12px] leading-[22px]',
                md: 'text-[13px] leading-[30px]',
                lg: 'text-[15px] leading-[38px]'
            },
        },
        defaultVariants: {
        },
    },
)

function InputNumberSidebar({
    format,
    className,
    disabled,
    ...props
}: React.ComponentProps<'input'> &
    VariantProps<typeof inputNumberSidebarVariants> & {
        disabled?: boolean
    }
) {
    const hideNumberArrows = '[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&[type=number]]:[-moz-appearance:textfield]'
    const [value, setValue] = useState<number | undefined>(undefined);
    const increment = () => {
        setValue(prev => (prev !== undefined ? prev + 1 : 1));
    };
    const decrement = () => {
        setValue(prev => (prev !== undefined ? prev - 1 : -1));
    };
    return (
        <div className={cn(
            inputVariants({ variant: 'primary', format: format }),
            [
                disabled && 'hover:bg-third-background'
            ],
            className,
        )}>
            <input
                className={cn(
                    hideNumberArrows,
                    inputNumberSidebarVariants({ variant: 'primary', format: format }),
                    className
                )}
                disabled={disabled}
                placeholder={props.placeholder ?? '请输入'}
                value={value}
                type='number'
                onChange={(event) => {
                    try {
                        const num = parseFloat(event.target.value);
                        setValue(num);
                    } catch (error) {
                        if (error instanceof RangeError) {
                            console.error("范围选择错误" + error.message);
                        }
                        setValue(undefined);
                    }
                }} />
            {
                !disabled &&
                <div data-slot='func-menu-bar' className='hidden flex-col justify-between gap-[2px]'>
                    <div data-slot='func-menu' className={cn(
                        'bg-fill-light-hover-bg flex items-center justify-center  hover:cursor-pointer',
                        [
                            format === 'sm' && 'h-2.5 w-6 rounded-tr-sm',
                            format === 'md' && 'h-3.5 w-6.5 rounded-tr-md',
                            format === 'lg' && 'h-4.5 w-8 rounded-tr-md',
                        ]
                    )} onClick={!disabled ? increment : undefined}>
                        <TriangleUpIcon />
                    </div>
                    <div data-slot='func-menu' className={cn(
                        'bg-fill-light-hover-bg flex items-center justify-center  hover:cursor-pointer',
                        [
                            format === 'sm' && 'h-2.5 w-6 rounded-br-sm',
                            format === 'md' && 'h-3.5 w-6.5 rounded-br-md',
                            format === 'lg' && 'h-4.5 w-8 rounded-br-md',
                        ]
                    )} onClick={!disabled ? decrement : undefined}>
                        <TriangleDownIcon />
                    </div>
                </div>
            }
        </div >
    );
}


export {
    InputNumberSidebar,
}