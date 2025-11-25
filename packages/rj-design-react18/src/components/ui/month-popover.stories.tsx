import type { Meta, StoryObj } from "@storybook/react-vite"
import { MonthPopover } from "./month-popover"
import { useState } from "react"

const meta: Meta<typeof MonthPopover> = {
    title: "Components/MonthPopover",
    component: MonthPopover,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MonthPopover>

// 基础月份选择
export const Basic: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number }>()

        return (
            <div className="p-8 space-y-4 w-120">
                <MonthPopover
                    value={value}
                    onChange={setValue}
                />
                <div className="text-sm text-secondary">
                    选中: {value ? `${value.year}年${value.month}月` : "未选择"}
                </div>
            </div>
        )
    },
}

// 不同尺寸
export const Sizes: Story = {
    render: () => {
        const [valueSm, setValueSm] = useState<{ year: number, month: number }>()
        const [valueMd, setValueMd] = useState<{ year: number, month: number }>()
        const [valueLg, setValueLg] = useState<{ year: number, month: number }>()

        return (
            <div className="p-8 space-y-4 w-120">
                <div>
                    <div className="mb-2 text-sm font-medium">Small</div>
                    <MonthPopover
                        size="sm"
                        value={valueSm}
                        onChange={setValueSm}
                    />
                </div>

                <div>
                    <div className="mb-2 text-sm font-medium">Medium (默认)</div>
                    <MonthPopover
                        size="md"
                        value={valueMd}
                        onChange={setValueMd}
                    />
                </div>

                <div>
                    <div className="mb-2 text-sm font-medium">Large</div>
                    <MonthPopover
                        size="lg"
                        value={valueLg}
                        onChange={setValueLg}
                    />
                </div>
            </div>
        )
    },
}

// 带默认值
export const WithDefaultValue: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number } | undefined>({ year: 2024, month: 6 })

        return (
            <div className="p-8 space-y-4 w-120">
                <MonthPopover
                    value={value}
                    onChange={setValue}
                />
                <div className="text-sm text-secondary">
                    选中: {value ? `${value.year}年${value.month}月` : '未选择'}
                </div>
            </div>
        )
    },
}

// 自定义占位文本
export const CustomPlaceholder: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number }>()

        return (
            <div className="p-8 w-120">
                <MonthPopover
                    value={value}
                    onChange={setValue}
                    placeholder="请选择月份"
                />
            </div>
        )
    },
}

// 带确认/取消按钮
export const WithFooter: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number } | undefined>({ year: 2024, month: 3 })
        const [confirmed, setConfirmed] = useState<{ year: number, month: number } | undefined>()

        const handleConfirm = () => {
            setConfirmed(value)
            console.log("确认选择:", value)
        }

        const handleCancel = () => {
            setValue(confirmed || { year: new Date().getFullYear(), month: new Date().getMonth() + 1 })
            console.log("取消选择")
        }

        return (
            <div className="p-8 space-y-4 w-120">
                <MonthPopover
                    value={value}
                    onChange={setValue}
                    showFooter
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
                <div className="space-y-2 text-sm text-secondary">
                    <div>当前选择: {value ? `${value.year}年${value.month}月` : "未选择"}</div>
                    <div>已确认: {confirmed ? `${confirmed.year}年${confirmed.month}月` : "未确认"}</div>
                </div>
            </div>
        )
    },
}

// 自定义底部内容
export const WithCustomFooter: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number }>()

        return (
            <div className="p-8 w-120">
                <MonthPopover
                    value={value}
                    onChange={setValue}
                    showFooter
                    footChildren={
                        <div className="text-xs text-primary">
                            这个是可以自己传入的！
                        </div>
                    }
                    onConfirm={() => console.log("确认")}
                    onCancel={() => console.log("取消")}
                />
            </div>
        )
    },
}

// 自定义头部内容
export const WithCustomHeader: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number }>()

        return (
            <div className="p-8 w-120">
                <MonthPopover
                    value={value}
                    onChange={setValue}
                    showHeader
                    headerChildren={
                        <div className="text-xs text-primary">
                            请选择月份
                        </div>
                    }
                    onConfirm={() => console.log("确认")}
                    onCancel={() => console.log("取消")}
                />
            </div>
        )
    },
}

// 自定义年份范围
export const WithCustomYearRange: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number }>()

        return (
            <div className="p-8 w-120">
                <MonthPopover
                    value={value}
                    onChange={setValue}
                    minYear={2020}
                    maxYear={2030}
                />
            </div>
        )
    },
}
