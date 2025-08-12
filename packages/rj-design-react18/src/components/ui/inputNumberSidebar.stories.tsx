import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { InputNumberSidebar } from './inputNumberSidebar'

const meta: Meta<typeof InputNumberSidebar> = {
  title: 'Components/InputNumberSidebar',
  tags: ['autodocs'],
  component: InputNumberSidebar,
  argTypes: {
    dimension: {
      control: { type: 'select' },
      options: ['borderless-sm', 'borderless-md', 'borderless-lg'],
    },
    disabled: {
      control: 'boolean'
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

// 输入框
export const NumberInput: Story = {
  args: {
    dimension: 'borderless-md',
    disabled: true
  },
  render: (args) => {
    return (
      <InputNumberSidebar dimension={args.dimension} disabled={args.disabled} />
    );
  }
}


