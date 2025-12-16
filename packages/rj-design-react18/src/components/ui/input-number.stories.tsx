import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputNumber } from './input-number'

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

type Story = StoryObj<typeof InputNumber>

// 输入框
export const NumberInput: Story = {
  args: {
    format: 'md',
    disabled: true
  },
  render: (args) => {
    return (
      <div className='w-40'>
        <InputNumber format={args.format} disabled={args.disabled} />
      </div>
    );
  }
}


