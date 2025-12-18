import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import * as React from "react";
import { type DateRange } from "react-day-picker";
import { CloseIcon } from "../icon/CloseIcon";
import { InputGroup, InputGroupButton, InputGroupInput, InputGroupAddon } from "./InputGroup";
import { Calendar } from "./Calendar";
import { TimePickerContent, formatTimeValue, type TimeValue } from "./TimePicker";
import { enUS } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "./Button";
import type { JSX } from "react";

// 单个日期时间值
export interface CalendarTimeValue {
    date?: Date,
    time?: TimeValue,
}

// 日期时间范围值
export interface CalendarTimeRangeValue {
    start?: CalendarTimeValue,
    end?: CalendarTimeValue,
}

// 基础 Props
interface CalendarPopoverBaseProps {
    size?: 'sm' | 'md' | 'lg',
    contentClassName?: string,
    onConfirm?: () => void,
    onCancel?: () => void,
    showFooter?: boolean,
    footChildren?: JSX.Element | React.ReactNode,
    showHeader?: boolean,
    headerChildren?: JSX.Element | React.ReactNode,
}

// Single 模式 Props
export interface CalendarPopoverSingleProps extends CalendarPopoverBaseProps {
    mode: 'single',
    value?: CalendarTimeValue,
    onChange?: (value: CalendarTimeValue | undefined) => void,
    showTime?: boolean, // 是否显示时间选择
    timeFormat?: "hh:mm:ss" | "hh:mm" | "hh:mm:ss a" | "hh:mm a",
    mouth?: Date,
    onMonthChange?: (mouth: Date) => void,
}

// Range 模式 Props（不支持时间选择）
export interface CalendarPopoverRangeProps extends Omit<CalendarPopoverBaseProps, 'showTime' | 'timeFormat'> {
    mode: 'range',
    value?: DateRange,
    onChange?: (value: DateRange | undefined) => void,
    mouth?: Date,
    onMonthChange?: (mouth: Date) => void,
    numberOfMonths?: number, // 显示多个月份
}

// Multiple 模式 Props（多选多个日期，只有日期没有时间）
export interface CalendarPopoverMultipleProps extends CalendarPopoverBaseProps {
    mode: 'multiple',
    value?: Date[],
    onChange?: (value: Date[] | undefined) => void,
    mouth?: Date,
    onMonthChange?: (mouth: Date) => void,
    /** 是否启用行选择 */
    enableRowSelection?: boolean,
    /** 是否启用列选择 */
    enableColumnSelection?: boolean,
}

// 联合类型
export type CalendarPopoverProps = CalendarPopoverSingleProps | CalendarPopoverRangeProps | CalendarPopoverMultipleProps


