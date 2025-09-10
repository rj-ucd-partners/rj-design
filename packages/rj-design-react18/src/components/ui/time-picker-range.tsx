import { useState } from "react";
import { ClockIcon } from "../icon/clock-icon";
import { TimePicker } from "./time-picker";
import { cn } from "@/lib/utils";


function TimePickerRange({
    placeholderStart = '开始时间',
    placeholderEnd = '结束时间',
    use12Hours = false,
    useSeconds = true,
    disabled,
    className,
}: React.ComponentProps<'div'> & {
    use12Hours?: boolean,
    useSeconds?: boolean,
    placeholderStart?: string,
    placeholderEnd?: string,
    disabled?: boolean,
}) {
    return (
        <div className={cn(
            'flex flex-row gap-2 items-center ',
            'rounded-md',
            'bg-third-background',
            className
        )} >
            <TimePicker variant={'hide'} size={'md'} placeholder={placeholderStart} use12Hours={use12Hours} useSeconds={useSeconds} disabled={disabled}></TimePicker>
            <span>-</span>
            <TimePicker variant={'hide'} size={'md'} placeholder={placeholderEnd} use12Hours={use12Hours} useSeconds={useSeconds} disabled={disabled}></TimePicker>
            <ClockIcon className="text-secondary-information size-4 opacity-50 shrink-0 mr-2" />
        </div>
    );
}
export { TimePickerRange }