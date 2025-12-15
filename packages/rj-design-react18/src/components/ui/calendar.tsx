"use client"

import * as React from "react"
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, Dropdown, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select"
import { Checkbox } from "./checkbox"
import type { DayPickerProps, Modifiers } from "react-day-picker"

type CalendarProps = DayPickerProps & {
    buttonVariant?: React.ComponentProps<typeof Button>["variant"]
    /** 是否启用行选择 */
    enableRowSelection?: boolean
    /** 是否启用列选择 */
    enableColumnSelection?: boolean
}

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "label",
    buttonVariant = "ghost",
    formatters,
    components,
    enableRowSelection = false,
    enableColumnSelection = false,
    ...props
}: CalendarProps) {
    const defaultClassNames = getDefaultClassNames()
    const [internalMonth, setInternalMonth] = React.useState<Date>(props.month || new Date())

    // 同步外部month状态
    React.useEffect(() => {
        if (props.month) {
            setInternalMonth(props.month)
        }
    }, [props.month])

    const currentMonth = props.month || internalMonth

    // 获取当前月份按周组织的日期
    const getWeeksInMonth = (date: Date) => {
        const year = date.getFullYear()
        const monthIndex = date.getMonth()
        const firstDay = new Date(year, monthIndex, 1)
        const lastDay = new Date(year, monthIndex + 1, 0)

        const firstDayOfWeek = firstDay.getDay()
        const weeks: Date[][] = []
        let currentWeek: Date[] = []

        for (let i = 0; i < firstDayOfWeek; i++) {
            currentWeek.push(new Date(year, monthIndex, 1 - firstDayOfWeek + i))
        }

        for (let d = 1; d <= lastDay.getDate(); d++) {
            currentWeek.push(new Date(year, monthIndex, d))
            if (currentWeek.length === 7) {
                weeks.push(currentWeek)
                currentWeek = []
            }
        }

        if (currentWeek.length > 0) {
            const remainingDays = 7 - currentWeek.length
            for (let i = 1; i <= remainingDays; i++) {
                currentWeek.push(new Date(year, monthIndex + 1, i))
            }
            weeks.push(currentWeek)
        }

        return weeks
    }

    // 获取按列组织的日期
    const getColumnDates = (date: Date) => {
        const weeks = getWeeksInMonth(date)
        const columns: Date[][] = Array.from({ length: 7 }, () => [])

        weeks.forEach(week => {
            week.forEach((day, index) => {
                columns[index].push(day)
            })
        })

        return columns
    }

    // 检查日期是否被选中
    const isDateSelected = (date: Date) => {
        if (props.mode !== 'multiple' || !props.selected) return false
        const selectedDates = Array.isArray(props.selected) ? props.selected : []
        return selectedDates.some(d =>
            d.getFullYear() === date.getFullYear() &&
            d.getMonth() === date.getMonth() &&
            d.getDate() === date.getDate()
        )
    }

    // 检查日期是否在当前月份
    const isDateInMonth = (date: Date, month: Date) => {
        return date.getMonth() === month.getMonth() &&
            date.getFullYear() === month.getFullYear()
    }

    // 切换整行选中状态
    const toggleRow = (rowIndex: number) => {
        if (props.mode !== 'multiple' || !props.onSelect) return

        const weeks = getWeeksInMonth(currentMonth)
        const rowDates = weeks[rowIndex].filter(date => isDateInMonth(date, currentMonth))
        const selectedDates = Array.isArray(props.selected) ? props.selected : []

        const allSelected = rowDates.every(date => isDateSelected(date))

        let newSelected: Date[]
        if (allSelected) {
            newSelected = selectedDates.filter(d => !rowDates.some(rowDate =>
                d.getFullYear() === rowDate.getFullYear() &&
                d.getMonth() === rowDate.getMonth() &&
                d.getDate() === rowDate.getDate()
            ))
        } else {
            const datesToAdd = rowDates.filter(date => !isDateSelected(date))
            newSelected = [...selectedDates, ...datesToAdd]
        }

        // 使用第一个日期作为触发日期，传递空对象作为修饰符和事件
        const triggerDate = rowDates[0] || new Date()
        const modifiers: Modifiers = {}
        const mouseEvent = new MouseEvent('click') as unknown as React.MouseEvent
        props.onSelect(newSelected, triggerDate, modifiers, mouseEvent)
    }

    // 切换整列选中状态
    const toggleColumn = (columnIndex: number) => {
        if (props.mode !== 'multiple' || !props.onSelect) return

        const columns = getColumnDates(currentMonth)
        const columnDates = columns[columnIndex].filter(date => isDateInMonth(date, currentMonth))
        const selectedDates = Array.isArray(props.selected) ? props.selected : []

        const allSelected = columnDates.every(date => isDateSelected(date))

        let newSelected: Date[]
        if (allSelected) {
            newSelected = selectedDates.filter(d => !columnDates.some(colDate =>
                d.getFullYear() === colDate.getFullYear() &&
                d.getMonth() === colDate.getMonth() &&
                d.getDate() === colDate.getDate()
            ))
        } else {
            const datesToAdd = columnDates.filter(date => !isDateSelected(date))
            newSelected = [...selectedDates, ...datesToAdd]
        }

        // 使用第一个日期作为触发日期，传递空对象作为修饰符和事件
        const triggerDate = columnDates[0] || new Date()
        const modifiers: Modifiers = {}
        const mouseEvent = new MouseEvent('click') as unknown as React.MouseEvent
        props.onSelect(newSelected, triggerDate, modifiers, mouseEvent)
    }

    // 检查整行是否全部选中
    const isRowFullySelected = (rowIndex: number) => {
        const weeks = getWeeksInMonth(currentMonth)
        const rowDates = weeks[rowIndex].filter(date => isDateInMonth(date, currentMonth))
        return rowDates.length > 0 && rowDates.every(date => isDateSelected(date))
    }

    // 检查整列是否全部选中
    const isColumnFullySelected = (columnIndex: number) => {
        const columns = getColumnDates(currentMonth)
        const columnDates = columns[columnIndex].filter(date => isDateInMonth(date, currentMonth))
        return columnDates.length > 0 && columnDates.every(date => isDateSelected(date))
    }

    const shouldShowSelections = (enableRowSelection || enableColumnSelection) && props.mode === 'multiple'

    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn(
                "bg-secondary-background border border-border-split group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
                String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
                String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
                className
            )}
            captionLayout={captionLayout}
            formatters={{
                formatMonthDropdown: (date) =>
                    date.toLocaleString("en-US", { month: "short" }),
                ...formatters,
            }}
            classNames={{
                root: cn("w-fit", defaultClassNames.root),
                months: cn(
                    "relative flex flex-col gap-4 md:flex-row",
                    defaultClassNames.months
                ),
                month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
                nav: cn(
                    "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
                    defaultClassNames.nav
                ),
                button_previous: cn(
                    buttonVariants({ variant: buttonVariant }),
                    "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50",
                    defaultClassNames.button_previous
                ),
                button_next: cn(
                    buttonVariants({ variant: buttonVariant }),
                    "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50",
                    defaultClassNames.button_next
                ),
                month_caption: cn(
                    "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
                    defaultClassNames.month_caption
                ),
                dropdowns: cn(
                    "flex h-[--cell-size] w-full items-center justify-between font-medium",
                    defaultClassNames.dropdowns
                ),
                dropdown_root: cn(
                    "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border bg-background text-foreground",
                    defaultClassNames.dropdown_root
                ),
                dropdown: cn("absolute inset-0 opacity-0", defaultClassNames.dropdown),
                caption_label: cn(
                    "select-none font-medium",
                    captionLayout === "label"
                        ? "text-sm"
                        : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
                    defaultClassNames.caption_label
                ),
                table: cn(
                    "border-collapse",
                    enableRowSelection ? "w-[calc(100%+var(--cell-size)+0.5rem)]" : "w-full"
                ),
                weekdays: cn(
                    "flex",
                    enableRowSelection && "ml-[calc(var(--cell-size)+0.5rem)]",
                    enableRowSelection && "w-[calc(100%-var(--cell-size)-0.5rem)]"
                ),
                weekday: cn(
                    "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
                    defaultClassNames.weekday
                ),
                week: cn(
                    "mt-2 flex",
                    enableRowSelection && "ml-[calc(var(--cell-size)+0.5rem)] relative",
                    enableRowSelection ? "w-[calc(100%-var(--cell-size)-0.5rem)]" : "w-full",
                    defaultClassNames.week
                ),
                week_number_header: cn(
                    "w-[--cell-size] select-none",
                    defaultClassNames.week_number_header
                ),
                week_number: cn(
                    "text-muted-foreground select-none text-[0.8rem]",
                    defaultClassNames.week_number
                ),
                day: cn(
                    ["group/day relative aspect-square h-full w-full select-none text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
                        props.mode === 'multiple' ? 'p-1' : 'p-0'
                    ],
                    defaultClassNames.day
                ),
                range_start: cn(
                    "bg-accent rounded-l-md",
                    defaultClassNames.range_start
                ),
                range_middle: cn("rounded-none", defaultClassNames.range_middle),
                range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
                today: cn(
                    "text-primary hover:text-primary rounded-md data-[selected=true]:rounded-none relative after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full",
                    defaultClassNames.today
                ),
                outside: cn(
                    "text-disabled aria-selected:text-disabled",
                    defaultClassNames.outside
                ),
                disabled: cn(
                    "text-muted-foreground opacity-50",
                    defaultClassNames.disabled
                ),
                hidden: cn("invisible", defaultClassNames.hidden),
                ...classNames,
            }}
            components={{
                Root: ({ className, rootRef, ...props }) => {
                    return (
                        <div
                            data-slot="calendar"
                            ref={rootRef}
                            className={cn(className)}
                            {...props}
                        />
                    )
                },
                Chevron: ({ className, orientation, ...props }) => {
                    if (orientation === "left") {
                        return (
                            <ChevronLeftIcon className={cn("size-4 hidden", className)} {...props} />
                        )
                    }

                    if (orientation === "right") {
                        return (
                            <ChevronRightIcon
                                className={cn("size-4 hidden", className)}
                                {...props}
                            />
                        )
                    }

                    return (
                        <ChevronDownIcon className={cn("size-4", className)} {...props} />
                    )
                },
                DayButton: CalendarDayButton,
                WeekNumber: ({ children, ...props }) => {
                    return (
                        <td {...props}>
                            <div className="flex size-[--cell-size] items-center justify-center text-center">
                                {children}
                            </div>
                        </td>
                    )
                },
                Week: ({ children, ...weekProps }) => {
                    // 始终调用 Hooks（符合 React Hooks 规则）
                    const [rowIndex, setRowIndex] = React.useState<number>(-1)
                    const trRef = React.useRef<HTMLTableRowElement>(null)

                    React.useEffect(() => {
                        if (trRef.current && enableRowSelection && shouldShowSelections) {
                            const tbody = trRef.current.parentElement
                            if (tbody) {
                                const rows = Array.from(tbody.querySelectorAll('tr'))
                                const index = rows.indexOf(trRef.current)
                                setRowIndex(index)
                            }
                        }
                    }, [children])

                    // 根据条件返回不同的渲染结果
                    if (!enableRowSelection || !shouldShowSelections) {
                        return (
                            <tr className={defaultClassNames.week} {...weekProps}>
                                {children}
                            </tr>
                        )
                    }

                    return (
                        <tr ref={trRef} className={cn(defaultClassNames.week, "relative")} {...weekProps}>
                            {rowIndex >= 0 && (
                                <td
                                    className="absolute top-0 bottom-0 pointer-events-none"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        width: 'calc(var(--cell-size) + 0.5rem)',
                                        left: 'calc(-1 * var(--cell-size) - 0.5rem)',
                                        paddingRight: '0.5rem'
                                    }}
                                >
                                    <div className="pointer-events-auto">
                                        <Checkbox
                                            checked={isRowFullySelected(rowIndex)}
                                            onCheckedChange={() => toggleRow(rowIndex)}
                                        />
                                    </div>
                                </td>
                            )}
                            {children}
                        </tr>
                    )
                },
                Weekdays: ({ children, ...weekdaysProps }) => {
                    if (!enableColumnSelection || !shouldShowSelections) {
                        return (
                            <div className={defaultClassNames.weekdays} {...weekdaysProps}>
                                {children}
                            </div>
                        )
                    }

                    return (
                        <>
                            {/* 列选择checkbox行 */}
                            <div className="flex h-[--cell-size] mb-2">
                                {/* 如果启用了行选择,添加左侧占位 */}
                                {enableRowSelection && (
                                    <div className="w-[calc(var(--cell-size)+0.5rem)]" />
                                )}
                                {/* 7列checkbox */}
                                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                                    <div
                                        key={index}
                                        className="flex-1 flex items-center justify-center"
                                    >
                                        <Checkbox
                                            checked={isColumnFullySelected(index)}
                                            onCheckedChange={() => toggleColumn(index)}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* 原weekdays */}
                            <div className={defaultClassNames.weekdays} {...weekdaysProps}>
                                {children}
                            </div>
                        </>
                    )
                },
                DropdownNav: ({ children, ...subProps }) => (
                    <div {...subProps}>
                        <div className="flex flex-row gap-2">
                            {children}
                        </div>
                        <Button
                            variant="link"
                            size="md"
                            onClick={() => {
                                const today = new Date()
                                if (props.onMonthChange) props.onMonthChange(today)

                            }}
                            className="text-[12px] leading-[20px] font-semibold"
                        >
                            当前
                        </Button>
                    </div>
                ),
                MonthsDropdown: CalendarDropdown,
                YearsDropdown: CalendarDropdown,
                ...components,
            }}
            {...props}
        />
    )
}

