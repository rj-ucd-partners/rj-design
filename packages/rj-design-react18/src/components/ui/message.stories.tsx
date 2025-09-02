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

type Story = StoryObj<typeof Message>;

export const Title: Story = {
    args: {
        message: '标题名称',
        description: '辅助信息辅助信息辅助信息辅助信息',
    },
    render: (args) => (
        <div style={{
            width: '360px',
            height: '558px'
        }}>
            <Message {...args} />
        </div>
    )
}