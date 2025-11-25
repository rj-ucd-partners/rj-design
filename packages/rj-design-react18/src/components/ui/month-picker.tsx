"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select"

export interface MonthPickerProps {
    className?: string,
    value?: { year: number, month: number }, // 选中的年月 (month: 1-12)
    onChange?: (value: { year: number, month: number } | undefined) => void, // 支持 undefined 以便清空选择
    showFooter?: boolean,
    footChildren?: React.ReactNode,
    onConfirm?: () => void,
    onCancel?: () => void,
    showHeader?: boolean,
    headerChildren?: React.ReactNode,
    minYear?: number, // 最小年份
    maxYear?: number, // 最大年份
}

function MonthPicker({
    className,
    value,
    onChange,
    showFooter = false,
    footChildren,
    onConfirm,
    onCancel,
    showHeader = false,
    headerChildren,
    minYear = 1970,
    maxYear = 2050,
}: MonthPickerProps) {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1 // 1-12

    // 内部状态：当前显示的年份
    const [displayYear, setDisplayYear] = React.useState(value?.year || currentYear)

    // 生成年份选项
    const generateYearOptions = () => {
        const options: { value: string, label: string }[] = []
        for (let year = minYear; year <= maxYear; year++) {
            options.push({
                value: year.toString(),
                label: `${year}年`
            })
        }
        return options
    }

    const yearOptions = generateYearOptions()

    // 处理年份切换
    const handleYearChange = (year: string) => {
        setDisplayYear(parseInt(year))
    }

    // 处理"当前"按钮点击
    const handleCurrentClick = () => {
        setDisplayYear(currentYear)
    }

    // 12个月份
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    // 处理月份点击
    const handleMonthClick = (month: number) => {
        onChange?.({ year: displayYear, month })
    }

    // 判断是否是当前月
    const isCurrentMonth = (month: number) => {
        return displayYear === currentYear && month === currentMonth
    }

    // 判断是否选中
    const isSelected = (month: number) => {
        return value?.year === displayYear && value?.month === month
    }

    return (
        <div className="flex flex-col">
            {showHeader && (
                <div className="flex-shrink-0 h-12 px-3 py-2 border-b border-border-disabled flex items-center justify-between">
                    <div className="flex-1">
                        {headerChildren}
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="link"
                            size="sm"
                            onClick={onCancel}
                            className="text-[11px]"
                        >
                            取消
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={onConfirm}
                            className="text-[11px]"
                        >
                            确定
                        </Button>
                    </div>
                </div>
            )}
            <div
                className={cn(
                    "flex-1 aspect-[5/3] overflow-hidden flex flex-col",
                    className
                )}
            >
                {/* 顶部：年份选择器 + 当前按钮 */}
                <div className="flex-shrink-0 px-4 pt-4 pb-2 flex items-center justify-between">
                    <Select
                        value={displayYear.toString()}
                        onValueChange={handleYearChange}
                    >
                        <SelectTrigger className="w-[120px] px-2 h-8 bg-third-background text-secondary-information !border-0 focus:!ring-0 !shadow-none flex items-center justify-between">
                            <SelectValue placeholder={`${displayYear}年`}>
                                {displayYear}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-third-background border-none">
                            <SelectGroup>
                                {yearOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button
                        variant="link"
                        size="sm"
                        onClick={handleCurrentClick}
                        className="text-xs text-primary"
                    >
                        当前
                    </Button>
                </div>

                {/* 月份网格 (4行 × 3列) */}
                <div className="flex-1 px-4 pb-4 grid grid-cols-3 auto-rows-fr gap-2">
                    {months.map((month) => {
                        const isCurrent = isCurrentMonth(month)
                        const selected = isSelected(month)

                        return (
                            <button
                                key={month}
                                onClick={() => handleMonthClick(month)}
                                className={cn(
                                    "relative flex items-center justify-center rounded-md text-sm transition-colors",
                                    "hover:bg-fill-dark-hover-active-disabled",
                                    !selected && "text-second-information",
                                    isCurrent && "text-primary",
                                    selected && "bg-primary text-text hover:bg-primary/90",
                                )}
                            >
                                {month}月
                                {isCurrent && !selected && (
                                    <span className="absolute bottom-[-2px] w-1 h-1 rounded-full bg-primary" />
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>
            {showFooter && (
                <div className="flex-shrink-0 h-12 px-3 py-2 border-t border-border-disabled flex items-center justify-between">
                    <div className="flex-1">
                        {footChildren}
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="link"
                            size="sm"
                            onClick={onCancel}
                            className="text-[11px]"
                        >
                            取消
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={onConfirm}
                            className="text-[11px]"
                        >
                            确定
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export { MonthPicker }
