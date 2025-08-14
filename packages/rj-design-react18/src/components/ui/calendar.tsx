"use client";

import * as React from "react";
import { DayButton, DayPicker, Dropdown, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Button, buttonVariants } from "./button";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const calendarVariants = cva(
    "",
    {
        variants: {
            variant: {
                primary: "bg-secondary-background rounded-md",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
)

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
    buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
    const defaultClassNames = getDefaultClassNames()

    return (
        <DayPicker
            locale={props.locale}
            showOutsideDays={showOutsideDays}
            className={cn(
                "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
                String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
                String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
                className,
                calendarVariants({})
            )}
            captionLayout={captionLayout}
            formatters={{
                formatMonthDropdown: (date) =>
                    date.toLocaleString("default", { month: "short" }),
                ...formatters,
            }}
            classNames={{
                root: cn("w-fit", defaultClassNames.root),
                months: cn(
                    "flex gap-4 flex-col md:flex-row relative",
                    defaultClassNames.months
                ),
                month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
                nav: cn(
                    // "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
                    "hidden",
                    defaultClassNames.nav
                ),
                button_previous: cn(
                    buttonVariants({ variant: buttonVariant }),
                    "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
                    defaultClassNames.button_previous
                ),
                button_next: cn(
                    buttonVariants({ variant: buttonVariant }),
                    "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
                    defaultClassNames.button_next
                ),
                month_caption: cn(
                    "flex items-center justify-center h-(--cell-size) w-full px-2.5",
                    defaultClassNames.month_caption
                ),
                dropdowns: cn(
                    "w-full flex items-center text-sm font-medium justify-start h-(--cell-size) gap-2",
                    defaultClassNames.dropdowns
                ),
                dropdown_root: cn(
                    "bg-third-background text-secondary relative w-20 h-7.5 rounded-md",
                    defaultClassNames.dropdown_root
                ),
                dropdown: cn(
                    "absolute bg-third-background inset-0 opacity-0 ",
                    defaultClassNames.dropdown
                ),
                caption_label: cn(
                    "select-none font-medium",
                    captionLayout === "label"
                        ? "text-sm"
                        : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
                    defaultClassNames.caption_label
                ),
                table: "w-full border-collapse",
                weekdays: cn("flex", defaultClassNames.weekdays),
                weekday: cn(
                    "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
                    defaultClassNames.weekday
                ),
                week: cn("flex w-full mt-2", defaultClassNames.week),
                week_number_header: cn(
                    "select-none w-(--cell-size)",
                    defaultClassNames.week_number_header
                ),
                week_number: cn(
                    "text-[0.8rem] select-none text-muted-foreground",
                    defaultClassNames.week_number
                ),
                day: cn(
                    "relative w-full h-full p-2.5 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
                    defaultClassNames.day
                ),
                range_start: cn(
                    "rounded-l-md bg-accent",
                    defaultClassNames.range_start
                ),
                range_middle: cn("rounded-none", defaultClassNames.range_middle),
                range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
                today: cn(
                    "bg-transparent text-accent-foreground rounded-md",
                    "*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary *:after:transition-colors",
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
                            <ChevronLeftIcon className={cn("size-4", className)} {...props} />
                        )
                    }

                    if (orientation === "right") {
                        return (
                            <ChevronRightIcon
                                className={cn("size-4", className)}
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
                            <div className="flex size-(--cell-size) items-center justify-center text-center">
                                {children}
                            </div>
                        </td>
                    )
                },
                YearsDropdown: CalendarDropdown,
                MonthsDropdown: CalendarDropdown,
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
            variant="day"
            size="day"
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
                "data-[selected-single=true]:text-primary data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-primary flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
                defaultClassNames.day,
                className
            )}
            {...props}
        />
    )
}

function CalendarDropdown({
    onChange,
    options,
    ...props
}: React.ComponentProps<typeof Dropdown>) {
    const [placeholder, setPlaceholder] = React.useState<string>();

    React.useEffect(() => {
        if (options) {
            if (options.length > 12) {
                const year = options.find(x => x.value == props.value);
                if (year) {
                    setPlaceholder(year.label);
                }
            } else {
                setPlaceholder(options[props.value as number].label);
            }
        }
    }, [])

    return (
        <Select onValueChange={(value) => {
            // props.onChange()
            if (onChange) {
                const syntheticEvent = {
                    target: { value },
                    currentTarget: { value }
                } as React.ChangeEvent<HTMLSelectElement>;
                onChange(syntheticEvent);
            }
        }} >
            <SelectTrigger variant={"default"} size={'dropdown'} className="text-secondary-information" >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {
                    options?.
                        slice()
                        .sort((a, b) => Number(b.value) - Number(a.value)).
                        map((option) => (
                            <SelectItem key={option.value} value={option.value.toString()}>{option.label}</SelectItem>
                        ))
                }
            </SelectContent>
        </Select>
    );
}

export { Calendar, CalendarDayButton }