import type { Meta, StoryObj } from "@storybook/react-vite"
import { MonthPicker } from "./month-picker"
import { useState } from "react"

const meta: Meta<typeof MonthPicker> = {
    title: "Components/MonthPicker",
    component: MonthPicker,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MonthPicker>

// 基础月份选择
export const Basic: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number }>()

        return (
            <div className="p-8 space-y-4 w-100">
                <MonthPicker
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

// 带默认值
export const WithDefaultValue: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number }>({ year: 2024, month: 6 })

        return (
            <div className="p-8 space-y-4 w-100">
                <MonthPicker
                    value={value}
                    onChange={setValue}
                />
                <div className="text-sm text-secondary">
                    选中: {value.year}年{value.month}月
                </div>
            </div>
        )
    },
}

// 带底部操作栏
export const WithFooter: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number }>({ year: 2024, month: 3 })
        const [confirmed, setConfirmed] = useState<{ year: number, month: number }>()

        return (
            <div className="p-8 space-y-4 w-100">
                <MonthPicker
                    value={value}
                    onChange={setValue}
                    showFooter
                    onConfirm={() => setConfirmed(value)}
                    onCancel={() => setValue(confirmed || { year: 2024, month: 1 })}
                />
                <div className="space-y-2 text-sm text-secondary">
                    <div>当前选择: {value.year}年{value.month}月</div>
                    <div>已确认: {confirmed ? `${confirmed.year}年${confirmed.month}月` : "未确认"}</div>
                </div>
            </div>
        )
    },
}

// 带头部操作栏
export const WithHeader: Story = {
    render: () => {
        const [value, setValue] = useState<{ year: number, month: number }>()

        return (
            <div className="p-8 w-100">
                <MonthPicker
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
            <div className="p-8 space-y-4 w-100">
                <MonthPicker
                    value={value}
                    onChange={setValue}
                    minYear={2020}
                    maxYear={2030}
                />
                <div className="text-sm text-secondary">
                    年份范围: 2020-2030
                </div>
            </div>
        )
    },
}
