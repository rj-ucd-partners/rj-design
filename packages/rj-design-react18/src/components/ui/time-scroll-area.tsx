import { cn } from "@/lib/utils"
import { useState, useCallback } from "react"
import { ScrollArea } from "./scroll-area"
import { Button } from "./button"
// import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input-group"
import { Clock } from "lucide-react"
import { CloseIcon } from "../icon/closeIcon"
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import React from "react"

export interface TimeRanges {
    start: string
    end: string
}
export interface TimePickerProps extends React.ComponentProps<'div'> {
    format?: "hh:mm:ss" | "hh:mm" | "hh:mm:ss a" | "hh:mm a"
    value?: string,
    size?: 'sm' | 'md' | 'lg',
    showFoot?: boolean,
    onConfirm?: (time: string) => void,
    onCancel?: () => void,
    contentClassName?: string
}

export interface TimePickerRangeProps extends Omit<React.ComponentProps<'div'>, 'onConfirm'> {
    format?: "hh:mm:ss" | "hh:mm" | "hh:mm:ss a" | "hh:mm a"
    size?: 'sm' | 'md' | 'lg',
    values?: TimeRanges,
    showFoot?: boolean,
    onConfirm?: (times: TimeRanges) => void,
    onCancel?: () => void,
    contentClassName?: string
}

