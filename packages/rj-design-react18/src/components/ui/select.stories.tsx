import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from './select';
import { FavoriteIcon } from '../icon/favorite-icon';
import React, { useState } from 'react';

type SelectProps = ComponentProps<typeof Select>

const meta: Meta<SelectProps> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary'],
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

export const PrimarySmallSelect: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
  },
  render: (args) => {
    const [data, setDate] = React.useState<string>('');

    return (
      <Select value={data} onValueChange={setDate} {...args} >
        <SelectTrigger className='w-80' >
          <SelectValue placeholder="请选择" />
        </SelectTrigger>
        <SelectContent>
          {items.map(item => {
            return <SelectItem key={item.key} value={item.key} disabled={item.disabled} >
              {item.label}
            </SelectItem>
          })}
        </SelectContent>
      </Select>

    )
  },
}


export const PrimaryMiddleSelect: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => {
    const [data, setDate] = useState<string>('');

    return (
      <Select value={data} onValueChange={setDate} {...args} >
        <SelectTrigger className='w-80' >
          <SelectValue placeholder="请选择" />
        </SelectTrigger>
        <SelectContent>
          {items.map(item => {
            return <SelectItem key={item.key} value={item.key} disabled={item.disabled} >
              {item.label}
            </SelectItem>
          })}
        </SelectContent>
      </Select>

    )
  },
}


export const PrimaryLargeSelect: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
  },
  render: (args) => {
    const [data, setDate] = useState<string>('');

    return (
      <Select value={data} onValueChange={setDate} {...args} >
        <SelectTrigger className='w-80' >
          <SelectValue placeholder="请选择" />
        </SelectTrigger>
        <SelectContent>
          {items.map(item => {
            return <SelectItem key={item.key} value={item.key} disabled={item.disabled}>
              {item.label}
            </SelectItem>
          })}
        </SelectContent>
      </Select>

    )
  },
}

export const PrimaryMiddleCanCloseSelect: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => {
    const [data, setDate] = useState<string>('');

    return (
      <Select value={data} onValueChange={setDate} {...args} >
        <SelectTrigger value={data} closeCallback={() => setDate('')} className='w-80' >
          <SelectValue placeholder="请选择" />
        </SelectTrigger>
        <SelectContent>
          {items.map(item => {
            return <SelectItem key={item.key} value={item.key} disabled={item.disabled} >
              {item.label}
            </SelectItem>
          })}
        </SelectContent>
      </Select>

    )
  },
}

export const PrimaryMiddleSelectDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  render: (args) => {
    const [data, setDate] = useState<string>('');

    return (
      <Select value={data} onValueChange={setDate} {...args}  >
        <SelectTrigger value={data} closeCallback={() => setDate('')} className='w-80' >
          <SelectValue placeholder="请选择" />
        </SelectTrigger>
        <SelectContent>
          {items.map(item => {
            return <SelectItem key={item.key} value={item.key} disabled={item.disabled} >
              {item.label}
            </SelectItem>
          })}
        </SelectContent>
      </Select>

    )
  },
}


export const PrimaryMiddleEmptySelect: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  render: (args) => {
    const [data, setDate] = useState<string>('');

    return (
      <Select value={data} onValueChange={setDate} {...args}  >
        <SelectTrigger value={data} closeCallback={() => setDate('')} className='w-80' >
          <SelectValue placeholder="请选择" />
        </SelectTrigger>
        <SelectContent>

        </SelectContent>
      </Select>

    )
  },
}


export const PrimaryHasIconMiddleCanCloseSelect: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => {
    const [data, setDate] = useState<string>('');
    return (
      <Select value={data} onValueChange={setDate} {...args} >
        <SelectTrigger value={data} closeCallback={() => setDate('')} className='w-80' >
          <div className='flex items-center justify-start gap-2'>
            <FavoriteIcon />
            <SelectValue placeholder="请选择" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {items.map(item => {
            return <SelectItem key={item.key} value={item.key} disabled={item.disabled} >
              {item.label}
            </SelectItem>
          })}
        </SelectContent>
      </Select>

    )
  },
}

export const PrimaryHasIconMiddleCanCloseCanAddSelect: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => {

    const [options, setOptions] = useState<{
      key: string;
      label: string;
      disabled?: boolean;
    }[]>([]);
    const [data, setDate] = useState<string>('');
    const AddOption = (value: string) => {
      if (!value) return;
      if (options.find(item => item.key === value)) return;
      setOptions([...options, { key: value, label: value }])
    }
    return (
      <Select value={data} onValueChange={setDate} {...args}>
        <SelectTrigger value={data} closeCallback={() => setDate('')} className='w-80' >
          <div className='flex items-center justify-start gap-2'>
            <FavoriteIcon />
            <SelectValue placeholder="请选择" />
          </div>
        </SelectTrigger>
        <SelectContent editable={true} editCallback={AddOption}>
          {options.length > 0 && options.map(item => {
            return <SelectItem key={item.key} value={item.key} disabled={item.disabled} >
              {item.label}
            </SelectItem>
          })}
        </SelectContent>
      </Select>
    )
  },
}