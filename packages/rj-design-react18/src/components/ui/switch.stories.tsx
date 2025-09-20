import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from "@/components/ui/switch"

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    tags: ['autodocs'],
    component: Switch,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
    },
}

export default meta

type Story = StoryObj<typeof Switch>


// 主要开关
export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'sm'
    },
    render: (args) => {
        return <Switch {...args} />
    }
}

// 主要开关
export const PrimaryMd: Story = {
    args: {
        variant: 'primary',
        size: 'md'
    },
    render: (args) => {
        return <Switch {...args} />
    }
}
// 主要开关
export const PrimaryLg: Story = {
    args: {
        variant: 'primary',
        size: 'lg'
    },
    render: (args) => {
        return <Switch {...args} />
    }
}

// 主要开关不可用
export const PrimaryDisabled: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        disabled: true
    },
    render: (args) => {
        return <Switch {...args} />
    }
}

// 主要开关不可用
export const PrimaryDesc: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        checkedDesc: "开",
        uncheckedDesc: "关"
    },
    render: (args) => {
        return <Switch {...args} />
    }
}