import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps, ReactNode } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FavoriteIcon } from '../icon/FavoriteIcon';

type SelectProps = ComponentProps<typeof Select>

interface ExtendedSelectProps extends SelectProps {
  variant: 'default';
  size: 'sm' | 'md' | 'lg';
  front: boolean,
  frontIcon?: ReactNode
}
const meta: Meta<ExtendedSelectProps> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<ExtendedSelectProps>

//单项选择器
export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger size={args.size} variant={args.variant} >
        <SelectValue placeholder='请选择' />
      </SelectTrigger>
      <SelectContent size={args.size} variant={args.variant}>
        <SelectItem value='apple'>爱婆选项</SelectItem>
        <SelectItem value='banana'>拔娜娜选项</SelectItem>
        <SelectItem value='orange'>欧润吉选项</SelectItem>
        <SelectItem value='grape'>哥让普选项</SelectItem>
        <SelectItem value='bayberry'>拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项</SelectItem>
      </SelectContent>
    </Select>
  ),
}

//前置图标选择器
export const Front: Story = {
  args: {
    front: true,
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger size={args.size} variant={args.variant} front={args.front} frontIcon={args.frontIcon}>
        <SelectValue placeholder='请选择' />
      </SelectTrigger>
      <SelectContent size={args.size} variant={args.variant}>
        <SelectItem value='apple'>爱婆选项</SelectItem>
        <SelectItem value='banana'>拔娜娜选项</SelectItem>
        <SelectItem value='orange'>欧润吉选项</SelectItem>
        <SelectItem value='grape'>哥让普选项</SelectItem>
        <SelectItem value='bayberry'>拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项</SelectItem>
      </SelectContent>
    </Select>
  ),
}
