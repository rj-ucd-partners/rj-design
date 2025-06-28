import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Input>

// 默认状态
export const Default: Story = {
  args: {},
}
