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
    type,
    value,
    onChange,
    ...props
}:
    React.ComponentProps<'input'> &
    VariantProps<typeof inputCustomVariants> &
    VariantProps<typeof inputVariants> &
    {
        disabled?: boolean,
        onChange?: React.ChangeEventHandler<HTMLInputElement>;
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
                value={value}
                onChange={onChange}
                dimension={dimension}
                type={type}
                placeholder={props.placeholder}
            />
        </div>
    )
}

const inputFrontIconVariants = cva(
    '',
    {
        variants: {
            dimension: {
                "borderless-sm": 'size-3',
                "borderless-md": 'size-4',
                "borderless-lg": 'size-5',
            },
            disabled: {
                true: 'text-disabled',
            }
        },
        defaultVariants: {
        },
    },
)

function InputFrontIcon({
    children,
    className,
    dimension,
    ...props }: React.HTMLAttributes<HTMLDivElement>
    & VariantProps<typeof inputFrontIconVariants>
) {
    return (
        <div
            data-slot="input-front-icon"
            className={cn(
                'col-start-1 row-start-1',
                'flex items-center',
                className,
                inputFrontIconVariants({ dimension })
            )}
            {...props}
        >
            {children}
        </div>
    );
}
const inputBehindtIconVariants = cva(
    '',
    {
        variants: {
            dimension: {
                "borderless-sm": 'size-3',
                "borderless-md": 'size-4',
                "borderless-lg": 'size-5',
            },
            disabled: {
                true: 'text-disabled',
            }
        },
        defaultVariants: {
        },
    },
)
function InputBehindtIcon({
    children,
    className,
    dimension,
    ...props }: React.HTMLAttributes<HTMLDivElement>
    & VariantProps<typeof inputBehindtIconVariants>
) {
    return (
        <div
            data-slot="input-behind-icon"
            className={cn(
                'col-start-3 row-start-1',
                'flex items-center',
                className,
                inputBehindtIconVariants({ dimension })
            )}
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