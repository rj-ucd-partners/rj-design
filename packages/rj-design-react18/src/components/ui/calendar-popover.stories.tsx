import type { Meta, StoryObj } from "@storybook/react-vite"
import { CalendarPopover, type CalendarPopoverProps, type CalendarTimeValue } from "./calendar-popover"
import type { DateRange } from "react-day-picker"
import React from "react"

const meta: Meta<CalendarPopoverProps> = {
    title: 'Components/CalendarPopover',
    tags: ['autodocs'],
    component: CalendarPopover,
}

export default meta

type Story = StoryObj<CalendarPopoverProps>


const getWorkSpace = () => {
    return <div className='flex items-center bg-primary-disabled flex-1 h-[32px] text-[13px] leading-[32px] items-center justify-center text-primary'>
        自定义工作区
    </div>
}

// 基础日期选择（非受控）
export const BasicDatePicker: Story = {
    render: () => {
        return (
            <div className="w-[400px]">
                <CalendarPopover mode="single" />
            </div>
        )
    }
}

export const ControlledDatePicker: Story = {
    render: () => {
        const [value, setValue] = React.useState<CalendarTimeValue | undefined>({
            date: new Date(),
        })
        const [mouth, setMouth] = React.useState<Date>();
        return (
            <div className="w-[400px] space-y-4">
                <CalendarPopover
                    mode="single"
                    value={value}
                    onChange={setValue}
                    mouth={mouth}
                    onMonthChange={setMouth}
                />
                <div className="text-sm text-secondary flex flex-col">
                    选中日期: {value?.date?.toLocaleDateString('zh-CN') || '未选择'}
                    <span>说明：</span>
                    <span>头部区和脚部区可以自定义</span>
                    <span>确认和取消功能可以自定义</span>
                    <span>当前按钮可以自己传入</span>
                </div>
            </div>
        )
    }
}

export const ControlledDatePickerCurrent: Story = {
    render: () => {
        const [value, setValue] = React.useState<CalendarTimeValue | undefined>({
            date: new Date(),
        })
        const [mouth, setMouth] = React.useState<Date>();

        return (
            <div className="w-[400px] space-y-4">
                <CalendarPopover
                    mode="single"
                    value={value}
                    mouth={mouth}
                    onMonthChange={setMouth}
                    onChange={setValue}
                />
                <div className="text-sm text-secondary">
                    选中日期: {value?.date?.toLocaleDateString('zh-CN') || '未选择'}
                </div>
            </div>
        )
    }
}

export const ControlledDatePickerCurrentFooter: Story = {
    render: () => {
        const [value, setValue] = React.useState<CalendarTimeValue | undefined>({
            date: new Date(),
        })
        const [mouth, setMouth] = React.useState<Date>();
        const handleConfirm = () => {
            alert('确定')
        }
        const handleCancel = () => {
            alert('取消')
        }
        return (
            <div className="w-[400px] space-y-4">
                <CalendarPopover
                    mode="single"
                    value={value}
                    mouth={mouth}
                    onMonthChange={setMouth}
                    onChange={setValue}
                    showFooter={true}
                    footChildren={getWorkSpace()}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
                <div className="text-sm text-secondary">
                    选中日期: {value?.date?.toLocaleDateString('zh-CN') || '未选择'}
                </div>
            </div>
        )
    }
}


// 日期时间选择（非受控）
export const DateTimePicker: Story = {
    render: () => {
        return (
            <div className="w-[600px]">
                <CalendarPopover
                    mode="single"
                    showTime={true}
                    timeFormat="hh:mm:ss"
                />
            </div>
        )
    }
}