function CalendarPopover(props: CalendarPopoverProps) {
    const {
        size = 'md',
        contentClassName,
        mode,
        value,
        onChange,
        onConfirm,
        onCancel,
        showFooter,
    } = props;

    // 只有 single 模式才有 showTime 和 timeFormat
    const showTime = mode === 'single' ? (props.showTime ?? false) : false;
    const timeFormat = mode === 'single' ? (props.timeFormat ?? 'hh:mm:ss') : 'hh:mm:ss';

    // 判断是否为受控组件（通过是否传入 onChange 来判断，而不是 value !== undefined）
    // 这样可以避免 value 从有值变成 undefined 时，组件从受控切换到非受控的问题
    const isControlled = onChange !== undefined;

    // Popover 打开状态
    const [open, setOpen] = React.useState(false);

    // 内部状态（非受控模式）
    const [internalValue, setInternalValue] = React.useState<CalendarTimeValue | DateRange | Date[] | undefined>();

    // 实际使用的值
    const displayValue = isControlled ? value : internalValue;

    // 格式化显示文本
    const formatDisplayText = (val: CalendarTimeValue | undefined): string => {
        if (!val?.date) return '';
        const dateStr = val.date.toLocaleDateString('zh-CN');
        if (showTime && val.time) {
            const timeStr = formatTimeValue(val.time, timeFormat);
            return `${dateStr} ${timeStr}`;
        }
        return dateStr;
    };

    // 获取显示文本
    const getDisplayText = () => {
        if (mode === 'single') {
            return formatDisplayText(displayValue as CalendarTimeValue);
        } else if (mode === 'range') {
            const rangeValue = displayValue as DateRange;
            const startText = rangeValue?.from ? rangeValue.from.toLocaleDateString('zh-CN') : '';
            const endText = rangeValue?.to ? rangeValue.to.toLocaleDateString('zh-CN') : '';
            return { start: startText, end: endText };
        } else {
            // multiple 模式 - 多个日期用分号拼接
            const dates = displayValue as Date[];
            if (!dates || dates.length === 0) return '';
            return dates.map(date => date.toLocaleDateString('zh-CN')).join('; ');
        }
    };

    const displayText = getDisplayText();
    const hasValue = mode === 'single'
        ? !!(displayValue as CalendarTimeValue)?.date
        : mode === 'range'
            ? !!((displayValue as DateRange)?.from || (displayValue as DateRange)?.to)
            : !!((displayValue as Date[])?.length > 0);

    // 处理值变化
    const handleChange = (newValue: CalendarTimeValue | DateRange | Date[] | undefined) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        if (onChange) {
            // 类型安全：根据 mode 调用对应的 onChange
            if (mode === 'single') {
                (onChange as CalendarPopoverSingleProps['onChange'])?.(newValue as CalendarTimeValue | undefined);
            } else if (mode === 'range') {
                (onChange as CalendarPopoverRangeProps['onChange'])?.(newValue as DateRange | undefined);
            } else {
                (onChange as CalendarPopoverMultipleProps['onChange'])?.(newValue as Date[] | undefined);
            }
        }
    };

    // 处理清空
    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleChange(undefined);
    };

    // 处理确认
    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
        setOpen(false);
    };

    // 处理取消
    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                {mode === "range" ? (
                    <InputGroup variant={'primary'} size={size}>
                        <InputGroupInput
                            placeholder='开始日期'
                            value={typeof displayText === 'object' ? displayText.start : ''}
                            readOnly
                        />
                        <span className="text-secondary px-1">-</span>
                        <InputGroupInput
                            placeholder='终止日期'
                            value={typeof displayText === 'object' ? displayText.end : ''}
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
                ) : (
                    <InputGroup variant={'primary'} size={size}>
                        <InputGroupInput
                            placeholder='选择日期'
                            value={typeof displayText === 'string' ? displayText : ''}
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
                )}
            </PopoverTrigger>
            <PopoverContent
                className={cn(
                    "w-[var(--radix-popover-trigger-width)]",
                    "bg-secondary-background",
                    "rounded-md",
                    "border border-border-split",
                    "shadow-[0px_6px_16px_rgba(0,0,0,0.08)]",
                    contentClassName
                )}
                alignOffset={5}
                sideOffset={5}
            >
                {mode === 'single' && (
                    <CalendarSingleContent
                        value={displayValue as CalendarTimeValue}
                        onChange={handleChange}
                        showTime={showTime}
                        timeFormat={timeFormat}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                        mouth={props.mouth}
                        onMonthChange={props.onMonthChange}
                        showFooter={showFooter}
                        footChildren={props.footChildren}
                        showHeader={props.showHeader}
                        headerChildren={props.headerChildren}
                    />
                )}
                {mode === 'range' && (
                    <CalendarRangeContent
                        value={displayValue as DateRange}
                        onChange={handleChange}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                        mouth={props.mouth}
                        onMonthChange={props.onMonthChange}
                        numberOfMonths={props.numberOfMonths}
                        showFooter={showFooter}
                        footChildren={props.footChildren}
                        showHeader={props.showHeader}
                        headerChildren={props.headerChildren}
                    />
                )}
                {mode === 'multiple' && (
                    <CalendarMultipleContent
                        value={displayValue as Date[]}
                        onChange={handleChange}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                        mouth={props.mouth}
                        onMonthChange={props.onMonthChange}
                        showFooter={showFooter}
                        footChildren={props.footChildren}
                        showHeader={props.showHeader}
                        headerChildren={props.headerChildren}
                        enableRowSelection={props.enableRowSelection}
                        enableColumnSelection={props.enableColumnSelection}
                    />
                )}
            </PopoverContent>
        </Popover>
    );
}


interface CalendarSingleContentProps {
    value?: CalendarTimeValue,
    onChange: (value: CalendarTimeValue | undefined) => void,
    showTime: boolean,
    timeFormat: "hh:mm:ss" | "hh:mm" | "hh:mm:ss a" | "hh:mm a",
    showFooter?: boolean,
    footChildren?: React.ReactNode | JSX.Element,
    onConfirm?: () => void,
    onCancel?: () => void,
    showHeader?: boolean,
    headerChildren?: React.ReactNode | JSX.Element,
    mouth?: Date,
    onMonthChange?: (mouth: Date) => void,
}

