import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { enUS } from 'date-fns/locale';
import { Button } from './button';
import type { DateRange } from 'react-day-picker';

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
export const PrimaryCalendar: Story = {
  args: {
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [month, setMonth] = useState<Date>(new Date());
    return (
      <Calendar
        locale={enUS}
        mode='single'
        selected={date}
        onSelect={setDate}
        month={month}
        onMonthChange={setMonth}
        toToday={setMonth}
        captionLayout="dropdown"
        className="rounded-md shadow-sm w-80"
      />
    );
  }
}

// 主要状态
export const RangeCalendar: Story = {
  args: {
  },
  render: () => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(),
      to: undefined
    });
    return (
      <Calendar
        locale={enUS}
        mode='range'
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        className="rounded-lg border shadow-sm w-100"
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
    const [month, setMonth] = useState<Date>(new Date());

    const toToday = () => {
      const today = new Date();
      setDate(today);
      setMonth(today);
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
          month={month}
          onMonthChange={setMonth}
          captionLayout="dropdown"
        />
      </div>
    );
  }
}