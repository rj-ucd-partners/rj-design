import type { Meta, StoryObj } from '@storybook/react-vite'
import { SwitchWithLabel } from "@/components/ui/switch-with-label"
import { useState } from 'react'

const meta: Meta<typeof SwitchWithLabel> = {
    title: 'Components/SwitchWithLabel',
    tags: ['autodocs'],
    component: SwitchWithLabel,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary'],
            description: '开关样式变体',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: '开关尺寸',
        },
        disabled: {
            control: 'boolean',
            description: '是否禁用',
        },
        isLoading: {
            control: 'boolean',
            description: '是否加载中',
        },
        checkedLabel: {
            control: 'text',
            description: '选中状态的文字',
        },
        uncheckedLabel: {
            control: 'text',
            description: '未选中状态的文字',
        },
    },
}

export default meta

type Story = StoryObj<typeof SwitchWithLabel>

// 基础示例 - 小尺寸
export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        checkedLabel: '开启',
        uncheckedLabel: '关闭',
    },
    render: (args) => {
        const [checked, setChecked] = useState(false)
        return (
            <div className="p-4">
                <SwitchWithLabel 
                    {...args} 
                    checked={checked} 
                    onCheckedChange={setChecked}
                />
                <p className="mt-4 text-sm text-secondary">
                    当前状态: {checked ? '开启' : '关闭'}
                </p>
            </div>
        )
    }
}

// 中等尺寸
export const Medium: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        checkedLabel: '开启',
        uncheckedLabel: '关闭',
    },
    render: (args) => {
        const [checked, setChecked] = useState(false)
        return (
            <div className="p-4">
                <SwitchWithLabel 
                    {...args} 
                    checked={checked} 
                    onCheckedChange={setChecked}
                />
                <p className="mt-4 text-sm text-secondary">
                    当前状态: {checked ? '开启' : '关闭'}
                </p>
            </div>
        )
    }
}

// 大尺寸
export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        checkedLabel: '开启',
        uncheckedLabel: '关闭',
    },
    render: (args) => {
        const [checked, setChecked] = useState(false)
        return (
            <div className="p-4">
                <SwitchWithLabel 
                    {...args} 
                    checked={checked} 
                    onCheckedChange={setChecked}
                />
                <p className="mt-4 text-sm text-secondary">
                    当前状态: {checked ? '开启' : '关闭'}
                </p>
            </div>
        )
    }
}

// 自定义文字 - 短文字
export const CustomLabelsShort: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        checkedLabel: 'ON',
        uncheckedLabel: 'OFF',
    },
    render: (args) => {
        const [checked, setChecked] = useState(false)
        return (
            <div className="p-4">
                <SwitchWithLabel 
                    {...args} 
                    checked={checked} 
                    onCheckedChange={setChecked}
                />
            </div>
        )
    }
}

// 自定义文字 - 长文字不对称
export const CustomLabelsAsymmetric: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        checkedLabel: '打开中',
        uncheckedLabel: '关闭',
    },
    render: (args) => {
        const [checked, setChecked] = useState(false)
        return (
            <div className="p-4">
                <SwitchWithLabel 
                    {...args} 
                    checked={checked} 
                    onCheckedChange={setChecked}
                />
                <p className="mt-4 text-sm text-secondary">
                    注意：两侧文字长度不同时，会以较长的文字为基准
                </p>
            </div>
        )
    }
}

// 自定义文字 - 长文字
export const CustomLabelsLong: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        checkedLabel: '已激活',
        uncheckedLabel: '未激活',
    },
    render: (args) => {
        const [checked, setChecked] = useState(true)
        return (
            <div className="p-4">
                <SwitchWithLabel 
                    {...args} 
                    checked={checked} 
                    onCheckedChange={setChecked}
                />
            </div>
        )
    }
}

// 禁用状态 - 开启
export const DisabledOn: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        checkedLabel: '开启',
        uncheckedLabel: '关闭',
        disabled: true,
        defaultChecked: true,
    },
    render: (args) => {
        return (
            <div className="p-4">
                <SwitchWithLabel {...args} />
                <p className="mt-4 text-sm text-disabled">
                    禁用状态（开启）
                </p>
            </div>
        )
    }
}

