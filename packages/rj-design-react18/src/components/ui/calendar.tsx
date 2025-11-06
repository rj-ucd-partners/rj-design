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
                <SelectTrigger className="bg-third-background h-[32px] text-secondary-information">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="h-[300px] bg-third-background" >
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