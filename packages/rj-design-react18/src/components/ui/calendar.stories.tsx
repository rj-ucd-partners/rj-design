import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { enUS } from 'date-fns/locale';
import type { DateRange } from 'react-day-picker';
import { Label } from './label';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { CalendarIcon } from 'lucide-react';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from './input-group';
import { CloseIcon } from '../icon/closeIcon';

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
// 多选状态
export const MultipleCalendar: Story = {
  args: {
  },
  render: () => {
    const [date, setDate] = useState<Date[] | undefined>();
    const [month, setMonth] = useState<Date>(new Date());
    return (
      <Calendar
        locale={enUS}
        mode='multiple'
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
//多选日历
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
//单选日期框
export const SingleCalendaPopover: Story = {
  args: {
  },
  render: () => {
    const [open, setOpen] = useState<boolean>(false)
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [month, setMonth] = useState<Date>(new Date());
    return (
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <InputGroup variant={'primary'} size={'md'} className='w-100'>
              <InputGroupInput id="date" value={date?.toLocaleDateString() ?? ''} readOnly placeholder='请选择日期' />
              {
                date ?
                  <InputGroupButton variant={'transparent'} size={'icon-xs'} onClick={() => { setDate(undefined) }}>
                    <CloseIcon />
                  </InputGroupButton>
                  :
                  <InputGroupAddon align={'inline-end'}>
                    <CalendarIcon />
                  </InputGroupAddon>
              }

            </InputGroup>
          </PopoverTrigger>
          <PopoverContent
            alignOffset={5}
            sideOffset={5}
          >
            <Calendar
              className="rounded-lg border shadow-sm w-100"
              mode="single"
              selected={date}
              month={month}
              onMonthChange={setMonth}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }
}
//多选日期框
export const MultipleCalendaPopover: Story = {
  args: {
  },
  render: () => {
    const [open, setOpen] = useState<boolean>(false)
    const [date, setDate] = useState<DateRange | undefined>(undefined)
    const [month, setMonth] = useState<Date>(new Date());
    return (
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <InputGroup variant={'primary'} size={'md'} className='w-80'>
              <InputGroupInput id="date" value={date?.from?.toLocaleDateString() ?? ''} readOnly placeholder='起始日期' />
              <span className='mr-1'>-</span>
              <InputGroupInput id="date-end" value={date?.to?.toLocaleDateString() ?? ''} readOnly placeholder='截止日期' />
              {
                date ?
                  <InputGroupButton variant={'transparent'} size={'icon-xs'} onClick={() => { setDate(undefined) }}>
                    <CloseIcon />
                  </InputGroupButton>
                  :
                  <InputGroupAddon align={'inline-end'}>
                    <CalendarIcon />
                  </InputGroupAddon>
              }

            </InputGroup>
          </PopoverTrigger>
          <PopoverContent
            alignOffset={5}
            sideOffset={5}
          >
            <Calendar
              className="rounded-lg border shadow-sm w-80"
              mode="range"
              selected={date}
              month={month}
              onMonthChange={setMonth}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
              }}
              numberOfMonths={1}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }
}
//多选-多月日期框
export const MultipleMouthCalendaPopover: Story = {
  args: {
  },
  render: () => {
    const [open, setOpen] = useState<boolean>(false)
    const [date, setDate] = useState<DateRange | undefined>(undefined)
    const [month, setMonth] = useState<Date>(new Date());
    return (
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <InputGroup variant={'primary'} size={'md'} className='w-150'>
              <InputGroupInput id="date" value={date?.from?.toLocaleDateString() ?? ''} readOnly placeholder='起始日期' />
              <span className='mr-1'>-</span>
              <InputGroupInput id="date-end" value={date?.to?.toLocaleDateString() ?? ''} readOnly placeholder='截止日期' />
              {
                date ?
                  <InputGroupButton variant={'transparent'} size={'icon-xs'} onClick={() => { setDate(undefined) }}>
                    <CloseIcon />
                  </InputGroupButton>
                  :
                  <InputGroupAddon align={'inline-end'}>
                    <CalendarIcon />
                  </InputGroupAddon>
              }

            </InputGroup>
          </PopoverTrigger>
          <PopoverContent
            alignOffset={5}
            sideOffset={5}
          >
            <Calendar
              className="rounded-lg border shadow-sm w-150"
              mode="range"
              selected={date}
              month={month}
              onMonthChange={setMonth}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }
}
//日历带时间框
export const TimeCalendaPopover: Story = {
  args: {
  },
  render: () => {
    const [open, setOpen] = useState<boolean>(false)
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [month, setMonth] = useState<Date>(new Date());
    return (
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <InputGroup variant={'primary'} size={'md'} className='w-100'>
              <InputGroupInput id="date" value={date?.toLocaleDateString() ?? ''} readOnly placeholder='细粒度时间选择器' className='inline-flex' />
              <span className='mr-1' />
              <InputGroupInput type="time" id="time-picker" step="1" defaultValue="10:30:00"
                className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                placeholder='' />
              {
                date ?
                  <InputGroupButton variant={'transparent'} size={'icon-xs'} onClick={() => { setDate(undefined) }}>
                    <CloseIcon />
                  </InputGroupButton>
                  :
                  <InputGroupAddon align={'inline-end'}>
                    <CalendarIcon />
                  </InputGroupAddon>
              }

            </InputGroup>
          </PopoverTrigger>
          <PopoverContent
            alignOffset={5}
            sideOffset={5}
          >
            <Calendar
              className="rounded-lg border shadow-sm w-100"
              mode="single"
              selected={date}
              month={month}
              onMonthChange={setMonth}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }
}