// 禁用状态 - 关闭
export const DisabledOff: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        checkedLabel: '开启',
        uncheckedLabel: '关闭',
        disabled: true,
        defaultChecked: false,
    },
    render: (args) => {
        return (
            <div className="p-4">
                <SwitchWithLabel {...args} />
                <p className="mt-4 text-sm text-disabled">
                    禁用状态（关闭）
                </p>
            </div>
        )
    }
}

// 加载状态
export const Loading: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        checkedLabel: '开启',
        uncheckedLabel: '关闭',
        isLoading: true,
    },
    render: (args) => {
        const [checked, setChecked] = useState(false)
        return (
            <div className="p-4">
                <SwitchWithLabel 
                    {...args} 
                    checked={checked} 
                    onCheckedChange={setChecked}
                />
                <p className="mt-4 text-sm text-secondary">
                    加载状态演示
                </p>
            </div>
        )
    }
}

// 非受控模式
export const Uncontrolled: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        checkedLabel: '开启',
        uncheckedLabel: '关闭',
        defaultChecked: false,
    },
    render: (args) => {
        return (
            <div className="p-4">
                <SwitchWithLabel {...args} />
                <p className="mt-4 text-sm text-secondary">
                    非受控模式 - 组件内部管理状态
                </p>
            </div>
        )
    }
}

// 多个开关组合展示
export const MultipleStates: Story = {
    render: () => {
        const [wifiEnabled, setWifiEnabled] = useState(true)
        const [bluetoothEnabled, setBluetoothEnabled] = useState(false)
        const [locationEnabled, setLocationEnabled] = useState(true)
        const [darkMode, setDarkMode] = useState(false)

        return (
            <div className="p-4 space-y-6">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-secondary">Wi-Fi</span>
                        <SwitchWithLabel
                            size="md"
                            checkedLabel="已连接"
                            uncheckedLabel="未连接"
                            checked={wifiEnabled}
                            onCheckedChange={setWifiEnabled}
                        />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-secondary">蓝牙</span>
                        <SwitchWithLabel
                            size="md"
                            checkedLabel="开启"
                            uncheckedLabel="关闭"
                            checked={bluetoothEnabled}
                            onCheckedChange={setBluetoothEnabled}
                        />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-secondary">位置服务</span>
                        <SwitchWithLabel
                            size="md"
                            checkedLabel="允许"
                            uncheckedLabel="禁止"
                            checked={locationEnabled}
                            onCheckedChange={setLocationEnabled}
                        />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-secondary">深色模式</span>
                        <SwitchWithLabel
                            size="md"
                            checkedLabel="ON"
                            uncheckedLabel="OFF"
                            checked={darkMode}
                            onCheckedChange={setDarkMode}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

// 不同尺寸对比
export const SizeComparison: Story = {
    render: () => {
        const [checked, setChecked] = useState(false)

        return (
            <div className="p-4 space-y-6">
                <div>
                    <p className="text-sm font-medium text-secondary mb-2">Small</p>
                    <SwitchWithLabel
                        size="sm"
                        checkedLabel="开启"
                        uncheckedLabel="关闭"
                        checked={checked}
                        onCheckedChange={setChecked}
                    />
                </div>
                
                <div>
                    <p className="text-sm font-medium text-secondary mb-2">Medium</p>
                    <SwitchWithLabel
                        size="md"
                        checkedLabel="开启"
                        uncheckedLabel="关闭"
                        checked={checked}
                        onCheckedChange={setChecked}
                    />
                </div>
                
                <div>
                    <p className="text-sm font-medium text-secondary mb-2">Large</p>
                    <SwitchWithLabel
                        size="lg"
                        checkedLabel="开启"
                        uncheckedLabel="关闭"
                        checked={checked}
                        onCheckedChange={setChecked}
                    />
                </div>
            </div>
        )
    }
}
