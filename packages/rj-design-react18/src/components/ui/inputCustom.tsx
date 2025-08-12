import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Input, type inputVariants } from './input'

const inputCustomVariants = cva(
    'outline outline-1 outline-solid outline-offset-[-1px] outline-transparent',
    {
        variants: {
            variant: {
                default: 'bg-third-background focus-within:outline-primary hover:bg-fill-light-hover-bghover:bg-fill-light-hover-bg disabled:bg-border-disabled',
                success: 'bg-success-active focus-within:outline-success-hover',
                error: 'bg-danger-light focus-within:outline-danger',
                warning: 'bg-warning-light focus-within:outline-abnormal',
            },
            dimension: {
                "borderless-sm": 'w-58 px-2 py-0.5 rounded-md text-[12px] leadling-[20px] placeholder:text-[12px] placeholder:leading-[20px]',
                "borderless-md": 'w-70 px-2 py-[5px] rounded-md text-[13px] leadling-[20px] placeholder:text-[13px] placeholder:leading-[20px]',
                "borderless-lg": 'w-74 px-3 py-2 rounded-md text-[15px] leadling-[22px] placeholder:text-[15px] placeholder:leading-[22px]',
            },
            disabled: {
                true: 'text-disabled',
            }
        },
        defaultVariants: {
        },
    },
)

function InputCustom({
    className,
    disabled,
    variant,
    dimension,
    ...props
}:
    React.ComponentProps<'input'> &
    VariantProps<typeof inputCustomVariants> &
    VariantProps<typeof inputVariants> &
    {
        disabled?: boolean
    }
) {
    return (
        <div
            data-slot="input-custom"

            className={cn(
                "grid items-center ",
                "grid-cols-[auto_1fr_auto]",
                inputCustomVariants({ dimension, variant, className, disabled }))}
        >
            {props.children}
            <Input
                className='col-start-2 row-start-1'
                disabled={disabled}
                variant={'transparent'}
                dimension={dimension}
            />
        </div>
    )
}

function InputFrontIcon({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            data-slot="input-front-icon"
            className={cn(
                'shrink-0 col-start-1 row-start-1',
                className)}
            {...props}
        >
            {children}
        </div>
    );
}

function InputBehindtIcon({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            data-slot="input-behind-icon"
            className={cn(
                'shrink-0 col-start-3 row-start-1',
                className)}
            {...props}
        >
            {children}
        </div>
    );
}
export {
    InputCustom,
    InputFrontIcon,
    InputBehindtIcon
}