import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['normal', 'success', 'error', 'warning'],
    },
    dimension: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      defaultValue: 'text',
      control: { type: 'select' },
      options: ['text', 'password'],
    }
  },
}

export default meta

type Story = StoryObj<typeof Input>

// 输入框
export const Text: Story = {
  args: {
    variant: 'normal',
    type: 'text',
    dimension: 'md'
  },
}

// 输入框
export const Password: Story = {
  args: {
    variant: 'normal',
    type: 'password',
    dimension: 'md',
  },
}