// 日期时间选择（受控）
export const ControlledDateTimePicker: Story = {
    render: () => {
        const [value, setValue] = React.useState<CalendarTimeValue | undefined>({
            date: new Date(),
            time: { hour: 10, minute: 30, second: 0, period: 'AM' }
        })
        const [mouth, setMouth] = React.useState<Date>();


        return (
            <div className="w-[600px] space-y-4">
                <CalendarPopover
                    mode="single"
                    showTime={true}
                    timeFormat="hh:mm:ss"
                    value={value}
                    onChange={setValue}
                    mouth={mouth}
                    onMonthChange={setMouth}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>选中日期: {value?.date?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div>选中时间: {value?.time ? `${value.time.hour}:${value.time.minute}:${value.time.second}` : '未选择'}</div>
                </div>
            </div>
        )
    }
}

export const ControlledDateTimePickerFoot: Story = {
    render: () => {
        const [value, setValue] = React.useState<CalendarTimeValue | undefined>({
            date: new Date(),
            time: { hour: 10, minute: 30, second: 0, period: 'AM' }
        })
        const [mouth, setMouth] = React.useState<Date>();


        return (
            <div className="w-[600px] space-y-4">
                <CalendarPopover
                    mode="single"
                    showTime={true}
                    timeFormat="hh:mm:ss"
                    value={value}
                    onChange={setValue}
                    mouth={mouth}
                    onMonthChange={setMouth}
                    showFooter={true}
                    footChildren={getWorkSpace()}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>选中日期: {value?.date?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div>选中时间: {value?.time ? `${value.time.hour}:${value.time.minute}:${value.time.second}` : '未选择'}</div>
                </div>
            </div>
        )
    }
}

// 12小时制时间选择
export const DateTime12HourPicker: Story = {
    render: () => {
        const [value, setValue] = React.useState<CalendarTimeValue>()

        return (
            <div className="w-[600px] space-y-4">
                <CalendarPopover
                    mode="single"
                    showTime={true}
                    timeFormat="hh:mm:ss a"
                    value={value}
                    onChange={setValue}
                />
                <div className="text-sm text-secondary">
                    {value?.date && value?.time && (
                        <div>
                            选中: {value.date.toLocaleDateString('zh-CN')} {value.time.hour}:{String(value.time.minute).padStart(2, '0')}:{String(value.time.second).padStart(2, '0')} {value.time.period}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

// 带确认/取消按钮
export const WithConfirmButtons: Story = {
    render: () => {
        const [value, setValue] = React.useState<CalendarTimeValue>()
        const [confirmed, setConfirmed] = React.useState<CalendarTimeValue>()

        return (
            <div className="w-[600px] space-y-4">
                <CalendarPopover
                    mode="single"
                    showTime={true}
                    timeFormat="hh:mm:ss"
                    value={value}
                    onChange={setValue}
                    showFooter={true}
                    footChildren={getWorkSpace()}
                    onConfirm={() => {
                        setConfirmed(value)
                        console.log('确认选择:', value)
                    }}
                    onCancel={() => {
                        console.log('取消选择')
                    }}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>当前选择: {value?.date?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div>已确认: {confirmed?.date?.toLocaleDateString('zh-CN') || '未确认'}</div>
                </div>
            </div>
        )
    }
}
export const HeaderDatePrimary: Story = {
    render: () => {
        const [value, setValue] = React.useState<CalendarTimeValue>()
        const [confirmed, setConfirmed] = React.useState<CalendarTimeValue>()

        return (
            <div className="w-[400px] space-y-4">
                <CalendarPopover
                    mode="single"
                    value={value}
                    onChange={setValue}
                    onConfirm={() => {
                        setConfirmed(value)
                        console.log('确认选择:', value)
                    }}
                    onCancel={() => {
                        console.log('取消选择')
                    }}
                    showHeader={true}
                    headerChildren={getWorkSpace()}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>当前选择: {value?.date?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div>已确认: {confirmed?.date?.toLocaleDateString('zh-CN') || '未确认'}</div>
                </div>
            </div>
        )
    }
}
export const HeaderDateTimerPrimary: Story = {
    render: () => {
        const [value, setValue] = React.useState<CalendarTimeValue>()
        const [confirmed, setConfirmed] = React.useState<CalendarTimeValue>()

        return (
            <div className="w-[600px] space-y-4">
                <CalendarPopover
                    mode="single"
                    showTime={true}
                    timeFormat="hh:mm:ss"
                    value={value}
                    onChange={setValue}
                    onConfirm={() => {
                        setConfirmed(value)
                        console.log('确认选择:', value)
                    }}
                    onCancel={() => {
                        console.log('取消选择')
                    }}
                    showHeader={true}
                    headerChildren={getWorkSpace()}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>当前选择: {value?.date?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div>已确认: {confirmed?.date?.toLocaleDateString('zh-CN') || '未确认'}</div>
                </div>
            </div>
        )
    }
}


// 日期范围选择（基础 - 单月）
export const DateRangePicker: Story = {
    render: () => {
        const [value, setValue] = React.useState<DateRange>()

        return (
            <div className="w-[400px] space-y-4">
                <CalendarPopover
                    mode="range"
                    value={value}
                    onChange={setValue}
                    numberOfMonths={1}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>开始日期: {value?.from?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div>结束日期: {value?.to?.toLocaleDateString('zh-CN') || '未选择'}</div>
                </div>
            </div>
        )
    }
}

// 日期范围选择（双月显示 - 默认）
export const DateRangeTwoMonths: Story = {
    render: () => {
        const [value, setValue] = React.useState<DateRange>()

        return (
            <div className="w-[700px] space-y-4">
                <CalendarPopover
                    mode="range"
                    value={value}
                    onChange={setValue}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>开始日期: {value?.from?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div>结束日期: {value?.to?.toLocaleDateString('zh-CN') || '未选择'}</div>
                </div>
            </div>
        )
    }
}

// 日期范围选择（三个月显示）
export const DateRangeThreeMonths: Story = {
    render: () => {
        const [value, setValue] = React.useState<DateRange>()

        return (
            <div className="w-[1000px] space-y-4">
                <CalendarPopover
                    mode="range"
                    value={value}
                    onChange={setValue}
                    numberOfMonths={3}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>开始日期: {value?.from?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div>结束日期: {value?.to?.toLocaleDateString('zh-CN') || '未选择'}</div>
                </div>
            </div>
        )
    }
}

// 日期范围选择（带 Footer）
export const DateRangeWithFooter: Story = {
    render: () => {
        const [value, setValue] = React.useState<DateRange>()
        const [confirmed, setConfirmed] = React.useState<DateRange>()

        return (
            <div className="w-[700px] space-y-4">
                <CalendarPopover
                    mode="range"
                    value={value}
                    onChange={setValue}
                    showFooter={true}
                    footChildren={getWorkSpace()}
                    onConfirm={() => {
                        setConfirmed(value)
                        console.log('确认选择:', value)
                    }}
                    onCancel={() => {
                        console.log('取消选择')
                    }}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>当前选择:</div>
                    <div className="ml-4">开始: {value?.from?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div className="ml-4">结束: {value?.to?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div className="mt-2">已确认:</div>
                    <div className="ml-4">开始: {confirmed?.from?.toLocaleDateString('zh-CN') || '未确认'}</div>
                    <div className="ml-4">结束: {confirmed?.to?.toLocaleDateString('zh-CN') || '未确认'}</div>
                </div>
            </div>
        )
    }
}

// 日期范围选择（带 Header 和 Footer）
export const DateRangeWithHeaderAndFooter: Story = {
    render: () => {
        const [value, setValue] = React.useState<DateRange>()
        const [mouth, setMouth] = React.useState<Date>()

        return (
            <div className="w-[700px] space-y-4">
                <CalendarPopover
                    mode="range"
                    value={value}
                    onChange={setValue}
                    mouth={mouth}
                    onMonthChange={setMouth}
                    showHeader={true}
                    headerChildren={getWorkSpace()}
                    showFooter={true}
                    footChildren={getWorkSpace()}
                    onConfirm={() => {
                        console.log('确认选择:', value)
                    }}
                    onCancel={() => {
                        console.log('取消选择')
                    }}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>开始: {value?.from?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div>结束: {value?.to?.toLocaleDateString('zh-CN') || '未选择'}</div>
                    <div>当前月份: {mouth?.toLocaleDateString('zh-CN') || '未设置'}</div>
                </div>
            </div>
        )
    }
}

// 不同尺寸
export const DifferentSizes: Story = {
    render: () => {
        return (
            <div className="space-y-4">
                <div className="w-[300px]">
                    <div className="text-sm mb-2">Small</div>
                    <CalendarPopover mode="single" size="sm" />
                </div>
                <div className="w-[400px]">
                    <div className="text-sm mb-2">Medium (默认)</div>
                    <CalendarPopover mode="single" size="md" />
                </div>
                <div className="w-[500px]">
                    <div className="text-sm mb-2">Large</div>
                    <CalendarPopover mode="single" size="lg" />
                </div>
            </div>
        )
    }
}

// 只选择时分
export const TimeHourMinutePicker: Story = {
    render: () => {
        const [value, setValue] = React.useState<CalendarTimeValue>()

        return (
            <div className="w-[600px]">
                <CalendarPopover
                    mode="single"
                    showTime={true}
                    timeFormat="hh:mm"
                    value={value}
                    onChange={setValue}
                />
            </div>
        )
    }
}

// 多选日期（Multiple 模式 - 可以选择多个独立的日期，只有日期没有时间）
export const MultipleDatePicker: Story = {
    render: () => {
        const [value, setValue] = React.useState<Date[]>()

        return (
            <div className="w-[400px] space-y-4">
                <CalendarPopover
                    mode="multiple"
                    value={value}
                    onChange={setValue}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>已选择 {value?.length || 0} 个日期:</div>
                    {value && value.length > 0 && (
                        <div className="ml-4">
                            {value.map((date, index) => (
                                <div key={index}>{date.toLocaleDateString('zh-CN')}</div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

// 多选日期（带 Footer）
export const MultipleDateWithFooter: Story = {
    render: () => {
        const [value, setValue] = React.useState<Date[]>()
        const [confirmed, setConfirmed] = React.useState<Date[]>()

        return (
            <div className="w-[400px] space-y-4">
                <CalendarPopover
                    mode="multiple"
                    value={value}
                    onChange={setValue}
                    showFooter={true}
                    footChildren={getWorkSpace()}
                    onConfirm={() => {
                        setConfirmed(value)
                        console.log('确认选择:', value)
                    }}
                    onCancel={() => {
                        console.log('取消选择')
                    }}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>当前选择: {value?.length || 0} 个日期</div>
                    <div>已确认: {confirmed?.length || 0} 个日期</div>
                    {confirmed && confirmed.length > 0 && (
                        <div className="ml-4 mt-2">
                            <div className="font-medium">已确认的日期:</div>
                            {confirmed.map((date, index) => (
                                <div key={index}>{date.toLocaleDateString('zh-CN')}</div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

// 多选日期（带 Header 和 Footer）
export const MultipleDateWithHeaderAndFooter: Story = {
    render: () => {
        const [value, setValue] = React.useState<Date[]>()
        const [mouth, setMouth] = React.useState<Date>()

        return (
            <div className="w-[400px] space-y-4">
                <CalendarPopover
                    mode="multiple"
                    value={value}
                    onChange={setValue}
                    mouth={mouth}
                    onMonthChange={setMouth}
                    showHeader={true}
                    headerChildren={getWorkSpace()}
                    showFooter={true}
                    footChildren={getWorkSpace()}
                    onConfirm={() => {
                        console.log('确认选择:', value)
                    }}
                    onCancel={() => {
                        console.log('取消选择')
                    }}
                />
                <div className="text-sm text-secondary space-y-1">
                    <div>已选择: {value?.length || 0} 个日期</div>
                    <div>当前月份: {mouth?.toLocaleDateString('zh-CN') || '未设置'}</div>
                    {value && value.length > 0 && (
                        <div className="ml-4 mt-2">
                            <div className="font-medium">已选择的日期:</div>
                            {value.map((date, index) => (
                                <div key={index}>{date.toLocaleDateString('zh-CN')}</div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
