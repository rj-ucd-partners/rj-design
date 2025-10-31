import type { Meta, StoryObj } from "@storybook/react-vite"
import { TimePickerContent, TimePickerPopover, TimePickerRangePopover, type TimePickerProps, type TimeRanges } from "./time-scroll-area"
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
        const [time, setTime] = React.useState('01:00:50 AM')
        const onConfirm = (str: string) => {
            console.log(str)
            setTime(str)
        }
        return <div className="w-100 h-[200px]">
            <TimePickerContent format={format} showFoot={false} value={time} onConfirm={onConfirm} />
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
        const [time, setTime] = React.useState('01:00:50 AM')
        const onConfirm = (str: string) => {
            console.log(str)
            setTime(str)
        }
        return <div className="w-100 h-[200px]">
            <TimePickerContent format={format} value={time} onConfirm={onConfirm} />
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
        const [time, setTime] = React.useState('aaa')
        const onConfirm = (str: string) => {
            setTime(str)
        }

        return <div className="w-100">
            <TimePickerPopover format={format} value={time} onConfirm={onConfirm} contentClassName="h-[300px]" />
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
        const onConfirm = (values: TimeRanges) => {
            setTimes(values)
        }
        return <div className="w-200">
            <TimePickerRangePopover format={format} values={times} onConfirm={onConfirm} contentClassName="h-[300px]" />
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
        const onConfirm = (values: TimeRanges) => {
            setTimes(values)
        }
        return <div className="w-200">
            <TimePickerRangePopover format={format} values={times} onConfirm={onConfirm} size={args.size} contentClassName="h-[300px]" />
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
        const onConfirm = (values: TimeRanges) => {
            setTimes(values)
        }
        return <div className="w-200">
            <TimePickerRangePopover format={format} values={times} onConfirm={onConfirm} size={args.size} contentClassName="h-[300px]" />
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
        const onConfirm = (values: TimeRanges) => {
            setTimes(values)
        }
        return <div className="w-200">
            <TimePickerRangePopover format={format} values={times} onConfirm={onConfirm} size={args.size} contentClassName="h-[300px]" />
        </div>
    }
}



