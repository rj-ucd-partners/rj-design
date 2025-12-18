"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Calendar as CalendarIcon } from "lucide-react"
import { CloseIcon } from "../icon/CloseIcon"
import { InputGroup, InputGroupButton, InputGroupInput, InputGroupAddon } from "./InputGroup"
import { MonthPicker } from "./MonthPicker"

export interface MonthPopoverProps {
    size?: 'sm' | 'md' | 'lg',
    value?: { year: number, month: number }, // month: 1-12
    onChange?: (value: { year: number, month: number } | undefined) => void,
    contentClassName?: string,
    placeholder?: string,
    showFooter?: boolean,
    footChildren?: React.ReactNode,
    onConfirm?: () => void,
    onCancel?: () => void,
    showHeader?: boolean,
    headerChildren?: React.ReactNode,
    minYear?: number,
    maxYear?: number,
}

function MonthPopover({
    size = 'md',
    value,
    onChange,
    contentClassName,
    placeholder = '选择月份',
    showFooter = false,
    footChildren,
    onConfirm,
    onCancel,
    showHeader,
    headerChildren,
    minYear,
    maxYear,
}: MonthPopoverProps) {
    // 判断是否为受控组件
    const isControlled = onChange !== undefined

    // Popover 打开状态
    const [open, setOpen] = React.useState(false)

    // 内部状态（非受控模式）
    const [internalValue, setInternalValue] = React.useState<{ year: number, month: number } | undefined>()

    // 实际使用的值
    const displayValue = isControlled ? value : internalValue

    // 获取显示文本
    const displayText = displayValue ? `${displayValue.year}年${displayValue.month}月` : ''
    const hasValue = displayValue !== undefined

    // 处理值变化
    const handleChange = (newValue: { year: number, month: number } | undefined) => {
        if (!isControlled) {
            setInternalValue(newValue)
        }
        onChange?.(newValue)
    }

    // 处理清空
    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation()
        handleChange(undefined)
    }

    // 处理确认
    const handleConfirm = () => {
        onConfirm?.()
        setOpen(false)
    }

    // 处理取消
    const handleCancel = () => {
        onCancel?.()
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <InputGroup variant={'primary'} size={size}>
                    <InputGroupInput
                        placeholder={placeholder}
                        value={displayText}
                        readOnly
                    />
                    {hasValue ? (
                        <InputGroupButton
                            variant={'transparent'}
                            size={'icon-xs'}
                            onClick={handleClear}
                        >
                            <CloseIcon />
                        </InputGroupButton>
                    ) : (
                        <InputGroupAddon align={'inline-end'}>
                            <CalendarIcon />
                        </InputGroupAddon>
                    )}
                </InputGroup>
            </PopoverTrigger>
            <PopoverContent
                className={cn(
                    "w-[var(--radix-popover-trigger-width)]",
                    "bg-secondary-background",
                    "rounded-md",
                    "border border-split",
                    "[box-shadow:0px_6px_16px_rgba(0,0,0,0.08)]",
                    contentClassName
                )}
                alignOffset={5}
                sideOffset={5}
                onInteractOutside={(e) => {
                    // 阻止点击 Select 相关元素时关闭 Popover
                    const target = e.target as HTMLElement
                    // 检查是否点击了 Select 的内容区域或 Trigger
                    if (
                        target.closest('[data-radix-select-content]') ||
                        target.closest('[data-radix-select-viewport]') ||
                        target.closest('[data-radix-popper-content-wrapper]') ||
                        target.closest('[data-radix-select-trigger]') ||
                        target.closest('[data-slot="select"]')
                    ) {
                        e.preventDefault()
                    }
                }}
            >
                <MonthPicker
                    value={displayValue}
                    onChange={handleChange}
                    showFooter={showFooter}
                    footChildren={footChildren}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                    minYear={minYear}
                    maxYear={maxYear}
                    showHeader={showHeader}
                    headerChildren={headerChildren}
                />
            </PopoverContent>
        </Popover>
    )
}

export { MonthPopover }
