import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type SelectProps = ComponentProps<typeof Select>

const meta: Meta<SelectProps> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'default'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: (args: SelectProps) => (
    <Select {...args}>
      <SelectTrigger size={args.size}>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='orange'>Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args: SelectProps) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='orange'>Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
  render: (args: SelectProps) => (
    <Select {...args}>
      <SelectTrigger size='sm'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='orange'>Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
}