interface TimeValue {
    hour: number
    minute: number
    second: number
    period: 'AM' | 'PM'
}
function TimePickerContent({
    format = "hh:mm:ss",
    value,
    onConfirm,
    onCancel,
    showFoot = true,
    className,
    ...props
}: TimePickerProps) {
    const showHour = format.includes('hh')
    const showMinute = format.includes('mm')
    const showSecond = format.includes('ss')
    const showPeriod = format.includes('a')
    const is12Hour = showPeriod
    const isControlled = value !== undefined;
    const [timeValue, setTimeValue] = useState<TimeValue>(() => {
        if (isControlled) {
            return parseTimeString(value, format)
        }
        return { hour: is12Hour ? 1 : 0, minute: 0, second: 0, period: 'AM' }
    })
    const handleTimeChange = useCallback((type: keyof TimeValue, newValue: number | 'AM' | 'PM') => {
        const updatedTime = { ...timeValue, [type]: newValue }
        setTimeValue(updatedTime)
        if (!showFoot && onConfirm) {
            const updatedTimeString = formatTimeValue(updatedTime, format)
            onConfirm(updatedTimeString);
        }
    }, [format, onConfirm, showFoot, timeValue])
    const updatedTime = () => {
        const updatedTimeString = formatTimeValue(timeValue, format)
        if (onConfirm) {
            onConfirm(updatedTimeString)
        }
    }
    const setCurrentTime = useCallback(() => {
        const now = new Date()
        let hour = now.getHours()
        const minute = now.getMinutes()
        const second = now.getSeconds()
        let period: 'AM' | 'PM' = 'AM'

        if (is12Hour) {
            // 12小时制转换
            period = hour >= 12 ? 'PM' : 'AM'
            hour = hour % 12
            if (hour === 0) hour = 12 // 0点显示为12点
        }

        const currentTime: TimeValue = { hour, minute, second, period }
        setTimeValue(currentTime)

        // 如果没有底部按钮，直接触发确认
        if (!showFoot && onConfirm) {
            const timeString = formatTimeValue(currentTime, format)
            onConfirm(timeString)
        }
    }, [is12Hour, showFoot, onConfirm, format])

    // 检查是否有外部传入的高度样式
    const hasHeightClass = className && (
        className.includes('h-') ||
        className.includes('max-h-') ||
        className.includes('min-h-')
    );

    return (
        <div className={cn(
            "flex flex-col w-full rounded-md",
            !hasHeightClass && "h-[200px]",
            className
        )}>
            <div
                className={cn(
                    "flex items-center justify-center rounded-md bg-transparent gap-2",
                    "px-[12px] py-[15px]",
                    "flex-1 min-h-0"
                )}
                {...props}
            >
                {showHour && (
                    <TimePickerScrollArea
                        type="hour"
                        is12Hour={is12Hour}
                        value={timeValue.hour}
                        handleTimeChange={handleTimeChange}
                    />
                )}
                {showMinute && (
                    <TimePickerScrollArea
                        type="minute"
                        value={timeValue.minute}
                        handleTimeChange={handleTimeChange}
                    />
                )}
                {showSecond && (
                    <TimePickerScrollArea
                        type="second"
                        value={timeValue.second}
                        handleTimeChange={handleTimeChange}
                    />
                )}
                {showPeriod && (
                    <TimePickerScrollArea
                        type="period"
                        value={timeValue.period === 'AM' ? 0 : 1}
                        handleTimeChange={handleTimeChange}
                    />
                )}
            </div>
            {
                showFoot &&
                <div className={cn(
                    "border-t border-border-disabled",
                    "px-[12px] py-[15px]",
                    "flex flex-row justify-between items-center"
                )}>
                    <Button variant={'link'} size={'md'} onClick={setCurrentTime}>此刻</Button>
                    <div className="flex flex-row items-center justify-center gap-1">
                        <Button variant={'link'} size={'md'} onClick={onCancel}>取消</Button>
                        <Button variant={'primary'} size={'md'} onClick={updatedTime}>确认</Button>
                    </div>
                </div>
            }
        </div>
    )
}
function TimePickerScrollArea({
    type,
    is12Hour = false,
    value = -1,
    className,
    handleTimeChange,
    ...props
}: React.ComponentProps<'div'> & {
    type: "hour" | "minute" | "second" | "period"
    is12Hour?: boolean
    value?: number,
    handleTimeChange: (type: keyof TimeValue, newValue: number | 'AM' | 'PM') => void
}) {
    const getOptions = () => {
        switch (type) {
            case 'hour':
                {
                    const maxHour = is12Hour ? 12 : 23
                    const minHour = is12Hour ? 1 : 0
                    return Array.from({ length: maxHour - minHour + 1 }, (_, i) => ({
                        value: minHour + i,
                        label: String(minHour + i).padStart(2, '0')
                    }))
                }
            case 'minute':
            case 'second':
                return Array.from({ length: 60 }, (_, i) => ({
                    value: i,
                    label: String(i).padStart(2, '0')
                }))
            case 'period':
                return [
                    { value: 0, label: 'AM' },
                    { value: 1, label: 'PM' }
                ]
            default:
                return []
        }
    }
    const options = getOptions()
    const flexCenter = () => {
        if (type === 'period') {
            return "flex items-center justify-center";
        }
        return "";
    }
    return (
        <div className="flex-1 min-h-0 h-full ">
            <ScrollArea variant={'default'} className="w-full h-full rounded-md " transparent={true} viewportClassName={flexCenter()}>
                <div className="flex flex-col items-center justify-start gap-[6px] w-full" {...props}>
                    {
                        options.map((time) => (
                            <Button
                                key={time.value}
                                type="button"
                                variant="transparent"
                                className={cn(
                                    'w-full h-6 rounded-sm text-center text-[13px] leading-[24px] text-secondary ',
                                    'hover:bg-fill-light-hover-bg hover:text-text-deep',
                                    value === time.value && 'text-primary bg-fill',
                                    className
                                )}
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    if (type === 'period') {
                                        handleTimeChange(type, time.value === 0 ? 'AM' : 'PM')
                                    } else {
                                        handleTimeChange(type, time.value)
                                    }
                                }}
                            >
                                {time.label}
                            </Button>
                        ))
                    }
                </div>
            </ScrollArea>
        </div>
    )
}
function TimePickerPopover({
    size = 'md',
    value,
    format = 'hh:mm:ss',
    onConfirm,
    onCancel,
    className,
    contentClassName,
    ...props
}: TimePickerProps) {
    // 判断是否为受控组件
    const isControlled = value !== undefined;

    // 内部状态：仅在非受控模式下使用
    const [internalValue, setInternalValue] = React.useState<string>('');

    // Popover 打开状态
    const [open, setOpen] = React.useState(false);

    // 实际显示的值：受控时用外部 value，非受控时用内部状态
    const displayValue = isControlled ? value : internalValue;

    // 处理时间确认
    const handleTimeConfirm = useCallback((time: string) => {
        if (isControlled) {
            // 受控模式：调用外部 onConfirm
            if (onConfirm) {
                onConfirm(time);
            }
        } else {
            // 非受控模式：更新内部状态
            setInternalValue(time);
            if (onConfirm) {
                onConfirm(time);
            }
        }
        // 确认后关闭 Popover
        setOpen(false);
    }, [isControlled, onConfirm]);

    // 处理取消
    const handleCancel = useCallback(() => {
        if (onCancel) {
            onCancel();
        }
        // 取消后关闭 Popover
        setOpen(false);
    }, [onCancel]);

    // 处理清空
    const handleClear = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (isControlled) {
            // 受控模式：调用 onConfirm 传空值
            if (onConfirm) {
                onConfirm('');
            }
        } else {
            // 非受控模式：清空内部状态
            setInternalValue('');
        }
    }, [isControlled, onConfirm]);

    return (
        <Popover {...props} open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <InputGroup variant={'primary'} size={size}>
                    <InputGroupInput
                        value={displayValue}
                        id="date"
                        placeholder='请选择时间'
                        readOnly
                    />
                    {
                        displayValue ?
                            <InputGroupButton
                                variant={'transparent'}
                                size={'icon-xs'}
                                onClick={handleClear}
                            >
                                <CloseIcon />
                            </InputGroupButton>
                            :
                            <InputGroupAddon align={'inline-end'}>
                                <Clock />
                            </InputGroupAddon>
                    }
                </InputGroup>
            </PopoverTrigger>
            <PopoverContent
                className={
                    cn("w-[var(--radix-popover-trigger-width)]",
                        "bg-secondary-background",
                        "rounded-md",
                        className)}
                alignOffset={5}
                sideOffset={5}
            >
                <TimePickerContent
                    value={displayValue}
                    format={format}
                    onConfirm={handleTimeConfirm}
                    onCancel={handleCancel}
                    className={contentClassName}
                />
            </PopoverContent>
        </Popover>
    );
}
function TimePickerRangePopover({
    size = "md",
    values,
    format = 'hh:mm:ss',
    onConfirm,
    onCancel,
    className,
    contentClassName,
    ...props
}: TimePickerRangeProps) {
    // 判断是否为受控组件
    const isControlled = values !== undefined;

    // 内部状态：仅在非受控模式下使用
    const [internalValues, setInternalValues] = React.useState<TimeRanges>({
        start: '',
        end: ''
    });

    // Popover 打开状态
    const [open, setOpen] = React.useState(false);

    // 临时状态：用于在确认前暂存选择的时间
    const [tempStart, setTempStart] = React.useState<string>('');
    const [tempEnd, setTempEnd] = React.useState<string>('');

    // 实际显示的值：受控时用外部 values，非受控时用内部状态
    const displayValues = isControlled ? values : internalValues;

    // 初始化临时状态
    React.useEffect(() => {
        if (open) {
            setTempStart(displayValues?.start || '');
            setTempEnd(displayValues?.end || '');
        }
    }, [open, displayValues]);

    // 比较两个时间字符串，返回校正后的时间范围
    const normalizeTimeRange = useCallback((start: string, end: string): TimeRanges => {
        if (!start || !end) {
            return { start, end };
        }

        // 将时间字符串转换为可比较的数值
        const parseTime = (timeStr: string): number => {
            const parsed = parseTimeString(timeStr, format);
            let hour = parsed.hour;

            // 如果是12小时制，转换为24小时制进行比较
            if (format.includes('a')) {
                if (parsed.period === 'PM' && hour !== 12) {
                    hour += 12;
                } else if (parsed.period === 'AM' && hour === 12) {
                    hour = 0;
                }
            }

            return hour * 3600 + parsed.minute * 60 + parsed.second;
        };

        const startTime = parseTime(start);
        const endTime = parseTime(end);

        // 如果开始时间晚于结束时间，交换它们
        if (startTime > endTime) {
            return { start: end, end: start };
        }

        return { start, end };
    }, [format]);

    // 处理开始时间变化
    const handleStartChange = useCallback((time: string) => {
        setTempStart(time);

        // 立即更新显示值（部分更新）
        const partialRange: TimeRanges = { start: time, end: tempEnd };

        if (isControlled) {
            if (onConfirm) {
                onConfirm(partialRange);
            }
        } else {
            setInternalValues(partialRange);
            if (onConfirm) {
                onConfirm(partialRange);
            }
        }

        // 如果两个时间都已选择，进行时间校正并关闭
        if (time && tempEnd) {
            const normalizedRange = normalizeTimeRange(time, tempEnd);

            if (isControlled) {
                if (onConfirm) {
                    onConfirm(normalizedRange);
                }
            } else {
                setInternalValues(normalizedRange);
                if (onConfirm) {
                    onConfirm(normalizedRange);
                }
            }
            setOpen(false);
        }
    }, [tempEnd, isControlled, onConfirm, normalizeTimeRange]);

    // 处理结束时间变化
    const handleEndChange = useCallback((time: string) => {
        setTempEnd(time);

        // 立即更新显示值（部分更新）
        const partialRange: TimeRanges = { start: tempStart, end: time };

        if (isControlled) {
            if (onConfirm) {
                onConfirm(partialRange);
            }
        } else {
            setInternalValues(partialRange);
            if (onConfirm) {
                onConfirm(partialRange);
            }
        }

        // 如果两个时间都已选择，进行时间校正并关闭
        if (tempStart && time) {
            const normalizedRange = normalizeTimeRange(tempStart, time);

            if (isControlled) {
                if (onConfirm) {
                    onConfirm(normalizedRange);
                }
            } else {
                setInternalValues(normalizedRange);
                if (onConfirm) {
                    onConfirm(normalizedRange);
                }
            }
            setOpen(false);
        }
    }, [tempStart, isControlled, onConfirm, normalizeTimeRange]);

    // 处理取消按钮点击
    const handleTimeCancel = useCallback(() => {
        if (isControlled) {
            // 受控模式：调用外部 onCancel
            if (onCancel) {
                onCancel();
            }
        }
        setOpen(false);

    }, [isControlled, onCancel]);

    // 处理清空
    const handleClear = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        const emptyRange: TimeRanges = { start: '', end: '' };

        if (isControlled) {
            // 受控模式：调用 onConfirm 传空值
            if (onConfirm) {
                onConfirm(emptyRange);
            }
        } else {
            // 非受控模式：清空内部状态
            setInternalValues(emptyRange);
        }
    }, [isControlled, onConfirm]);

    // 判断是否有值
    const hasValue = displayValues?.start || displayValues?.end;

    return (
        <Popover {...props} open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <InputGroup variant={'primary'} size={size}>
                    <InputGroupInput
                        value={displayValues?.start || ''}
                        placeholder='起始时间'
                        readOnly
                    />
                    <span className="text-secondary px-1">-</span>
                    <InputGroupInput
                        value={displayValues?.end || ''}
                        placeholder='终止时间'
                        readOnly
                    />
                    {
                        hasValue ?
                            <InputGroupButton
                                variant={'transparent'}
                                size={'icon-xs'}
                                onClick={handleClear}
                            >
                                <CloseIcon />
                            </InputGroupButton>
                            :
                            <InputGroupAddon align={'inline-end'}>
                                <Clock />
                            </InputGroupAddon>
                    }
                </InputGroup>
            </PopoverTrigger>
            <PopoverContent
                className={
                    cn("w-[var(--radix-popover-trigger-width)]",
                        "bg-secondary-background",
                        "rounded-md",
                        className)}
                alignOffset={5}
                sideOffset={5}
            >
                <div className="flex flex-row gap-2 p-2">
                    <TimePickerContent
                        value={tempStart}
                        format={format}
                        onConfirm={handleStartChange}
                        onCancel={handleTimeCancel}
                        showFoot={true}
                        className={contentClassName}
                    />
                    <div className="w-px bg-border self-stretch" />
                    <TimePickerContent
                        value={tempEnd}
                        format={format}
                        onConfirm={handleEndChange}
                        onCancel={handleTimeCancel}
                        showFoot={true}
                        className={contentClassName}
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
}
//#region 
// 辅助函数：解析时间字符串
function parseTimeString(timeStr: string, format: string): TimeValue {
    const defaultValue = { hour: 0, minute: 0, second: 0, period: 'AM' as const }
    try {
        if (format.includes('a')) {
            // 12小时制
            const match = timeStr.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)/i)
            if (match) {
                return {
                    hour: parseInt(match[1]),
                    minute: parseInt(match[2]),
                    second: match[3] ? parseInt(match[3]) : 0,
                    period: match[4].toUpperCase() as 'AM' | 'PM'
                }
            }
        } else {
            // 24小时制
            const parts = timeStr.split(':')
            return {
                hour: parseInt(parts[0]) || 0,
                minute: parseInt(parts[1]) || 0,
                second: parseInt(parts[2]) || 0,
                period: 'AM'
            }
        }
    } catch (error) {
        console.warn('Failed to parse time string:', error)
    }

    return defaultValue
}
// 辅助函数：格式化时间值
function formatTimeValue(time: TimeValue, format: string): string {
    const { hour, minute, second, period } = time

    if (format.includes('a')) {
        // 12小时制
        const hourStr = String(hour).padStart(2, '0')
        const minuteStr = String(minute).padStart(2, '0')

        if (format.includes('ss')) {
            const secondStr = String(second).padStart(2, '0')
            return `${hourStr}:${minuteStr}:${secondStr} ${period}`
        } else {
            return `${hourStr}:${minuteStr} ${period}`
        }
    } else {
        // 24小时制
        const hourStr = String(hour).padStart(2, '0')
        const minuteStr = String(minute).padStart(2, '0')

        if (format.includes('ss')) {
            const secondStr = String(second).padStart(2, '0')
            return `${hourStr}:${minuteStr}:${secondStr}`
        } else {
            return `${hourStr}:${minuteStr}`
        }
    }
}
//#endregion
export { TimePickerContent, TimePickerPopover, TimePickerRangePopover }
