import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ClockIcon } from "../icon/clock-icon";
import type { BaseNode } from "@/common/type";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { CloseIcon } from "../icon/closeIcon";

type tiemType = 'hour' | 'min' | 'sec' | 'period';
interface checkedTime {
    hour: BaseNode,
    min: BaseNode,
    sec?: BaseNode,
    period?: BaseNode,
}

const timePickerVariants = cva(
    "",
    {
        variants: {
            variant: {
                primary: [
                    'rounded-md',
                    'bg-third-background',
                    'hover:outline hover:outline-primary',
                    'flex flex-row gap-1 items-center justify-center',
                    'w-full',
                    'hover:[&_[data-slot=clear]]:block hover:[&_[data-slot=find]]:hidden',
                    '[[data-state=disabled]_&]:bg-border-disabled [[data-state=disabled]_&]:text-disabled [[data-state=disabled]_&]:outline-none',
                ],
                hide: [
                    'rounded-md',
                    'bg-transparent',
                    'flex flex-row gap-1 items-center justify-center',
                    'w-full',
                    '[[data-state=disabled]_&]:bg-border-disabled [[data-state=disabled]_&]:text-disabled [[data-state=disabled]_&]:outline-none',
                ]
            },
            size: {
                sm: "px-2 py-0.5 text-[12px] leading-[20px]",
                md: "px-2 py-[5px] text-[13px] leading-[20px]",
                lg: "px-3 py-2 text-[15px] leading-[22px]",
            },
        },
    }
)
//#region TimePicker
//生成00-23的小时数组
const hours: BaseNode[] = Array.from({ length: 29 }, (_, i) => ({
    key: String(i),
    label: i > 23 ? '' : String(i).padStart(2, '0'),
    disabled: i > 23,
}));
const hours12: BaseNode[] = Array.from({ length: 17 }, (_, i) => ({
    key: String(i),
    label: i > 11 ? '' : String(i).padStart(2, '0'),
    disabled: i > 11,
}));
//生成00-59的分秒数组
const mins: BaseNode[] = Array.from({ length: 65 }, (_, i) => ({
    key: String(i),
    label: i > 59 ? '' : String(i).padStart(2, '0'),
    disabled: i > 59,
}));
const periods: BaseNode[] = Array.from({ length: 6 }, (_, i) => ({
    key: String(i),
    label: i === 2 ? 'AM' : i === 3 ? 'PM' : '',
    disabled: i !== 2 && i !== 3,
}));
function TimePikerScroller({
    value,
    times,
    type,
    onCheckedChange,
    onMouseMoveItem,
    onMouseLevelItem,
}: React.ComponentProps<'div'> & {
    times: BaseNode[],
    checked?: boolean,
    value?: string,
    onCheckedChange: (key: string, type: tiemType) => void,
    type: tiemType,
    onMouseMoveItem: (key: string, type: tiemType) => void,
    onMouseLevelItem: () => void,
}) {
    return (
        <div className="w-full">
            <ScrollArea variant={'default'} className="h-[174px] w-full rounded-md " transparent={true}>
                <div className="flex flex-col items-center justify-start gap-[6px] w-full">
                    {
                        times.map((time, index) => (
                            <TimePikerItem
                                key={time.key}
                                node={time}
                                checked={value ? (index === parseInt(value)) : false}
                                onCheckedChange={onCheckedChange}
                                type={type}
                                onMouseMoveItem={onMouseMoveItem}
                                onMouseLevelItem={onMouseLevelItem}
                            />
                        ))
                    }
                </div>
            </ScrollArea>
        </div>
    );
}
function TimePikerItem({
    node,
    type,
    checked,
    className,
    onMouseMoveItem,
    onMouseLevelItem,
    ...props
}: React.ComponentProps<'div'> & {
    node: BaseNode,
    checked?: boolean,
    onCheckedChange: (key: string, type: tiemType) => void,
    type: tiemType,
    onMouseMoveItem: (key: string, type: tiemType) => void,
    onMouseLevelItem: () => void,
}) {
    return (
        <span
            className={cn(
                'w-full h-6 rounded-sm text-center cursor-default text-[13px] leading-6 text-secondary',
                !node.disabled && 'hover:bg-fill-light-hover-bg cursor-pointer hover:text-text-deep',
                checked && 'text-primary bg-fill cursor-pointer ',
                className
            )}
            onClick={() => {
                if (!node.disabled) props.onCheckedChange(node.key, type);
            }}
            onMouseMove={() => {
                if (!node.disabled) onMouseMoveItem(node.key, type);
            }}
            onMouseLeave={() => {
                if (!node.disabled) onMouseLevelItem();
            }}
            {...props}>
            {node.label}
        </span>)
}
//#endregion
function TimePicker({
    placeholder,
    use12Hours = false,
    useSeconds = true,
    variant = 'primary',
    size,
    onTimeChange,
    disabled,
    className,
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof timePickerVariants> & {
    use12Hours?: boolean,
    useSeconds?: boolean,
    placeholder?: string,
    onTimeChange?: (time: string) => void,
    disabled?: boolean,
}) {
    const [open, setOpen] = useState<boolean>(false);
    const [hour, setHour] = useState<BaseNode>(hours[0]);
    const [min, setMin] = useState<BaseNode>(mins[0]);
    const [sec, setSec] = useState<BaseNode>(mins[0]);
    const [period, setPeriod] = useState<BaseNode>(periods[2]);
    const contextRef = useRef<HTMLDivElement>(null);
    const onCheckedChange = (key: string, type: tiemType) => {
        if (type === 'hour') {
            setHour(hours.find((item) => item.key === key)!);
        } else if (type === 'min') {
            setMin(mins.find((item) => item.key === key)!);
        } else if (type === 'sec') {
            setSec(mins.find((item) => item.key === key)!);
        } else if (type === 'period') {
            setPeriod(periods.find((item) => item.key === key)!);
        }
    }
    const getLabel = (label: string, type: tiemType) => {
        const timeStr = `${type === 'hour' ? label : hour.label}:${type === 'min' ? label : min.label}${useSeconds ? `:${type === 'sec' ? label : sec.label}` : ''}${use12Hours ? ' ' + (type === 'period' ? label : period.label) : ''}`
        return timeStr;
    }
    const onMouseMoveItem = (key: string, type: tiemType) => {
        let label = '';
        if (type === 'hour') {
            label = hours.find((item) => item.key === key)!.label;
        } else if (type === 'min') {
            label = mins.find((item) => item.key === key)!.label;
        } else if (type === 'sec') {
            label = mins.find((item) => item.key === key)!.label;
        } else if (type === 'period') {
            label = periods.find((item) => item.key === key)!.label;
        }
        const str = getLabel(label, type);
        setValue(str);
    }
    const onMouseLevelItem = () => {
        const timeStr = `${hour.label}:${min.label}${useSeconds ? `:${sec.label}` : ''}${use12Hours ? ' ' + period.label : ''}`
        setValue(timeStr);
    }
    const [value, setValue] = useState<string | undefined>(undefined);
    const [time, setTime] = useState<checkedTime | undefined>(undefined);
    const [focus, setFocus] = useState<boolean>(false);
    const onConfirm = () => {
        setTime({
            hour: hour,
            min: min,
            sec: sec,
            period: use12Hours ? period : undefined,
        })
        const timeStr = `${hour.label}:${min.label}${useSeconds ? `:${sec!.label}` : ''}${use12Hours ? ' ' + period!.label : ''}`
        setValue(timeStr);
        setOpen(false);
        if (onTimeChange) onTimeChange(timeStr);
    }
    const onCancel = () => {
        if (time) {
            setHour(time.hour);
            setMin(time.min);
            setSec(useSeconds ? time.sec! : mins[0]);
            setPeriod(use12Hours ? time.period! : periods[2]);
            const timeStr = `${time.hour.label}:${time.min.label}${useSeconds ? `:${time.sec!.label}` : ''}${use12Hours ? ' ' + time.period!.label : ''}`
            setValue(timeStr);
        } else {
            setValue('');
            setHour(hours[0]);
            setMin(mins[0]);
            setSec(mins[0]);
            setPeriod(periods[2]);
        }

        setOpen(false);
    }
    useClickAway(contextRef, () => {
        if (!focus) onCancel();
    });
    const getNowTime = () => {
        try {
            const now = new Date();
            let hour = now.getHours();
            const min = now.getMinutes();
            const sec = now.getSeconds();
            const period = hour > 12 ? 'PM' : 'AM';
            setPeriod(period === 'AM' ? periods[2] : periods[3]);
            if (use12Hours) {
                hour = hour > 12 ? hour - 12 : hour;
            }
            setHour(hours[hour]);
            setMin(mins[min]);
            setSec(mins[sec]);
            const timeStr = `${hours[hour].label}:${mins[min].label}${useSeconds ? `${useSeconds ? `:${mins[sec].label}` : ''}` : ''}${use12Hours ? ' ' + period : ''}`
            setValue(timeStr);
            setTime({
                hour: hours[hour],
                min: mins[min],
                sec: useSeconds ? mins[sec] : undefined,
                period: use12Hours ? period === 'AM' ? periods[2] : periods[3] : undefined,
            })
        } catch (e) {
            console.log(e);
        }
        setOpen(false);
    }
    const debounceTimerRef = useRef<NodeJS.Timeout>(null);
    const debouncedOnInput = (str: string) => {
        // 清除之前的定时器
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }
        const onInput = (str: string) => {
            const setCheckedTime = () => {
                const timeStr = `${hour.label}:${min.label}${useSeconds ? `:${sec!.label}` : ''}${use12Hours ? ' ' + period!.label : ''}`
                setValue(timeStr);
            }
            if (!str.trim()) {
                setCheckedTime();
                return;
            }
            try {
                const timeRegex = buildTimeRegex(useSeconds, use12Hours);
                const match = str.match(timeRegex);

                if (!match) {
                    console.warn('时间格式不正确');
                    setCheckedTime();
                    return;
                }
                const parsedTime = parseTimeString(match, useSeconds, use12Hours);
                if (!validateTimeRange(parsedTime, use12Hours)) {
                    console.warn('时间范围不正确');
                    setCheckedTime();
                    return;
                }
                const newHour = hours[parsedTime.hour];
                const newMin = mins[parsedTime.minute];
                const newSec = useSeconds ? mins[parsedTime.second] : mins[0];
                const newPeriod = use12Hours ? periods[parsedTime.period === 'AM' ? 2 : 3] : periods[2];
                setHour(newHour);
                setMin(newMin);
                setSec(newSec);
                setPeriod(newPeriod);
                const timeStr = `${newHour.label}:${newMin.label}${useSeconds ? `:${newSec.label}` : ''}${use12Hours ? ' ' + newPeriod.label : ''}`
                setValue(timeStr);
            } catch (error) {
                console.error('解析时间失败:', error);
            }
        };
        // 设置新的定时器
        debounceTimerRef.current = setTimeout(() => {
            onInput(str);
        }, 1000);
    };
    const buildTimeRegex = (includeSeconds: boolean, is12Hour: boolean): RegExp => {
        let pattern = '^(\\d{1,2}):(\\d{2})'; // hh:mm

        if (includeSeconds) {
            pattern += ':(\\d{2})'; // :ss
        }

        if (is12Hour) {
            pattern += '\\s*(AM|PM|am|pm)'; // AM/PM
        }

        pattern += '$';

        return new RegExp(pattern);
    };
    const parseTimeString = (
        match: RegExpMatchArray,
        includeSeconds: boolean,
        is12Hour: boolean
    ) => {
        const hour = parseInt(match[1], 10);
        const minute = parseInt(match[2], 10);
        const second = includeSeconds ? parseInt(match[3], 10) : 0;
        const period = is12Hour ? match[includeSeconds ? 4 : 3]?.toUpperCase() : null;

        return { hour, minute, second, period };
    };
    const validateTimeRange = (
        time: { hour: number; minute: number; second: number; period: string | null },
        is12Hour: boolean
    ): boolean => {
        const { hour, minute, second } = time;

        // 校验分钟和秒
        if (minute < 0 || minute > 59 || second < 0 || second > 59) {
            return false;
        }

        // 校验小时
        if (is12Hour) {
            // 12小时制：1-12
            if (hour < 1 || hour > 12) {
                return false;
            }
        } else {
            // 24小时制：0-23
            if (hour < 0 || hour > 23) {
                return false;
            }
        }

        return true;
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setValue(inputValue); // 立即更新显示值
        debouncedOnInput(inputValue); // 防抖处理
    };
    useEffect(() => {
        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, []);
    const clearValue = () => {
        setValue('');
        setOpen(false);
        setHour(hours[0]);
        setMin(mins[0]);
        setSec(mins[0]);
        setPeriod(periods[2]);

    }
    return (
        <div
            data-state={disabled ? 'disabled' : 'enabled'}
            data-slot='time-picker'
            className="relative flex items-center justifu-start gap-[2px] w-full">
            <div
                className={cn(
                    timePickerVariants({ variant, size }),
                    className
                )}
                {...props}>
                <input
                    disabled={disabled}
                    type="text"
                    className="border-none outline-none w-full"
                    placeholder={placeholder ?? '请选择时间'}
                    value={value}
                    onFocus={() => { setFocus(true); setOpen(true) }}
                    onBlur={() => { setFocus(false); }}
                    onChange={handleInputChange}
                />
                {
                    variant !== 'hide' &&
                    <div className="relative">
                        {
                            value &&
                            <div data-slot='clear' className="hidden z-50 absolute left-1/2 top-1/2 transform -translate-x-[6px] -translate-y-[8px]">
                                <Button variant={'transparent'} size={'link'}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        clearValue();
                                    }}>
                                    <CloseIcon className="size-3 text-secondary-information" />
                                </Button>
                            </div>
                        }
                        <ClockIcon className="text-secondary-information size-3 opacity-50" />
                    </div>
                }
            </div>
            {
                open &&
                <div
                    ref={contextRef}
                    className={cn(
                        'absolute top-[110%] z-50 flex flex-col w-full',
                        'rounded-md',
                        'bg-secondary-background',
                    )}>
                    <div className="flex flex-row items-center justify-center gap-2 w-full px-3 py-[15px]">
                        <TimePikerScroller
                            times={use12Hours ? hours12 : hours}
                            onCheckedChange={onCheckedChange}
                            type={"hour"} value={hour.key}
                            onMouseMoveItem={onMouseMoveItem}
                            onMouseLevelItem={onMouseLevelItem}
                        />
                        <TimePikerScroller
                            times={mins}
                            onCheckedChange={onCheckedChange}
                            type={"min"}
                            value={min.key}
                            onMouseMoveItem={onMouseMoveItem}
                            onMouseLevelItem={onMouseLevelItem}
                        />
                        {
                            useSeconds &&
                            <TimePikerScroller
                                times={mins}
                                onCheckedChange={onCheckedChange}
                                type={"sec"}
                                value={sec.key}
                                onMouseMoveItem={onMouseMoveItem}
                                onMouseLevelItem={onMouseLevelItem}
                            />
                        }
                        {
                            use12Hours &&
                            <TimePikerScroller
                                times={periods}
                                onCheckedChange={onCheckedChange}
                                type={"period"}
                                value={period.key}
                                onMouseMoveItem={onMouseMoveItem}
                                onMouseLevelItem={onMouseLevelItem}
                            />
                        }
                    </div>
                    <div className="p-3 flex flex-row items-center justify-between w-full border-t border-border-disabled">
                        <Button variant={'link'} size={'md'} onClick={getNowTime}>此刻</Button>
                        <div className="flex flex-row items-center justify-center gap-1">
                            <Button variant={'link'} size={'md'} onClick={onCancel}>取消</Button>
                            <Button variant={'primary'} size={'md'} onClick={onConfirm}>确认</Button>
                        </div>
                    </div>
                </div>
            }
        </div>);
}

export { TimePicker, TimePikerScroller }