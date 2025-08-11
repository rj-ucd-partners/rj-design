import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { Button } from './button'

const meta: Meta<typeof Input> = {
  title: 'Components/InputNumber',
  component: Input,
  argTypes: {
    variant: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['normal'],
    },
    dimension: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

// 输入框
export const Number1: Story = {
  args: {
    variant: 'normal',
    type: 'number',
    dimension: 'md'
  },
  render: (args) => {
    return (
      <div className='flex flex-row gap-2'>
        <Button variant={'page'} size={'md'}>
          +
        </Button>
        <Input className='w-25'  {...args} />
        <Button variant={'page'} size={'md'}>
          -
        </Button>
      </div>
    );
  }
}


