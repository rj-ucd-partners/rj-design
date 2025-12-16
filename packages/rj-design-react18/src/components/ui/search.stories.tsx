import type { Meta, StoryObj } from "@storybook/react-vite"
import { FunctionalitySelect } from "./search"
import { FavoriteIcon } from "../icon/favorite-icon"
import { MagnifierIcon } from "../icon/magnifier-icon"
import { useState } from "react"

const meta: Meta<typeof FunctionalitySelect> = {
    title: 'Components/FunctionalitySelect',
    component: FunctionalitySelect,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
        mode: {
            control: { type: 'select' },
            options: ['single', 'multiple'],
        },
    },
}

export default meta

type Story = StoryObj<typeof FunctionalitySelect>

const items = [
    {
        key: 'apple',
        label: 'Apple',
    },
    {
        key: 'banana',
        label: 'Banana',
    },
    {
        key: 'orange',
        label: 'Orange',
    },
    {
        key: 'grape',
        label: 'Grape',
    },
    {
        key: 'bayberry',
        label: 'Bayberry',
    },
    {
        key: 'cherry',
        label: 'Cherry',
    },
    {
        key: 'strawberry',
        label: 'Strawberry',
    },
    {
        key: 'blueberry',
        label: 'Blueberry',
        disabled: true,
    }
]

// 1. 单选 - 基础
export const SingleBasic: Story = {
    args: {
        disabled: false,
    },
    render: (args) => {
        const [value, setValue] = useState<string>('');
        return (
            <div className="space-y-4">
                <FunctionalitySelect
                    datasource={items}
                    size="md"
                    mode="single"
                    placeholder="请选择水果"
                    clearable={false}
                    canSearch={false}
                    value={value}
                    onValueChange={setValue}
                    className="w-[300px]"
                    disabled={args.disabled}
                />
                <div className="text-sm text-gray-600">
                    当前选中: {value || '无'}
                </div>
            </div>
        );
    }
}

export const SingleBasicCanAdd: Story = {
    args: {
        disabled: false,
    },
    render: (args) => {
        const [value, setValue] = useState<string>('');
        const [data, setData] = useState(items);
        const addItem = (label: string) => {
            setData([...data, { key: new Date().getTime().toString(), label: label }])
        }
        return (
            <div className="space-y-4">
                <FunctionalitySelect
                    datasource={data}
                    size="md"
                    mode="single"
                    placeholder="请选择水果"
                    clearable={false}
                    canSearch={false}
                    value={value}
                    onValueChange={setValue}
                    className="w-[300px]"
                    editable={true}
                    editCallback={addItem}
                    disabled={args.disabled}
                />
                <div className="text-sm text-gray-600">
                    当前选中: {value || '无'}
                </div>
            </div>
        );
    }
}


// 2. 单选 - 带搜索
export const SingleWithSearch: Story = {
    args: {
        disabled: false,
    },
    render: (args) => {
        const [value, setValue] = useState<string>('apple');
        return (
            <div className="space-y-4">
                <FunctionalitySelect
                    datasource={items}
                    size="md"
                    mode="single"
                    placeholder="搜索水果"
                    clearable={true}
                    canSearch={true}
                    value={value}
                    onValueChange={setValue}
                    className="w-[300px]"
                    disabled={args.disabled}
                />
                <div className="text-sm text-gray-600">
                    当前选中: {value || '无'}
                </div>
            </div>
        );
    }
}

// 3. 单选 - 带图标
export const SingleWithIcons: Story = {
    args: {
        disabled: false,
    },
    render: (args) => {
        const [value, setValue] = useState<string>('');
        return (
            <FunctionalitySelect
                datasource={items}
                size="lg"
                mode="single"
                placeholder="请选择"
                frontIcon={<FavoriteIcon />}
                postIcon={<MagnifierIcon className='size-4' />}
                clearable={true}
                canSearch={false}
                value={value}
                onValueChange={setValue}
                className="w-[300px]"
                disabled={args.disabled}
            />
        );
    }
}

// 4. 多选 - 基础 (展示动态 tag 收起效果)
export const MultipleBasic: Story = {
    args: {
        disabled: false,
    },
    render: (args) => {
        const [value, setValue] = useState<string[]>(['apple', 'banana', 'orange', 'grape']);
        return (
            <div className="space-y-4">
                <FunctionalitySelect
                    datasource={items}
                    size="md"
                    mode="multiple"
                    placeholder="请选择多个水果"
                    clearable={false}
                    canSearch={false}
                    value={value}
                    onValueChange={setValue}
                    className="w-[500px]"
                    disabled={args.disabled}
                />
                <div className="text-sm text-gray-600">
                    当前选中 {value.length} 项: {value.join(', ')}
                </div>
                <div className="text-xs text-gray-500">
                    💡 Tag会根据输入框宽度动态收起,调整窗口大小试试!
                </div>
            </div>
        );
    }
}

// 5. 多选 - 带搜索
export const MultipleWithSearch: Story = {
    args: {
        disabled: false,
    },
    render: (args) => {
        const [value, setValue] = useState<string[]>(['apple', 'banana']);
        return (
            <div className="space-y-4">
                <FunctionalitySelect
                    datasource={items}
                    size="md"
                    mode="multiple"
                    placeholder="搜索并选择"
                    clearable={true}
                    canSearch={true}
                    value={value}
                    onValueChange={setValue}
                    className="w-[600px]"
                    disabled={args.disabled}
                />
                <div className="text-sm text-gray-600">
                    已选中 {value.length} 项: {value.join(', ')}
                </div>
            </div>
        );
    }
}

