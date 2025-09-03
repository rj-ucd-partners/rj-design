import type { Meta, StoryObj } from "@storybook/react-vite"
import { Message } from "./message"

const meta: Meta<typeof Message> = {
    title: 'Components/Message',
    tags: ['autodocs'],
    component: Message,
    argTypes: {
    },
}

export default meta

type Story = StoryObj<typeof Message>

export const Info: Story = {
    args: {
        status: 'info',
        message: '用于表示普通操作信息提示，3s后自动消失'
    },
    render: (args) => {
        return (
            <Message {...args} />
        )
    }
}

export const Destructive: Story = {
    args: {
        status: 'destructive',
        message: '用于表示普通操作信息提示，3s后自动消失'
    },
    render: (args) => {
        return (
            <Message {...args} />
        )
    }
}

export const Loading: Story = {
    args: {
        status: 'loading',
        message: '用于表示普通操作信息提示，3s后自动消失'
    },
    render: (args) => {
        return (
            <Message {...args} />
        )
    }
}

export const Success: Story = {
    args: {
        status: 'success',
        message: '用于表示普通操作信息提示，3s后自动消失'
    },
    render: (args) => {
        return (
            <Message {...args} />
        )
    }
}

export const Warning: Story = {
    args: {
        status: 'warning',
        message: '用于表示普通操作信息提示，3s后自动消失'
    },
    render: (args) => {
        return (
            <Message {...args} />
        )
    }
}


export const Close: Story = {
    args: {
        status: 'warning',
        message: '用于表示普通操作信息提示，3s后自动消失',
        showClose: true
    },
    render: (args) => {
        return (
            <Message {...args} />
        )
    }
}