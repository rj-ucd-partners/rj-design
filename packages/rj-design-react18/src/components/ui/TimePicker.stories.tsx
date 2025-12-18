import type { Meta, StoryObj } from "@storybook/react-vite"
import { TimePickerContent, TimePickerPopover, TimePickerRangePopover, type TimePickerProps, type TimeRanges, type TimeValue } from "./TimePicker"
import React from "react"

const meta: Meta<TimePickerProps> = {
    title: 'Components/TimePickerPopover',
    tags: ['autodocs'],
    component: TimePickerPopover,
    argTypes: {
        format: {
            control: { type: 'select' },
            options: ['hh:mm:ss', 'hh:mm', 'hh:mm:ss a', 'hh:mm a'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        }
    },
}

export default meta

type Story = StoryObj<TimePickerProps>
//时间选择滑动条
export const PrimaryContent: Story = {
    args: {
        format: "hh:mm:ss a"
    },
    render: (args) => {
        const { format } = args;
        const [time, setTime] = React.useState<TimeValue | undefined>({ hour: 1, minute: 0, second: 50, period: 'AM' })
        return <div className="w-100 h-[200px]">
            <TimePickerContent format={format} showFoot={false} value={time} onConfirm={setTime} />
        </div>
    }
}
//时间选择滑动条+底部按钮
export const PrimaryContentWithFoot: Story = {
    args: {
        format: "hh:mm:ss a"
    },
    render: (args) => {
        const { format } = args;
        const [time, setTime] = React.useState<TimeValue | undefined>({ hour: 1, minute: 0, second: 50, period: 'AM' })
        return <div className="w-100 h-[200px]">
            <TimePickerContent format={format} value={time} onConfirm={setTime} />
        </div>
    }
}
//气泡框
export const PrimaryPopoverWithFoot: Story = {
    args: {
        format: "hh:mm:ss",

    },
    render: (args) => {
        const { format } = args;
        const [time, setTime] = React.useState<TimeValue | undefined>({ hour: 10, minute: 30, second: 45, period: 'AM' })
        return <div className="w-100">
            <TimePickerPopover format={format} value={time} onConfirm={setTime} contentClassName="h-[300px]" />
        </div>
    }
}

export const PrimaryRangePopoverWithFoot: Story = {
    args: {
        format: "hh:mm:ss"
    },
    render: (args) => {
        const { format } = args;
        const [times, setTimes] = React.useState<TimeRanges>()
        return <div className="w-200">
            <TimePickerRangePopover format={format} values={times} onConfirm={setTimes} contentClassName="h-[300px]" />
        </div>
    }
}

export const PrimarySmall: Story = {
    args: {
        format: "hh:mm:ss",
        size: 'sm'
    },
    render: (args) => {
        const { format } = args;
        const [times, setTimes] = React.useState<TimeRanges>()
        return <div className="w-200">
            <TimePickerRangePopover format={format} values={times} onConfirm={setTimes} size={args.size} contentClassName="h-[300px]" />
        </div>
    }
}

export const PrimaryMiddle: Story = {
    args: {
        format: "hh:mm:ss",
        size: 'md'
    },
    render: (args) => {
        const { format } = args;
        const [times, setTimes] = React.useState<TimeRanges>()
        return <div className="w-200">
            <TimePickerRangePopover format={format} values={times} onConfirm={setTimes} size={args.size} contentClassName="h-[300px]" />
        </div>
    }
}

export const PrimaryLarger: Story = {
    args: {
        format: "hh:mm:ss",
        size: 'lg'
    },
    render: (args) => {
        const { format } = args;
        const [times, setTimes] = React.useState<TimeRanges>()
        return <div className="w-200">
            <TimePickerRangePopover format={format} values={times} onConfirm={setTimes} size={args.size} contentClassName="h-[300px]" />
        </div>
    }
}



