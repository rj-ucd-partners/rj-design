import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'


import React from 'react';
import { Select } from './select';
import { FavoriteIcon } from '../icon/FavoriteIcon';
import { MagnifierIcon } from '../icon/magnifier-icon';

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

export const PrimaryFront: Story = {
  args: {
    datasource: items,
    size: 'lg',
    disabled: false,
    placeholder: '请选择',
    frontIcon: <FavoriteIcon className='size-4' />
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

export const PrimaryPost: Story = {
  args: {
    datasource: items,
    size: 'lg',
    disabled: false,
    placeholder: '请选择',
    frontIcon: <FavoriteIcon className='size-4' />,
    postIcon: <MagnifierIcon className='size-4' />
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

export const PrimaryShowClear: Story = {
  args: {
    datasource: items,
    size: 'lg',
    disabled: false,
    placeholder: '请选择',
    frontIcon: <FavoriteIcon className='size-4' />,
    postIcon: <MagnifierIcon className='size-4' />,
    showClear: true
  },
  render: (args) => {
    const [selectValue, setSelectValue] = React.useState<string | undefined>(args.datasource![0].key);
    const onValueChange = (value: string) => {
      console.log('value', value)
      setSelectValue(value);
    }
    
    return (
      <Select {...args} value={selectValue} onValueChange={onValueChange} className='w-100' />
    )
  },
}