// 6. 多选 - 带图标
export const MultipleWithIcons: Story = {
    args: {
        disabled: false,
    },
    render: (args) => {
        const [value, setValue] = useState<string[]>(['apple', 'orange', 'grape']);
        return (
            <FunctionalitySelect
                datasource={items}
                size="md"
                mode="multiple"
                placeholder="请选择"
                frontIcon={<FavoriteIcon />}
                clearable={true}
                canSearch={true}
                value={value}
                onValueChange={setValue}
                disabled={args.disabled}
            />
        );
    }
}

// 7. 不同尺寸对比
export const Sizes: Story = {
    args: {
        disabled: false,
    },
    render: (args) => {
        const [valueSm, setValueSm] = useState<string>('apple');
        const [valueMd, setValueMd] = useState<string>('banana');
        const [valueLg, setValueLg] = useState<string>('orange');

        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="text-sm font-medium">Small</div>
                    <FunctionalitySelect
                        datasource={items}
                        size="sm"
                        mode="single"
                        value={valueSm}
                        onValueChange={setValueSm}
                        placeholder="Small size"
                        className="w-[300px]"
                        disabled={args.disabled}
                    />
                </div>
                <div className="space-y-2">
                    <div className="text-sm font-medium">Medium</div>
                    <FunctionalitySelect
                        datasource={items}
                        size="md"
                        mode="single"
                        value={valueMd}
                        onValueChange={setValueMd}
                        placeholder="Medium size"
                        className="w-[300px]"
                        disabled={args.disabled}
                    />
                </div>
                <div className="space-y-2">
                    <div className="text-sm font-medium">Large</div>
                    <FunctionalitySelect
                        datasource={items}
                        size="lg"
                        mode="single"
                        value={valueLg}
                        onValueChange={setValueLg}
                        placeholder="Large size"
                        className="w-[300px]"
                        disabled={args.disabled}
                    />
                </div>
            </div>
        );
    }
}

// 8. 禁用状态
export const Disabled: Story = {
    args: {
        disabled: true
    },
    render: (args) => {
        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="text-sm font-medium">单选 - 禁用</div>
                    <FunctionalitySelect
                        datasource={items}
                        size="md"
                        mode="single"
                        value="apple"
                        disabled={args.disabled}
                        placeholder="已禁用"
                        className="w-[300px]"
                    />
                </div>
                <div className="space-y-2">
                    <div className="text-sm font-medium">多选 - 禁用</div>
                    <FunctionalitySelect
                        datasource={items}
                        size="md"
                        mode="multiple"
                        value={['apple', 'banana']}
                        disabled
                        placeholder="已禁用"
                        className="w-[300px]"
                    />
                </div>
            </div>
        );
    }
}

// 9. 可清除
export const Clearable: Story = {

    render: () => {
        const [singleValue, setSingleValue] = useState<string>('apple');
        const [multipleValue, setMultipleValue] = useState<string[]>(['apple', 'banana']);

        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="text-sm font-medium">单选 - 可清除</div>
                    <FunctionalitySelect
                        datasource={items}
                        size="md"
                        mode="single"
                        value={singleValue}
                        onValueChange={setSingleValue}
                        clearable
                        placeholder="可清除选择"
                        className="w-[300px]"
                    />
                    <div className="text-sm text-gray-600">值: {singleValue || '空'}</div>
                </div>
                <div className="space-y-2">
                    <div className="text-sm font-medium">多选 - 可清除</div>
                    <FunctionalitySelect
                        datasource={items}
                        size="md"
                        mode="multiple"
                        value={multipleValue}
                        onValueChange={setMultipleValue}
                        clearable
                        placeholder="可清除选择"
                        className="w-[300px]"
                    />
                    <div className="text-sm text-gray-600">
                        值: {multipleValue.length > 0 ? multipleValue.join(', ') : '空'}
                    </div>
                </div>
            </div>
        );
    }
}

// 10. 非受控模式
export const Uncontrolled: Story = {
    render: () => {
        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="text-sm font-medium">单选 - 非受控(默认值: apple)</div>
                    <FunctionalitySelect
                        datasource={items}
                        size="md"
                        mode="single"
                        defaultValue="apple"
                        onValueChange={(value) => console.log('单选变化:', value)}
                        placeholder="非受控组件"
                        className="w-[300px]"
                    />
                </div>
                <div className="space-y-2">
                    <div className="text-sm font-medium">多选 - 非受控(默认值: apple, banana)</div>
                    <FunctionalitySelect
                        datasource={items}
                        size="md"
                        mode="multiple"
                        defaultValue={['apple', 'banana']}
                        onValueChange={(value) => console.log('多选变化:', value)}
                        placeholder="非受控组件"
                        className="w-[300px]"
                    />
                </div>
            </div>
        );
    }
}

// 11. 完整功能展示
export const FullFeatures: Story = {
    render: () => {
        const [value, setValue] = useState<string[]>(['apple', 'banana', 'orange']);
        const [data, setData] = useState(items);
        const addItem = (label: string) => {
            setData([...data, { key: new Date().getTime().toString(), label: label }])
        }
        return (
            <div className="space-y-4">
                <div className="text-lg font-semibold">多选 + 搜索 + 图标 + 可清除</div>
                <FunctionalitySelect
                    datasource={data}
                    size="lg"
                    mode="multiple"
                    value={value}
                    onValueChange={setValue}
                    canSearch
                    clearable
                    frontIcon={<FavoriteIcon />}
                    postIcon={<MagnifierIcon className='size-4' />}
                    placeholder="搜索并选择水果"
                    onClear={() => console.log('清除了!')}
                    editable={true}
                    editCallback={addItem}
                    className="w-[400px]"
                />
            </div>
        );
    }
}