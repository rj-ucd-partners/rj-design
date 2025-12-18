import type { Meta, StoryObj } from "@storybook/react-vite"
import { YearPopover } from "./YearPopover"
import { useState } from "react"

const meta: Meta<typeof YearPopover> = {
    title: "Components/YearPopover",
    component: YearPopover,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
            description: "输入框尺寸",
        },
        value: {
            control: "number",
            description: "选中的年份",
        },
        placeholder: {
            control: "text",
            description: "占位文本",
        },
        showFooter: {
            control: "boolean",
            description: "是否显示底部操作栏",
        },
    },
}

export default meta
type Story = StoryObj<typeof YearPopover>

// 基础年份选择
export const Basic: Story = {
    render: () => {
        const [year, setYear] = useState<number>()

        return (
            <div className="p-8 space-y-4 w-120">
                <YearPopover
                    value={year}
                    onChange={setYear}
                />
                <div className="text-sm text-secondary">
                    选中的年份: {year || "未选择"}
                </div>
            </div>
        )
    },
}

// 不同尺寸
export const Sizes: Story = {
    render: () => {
        const [yearSm, setYearSm] = useState<number>()
        const [yearMd, setYearMd] = useState<number>()
        const [yearLg, setYearLg] = useState<number>()

        return (
            <div className="p-8 space-y-4 w-120">
                <div>
                    <div className="mb-2 text-sm font-medium">Small</div>
                    <YearPopover
                        size="sm"
                        value={yearSm}
                        onChange={setYearSm}
                    />
                </div>

                <div>
                    <div className="mb-2 text-sm font-medium">Medium (默认)</div>
                    <YearPopover
                        size="md"
                        value={yearMd}
                        onChange={setYearMd}
                    />
                </div>

                <div>
                    <div className="mb-2 text-sm font-medium">Large</div>
                    <YearPopover
                        size="lg"
                        value={yearLg}
                        onChange={setYearLg}
                    />
                </div>
            </div>
        )
    },
}

// 带默认值
export const WithDefaultValue: Story = {
    render: () => {
        const [year, setYear] = useState<number | undefined>(2022)

        return (
            <div className="p-8 space-y-4 w-120">
                <YearPopover
                    value={year}
                    onChange={setYear}
                />
                <div className="text-sm text-secondary">
                    选中的年份: {year}
                </div>
            </div>
        )
    },
}

// 自定义占位文本
export const CustomPlaceholder: Story = {
    render: () => {
        const [year, setYear] = useState<number>()

        return (
            <div className="p-8 w-120">
                <YearPopover
                    value={year}
                    onChange={setYear}
                    placeholder="请选择年份"
                />
            </div>
        )
    },
}

// 带确认/取消按钮
export const WithFooter: Story = {
    render: () => {
        const [year, setYear] = useState<number | undefined>(2022)
        const [confirmedYear, setConfirmedYear] = useState<number>()

        const handleConfirm = () => {
            setConfirmedYear(year)
            console.log("确认选择:", year)
        }

        const handleCancel = () => {
            setYear(confirmedYear || new Date().getFullYear())
            console.log("取消选择")
        }

        return (
            <div className="p-8 space-y-4 w-120">
                <YearPopover
                    value={year}
                    onChange={setYear}
                    showFooter
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
                <div className="space-y-2 text-sm text-secondary">
                    <div>当前选择: {year}</div>
                    <div>已确认: {confirmedYear || "未确认"}</div>
                </div>
            </div>
        )
    },
}

// 自定义底部内容
export const WithCustomFooter: Story = {
    render: () => {
        const [year, setYear] = useState<number | undefined>(2022)

        return (
            <div className="p-8 w-120">
                <YearPopover
                    value={year}
                    onChange={setYear}
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

export const WithCustomHeader: Story = {
    render: () => {
        const [year, setYear] = useState<number | undefined>(2022)

        return (
            <div className="p-8 w-120">
                <YearPopover
                    value={year}
                    onChange={setYear}
                    showHeader
                    headerChildren={
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


// 限制年份范围
export const WithYearRange: Story = {
    render: () => {
        const [year, setYear] = useState<number | undefined>(2022)

        return (
            <div className="p-8 space-y-4">
                <YearPopover
                    value={year}
                    onChange={setYear}
                    minYear={2000}
                    maxYear={2050}
                />
                <div className="text-sm text-secondary">
                    可选范围: 2000-2050
                    <br />
                    选中的年份: {year}
                </div>
            </div>
        )
    },
}

// // 年份范围选择（起止年份）
// export const YearRangeSelection: Story = {
//     render: () => {
//         const [startYear, setStartYear] = useState<number>(2020)
//         const [endYear, setEndYear] = useState<number>(2025)

//         return (
//             <div className="p-8 space-y-4">
//                 <div className="flex items-center gap-4">
//                     <div className="flex-1">
//                         <div className="mb-2 text-sm font-medium">开始年份</div>
//                         <YearPopover
//                             value={startYear}
//                             onChange={setStartYear}
//                             maxYear={endYear}
//                             placeholder="开始年份"
//                         />
//                     </div>

//                     <div className="pt-6 text-secondary">-</div>

//                     <div className="flex-1">
//                         <div className="mb-2 text-sm font-medium">结束年份</div>
//                         <YearPopover
//                             value={endYear}
//                             onChange={setEndYear}
//                             minYear={startYear}
//                             placeholder="结束年份"
//                         />
//                     </div>
//                 </div>

//                 <div className="text-sm text-secondary">
//                     选择的年份范围: {startYear} - {endYear}
//                 </div>
//             </div>
//         )
//     },
// }

// // 表单集成
// export const FormIntegration: Story = {
//     render: () => {
//         const [formData, setFormData] = useState({
//             birthYear: undefined as number | undefined,
//             graduationYear: undefined as number | undefined,
//         })

//         const handleSubmit = () => {
//             console.log("表单数据:", formData)
//             alert(JSON.stringify(formData, null, 2))
//         }

//         return (
//             <div className="p-8 max-w-md">
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block mb-2 text-sm font-medium">
//                             出生年份
//                         </label>
//                         <YearPopover
//                             value={formData.birthYear}
//                             onChange={(year) => setFormData({ ...formData, birthYear: year })}
//                             placeholder="请选择出生年份"
//                             minYear={1950}
//                             maxYear={new Date().getFullYear()}
//                         />
//                     </div>

//                     <div>
//                         <label className="block mb-2 text-sm font-medium">
//                             毕业年份
//                         </label>
//                         <YearPopover
//                             value={formData.graduationYear}
//                             onChange={(year) => setFormData({ ...formData, graduationYear: year })}
//                             placeholder="请选择毕业年份"
//                             minYear={formData.birthYear ? formData.birthYear + 16 : 1960}
//                             maxYear={new Date().getFullYear() + 10}
//                         />
//                     </div>

//                     <button
//                         onClick={handleSubmit}
//                         className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md"
//                     >
//                         提交
//                     </button>
//                 </div>

//                 <div className="mt-4 p-4 bg-third-background rounded text-sm">
//                     <div className="font-medium mb-2">表单数据:</div>
//                     <pre className="text-xs">{JSON.stringify(formData, null, 2)}</pre>
//                 </div>
//             </div>
//         )
//     },
// }

// 非受控模式
export const Uncontrolled: Story = {
    render: () => {
        return (
            <div className="p-8 w-120">
                <YearPopover
                    placeholder="非受控模式"
                />
                <div className="mt-4 text-sm text-secondary">
                    查看控制台查看选择结果
                </div>
            </div>
        )
    },
}
