import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { InputNumber } from './inputNumber'

const meta: Meta<typeof InputNumber> = {
  title: 'Components/InputNumber',
  tags: ['autodocs'],
  component: InputNumber,
  argTypes: {
    format: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

// 输入框
export const NumberInput: Story = {
  args: {
    format: 'md',
    disabled: true
  },
  render: (args) => {
    return (
      <InputNumber format={args.format} disabled={args.disabled} />
    );
  }
}


