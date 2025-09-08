import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Input, type inputVariants } from './input'
import { useState } from 'react'
import { Button } from './button'

const inputNumberVariants = cva(
    '',
    {
        variants: {
            variant: {

            },
            dimension: {
                sm: 'w-16',
                md: 'w-18',
                lg: 'w-20'
            },
            disabled: {

            }
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
            'flex flex-row gap-1',
            className,
        )}>
            <Button variant={'number'} size={format} onClick={increment} disabled={disabled}>
                +
            </Button>
            <Input className={
                cn(inputNumberVariants({ format }))
            } value={value} variant={'number'} format={format}  {...props} disabled={disabled} onChange={(event) => {
                try {
                    const num = parseFloat(event.target.value);
                    setValue(num);
                } catch (error) {
                    setValue(undefined);
                }
            }} />
            <Button variant={'number'} size={format} onClick={decrement} disabled={disabled} >
                -
            </Button>
        </div >
    );
}


export {
    InputNumber,
}