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
    args: {},
    render: (args) => {
        return <div className="w-100">
            <TimePickerRange {...args} />
        </div>
    }
}