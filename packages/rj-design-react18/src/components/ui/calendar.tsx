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
import type { BaseNode } from "@/common/type"
import { Select } from "./select"

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "label",
    buttonVariant = "ghost",
    formatters,
    components,
    ...props
}: React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>["variant"],
}) {
    const defaultClassNames = getDefaultClassNames()

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
                month: cn("flex w-full flex-col  gap-4", defaultClassNames.month),
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
                table: "w-full border-collapse",
                weekdays: cn("flex", defaultClassNames.weekdays),
                weekday: cn(
                    "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
                    defaultClassNames.weekday
                ),
                week: cn("mt-2 flex w-full", defaultClassNames.week),
                week_number_header: cn(
                    "w-[--cell-size] select-none",
                    defaultClassNames.week_number_header
                ),
                week_number: cn(
                    "text-muted-foreground select-none text-[0.8rem]",
                    defaultClassNames.week_number
                ),
                day: cn(
                    "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
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
                    "text-muted-foreground aria-selected:text-muted-foreground",
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
                DropdownNav: ({ children, ...subProps }) => (
                    <div {...subProps}>
                        <div className="flex flex-row gap-4">
                            {children}
                        </div>
                        <Button
                            variant="link"
                            size="md"
                            onClick={() => {
                                const today = new Date()
                                if (props.onMonthChange) props.onMonthChange(today)

                            }}
                            className="text-md"
                        >
                            当前
                        </Button>
                    </div>
                ),
                MonthsDropdown: CalendarMonthDropdown,
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
                    "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-text data-[selected-single=true]:rounded-md",
                ],
                "data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
                defaultClassNames.day,
                className
            )}
            {...props}
        />
    )
}

function CalendarMonthDropdown({
    options,
    onChange,
}: React.ComponentProps<typeof Dropdown>) {
    // 受控优先：从 options 推导当前选中的月份
    const currentValueFromOptions = React.useMemo(() => {
        if (!options || options.length === 0) return undefined
        // 优先找带 selected 标记的项；若无，则回退为 DayPicker 提供的第一个匹配当前月的项（value 等于当前展示的月份索引）
        const selected = (options as any[]).find((o) => o.selected)
        if (selected) return String(selected.value)
        // 假设 options 顺序是 0..11，且当前月份由 DayPicker 控制，尽量不做浪漫假设，若无法识别则不返回
        return undefined
    }, [options])

    const [value, setValue] = React.useState<string>("")

    // 构建数据源（英文缩写）
    const datasource: BaseNode[] = React.useMemo(() =>
        options?.map(item => ({
            key: item.value.toString(),
            label: new Date(2000, Number(item.value), 1).toLocaleString("en-US", { month: "short" }),
        } as BaseNode)) ?? [],
        [options])

    // 当 options 变化时，同步当前选中值；若无法从 options 识别，则回退为当前日期月份字符串
    React.useEffect(() => {
        if (currentValueFromOptions != null) {
            setValue(currentValueFromOptions)
        } else {
            const date = new Date()
            setValue(date.getMonth().toString())
        }
    }, [currentValueFromOptions, options])

    const handleValueChange = (newValue: string) => {
        setValue(newValue)
        if (onChange) {
            const event = {
                target: { value: newValue }
            } as React.ChangeEvent<HTMLSelectElement>
            onChange(event)
        }
    }

    return (
        <Select
            datasource={datasource}
            value={value}
            onValueChange={handleValueChange}
            contentClassName="bg-secondary-background text-text-deep border border-border shadow-md"
            itemClassName="bg-secondary-background text-text-deep hover:bg-fill-light-hover-bg data-[state=checked]:bg-primary-light data-[state=checked]:text-primary"
            size="sm"
        />
    )
}

export { Calendar, CalendarDayButton }