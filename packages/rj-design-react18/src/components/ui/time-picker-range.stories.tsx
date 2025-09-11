import type { Meta, StoryObj } from "@storybook/react-vite"
import { TimePickerRange } from "./time-picker-range"

const meta: Meta<typeof TimePickerRange> = {
    title: 'Components/TimePickerRange',
    tags: ['autodocs'],
    component: TimePickerRange,
    argTypes: {

    },
}

export default meta

type Story = StoryObj<typeof TimePickerRange>
//文本框
export const Primary: Story = {
    args: {
        size: 'sm'
    },
    render: (args) => {
        return <div className="w-100">
            <TimePickerRange {...args} />
        </div>
    }
}

export const PrimaryMD: Story = {
    args: {
        size: 'md'
    },
    render: (args) => {
        return <div className="w-100">
            <TimePickerRange {...args} />
        </div>
    }
}

export const PrimaryLg: Story = {
    args: {
        size: 'lg'
    },
    render: (args) => {
        return <div className="w-100">
            <TimePickerRange {...args} />
        </div>
    }
}

export const PrimaryUse12Hours: Story = {
    args: {
        size: 'md',
        use12Hours: true
    },
    render: (args) => {
        return <div className="w-100">
            <TimePickerRange {...args} />
        </div>
    }
}

export const PrimaryNoSec: Story = {
    args: {
        size: 'md',
        use12Hours: false,
        useSeconds: false
    },
    render: (args) => {
        return <div className="w-100">
            <TimePickerRange {...args} />
        </div>
    }
}