function CalendarDayButton({
    className,
    day,
    modifiers,
    ...props
}: React.ComponentProps<typeof DayButton>) {
    const defaultClassNames = getDefaultClassNames()

    const ref = React.useRef<HTMLButtonElement>(null)
    React.useEffect(() => {
        if (modifiers.focused) ref.current?.focus()
    }, [modifiers.focused])

    return (
        <Button
            ref={ref}
            variant="ghost"
            size="icon"
            data-day={day.date.toLocaleDateString()}
            data-selected-single={
                modifiers.selected &&
                !modifiers.range_start &&
                !modifiers.range_end &&
                !modifiers.range_middle
            }
            data-range-start={modifiers.range_start}
            data-range-end={modifiers.range_end}
            data-range-middle={modifiers.range_middle}
            className={cn(
                [
                    !modifiers.outside && "text-secondary",
                    modifiers.today && "text-primary",
                    "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-text data-[selected-single=true]:rounded-md",
                    "data-[range-middle=true]:bg-fill data-[range-middle=true]:text-secondary-information data-[range-middle=true]:rounded-none",
                    "data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground",
                ],
                "group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
                defaultClassNames.day,
                className
            )}
            {...props}
        />
    )
}

function CalendarDropdown({
    options,
    value: externalValue,
    onChange,
}: React.ComponentProps<typeof Dropdown>) {

    const handleValueChange = (current: string) => {
        const selectedOption = options?.find(opt => opt.value.toString() === current)
        if (selectedOption && onChange) {
            const syntheticEvent = {
                target: { value: selectedOption.value.toString() }
            } as React.ChangeEvent<HTMLSelectElement>
            onChange(syntheticEvent)
        }
    }

    return (
        <div className="w-[80px]">
            <Select value={externalValue?.toString()} onValueChange={handleValueChange}>
                <SelectTrigger className="bg-third-background h-[32px] text-secondary-information border-none">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="h-[300px] bg-third-background border-none" >
                    <SelectGroup>
                        {
                            options?.map((item) => {
                                return (<SelectItem key={item.value} value={item.value.toString()}>{item.label}</SelectItem>)
                            })
                        }
                    </SelectGroup>

                </SelectContent>
            </Select>
        </div>
    )
}

export { Calendar, CalendarDayButton }