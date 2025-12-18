import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { useRef, useState } from 'react'
import { TriangleUpIcon } from '../icon/TriangleUpIcon'
import { TriangleDownIcon } from '../icon/TriangleDownIcon'

const inputVariants = cva(
    'flex flex-row items-center hover:[&_[data-slot=func-menu-bar]]:flex border',
    {
        variants: {
            variant: {
                primary: 'bg-third-background border-transparent focus-within:bg-primary-light focus-within:border-primary disabled:bg-fill-dark-hover-active-disabled disabled:border-transparent'
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
    const ref = useRef(null);
    const [inputing, setInputing] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false); // 真正的输入框焦点
    const isButtonHoveredRef = useRef(false);

    return (
        <div className={cn(
            inputVariants({ variant: 'primary', format: format }),
            disabled && 'bg-fill-dark-hover-active-disabled border-transparent hover:bg-fill-dark-hover-active-disabled hover:border-transparent',
            // 只有在input没有真正焦点且不在操作按钮时，才显示悬浮效果
            !isInputFocused && !inputing && "hover:bg-fill-emphasize hover:border-fill-emphasize",
            // 当操作按钮时，强制应用焦点样式
            inputing && "!bg-primary-light !border-primary",
            className,
        )}>
            <input
                ref={ref}
                className={cn(
                    hideNumberArrows,
                    inputNumberSidebarVariants({ variant: 'primary', format: format }),
                    className
                )}
                disabled={disabled}
                placeholder={props.placeholder ?? '请输入'}
                value={value}
                type='number'
                onFocus={() => {
                    setInputing(true);
                    setIsInputFocused(true);
                }}
                onBlur={() => {
                    setIsInputFocused(false);
                    // 只有在不操作按钮时才失去焦点状态
                    if (!isButtonHoveredRef.current) {
                        setInputing(false)
                    }
                }}
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
                <div
                    data-slot='func-menu-bar'
                    className='hidden flex-col justify-between gap-[2px] '
                    onMouseEnter={() => {
                        isButtonHoveredRef.current = true;
                        setInputing(true);
                    }}
                    onMouseLeave={() => {
                        isButtonHoveredRef.current = false;
                        setInputing(false);
                    }}
                >
                    <div
                        data-slot='func-menu'
                        className={cn(
                            'bg-fill-light-hover-bg flex items-center justify-center hover:cursor-pointer active:bg-fill-light-hover-bg hover:bg-fill-emphasize',
                            [
                                format === 'sm' && 'h-2.5 w-6 rounded-tr-sm',
                                format === 'md' && 'h-3.5 w-6.5 rounded-tr-md',
                                format === 'lg' && 'h-4.5 w-8 rounded-tr-md',
                            ]
                        )}
                        onMouseDown={(e) => {
                            // 阻止 input 失去焦点
                            e.preventDefault();
                        }}
                        onClick={!disabled ? increment : undefined}
                    >
                        <TriangleUpIcon />
                    </div>
                    <div
                        data-slot='func-menu'
                        className={cn(
                            'bg-fill-light-hover-bg flex items-center justify-center hover:cursor-pointer active:bg-fill-light-hover-bg hover:bg-fill-emphasize',
                            [
                                format === 'sm' && 'h-2.5 w-6 rounded-br-sm',
                                format === 'md' && 'h-3.5 w-6.5 rounded-br-md',
                                format === 'lg' && 'h-4.5 w-8 rounded-br-md',
                            ]
                        )}
                        onMouseDown={(e) => {
                            // 阻止 input 失去焦点
                            e.preventDefault();
                        }}
                        onClick={!disabled ? decrement : undefined}
                    >
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