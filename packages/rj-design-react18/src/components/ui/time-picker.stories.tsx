import type { Meta, StoryObj } from "@storybook/react-vite"
import { TimePicker } from "./time-picker"

const meta: Meta<typeof TimePicker> = {
    title: 'Components/TimePicker',
    tags: ['autodocs'],
    component: TimePicker,
    argTypes: {

    },
}

export default meta

type Story = StoryObj<typeof TimePicker>

export const Primary: Story = {
    args: {
        size: 'sm'
    },
    render: (args) => {
        const onChange = (time: string) => {
            console.log(time);
        }
        return <div className="w-60">
            <TimePicker {...args} onTimeChange={onChange} />
        </div>
    }
}

export const Disabled: Story = {
    args: {
        size: 'sm',
        disabled: true
    },
    render: (args) => {
        const onChange = (time: string) => {
            console.log(time);
        }
        return <div className="w-60">
            <TimePicker {...args} onTimeChange={onChange} />
        </div>
    }
}

export const PrimaryMd: Story = {
    args: {
        size: 'md'
    },
    render: (args) => {
        const onChange = (time: string) => {
            console.log(time);
        }
        return <div className="w-60">
            <TimePicker {...args} onTimeChange={onChange} />
        </div>
    }
}

export const PrimaryLg: Story = {
    args: {
        size: 'lg'
    },
    render: (args) => {
        const onChange = (time: string) => {
            console.log(time);
        }
        return <div className="w-60">
            <TimePicker {...args} onTimeChange={onChange} />
        </div>
    }
}

export const Primary12: Story = {
    args: {
        size: 'sm',
        use12Hours: true
    },
    render: (args) => {
        return <div className="w-60">
            <TimePicker {...args} />
        </div>
    }
}

export const PrimarNoSec: Story = {
    args: {
        size: 'sm',
        use12Hours: true,
        useSeconds: false
    },
    render: (args) => {
        return <div className="w-60">
            <TimePicker {...args} />
        </div>
    }
}

export const PrimarNoSecNoUse12Hours: Story = {
    args: {
        size: 'sm',
        use12Hours: false,
        useSeconds: false
    },
    render: (args) => {
        return <div className="w-60">
            <TimePicker {...args} />
        </div>
    }
}


