import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

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
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
      />
    );
  }
}