import { useRef, useState } from "react";
import { ClockIcon } from "../icon/clock-icon";
import { TimePicker, type CheckedTime, type TimePickerRef } from "./time-picker";
import { cn } from "@/lib/utils";
import { CloseIcon } from "../icon/closeIcon";


function TimePickerRange({
    size = 'md',
    placeholderStart = '开始时间',
    placeholderEnd = '结束时间',
    use12Hours = false,
    useSeconds = true,
    disabled,
    className,
}: React.ComponentProps<'div'> & {
    size?: 'sm' | 'md' | 'lg',
    use12Hours?: boolean,
    useSeconds?: boolean,
    placeholderStart?: string,
    placeholderEnd?: string,
    disabled?: boolean,
}) {
    const startRef = useRef<TimePickerRef>(null);
    const endRef = useRef<TimePickerRef>(null);
    const [isStart, setIsStart] = useState<boolean>(false);
    const [startTime, setStartTime] = useState<CheckedTime | undefined>(undefined);
    const [endTime, setEndTime] = useState<CheckedTime | undefined>(undefined);
    const onCancel = () => {
        if (isStart) {
            setIsStart(false);
            if (!startTime || !endTime) {
                setStartTime(undefined);
                setEndTime(undefined);
            } else {
                if (!compareTime(startTime!, endTime!)) {
                    const start = startTime;
                    const end = endTime;
                    setEndTime(start);
                    setStartTime(end);
                }
            }
        }
        setIsStart(false);
    }
    const compareTime = (start: CheckedTime, end: CheckedTime) => {
        if (use12Hours) {
            if (parseInt(start!.period!.key) > parseInt(end!.period!.key)) {
                return false;
            }
        }
        if (parseInt(start!.hour.key) > parseInt(end!.hour.key)) {
            return false;
        }
        if (parseInt(start!.min.key) > parseInt(end!.min.key)) {
            return false;
        }
        if (useSeconds && parseInt(start!.sec!.key) > parseInt(end!.sec!.key)) {
            return false;
        }
        return true;
    }
    const onStartConfirm = (time?: CheckedTime) => {
        if (!time) return;
        if (isStart) {
            setIsStart(false);
            if (!compareTime(time, endTime!)) {
                const end = endTime;
                setEndTime(time);
                setStartTime(end);
            } else {
                setStartTime(time);
            }
        } else {
            setIsStart(true);
            setStartTime(time);
            if (endRef.current)
                endRef.current.open();
        }
    }
    const onEndConfirm = (time: CheckedTime | undefined) => {
        if (!time) return;
        if (isStart) {
            setIsStart(false);
            if (!compareTime(startTime!, time)) {
                const start = startTime;
                setEndTime(start);
                setStartTime(time);
            } else {
                setEndTime(time);
            }
        } else {
            setIsStart(true);
            setEndTime(time);
            if (startRef.current)
                startRef.current.open();
        }
    }
    return (
        <div className={cn(
            'flex flex-row gap-2 items-center ',
            'rounded-md',
            'bg-third-background',
            (startTime && endTime) && 'hover:[&_[data-slot=clear]]:block hover:[&_[data-slot=clock]]:hidden',
            className
        )} >
            <TimePicker
                ref={startRef}
                variant={'hide'}
                size={size}
                time={startTime}
                placeholder={placeholderStart}
                use12Hours={use12Hours}
                useSeconds={useSeconds}
                disabled={disabled}
                onTimeChange={onStartConfirm}
                cancelCallback={onCancel}>
            </TimePicker>
            <span>-</span>
            <TimePicker
                ref={endRef}
                variant={'hide'}
                size={size}
                time={endTime}
                placeholder={placeholderEnd}
                use12Hours={use12Hours}
                useSeconds={useSeconds}
                disabled={disabled}
                onTimeChange={onEndConfirm}
                cancelCallback={onCancel}
            >
            </TimePicker>
            <CloseIcon data-slot='clear' className=" hidden size-4 mr-2 text-secondary-information shrink-0 cursor-pointer" onClick={() => {
                if (startTime && endTime) {
                    setStartTime(undefined);
                    setEndTime(undefined);
                    setIsStart(false);
                }
            }} />
            <ClockIcon data-slot='clock' className="text-secondary-information size-4 opacity-50 shrink-0 mr-2" />
        </div>
    );
}
export { TimePickerRange }