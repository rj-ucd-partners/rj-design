import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['default', 'success', 'error', 'warning'],
    },
    dimension: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      defaultValue: 'text',
      control: { type: 'select' },
      options: ['text', 'password', 'number'],
    }
  },
}

export default meta

type Story = StoryObj<typeof Input>

// 输入框
export const Samll: Story = {
  args: {
    variant: 'default',
    type: 'text',
    dimension: 'sm'
  },
}
// 输入框
export const Mid: Story = {
  args: {
    variant: 'default',
    type: 'text',
    dimension: 'md'
  },
}
// 输入框
export const Large: Story = {
  args: {
    variant: 'default',
    type: 'text',
    dimension: 'lg'
  },
}
//成功
export const Success: Story = {
  args: {
    variant: 'success',
    type: 'text',
    dimension: 'md'
  },
}
//错误
export const Error: Story = {
  args: {
    variant: 'error',
    type: 'text',
    dimension: 'md'
  },
}
//警告
export const Warning: Story = {
  args: {
    variant: 'warning',
    type: 'text',
    dimension: 'md'
  },
}
// 密码输入框
export const Password: Story = {
  args: {
    variant: 'default',
    type: 'password',
    dimension: 'md',
  },
}

//带图标的输入框
