"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Calendar as CalendarIcon } from "lucide-react"
import { CloseIcon } from "../icon/closeIcon"
import { InputGroup, InputGroupButton, InputGroupInput, InputGroupAddon } from "./input-group"
import { YearPicker } from "./year-picker"

export interface YearPopoverProps {
    size?: 'sm' | 'md' | 'lg',
    value?: number,
    onChange?: (year: number | undefined) => void,
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

function YearPopover({
    size = 'md',
    value,
    onChange,
    contentClassName,
    placeholder = '选择年份',
    showFooter = false,
    footChildren,
    onConfirm,
    onCancel,
    showHeader,
    headerChildren,
    minYear,
    maxYear,
}: YearPopoverProps) {
    // 判断是否为受控组件
    const isControlled = onChange !== undefined

    // Popover 打开状态
    const [open, setOpen] = React.useState(false)

    // 内部状态（非受控模式）
    const [internalValue, setInternalValue] = React.useState<number | undefined>()

    // 实际使用的值
    const displayValue = isControlled ? value : internalValue

    // 获取显示文本
    const displayText = displayValue ? displayValue.toString() : ''
    const hasValue = displayValue !== undefined

    // 处理值变化
    const handleChange = (newValue: number | undefined) => {
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
                    contentClassName
                )}
                alignOffset={5}
                sideOffset={5}
            >
                <YearPicker
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

export { YearPopover }
