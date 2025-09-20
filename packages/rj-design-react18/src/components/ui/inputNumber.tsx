import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { useState } from 'react'
import { Button } from './button'

const inputNumberVariants = cva(
    'outline-none w-full',
    {
        variants: {
            variant: {
                primary: 'bg-third-background text-text-deep disabled:text-disabled hover:bg-fill-emphasize focus:border disabled:bg-third-background focus:border-primary'
            },
            format: {
                sm: 'px-2 py-[2px] text-[12px] h-6 rounded-sm',
                md: 'px-2 py-[5px] text-[13px] h-8 rounded-md',
                lg: 'px-3 py-2 text-[15px] h-10 rounded-md'
            },
        },
        defaultVariants: {
        },
    },
)

function InputNumber({
    className,
    disabled,
    format,
    ...props
}:
    React.ComponentProps<'input'> &
    VariantProps<typeof inputNumberVariants> &
    {
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
            'flex flex-row gap-1',
            className,
        )}>
            <Button variant={'number'} size={format} onClick={increment} disabled={disabled}>
                +
            </Button>
            <input
                className={cn(
                    hideNumberArrows,
                    inputNumberVariants({ variant: 'primary', format: format }),
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
                        setValue(undefined);
                    }
                }}
            />
            <Button variant={'number'} size={format} onClick={decrement} disabled={disabled} >
                -
            </Button>
        </div >
    );
}


export {
    InputNumber,
}