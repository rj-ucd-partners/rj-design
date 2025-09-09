import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'


import React from 'react';
import { Select } from './select';

type SelectProps = ComponentProps<typeof Select>

const meta: Meta<SelectProps> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
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

type Story = StoryObj<SelectProps>

const items = [
  {
    key: 'apple',
    label: 'Apple',
  },
  {
    key: 'banana',
    label: 'Banana',
  },
  {
    key: 'orange',
    label: 'Orange',
  },
  {
    key: 'grape',
    label: 'Grape',
  },
  {
    key: 'bayberry',
    label: 'Bayberry',
  },
  {
    key: 'cherry',
    label: 'Cherry',
  },
  {
    key: 'strawberry',
    label: 'Strawberry',
  },
  {
    key: 'blueberry',
    label: 'Blueberry',
    disabled: true,
  }
]

export const Primary: Story = {
  args: {
    datasource: items,
    size: 'sm',
    disabled: false,
  },
  render: (args) => {
    const [selectValue, setSelectValue] = React.useState<string | undefined>(undefined);
    const onValueChange = (value: string) => {
      setSelectValue(value);
    }
    return (
      <Select datasource={args.datasource} size={args.size} disabled={args.disabled} value={selectValue} onValueChange={onValueChange} className='w-100' />
    )
  },
}

export const PrimaryMd: Story = {
  args: {
    datasource: items,
    size: 'md',
    disabled: false,
    placeholder: '请选择',
  },
  render: (args) => {
    const [selectValue, setSelectValue] = React.useState<string | undefined>(undefined);
    const onValueChange = (value: string) => {
      setSelectValue(value);
    }
    return (
      <Select {...args} value={selectValue} onValueChange={onValueChange} className='w-100' />
    )
  },
}

export const PrimaryLg: Story = {
  args: {
    datasource: items,
    size: 'lg',
    disabled: false,
    placeholder: '请选择',
  },
  render: (args) => {
    const [selectValue, setSelectValue] = React.useState<string | undefined>(undefined);
    const onValueChange = (value: string) => {
      setSelectValue(value);
    }
    return (
      <Select {...args} value={selectValue} onValueChange={onValueChange} className='w-100' />
    )
  },
}

export const PrimaryEmpty: Story = {
  args: {
    datasource: [],
    size: 'lg',
    disabled: false,
    placeholder: '请选择',
  },
  render: (args) => {
    const [selectValue, setSelectValue] = React.useState<string | undefined>(undefined);
    const onValueChange = (value: string) => {
      setSelectValue(value);
    }
    return (
      <Select {...args} value={selectValue} onValueChange={onValueChange} className='w-100' />
    )
  },
}
//前置图标选择器
// export const Front: Story = {
//   args: {
//   },
//   render: (args) => {
//     const [value, setValue] = React.useState<string | undefined>(undefined);
//     return (
//       <Select {...args} value={value} onValueChange={setValue}>
//         <SelectTrigger value={value} size={args.size} variant={args.variant}>
//           <FavoriteIcon className='size-4' />
//           <SelectValue placeholder='请选择' />
//         </SelectTrigger>
//         <SelectContent size={args.size} variant={args.variant}>
//           <SelectItem value='apple'>爱婆选项</SelectItem>
//           <SelectItem value='banana'>拔娜娜选项</SelectItem>
//           <SelectItem value='orange'>欧润吉选项</SelectItem>
//           <SelectItem value='grape'>哥让普选项</SelectItem>
//           <SelectItem value='bayberry'>拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项拔倍瑞选项</SelectItem>
//         </SelectContent>
//       </Select>
//     );
//   },
// }
