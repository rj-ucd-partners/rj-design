import type { Meta, StoryObj } from "@storybook/react-vite"
import { Partition } from "./partition"

const meta: Meta<typeof Partition> = {
    title: 'Components/Partition',
    tags: ['autodocs'],
    component: Partition,
    argTypes: {
        size: {
            control: { type: 'select', },
            options: ['xs', 'sm', 'md', 'lg'],
        },
        title: {
            control: 'text',
        },
        variant: {
            control: { type: 'select' },
            options: ['solid', 'outline', 'dashed'],
        }
    },
}

export default meta

type Story = StoryObj<typeof Partition>

// 主要状态
export const Primary: Story = {
    args: {
        size: 'xs',
        variant: 'solid',
        title: '这是一个标题',
    },
    render: (args) => (
        <Partition {...args} />
    )
}

//超小号
export const PrimaryXSmall: Story = {
    args: {
        size: 'xs',
        variant: 'solid',
        title: '这是一个标题',
    },
    render: (args) => (
        <Partition {...args} />
    )
}

//小号
export const PrimarySamll: Story = {
    args: {
        size: 'sm',
        variant: 'solid',
        title: '这是一个标题',
    },
    render: (args) => (
        <Partition {...args} />
    )
}

//中号
export const PrimaryMedium: Story = {
    args: {
        size: 'md',
        variant: 'solid',
        title: '这是一个标题',
    },
    render: (args) => (
        <Partition {...args} />
    )
}
//大号
export const PrimaryLarge: Story = {
    args: {
        size: 'lg',
        variant: 'solid',
        title: '这是一个标题',
    },
    render: (args) => (
        <Partition {...args} />
    )
}
//outline
export const OutlineMedium: Story = {
    args: {
        size: 'md',
        variant: 'outline',
        title: '这是一个标题',
    },
    render: (args) => (
        <Partition {...args} />
    )
}
//dashed
export const DashedMedium: Story = {
    args: {
        size: 'md',
        variant: 'dashed',
        title: '这是一个标题',
    },
    render: (args) => (
        <Partition {...args} />
    )
}

//Default
export const Default: Story = {
    args: {
        size: 'md',
        title: '这是一个标题',
    },
    render: (args) => (
        <Partition {...args} />
    )
}