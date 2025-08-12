import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Input, type inputVariants } from './input'
import { useState } from 'react'
import { Button } from './button'
import { TriangleUpIcon } from '../icon/TriangleUpIcon'
import { TriangleDownIcon } from '../icon/TriangleDownIcon'

const inputNumberSidebarVariants = cva(
    '',
    {
        variants: {
            variant: {

            },
            dimension: {
                "borderless-sm": 'h-6 w-22 rounded text-[12px]  [&_[data-slot=func-menu]]:w-6 [&_[data-slot=func-menu]]:h-2.5',
                "borderless-md": 'h-8 w-24 rounded-md [&_[data-slot=func-menu]]:w-7 [&_[data-slot=func-menu]]:h-3.5',
                "borderless-lg": 'h-10 w-30 rounded-md [&_[data-slot=func-menu]]:w-8 [&_[data-slot=func-menu]]:h-4.5'
            },
            disabled: {

            }
        },
        defaultVariants: {
        },
    },
)

function InputNumberSidebar({
    className,
    disabled,
    variant,
    dimension,
    ...props
}:
    React.ComponentProps<'input'> &
    VariantProps<typeof inputVariants> &
    {
        disabled?: boolean
    }
) {
    const [value, setValue] = useState<number | undefined>(undefined);
    const increment = () => {
        setValue(prev => (prev !== undefined ? prev + 1 : 1));
    };
    const decrement = () => {
        setValue(prev => (prev !== undefined ? prev - 1 : -1));
    };
    return (
        <div className={cn(
            'flex flex-row bg-third-background items-center hover:bg-fill-emphasize outline outline-1 outline-solid outline-offset-[-1px] outline-transparent focus-within:outline-primary focus-within:bg-primary-light',
            "hover:[&_[data-slot=func-menu-bar]]:block hover:[&_[data-slot=func-menu-bar]]:h-full hover:[&_[data-slot=func-menu-bar]]:flex hover:[&_[data-slot=func-menu-bar]]:justify-between hover:[&_[data-slot=func-menu-bar]]:flex-col",
            inputNumberSidebarVariants({ dimension }),
            className,
        )}>
            <Input type='number' variant={'transparent'} dimension={dimension} value={value} disabled={disabled} onChange={(event) => {
                try {
                    const num = parseFloat(event.target.value);
                    setValue(num);
                } catch (error) {
                    setValue(undefined);
                }
            }} />
            <div data-slot='func-menu-bar' className='p-[1px] hidden'>
                <div data-slot='func-menu' className='bg-fill-light-hover-bg flex items-center justify-center rounded-tr-sm hover:cursor-pointer' onClick={!disabled ? increment : undefined}>
                    <TriangleUpIcon />
                </div>
                {/* <Button data-slot='func-menu' variant={'link'} size={'link'} className='bg-fill-light-hover-bg flex items-center justify-center rounded-tr-sm hover:cursor-pointer' disabled={disabled} onClick={increment}>
                    <TriangleUpIcon />
                </Button>
                <Button data-slot='func-menu' variant={'link'} size={'link'} className='bg-fill-light-hover-bg flex items-center justify-center rounded-br-sm hover:cursor-pointer' disabled={disabled} onClick={decrement}>
                    <TriangleDownIcon />
                </Button> */}
                <div data-slot='func-menu' className='bg-fill-light-hover-bg flex items-center justify-center rounded-br-sm hover:cursor-pointer' onClick={!disabled ? decrement : undefined}>
                    <TriangleDownIcon />
                </div>
            </div>
        </div >
    );
}


export {
    InputNumberSidebar,
}