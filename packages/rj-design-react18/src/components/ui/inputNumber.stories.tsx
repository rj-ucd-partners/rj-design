import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { InputNumber } from './inputNumber'

const meta: Meta<typeof InputNumber> = {
  title: 'Components/InputNumber',
  tags: ['autodocs'],
  component: InputNumber,
  argTypes: {
    dimension: {
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
    dimension: 'md',
    disabled: true
  },
  render: (args) => {
    return (
      <InputNumber dimension={args.dimension} disabled={args.disabled} />
    );
  }
}


