
import type { Meta, StoryObj } from "@storybook/react-vite"
import { YearPicker } from "./YearPicker"
import { useState } from "react"

const meta: Meta<typeof YearPicker> = {
    title: "Components/YearPicker",
    component: YearPicker,
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: "number",
            description: "选中的年份",
        },
        minYear: {
            control: "number",
            description: "最小可选年份",
        },
        maxYear: {
            control: "number",
            description: "最大可选年份",
        },
        showFooter: {
            control: "boolean",
            description: "是否显示底部操作栏",
        },
    },
}

export default meta
type Story = StoryObj<typeof YearPicker>

const getWorkSpace = () => {
    return <div className='flex items-center bg-primary-disabled flex-1 h-[32px] text-[13px] leading-[32px] items-center justify-center text-primary'>
        自定义工作区
    </div>
}


// 基础年份选择器
export const Basic: Story = {
    render: () => {
        const [selectedYear, setSelectedYear] = useState<number>()

        return (
            <div className="w-120">
                <YearPicker
                    value={selectedYear}
                    onChange={setSelectedYear}
                />
                <div className="mt-4 text-sm text-secondary">
                    选中的年份: {selectedYear || "未选择"}
                </div>
            </div>
        )
    },
}

// 带默认值
export const WithDefaultValue: Story = {
    render: () => {
        const [selectedYear, setSelectedYear] = useState<number>(2022)

        return (
            <div className="p-8 w-120">
                <YearPicker
                    value={selectedYear}
                    onChange={setSelectedYear}
                />
                <div className="mt-4 text-sm text-secondary">
                    选中的年份: {selectedYear}
                </div>
            </div>
        )
    },
}

// 带底部操作栏
export const WithFooter: Story = {
    render: () => {
        const [selectedYear, setSelectedYear] = useState<number>(2022)
        const [confirmedYear, setConfirmedYear] = useState<number>()

        const handleConfirm = () => {
            setConfirmedYear(selectedYear)
            console.log("确认选择:", selectedYear)
        }

        const handleCancel = () => {
            setSelectedYear(confirmedYear || new Date().getFullYear())
            console.log("取消选择")
        }

        return (
            <div className="p-8 w-120">
                <YearPicker
                    value={selectedYear}
                    onChange={setSelectedYear}
                    showFooter
                    footChildren={getWorkSpace()}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
                <div className="mt-4 space-y-2 text-sm text-secondary">
                    <div>当前选择: {selectedYear}</div>
                    <div>已确认: {confirmedYear || "未确认"}</div>
                </div>
            </div>
        )
    },
}

// 带底部操作栏
export const WithHeader: Story = {
    render: () => {
        const [selectedYear, setSelectedYear] = useState<number>(2022)
        const [confirmedYear, setConfirmedYear] = useState<number>()

        const handleConfirm = () => {
            setConfirmedYear(selectedYear)
            console.log("确认选择:", selectedYear)
        }

        const handleCancel = () => {
            setSelectedYear(confirmedYear || new Date().getFullYear())
            console.log("取消选择")
        }

        return (
            <div className="p-8 w-120">
                <YearPicker
                    value={selectedYear}
                    onChange={setSelectedYear}
                    showHeader
                    headerChildren={getWorkSpace()}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
                <div className="mt-4 space-y-2 text-sm text-secondary">
                    <div>当前选择: {selectedYear}</div>
                    <div>已确认: {confirmedYear || "未确认"}</div>
                </div>
            </div>
        )
    },
}


// 限制年份范围
export const WithYearRange: Story = {
    render: () => {
        const [selectedYear, setSelectedYear] = useState<number>(2022)

        return (
            <div className="p-8 w-120">
                <YearPicker
                    value={selectedYear}
                    onChange={setSelectedYear}
                    minYear={1900}
                    maxYear={2080}
                />
                <div className="mt-4 text-sm text-secondary">
                    年份范围: 2000-2050
                    <br />
                    选中的年份: {selectedYear}
                </div>
            </div>
        )
    },
}

// 非受控模式
export const Uncontrolled: Story = {
    render: () => {
        return (
            <div className="p-8 w-120">
                <YearPicker
                    onChange={(year) => console.log("选择年份:", year)}
                />
                <div className="mt-4 text-sm text-secondary">
                    查看控制台查看选择结果
                </div>
            </div>
        )
    },
}
