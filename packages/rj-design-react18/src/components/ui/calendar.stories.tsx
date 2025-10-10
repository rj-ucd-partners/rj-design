import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { enUS } from 'date-fns/locale';
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
    const [month, setMonth] = useState<Date>(new Date());
    return (
      <Calendar
        locale={enUS}
        mode='range'
        selected={date}
        onSelect={setDate}
        month={month}
        onMonthChange={setMonth}
        captionLayout="dropdown"
        className="rounded-lg border shadow-sm w-100"
      />
    );
  }
}

export const RangeCalendarMore: Story = {
  args: {
  },
  render: () => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(),
      to: undefined
    });
    const [month, setMonth] = useState<Date>(new Date());
    return (
      <Calendar
        locale={enUS}
        mode='range'
        selected={date}
        onSelect={setDate}
        month={month}
        onMonthChange={setMonth}
        captionLayout="dropdown"
        numberOfMonths={2}
        className="rounded-lg border shadow-sm w-200"
      />
    );
  }
}