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
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      defaultValue: 'md',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

// 默认状态
export const Default: Story = {
  args: {
    children: 'Primary Button',
    variant: 'default',
  },
}

// 危险状态
export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
}

// 小尺寸按钮
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
}
