import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from "@/components/ui/Switch"
import { useEffect, useState } from 'react'

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

// 主要开关带描述
export const PrimaryStatus: Story = {
    args: {
        variant: 'primary',
        size: 'lg',

    },
    render: (args) => {
        const [checked, setChecked] = useState<boolean>(false);
        const [isLoading, setIsLoading] = useState<boolean>(true);
        useEffect(() => {
            setTimeout(() => { setIsLoading(false) }, 5000)
        }, [])
        return <div className='inline-flex items-center justify-center h-5'>
            <Switch {...args} checked={checked} onCheckedChange={setChecked} isLoading={isLoading} />
        </div>
    }
}
