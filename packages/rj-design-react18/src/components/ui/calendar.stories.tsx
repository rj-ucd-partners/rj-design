import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { enUS } from 'date-fns/locale';
import { Button } from './button';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  tags: ['autodocs'],
  component: Calendar,
  argTypes: {

  },
}

export default meta

type Story = StoryObj<typeof Calendar>


// 主要状态
export const Primary: Story = {
  args: {
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        locale={enUS}
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
      />
    );
  }
}

// 主要状态
export const Currunt: Story = {
  args: {
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const toToday = () => {
    }
    return (
      <div className='relative inline-flex '>
        <Button variant={'link'} size={'link'} className='z-50 absolute right-[22px] top-[21px]' onClick={toToday}>
          当前
        </Button>
        <Calendar
          locale={enUS}
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown"
        />
      </div>
    );
  }
}