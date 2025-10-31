import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from '@/components/ui/calendar'
import { useEffect, useState } from 'react'
import { enUS } from 'date-fns/locale';
import type { DateRange } from 'react-day-picker';
import { Label } from './label';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { CalendarIcon } from 'lucide-react';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from './input-group';
import { CloseIcon } from '../icon/closeIcon';
import { ScrollArea, ScrollBar } from './scroll-area';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from './card';

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
    const [time, setTime] = useState<{
      hour: number
      minute: number,
      second: number
    } | undefined>(undefined)
    const [dateStr, setDateStr] = useState<string | undefined>()
    useEffect(() => {
      if (!date || !time) return;
      setDateStr(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${time.hour.toString().padStart(2, "0") + ':' + time.minute.toString().padStart(2, "0") + ':' + time.second.toString().padStart(2, "0")}`)
    }, [date, time])
    function handleTimeChange(type: "hour" | "minute" | "second", value: string) {
      const numValue = parseInt(value, 10);

      setTime((prevTime) => {
        // 如果之前没有时间，初始化为 00:00:00
        const currentTime = prevTime || { hour: 0, minute: 0, second: 0 };

        return {
          ...currentTime,
          [type]: numValue
        };
      });
    }
    const clearTime = () => {
      setTime(undefined)
      setDate(undefined)
      setDateStr(undefined)
    }
    return (
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <InputGroup variant={'primary'} size={'md'} className='w-108'>
              <InputGroupInput id="date" value={dateStr ?? ''} readOnly placeholder='请选择日期...' />
              {
                date ?
                  <InputGroupButton variant={'transparent'} size={'icon-xs'} onClick={clearTime}>
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
            <div className='sm:flex rounded-lg border shadow-sm bg-secondary-background'>
              <Calendar
                mode="single"
                selected={date}
                month={month}
                onMonthChange={setMonth}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date)
                }}
              />
              <div className='sm:flex-1 flex flex-col py-3'>
                <div className='h-8 text-center leading-[32px]'>
                  {time ? time?.hour.toString().padStart(2, "0") + ':' + time?.minute.toString().padStart(2, "0") + ':' + time?.second.toString().padStart(2, "0") : undefined}
                </div>
                <div className="flex flex-col sm:flex-row sm:h-[240px] gap-2 py-[15px] px-[12px]">
                  <ScrollArea transparent={true}>
                    <div className="flex sm:flex-col gap-1">
                      {Array.from({ length: 24 }, (_, i) => i)
                        .map((hour) => (
                          <Button
                            key={hour}
                            variant={"transparent"}
                            className={cn(
                              "sm:w-full shrink-0 aspect-square",
                              "w-[60px] h-[24px]",
                              "text-center",
                              "text-[13px] leading-[24px]",
                              "hover:bg-fill",
                              "rounded-sm",
                              time?.hour === hour && "text-primary"
                            )}
                            onClick={() =>
                              handleTimeChange("hour", hour.toString())
                            }
                          >
                            {hour.toString().padStart(2, "0")}
                          </Button>
                        ))}
                    </div>
                    <ScrollBar
                      orientation="horizontal"
                      className="sm:hidden"
                    />
                  </ScrollArea>
                  <ScrollArea className="sm:w-auto" transparent={true}>
                    <div className="flex sm:flex-col gap-1">
                      {Array.from({ length: 60 }, (_, i) => i).map(
                        (minute) => (
                          <Button
                            key={minute}
                            variant={"transparent"}
                            className={cn(
                              "sm:w-full shrink-0 aspect-square",
                              "w-[60px] h-[24px]",
                              "text-center",
                              "text-[13px] leading-[24px]",
                              "hover:bg-fill",
                              "rounded-sm",
                              time?.minute === minute && "text-primary"
                            )}
                            onClick={() =>
                              handleTimeChange("minute", minute.toString())
                            }
                          >
                            {minute.toString().padStart(2, "0")}
                          </Button>
                        )
                      )}
                    </div>
                    <ScrollBar
                      orientation="horizontal"
                      className="sm:hidden"
                    />
                  </ScrollArea>
                  <ScrollArea className="sm:w-auto" transparent={true}>
                    <div className="flex sm:flex-col gap-1">
                      {Array.from({ length: 60 }, (_, i) => i).map(
                        (second) => (
                          <Button
                            key={second}
                            variant={"transparent"}
                            className={cn(
                              "sm:w-full shrink-0 aspect-square",
                              "w-[60px] h-[24px]",
                              "text-center",
                              "text-[13px] leading-[24px]",
                              "hover:bg-fill",
                              "rounded-sm",
                              time?.second === second && "text-primary"
                            )}
                            onClick={() =>
                              handleTimeChange("second", second.toString())
                            }
                          >
                            {second.toString().padStart(2, "0")}
                          </Button>
                        )
                      )}
                    </div>
                    <ScrollBar
                      orientation="horizontal"
                      className="sm:hidden"
                    />
                  </ScrollArea>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    )
  }
}
//带顶部工作区的日历
export const CalendaCardTopPopover: Story = {
  args: {
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [month, setMonth] = useState(new Date())
    return (
      <Card className='inline-flex flex-col bg-secondary-background p-0'>
        <CardHeader className="p-0">
          <div className='flex justify-between items-center py-2 px-3 gap-2' >
            <div className='flex items-center bg-primary-disabled flex-1 h-[32px] text-[13px] leading-[32px] items-center justify-center text-primary'>
              自定义工作区
            </div>
            <div className='flex items-center  gap-2'>
              <Button
                variant={'link'}
                size={'md-link'}
                onClick={() => {
                  alert('工作区可以自由组装')
                }}
              >
                取消
              </Button>
              <Button
                variant={'primary'}
                size={'md'}
                onClick={() => {
                  alert('工作区可以自由组装')
                }}
              >
                确认
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 ">
          <Calendar
            locale={enUS}
            mode='single'
            selected={date}
            onSelect={setDate}
            month={month}
            onMonthChange={setMonth}
            captionLayout="dropdown"
            className='bg-transparent border-none rounded-none w-100'
          />
        </CardContent>
      </Card>
    );
  }
}
//带底部工作区的日历
export const CalendaCardBottomPopover: Story = {
  args: {
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [month, setMonth] = useState(new Date())
    return (
      <Card className='inline-flex flex-col bg-secondary-background p-0'>

        <CardContent className="p-0 ">
          <Calendar
            locale={enUS}
            mode='single'
            selected={date}
            onSelect={setDate}
            month={month}
            onMonthChange={setMonth}
            captionLayout="dropdown"
            className='bg-transparent border-none rounded-none w-100'
          />
        </CardContent>
        <CardFooter className="flex gap-2 border-t *:[div]:w-full p-0">
          <div className='flex justify-between items-center py-2 px-3 gap-2' >
            <div className='flex items-center bg-primary-disabled flex-1 h-[32px] text-[13px] leading-[32px] items-center justify-center text-primary'>
              自定义工作区
            </div>
            <div className='flex items-center gap-2'>
              <Button
                variant={'link'}
                size={'md-link'}
                onClick={() => {
                  alert('工作区可以自由组装')
                }}
              >
                取消
              </Button>
              <Button
                variant={'primary'}
                size={'md'}
                onClick={() => {
                  alert('工作区可以自由组装')
                }}
              >
                确认
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  }
}
//带工作区的日历
export const CalendaCardPopover: Story = {
  args: {
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [month, setMonth] = useState(new Date())
    return (
      <Card className='inline-flex flex-col bg-secondary-background p-0 text-primary'>
        <CardHeader className="p-0">
          <div className='flex justify-between items-center py-2 px-3 gap-2' >
            <div className='flex items-center bg-primary-disabled flex-1 h-[32px] text-[13px] leading-[32px] items-center justify-center'>
              自定义工作区
            </div>
            <div className='flex items-center  gap-2'>
              <Button
                variant={'link'}
                size={'md-link'}
                onClick={() => {
                  alert('工作区可以自由组装')
                }}
              >
                取消
              </Button>
              <Button
                variant={'primary'}
                size={'md'}
                onClick={() => {
                  alert('工作区可以自由组装')
                }}
              >
                确认
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 ">
          <Calendar
            locale={enUS}
            mode='single'
            selected={date}
            onSelect={setDate}
            month={month}
            onMonthChange={setMonth}
            captionLayout="dropdown"
            className='bg-transparent border-none rounded-none w-100'
          />
        </CardContent>
        <CardFooter className="flex gap-2 border-t *:[div]:w-full p-0">
          <div className='flex justify-between items-center py-2 px-3 gap-2' >
            <div className='flex items-center bg-primary-disabled flex-1 h-[32px] text-[13px] leading-[32px] items-center justify-center'>
              自定义工作区
            </div>
            <div className='flex items-center gap-2'>
              <Button
                variant={'link'}
                size={'md-link'}
                onClick={() => {
                  alert('工作区可以自由组装')
                }}
              >
                取消
              </Button>
              <Button
                variant={'primary'}
                size={'md'}
                onClick={() => {
                  alert('工作区可以自由组装')
                }}
              >
                确认
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

//带工作区的日历
export const CalendaTimeCardPopover: Story = {
  args: {
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [month, setMonth] = useState<Date>(new Date());
    const [time, setTime] = useState<{
      hour: number
      minute: number,
      second: number
    } | undefined>(undefined)
    const [dateStr, setDateStr] = useState<string | undefined>()
    useEffect(() => {
      if (!date || !time) return;
      setDateStr(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${time.hour.toString().padStart(2, "0") + ':' + time.minute.toString().padStart(2, "0") + ':' + time.second.toString().padStart(2, "0")}`)
    }, [date, time])
    function handleTimeChange(type: "hour" | "minute" | "second", value: string) {
      const numValue = parseInt(value, 10);

      setTime((prevTime) => {
        // 如果之前没有时间，初始化为 00:00:00
        const currentTime = prevTime || { hour: 0, minute: 0, second: 0 };

        return {
          ...currentTime,
          [type]: numValue
        };
      });
    }

    return (
      <Card className='inline-flex flex-col bg-secondary-background p-0'>
        <CardContent className="p-0">
          <div className='sm:flex rounded-lg border shadow-sm bg-secondary-background'>
            <Calendar
              mode="single"
              selected={date}
              month={month}
              onMonthChange={setMonth}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
              }}
            />
            <div className='sm:flex-1 flex flex-col py-3'>
              <div className='h-8 text-center leading-[32px]'>
                {time ? time?.hour.toString().padStart(2, "0") + ':' + time?.minute.toString().padStart(2, "0") + ':' + time?.second.toString().padStart(2, "0") : undefined}
              </div>
              <div className="flex flex-col sm:flex-row sm:h-[240px] gap-2 py-[15px] px-[12px]">
                <ScrollArea transparent={true}>
                  <div className="flex sm:flex-col gap-1">
                    {Array.from({ length: 24 }, (_, i) => i)
                      .map((hour) => (
                        <Button
                          key={hour}
                          variant={"transparent"}
                          className={cn(
                            "sm:w-full shrink-0 aspect-square",
                            "w-[60px] h-[24px]",
                            "text-center",
                            "text-[13px] leading-[24px]",
                            "hover:bg-fill",
                            "rounded-sm",
                            time?.hour === hour && "text-primary"
                          )}
                          onClick={() =>
                            handleTimeChange("hour", hour.toString())
                          }
                        >
                          {hour.toString().padStart(2, "0")}
                        </Button>
                      ))}
                  </div>
                  <ScrollBar
                    orientation="horizontal"
                    className="sm:hidden"
                  />
                </ScrollArea>
                <ScrollArea className="sm:w-auto" transparent={true}>
                  <div className="flex sm:flex-col gap-1">
                    {Array.from({ length: 60 }, (_, i) => i).map(
                      (minute) => (
                        <Button
                          key={minute}
                          variant={"transparent"}
                          className={cn(
                            "sm:w-full shrink-0 aspect-square",
                            "w-[60px] h-[24px]",
                            "text-center",
                            "text-[13px] leading-[24px]",
                            "hover:bg-fill",
                            "rounded-sm",
                            time?.minute === minute && "text-primary"
                          )}
                          onClick={() =>
                            handleTimeChange("minute", minute.toString())
                          }
                        >
                          {minute.toString().padStart(2, "0")}
                        </Button>
                      )
                    )}
                  </div>
                  <ScrollBar
                    orientation="horizontal"
                    className="sm:hidden"
                  />
                </ScrollArea>
                <ScrollArea className="sm:w-auto" transparent={true}>
                  <div className="flex sm:flex-col gap-1">
                    {Array.from({ length: 60 }, (_, i) => i).map(
                      (second) => (
                        <Button
                          key={second}
                          variant={"transparent"}
                          className={cn(
                            "sm:w-full shrink-0 aspect-square",
                            "w-[60px] h-[24px]",
                            "text-center",
                            "text-[13px] leading-[24px]",
                            "hover:bg-fill",
                            "rounded-sm",
                            time?.second === second && "text-primary"
                          )}
                          onClick={() =>
                            handleTimeChange("second", second.toString())
                          }
                        >
                          {second.toString().padStart(2, "0")}
                        </Button>
                      )
                    )}
                  </div>
                  <ScrollBar
                    orientation="horizontal"
                    className="sm:hidden"
                  />
                </ScrollArea>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 border-t *:[div]:w-full p-0">
          <div className='flex justify-between items-center py-2 px-3 gap-2' >
            <div className='flex items-center bg-primary-disabled flex-1 h-[32px] text-[13px] leading-[32px] items-center justify-center'>
              自定义工作区
            </div>
            <div className='flex items-center gap-2'>
              <Button
                variant={'link'}
                size={'md-link'}
                onClick={() => {
                  alert('工作区可以自由组装')
                }}
              >
                取消
              </Button>
              <Button
                variant={'primary'}
                size={'md'}
                onClick={() => {
                  alert('工作区可以自由组装')
                }}
              >
                确认
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

