import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputNumberSidebar } from './InputNumberSidebar'

const meta: Meta<typeof InputNumberSidebar> = {
  title: 'Components/InputNumberSidebar',
  tags: ['autodocs'],
  component: InputNumberSidebar,
  argTypes: {
    format: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean'
    },
  },
}

export default meta

type Story = StoryObj<typeof InputNumberSidebar>

// 输入框
export const NumberInput: Story = {
  args: {
    format: 'md',
    disabled: true
  },
  render: (args) => {
    return (
      <div className='w-60'>
        <InputNumberSidebar format={args.format} disabled={args.disabled} />
      </div>
    );
  }
}


