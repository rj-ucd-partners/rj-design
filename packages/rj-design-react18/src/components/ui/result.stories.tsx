import type { Meta, StoryObj } from "@storybook/react-vite"
import { Result, Solution, WebResult } from "./Result"

const meta: Meta<typeof Result> = {
    title: 'Components/Result',
    tags: ['autodocs'],
    component: Result,
    argTypes: {

    },
}

export default meta

type Story = StoryObj<typeof Result>;

const onConfirm = () => {
    alert('点击修改内容')
}
const onReturn = () => {
    alert('点击返回首页')
}

export const Default: Story = {
    args: {
        result: '成功状态',
        description: '辅助信息辅助信息辅助信息辅助信息',
        status: 'success'
    },
    render: (args) => (
        <div style={{
            width: '360px',
            height: '558px'
        }}>
            <Result {...args} onConfirm={onConfirm} onReturn={onReturn} />
        </div>
    )
}

export const Success: Story = {
    args: {
        result: '成功状态',
        description: '辅助信息辅助信息辅助信息辅助信息',
        status: 'success',
        showAction: true
    },
    render: (args) => (
        <div style={{
            width: '360px',
            height: '558px'
        }}>
            <Result {...args} onConfirm={onConfirm} onReturn={onReturn} />
        </div>
    )
}

export const Fail: Story = {
    args: {
        result: '失败状态',
        description: '辅助信息辅助信息辅助信息辅助信息',
        status: 'fail',
        showAction: true
    },
    render: (args) => (
        <div style={{
            width: '360px',
            height: '558px'
        }}>
            <Result {...args} onConfirm={onConfirm} onReturn={onReturn} />
        </div>
    )
}

export const Warning: Story = {
    args: {
        result: '告警状态',
        description: '辅助信息辅助信息辅助信息辅助信息',
        status: 'warning',
        showAction: true
    },
    render: (args) => (
        <div style={{
            width: '360px',
            height: '558px'
        }}>
            <Result {...args} onConfirm={onConfirm} onReturn={onReturn} />
        </div>
    )
}

export const Info: Story = {
    args: {
        result: '提示状态',
        description: '辅助信息辅助信息辅助信息辅助信息',
        status: 'info',
        showAction: true
    },
    render: (args) => (
        <div style={{
            width: '360px',
            height: '558px'
        }}>
            <Result {...args} onConfirm={onConfirm} onReturn={onReturn} />
        </div>
    )
}

export const Verify: Story = {
    args: {
        result: '校验状态',
        description: '辅助信息辅助信息辅助信息辅助信息',
        status: 'verify',
        showAction: true
    },
    render: (args) => (
        <div style={{
            width: '360px',
            height: '558px'
        }}>
            <Result {...args} onConfirm={onConfirm} onReturn={onReturn} />
        </div>
    )
}

export const Loading: Story = {
    args: {
        result: '加载状态状态',
        description: '辅助信息辅助信息辅助信息辅助信息',
        status: 'loading',
        showAction: true
    },
    render: (args) => (
        <div style={{
            width: '360px',
            height: '558px'
        }}>
            <Result {...args} onConfirm={onConfirm} onReturn={onReturn} />
        </div>
    )
}
const solutionItems: string[] = [
    '其他描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
    '其他描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述'
]

export const Primary: Story = {
    args: {
        result: '加载状态状态',
        description: '辅助信息辅助信息辅助信息辅助信息',
        status: 'success',
        showAction: true
    },
    render: (args) => (
        <div style={{
            width: '800px',
            height: '716px'
        }}>
            <Result {...args} onConfirm={onConfirm} onReturn={onReturn} >
                <Solution solutionItems={solutionItems} />
            </Result>
        </div>
    )
}
export const Web: Story = {
    args: {
        result: '加载状态状态',
        description: ['没有访问地权限', '被禁止访问此网站'],
        status: 'success'
    },
    render: (args) => (
        <div style={{
            width: '800px',
            height: '716px'
        }}>
            <WebResult {...args} onConfirm={onConfirm} onReturn={onReturn} >
                <Solution solutionItems={solutionItems} />
            </WebResult>
        </div>
    )
}
const solutionItems1: string[] = [
    '其他描述描述描述描述描述描述描述',
    '其他描述描述描述描述描述描述描述'
]
export const Web1: Story = {
    args: {
        result: '405资源被禁止',
        description: '405是代表对于请求所标识的资源，不允许使用请求行中所指定的方法',
        status: 'success'
    },
    render: (args) => (
        <div style={{
            width: '580px',
            height: '716px'
        }}>
            <WebResult {...args} onConfirm={onConfirm} onReturn={onReturn} >
                <Solution solutionItems={solutionItems1} />
            </WebResult>
        </div>
    )
}

export const Web403: Story = {
    args: {
        result: '403访问禁止',
        description: ['没有权限访问此网站', '被禁止访问此网站'],
        status: 'warning',
    },
    render: (args) => (
        <div style={{
            width: '580px',
            height: '716px'
        }}>
            <WebResult {...args} onConfirm={onConfirm} onReturn={onReturn} code={403}>
                <Solution solutionItems={solutionItems1} />
            </WebResult>
        </div>
    )
}