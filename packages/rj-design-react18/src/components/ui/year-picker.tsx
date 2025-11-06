"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select"

export interface YearPickerProps {
    className?: string,
    value?: number, // 选中的年份
    onChange?: (year: number) => void,
    showFooter?: boolean,
    footChildren?: React.ReactNode,
    onConfirm?: () => void,
    onCancel?: () => void,
    showHeader?: boolean,
    headerChildren?: React.ReactNode,
    minYear?: number, // 最小年份
    maxYear?: number, // 最大年份
}

function YearPicker({
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
}: YearPickerProps) {
    const currentYear = new Date().getFullYear()

    // 计算当前显示的年份范围（10年一组，但显示12年包含前后各1年）
    // 确保起始年份是以 minYear 为基准的10的倍数
    const getYearRange = (year: number) => {
        // 计算相对于 minYear 的偏移，然后找到对应的10年区间起始点
        const offset = year - minYear
        const groupIndex = Math.floor(offset / 10)
        const startYear = minYear + (groupIndex * 10)
        return { start: startYear, end: startYear + 9 }
    }

    // 内部状态：当前查看的年份范围
    const [displayYear, setDisplayYear] = React.useState(value || currentYear)
    const yearRange = getYearRange(displayYear)

    // 生成年份范围选项（每10年一组，从 minYear 开始）
    const generateYearRangeOptions = () => {
        const options: { value: string, label: string }[] = []
        // 从 minYear 开始，每10年一组
        for (let year = minYear; year <= maxYear; year += 10) {
            const end = Math.min(year + 9, maxYear)
            // 显示范围包含前后各1年，共12年
            const displayStart = year
            const displayEnd = end
            options.push({
                value: year.toString(),
                label: `${displayStart}-${displayEnd}`
            })
        }
        return options
    }

    const yearRangeOptions = generateYearRangeOptions()

    // 处理年份范围切换
    const handleRangeChange = (rangeStart: string) => {
        setDisplayYear(parseInt(rangeStart))
    }

    // 处理"当前"按钮点击
    const handleCurrentClick = () => {
        setDisplayYear(currentYear)
    }

    // 生成12个年份（3列 × 4行）：前1年 + 10年 + 后1年
    const generateYears = () => {
        const years: number[] = []
        // 包含前一年
        years.push(yearRange.start - 1)
        // 10年范围
        for (let i = 0; i < 10; i++) {
            years.push(yearRange.start + i)
        }
        // 包含后一年
        years.push(yearRange.end + 1)
        return years
    }

    const years = generateYears()

    // 处理年份点击
    const handleYearClick = (year: number) => {
        // 点击前一年：往前跳10年（一个区间）
        if (year === yearRange.start - 1) {
            const newStart = yearRange.start - 10
            // 检查是否超出最小年份
            if (newStart >= minYear) {
                setDisplayYear(newStart)
            }
            return
        }

        // 点击后一年：往后跳10年（一个区间）
        if (year === yearRange.end + 1) {
            const newStart = yearRange.start + 10
            // 检查是否超出最大年份
            if (newStart <= maxYear) {
                setDisplayYear(newStart)
            }
            return
        }

        // 点击区间内的年份：正常选择
        if (year >= yearRange.start && year <= yearRange.end) {
            if (year >= minYear && year <= maxYear) {
                onChange?.(year)
            }
        }
    }

    // 判断年份状态
    const isDisabled = (year: number) => {
        // 前一年：检查往前跳10年是否超出范围
        if (year === yearRange.start - 1) {
            return yearRange.start - 10 < minYear
        }

        // 后一年：检查往后跳10年是否超出范围
        if (year === yearRange.end + 1) {
            return yearRange.start + 10 > maxYear
        }

        // 区间内的年份：检查是否在有效范围内
        return year < minYear || year > maxYear
    }

    const isExtra = (year: number) => {
        return year < yearRange.start || year > yearRange.end
    }

    const isToday = (year: number) => {
        return year === currentYear
    }

    const isSelected = (year: number) => {
        return year === value
    }

    // 获取当前年份范围的标签（显示12年）
    const getCurrentRangeLabel = () => {
        const displayStart = yearRange.start
        const displayEnd = yearRange.end
        return `${displayStart}-${displayEnd}`
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

                {/* 顶部：年份范围选择器 + 当前按钮 */}
                <div className="flex-shrink-0 px-4 pt-4 pb-2 flex items-center justify-between">
                    <Select
                        value={yearRange.start.toString()}
                        onValueChange={handleRangeChange}
                    >
                        <SelectTrigger className="w-auto h-8 bg-third-background text-secondary-information">
                            <SelectValue placeholder={getCurrentRangeLabel()}>
                                {getCurrentRangeLabel()}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-third-background">
                            <SelectGroup>
                                {yearRangeOptions.map((option) => (
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
                        className="text-[12px] leading-[20px] font-semibold h-6"
                    >
                        当前
                    </Button>
                </div>

                {/* 主体：年份网格（3列 × 4行），flex-1 填充剩余空间，形成正方形 */}
                <div className="flex-1 py-3  flex flex-col justify-between gap-3">
                    {/* 第一行：前一年 + 2年 */}
                    <div className="w-full h-full  flex items-center justify-between gap-[10px]">
                        {years.slice(0, 3).map((year) => (
                            <YearButton
                                key={year}
                                year={year}
                                isDisabled={isDisabled(year)}
                                isExtra={isExtra(year)}
                                isToday={isToday(year)}
                                isSelected={isSelected(year)}
                                onClick={() => handleYearClick(year)}
                            />
                        ))}
                    </div>

                    {/* 第二行：3年 */}
                    <div className="w-full h-full flex items-center justify-between gap-[10px]">
                        {years.slice(3, 6).map((year) => (
                            <YearButton
                                key={year}
                                year={year}
                                isDisabled={isDisabled(year)}
                                isExtra={isExtra(year)}
                                isToday={isToday(year)}
                                isSelected={isSelected(year)}
                                onClick={() => handleYearClick(year)}
                            />
                        ))}
                    </div>

                    {/* 第三行：3年 */}
                    <div className="w-full h-full flex items-center justify-between gap-[10px]">
                        {years.slice(6, 9).map((year) => (
                            <YearButton
                                key={year}
                                year={year}
                                isDisabled={isDisabled(year)}
                                isExtra={isExtra(year)}
                                isToday={isToday(year)}
                                isSelected={isSelected(year)}
                                onClick={() => handleYearClick(year)}
                            />
                        ))}
                    </div>

                    {/* 第四行：3年 */}
                    <div className="w-full h-full flex items-center justify-between gap-[10px]">
                        {years.slice(9, 12).map((year) => (
                            <YearButton
                                key={year}
                                year={year}
                                isDisabled={isDisabled(year)}
                                isExtra={isExtra(year)}
                                isToday={isToday(year)}
                                isSelected={isSelected(year)}
                                onClick={() => handleYearClick(year)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* 底部：自定义区域 + 操作按钮 */}
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

interface YearButtonProps {
    year: number,
    isDisabled?: boolean,
    isExtra?: boolean,
    isToday?: boolean,
    isSelected?: boolean,
    onClick?: () => void,
}

function YearButton({
    year,
    isDisabled = false,
    isExtra = false,
    isToday = false,
    isSelected = false,
    onClick,
}: YearButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={cn(
                "relative flex-1 rounded overflow-hidden transition-colors",
                "flex items-center justify-center",
                "text-[13px] font-normal",
                "w-full h-full",
                // 默认状态（区间内的年份）
                !isDisabled && !isExtra && !isToday && !isSelected && "text-secondary hover:bg-fill",
                // 区间外的年份（前后各1年，用于跳转）- 次级强调样式
                !isDisabled && isExtra && !isSelected && "text-disabled hover:bg-fill",
                // 禁用状态
                isDisabled && "text-disabled cursor-not-allowed",
                // 当前年份（带下方标记）
                isToday && !isSelected && "text-primary",
                // 选中状态
                isSelected && "bg-primary text-primary-foreground",
            )}
        >
            <span className="relative z-10">{year}</span>

            {/* 当前年份的下方圆点标记 */}
            {isToday && !isSelected && (
                <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
            )}
        </button>
    )
}

export { YearPicker }