function CalendarSingleContent({
    value,
    onChange,
    showTime,
    timeFormat,
    showFooter,
    footChildren,
    showHeader,
    headerChildren,
    onConfirm,
    onCancel,
    mouth,
    onMonthChange

}: CalendarSingleContentProps) {
    const calendarRef = React.useRef<HTMLDivElement>(null);
    const [calendarHeight, setCalendarHeight] = React.useState<number>(0);

    // 监听 Calendar 高度变化
    React.useEffect(() => {
        if (calendarRef.current && showTime) {
            setCalendarHeight(calendarRef.current.offsetHeight);

            const resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    setCalendarHeight(entry.contentRect.height);
                }
            });
            resizeObserver.observe(calendarRef.current);
            return () => resizeObserver.disconnect();
        }
    }, [showTime]);

    // 处理日期变化
    const handleDateChange = (date: Date | undefined) => {
        if (!date) {
            onChange(undefined);
            return;
        }

        onChange({
            date,
            time: value?.time || (showTime ? { hour: 0, minute: 0, second: 0, period: 'AM' } : undefined),
        });
    };

    // 处理时间变化
    const handleTimeChange = (time?: TimeValue) => {
        onChange({
            date: value?.date || new Date(),
            time,
        });
    };

    return (
        <div className="flex flex-col w-full">
            {
                showHeader && (
                    <div className="flex items-center justify-between gap-2 py-2 px-3 border-t border-border-disabled flex-1">
                        {/* 工作区 */}
                        <div className="flex-1">
                            {headerChildren}
                        </div>
                        {/* 操作区 */}
                        <div className="inline-flex items-center gap-2">
                            <Button
                                variant={"link"}
                                size={'md'}
                                onClick={onCancel}
                            >
                                取消
                            </Button>
                            <Button
                                variant={"primary"}
                                size={'md'}
                                onClick={onConfirm}
                            >
                                确认
                            </Button>
                        </div>
                    </div>
                )
            }
            <div className="flex flex-row w-full">
                <div
                    ref={calendarRef}
                    className={cn(
                        "flex-shrink-0",
                        showTime ? "w-[55%] border-r border-border-disabled" : "w-full",
                    )}
                >
                    <Calendar
                        locale={enUS}
                        mode="single"
                        selected={value?.date}
                        onSelect={handleDateChange}
                        captionLayout="dropdown"
                        className="rounded-md w-full border-none"
                        month={mouth}
                        onMonthChange={onMonthChange}
                    />
                </div>
                {showTime && calendarHeight > 0 && (
                    <div className="flex-shrink-0 w-[45%] flex-col" style={{ height: `${calendarHeight}px` }}>
                        <div className="flex flex-1 h-[42px] items-center justify-center pt-4">
                            {value?.time ? <span className="text-sm text-secondary-text">{formatTimeValue(value.time, timeFormat)}</span> : <span className="text-sm text-secondary-text">请选择时间</span>}
                        </div>
                        <TimePickerContent
                            format={timeFormat}
                            value={value?.time}
                            onConfirm={handleTimeChange}
                            className="h-[100px]"
                            style={{ height: `${calendarHeight - 42}px` }}
                            showFoot={false}
                        />
                    </div>

                )}
            </div>
            {
                showFooter && (
                    <div className="flex items-center justify-between gap-2 py-2 px-3 border-t border-border-disabled flex-1">
                        {/* 工作区 */}
                        <div className="flex-1">
                            {footChildren}
                        </div>
                        {/* 操作区 */}
                        <div className="inline-flex items-center gap-2">
                            <Button
                                variant={"link"}
                                size={'md'}
                                onClick={onCancel}
                            >
                                取消
                            </Button>
                            <Button
                                variant={"primary"}
                                size={'md'}
                                onClick={onConfirm}
                            >
                                确认
                            </Button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

interface CalendarMultipleContentProps {
    value?: Date[], // 多个日期数组
    onChange: (value: Date[] | undefined) => void,
    showFooter?: boolean,
    footChildren?: React.ReactNode | JSX.Element,
    onConfirm?: () => void,
    onCancel?: () => void,
    showHeader?: boolean,
    headerChildren?: React.ReactNode | JSX.Element,
    mouth?: Date,
    onMonthChange?: (mouth: Date) => void,
    /** 是否启用行选择 */
    enableRowSelection?: boolean,
    /** 是否启用列选择 */
    enableColumnSelection?: boolean,
}

function CalendarMultipleContent({
    value,
    onChange,
    showFooter,
    footChildren,
    showHeader,
    headerChildren,
    onConfirm,
    onCancel,
    mouth,
    onMonthChange,
    enableRowSelection = false,
    enableColumnSelection = false,
}: CalendarMultipleContentProps) {
    // 处理多选日期变化
    const handleMultipleDateChange = (dates: Date[] | undefined) => {
        onChange(dates);
    };

    return (
        <div className="flex flex-col w-full">
            {showHeader && (
                <div className="flex items-center justify-between gap-2 py-2 px-3 border-b border-border-disabled">
                    {/* 工作区 */}
                    <div className="flex-1">
                        {headerChildren}
                    </div>
                    {/* 操作区 */}
                    <div className="inline-flex items-center gap-2">
                        <Button
                            variant={"link"}
                            size={'md'}
                            onClick={onCancel}
                        >
                            取消
                        </Button>
                        <Button
                            variant={"primary"}
                            size={'md'}
                            onClick={onConfirm}
                        >
                            确认
                        </Button>
                    </div>
                </div>
            )}

            {/* 日历主体 */}
            <div className="w-full">
                <Calendar
                    locale={enUS}
                    mode="multiple"
                    selected={value}
                    onSelect={handleMultipleDateChange}
                    captionLayout="dropdown"
                    className="rounded-md w-full border-none"
                    month={mouth}
                    onMonthChange={onMonthChange}
                    enableRowSelection={enableRowSelection}
                    enableColumnSelection={enableColumnSelection}
                />
            </div>

            {showFooter && (
                <div className="flex items-center justify-between gap-2 py-2 px-3 border-t border-border-disabled">
                    {/* 工作区 */}
                    <div className="flex-1">
                        {footChildren}
                    </div>
                    {/* 操作区 */}
                    <div className="inline-flex items-center gap-2">
                        <Button
                            variant={"link"}
                            size={'md'}
                            onClick={onCancel}
                        >
                            取消
                        </Button>
                        <Button
                            variant={"primary"}
                            size={'md'}
                            onClick={onConfirm}
                        >
                            确认
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

interface CalendarRangeContentProps {
    value?: DateRange,
    onChange: (value: DateRange | undefined) => void,
    showFooter?: boolean,
    footChildren?: React.ReactNode | JSX.Element,
    onConfirm?: () => void,
    onCancel?: () => void,
    showHeader?: boolean,
    headerChildren?: React.ReactNode | JSX.Element,
    mouth?: Date,
    onMonthChange?: (mouth: Date) => void,
    numberOfMonths?: number,
}

function CalendarRangeContent({
    value,
    onChange,
    showFooter,
    footChildren,
    showHeader,
    headerChildren,
    onConfirm,
    onCancel,
    mouth,
    onMonthChange,
    numberOfMonths = 2
}: CalendarRangeContentProps) {
    // 处理日期范围变化
    const handleDateRangeChange = (range: DateRange | undefined) => {
        onChange(range);
    };

    return (
        <div className="flex flex-col w-full">
            {showHeader && (
                <div className="flex items-center justify-between gap-2 py-2 px-3 border-b border-border-disabled">
                    {/* 工作区 */}
                    <div className="flex-1">
                        {headerChildren}
                    </div>
                    {/* 操作区 */}
                    <div className="inline-flex items-center gap-2">
                        <Button
                            variant={"link"}
                            size={'md'}
                            onClick={onCancel}
                        >
                            取消
                        </Button>
                        <Button
                            variant={"primary"}
                            size={'md'}
                            onClick={onConfirm}
                        >
                            确认
                        </Button>
                    </div>
                </div>
            )}

            {/* 日历主体 */}
            <div className="w-full">
                <Calendar
                    locale={enUS}
                    mode="range"
                    selected={value}
                    onSelect={handleDateRangeChange}
                    captionLayout="dropdown"
                    className="rounded-md w-full border-none"
                    month={mouth}
                    onMonthChange={onMonthChange}
                    numberOfMonths={numberOfMonths}
                />
            </div>

            {showFooter && (
                <div className="flex items-center justify-between gap-2 py-2 px-3 border-t border-border-disabled">
                    {/* 工作区 */}
                    <div className="flex-1">
                        {footChildren}
                    </div>
                    {/* 操作区 */}
                    <div className="inline-flex items-center gap-2">
                        <Button
                            variant={"link"}
                            size={'md'}
                            onClick={onCancel}
                        >
                            取消
                        </Button>
                        <Button
                            variant={"primary"}
                            size={'md'}
                            onClick={onConfirm}
                        >
                            确认
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}


export { CalendarPopover }
