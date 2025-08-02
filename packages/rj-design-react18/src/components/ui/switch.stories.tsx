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
        size: 'md'
    },
}
