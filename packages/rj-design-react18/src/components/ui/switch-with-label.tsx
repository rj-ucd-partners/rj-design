"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { LoadingCircle } from "../icon/loading-circle"

const switchRootVariants = cva(
    "peer inline-flex shrink-0 items-center relative transition-colors duration-200",
    {
        variants: {
            variant: {
                primary: ['data-[state=checked]:bg-primary data-[state=unchecked]:bg-fill-emphasize disabled:data-[state=checked]:bg-primary-disabled disabled:data-[state=unchecked]:bg-fill-dark-hover-active-disabled',


                ]
            },
            size: {
                sm: 'h-4 rounded-md',
                md: 'h-5 rounded-lg',
                lg: 'h-6 rounded-lg',
            },
        },
    }
)

const switchThumbVariants = cva(
    "pointer-events-none block transition-transform duration-200 ease-in-out",
    {
        variants: {
            variant: {
                primary: 'data-[state=unchecked]:bg-card data-[state=checked]:bg-card'
            },
            size: {
                sm: 'w-3 h-3 rounded-sm',
                md: 'w-4 h-4 rounded-md',
                lg: 'w-5 h-5 rounded-md',
            },
        },
    }
)

export interface SwitchWithLabelProps extends Omit<React.ComponentProps<typeof SwitchPrimitive.Root>, 'children'>, VariantProps<typeof switchRootVariants> {
    /** 是否加载中 */
    isLoading?: boolean
    /** 选中状态的文字 */
    checkedLabel?: string
    /** 未选中状态的文字 */
    uncheckedLabel?: string
    /** 受控：是否选中 */
    checked?: boolean
    /** 默认是否选中（非受控） */
    defaultChecked?: boolean
    /** 选中状态改变回调 */
    onCheckedChange?: (checked: boolean) => void
}

