import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'secondary-text', 'link', 'text', 'destructive'],
    },
    size: {
      defaultValue: 'md',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'borderless-sm', 'borderless-md', 'borderless-lg'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>


// 主要状态
export const Primary: Story = {
  args: {
    children: '主要按钮',
    variant: 'primary',
    size: 'md'
  },
}
// 默认状态
export const Default: Story = {
  args: {
    children: '默认按钮',
    variant: 'default',
    size: 'md'
  },
}
//次强调按钮
export const Secondary: Story = {
  args: {
    children: "次强调按钮",
    variant: 'secondary',
    size: 'md'
  },
}
//文字强调按钮
export const SecondaryText: Story = {
  args: {
    children: "文字强调按钮",
    variant: 'secondary-text',
    size: 'md'
  },
}
//链接按钮
export const Link: Story = {
  args: {
    children: "链接按钮",
    variant: 'link',
    size: 'borderless-sm'
  },
}
//文字按钮
export const Text: Story = {
  args: {
    children: "文字按钮",
    variant: 'text',
    size: 'md'
  },
}
//警告按钮
export const Destructive: Story = {
  args: {
    children: "警告按钮",
    variant: 'destructive',
    size: 'md'
  },
}