function SwitchWithLabel({
    checked: controlledChecked,
    defaultChecked = false,
    onCheckedChange,
    isLoading = false,
    variant = 'primary',
    size = 'md',
    checkedLabel = '开启',
    uncheckedLabel = '关闭',
    className,
    disabled,
    ...props
}: SwitchWithLabelProps) {
    // 判断是否为受控组件
    const isControlled = controlledChecked !== undefined

    // 内部状态（非受控模式）
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked)

    // 实际使用的值
    const checked = isControlled ? controlledChecked : internalChecked

    // 处理状态变化
    const handleCheckedChange = React.useCallback((newChecked: boolean) => {
        if (!isControlled) {
            setInternalChecked(newChecked)
        }
        onCheckedChange?.(newChecked)
    }, [isControlled, onCheckedChange])

    // 使用 ref 测量文字宽度
    const checkedLabelRef = React.useRef<HTMLSpanElement>(null)
    const uncheckedLabelRef = React.useRef<HTMLSpanElement>(null)
    const [maxLabelWidth, setMaxLabelWidth] = React.useState(0)

    // 计算最大文字宽度
    React.useEffect(() => {
        const checkedWidth = checkedLabelRef.current?.offsetWidth || 0
        const uncheckedWidth = uncheckedLabelRef.current?.offsetWidth || 0
        setMaxLabelWidth(Math.max(checkedWidth, uncheckedWidth))
    }, [checkedLabel, uncheckedLabel])

    // 根据尺寸获取滑块尺寸和间隙
    const getSizeStyles = () => {
        const current = size ?? 'sm'
        switch (current) {
            case 'sm':
                return {
                    thumbSize: 12,
                    gap: 4,
                    fontSize: '10px',
                    padding: 2,
                    textPadding: 2, // 文字两侧额外padding
                }
            case 'md':
                return {
                    thumbSize: 16, // w-4 h-4
                    gap: 6,
                    fontSize: '13px',
                    padding: 2,
                    textPadding: 2, // 文字两侧额外padding
                }
            case 'lg':
                return {
                    thumbSize: 20, // w-5 h-5
                    gap: 8,
                    fontSize: '14px',
                    padding: 2,
                    textPadding: 2, // 文字两侧额外padding
                }
        }
    }

    const sizeStyles = getSizeStyles()

    // 计算开关总宽度：滑块宽度 + 间隙 + 最长文字宽度 + 文字padding + 两侧内边距
    const switchWidth = sizeStyles.thumbSize + sizeStyles.gap + maxLabelWidth + (sizeStyles.textPadding * 2) + (sizeStyles.padding * 2)

    return (
        <div className="inline-flex items-center">
            {/* 隐藏的测量元素 */}
            <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                <span
                    ref={checkedLabelRef}
                    className="whitespace-nowrap font-bold"
                    style={{ fontSize: sizeStyles.fontSize }}
                >
                    {checkedLabel}
                </span>
                <span
                    ref={uncheckedLabelRef}
                    className="whitespace-nowrap font-bold"
                    style={{ fontSize: sizeStyles.fontSize }}
                >
                    {uncheckedLabel}
                </span>
            </div>

            {/* 开关主体 */}
            <SwitchPrimitive.Root
                data-slot="switch-with-label"
                className={cn(
                    switchRootVariants({ variant, size }),
                    "group relative",
                    className
                )}
                checked={checked}
                onCheckedChange={handleCheckedChange}
                disabled={disabled}
                style={{
                    width: switchWidth,
                    padding: `0 ${sizeStyles.padding}px`,
                }}
                {...props}
            >
                {/* 文字容器 - 绝对定位 */}
                <div
                    className="absolute inset-0 flex items-center pointer-events-none"
                    style={{
                        padding: `0 ${sizeStyles.padding}px`,
                    }}
                >
                    {/* 未选中状态文字（右侧） - 居中显示 */}
                    <span
                        className={cn(
                            "whitespace-nowrap font-bold transition-opacity duration-200 absolute text-center",
                            checked ? "opacity-0" : "opacity-100",
                            disabled ? "text-disabled" : "text-secondary"
                        )}
                        style={{
                            fontSize: sizeStyles.fontSize,
                            right: sizeStyles.padding,
                            width: maxLabelWidth + (sizeStyles.textPadding * 2),
                            paddingLeft: sizeStyles.textPadding,
                            paddingRight: sizeStyles.textPadding,
                            lineHeight: size === 'sm' ? "16px" : (size === 'md' ? "20px" : "24px"),
                            fontWeight: 700
                        }}
                    >
                        {uncheckedLabel}
                    </span>

                    {/* 选中状态文字（左侧） - 居中显示 */}
                    <span
                        className={cn(
                            "whitespace-nowrap font-bold transition-opacity duration-200 absolute text-center justify-center",
                            checked ? "opacity-100 " : "opacity-0",
                            disabled ? "text-disabled" : "text-text"
                        )}
                        style={{
                            fontSize: sizeStyles.fontSize,
                            left: sizeStyles.padding,
                            width: maxLabelWidth + (sizeStyles.textPadding * 2),
                            paddingLeft: sizeStyles.textPadding,
                            paddingRight: sizeStyles.textPadding,
                            lineHeight: size === 'sm' ? "16px" : (size === 'md' ? "20px" : "24px"),
                            fontWeight: 700
                        }}
                    >
                        {checkedLabel}
                    </span>
                </div>

                {/* 滑块 */}
                <SwitchPrimitive.Thumb
                    data-slot="switch-thumb"
                    className={cn(
                        switchThumbVariants({ variant, size }),
                        "flex items-center justify-center relative z-10"
                    )}
                    style={{
                        transform: checked
                            ? `translateX(${maxLabelWidth + (sizeStyles.textPadding * 2) + sizeStyles.gap}px)`
                            : 'translateX(0)',
                    }}
                >
                    {isLoading && (
                        <LoadingCircle
                            className={cn(
                                "animate-spin",
                                size === 'sm' && 'size-3',
                                size === 'md' && 'size-4',
                                size === 'lg' && 'size-5',
                            )}
                        />
                    )}
                </SwitchPrimitive.Thumb>
            </SwitchPrimitive.Root>
        </div>
    )
}

export { SwitchWithLabel }
