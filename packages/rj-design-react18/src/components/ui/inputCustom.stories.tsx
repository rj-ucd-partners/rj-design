import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputBehindtIcon, InputCustom, InputFrontIcon } from '@/components/ui/inputCustom'
import { ManIcon } from '../icon/manIcon'
import { MagnifierIcon } from '../icon/magnifierIcon'
import { LockIcon } from '../icon/lock-icon'
import { Button } from './button'
import React from 'react'
import { EyeClosed, EyeIcon } from 'lucide-react'
import { CloseIcon } from '../icon/closeIcon'


const meta: Meta<typeof InputCustom> = {
    title: 'Components/InputCustom',
    component: InputCustom,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'success', 'error', 'warning'],
        },
        dimension: {
            control: { type: 'select' },
            options: ['borderless-sm', 'borderless-md', 'borderless-lg'],
        }
    },
}

export default meta

type Story = StoryObj<typeof InputCustom>

// 输入框
export const Icon: Story = {
    args: {
        variant: 'default',
        dimension: 'borderless-sm',
    },
    render: (args) => {
        return (
            <InputCustom dimension={args.dimension} {...args}>
                <InputFrontIcon>
                    <ManIcon />
                </InputFrontIcon>
                <InputBehindtIcon>
                    <MagnifierIcon />
                </InputBehindtIcon>
            </InputCustom>
        );
    }
}

// 输入框
export const Front: Story = {
    args: {
        variant: 'default',
        dimension: 'borderless-sm',
    },
    render: (args) => {
        return (
            <InputCustom dimension={args.dimension} {...args}>
                <InputFrontIcon>
                    <ManIcon />
                </InputFrontIcon>

            </InputCustom>
        );
    }
}

// 输入框
export const Behindt: Story = {
    args: {
        variant: 'default',
        dimension: 'borderless-sm',
    },
    render: (args) => {
        return (
            <InputCustom dimension={args.dimension} {...args}>
                <InputBehindtIcon>
                    <MagnifierIcon />
                </InputBehindtIcon>
            </InputCustom>
        );
    }
}


// 密码输入框
export const Password: Story = {
    args: {
        variant: 'default',
        dimension: 'borderless-sm',
        placeholder: '请输入密码'
    },
    render: (args) => {
        const [show, setShow] = React.useState<boolean>(false)

        return (
            <InputCustom type={show ? 'text' : 'password'} dimension={args.dimension} {...args}>
                <InputFrontIcon dimension={args.dimension}>
                    <LockIcon />
                </InputFrontIcon>
                <InputBehindtIcon dimension={args.dimension}>
                    <Button variant={'transparent'} size={'link'} onClick={() => {
                        setShow(!show)
                    }}>
                        {
                            show ?
                                <EyeIcon />
                                :
                                <EyeClosed />
                        }
                    </Button>
                </InputBehindtIcon>
            </InputCustom>
        );
    }
}


// 功能输入框
export const Func: Story = {
    args: {
        variant: 'default',
        dimension: 'borderless-sm',
        placeholder: '填写的内容'
    },
    render: (args) => {
        const [value, setValue] = React.useState<string | undefined>(undefined)

        return (
            <InputCustom type={'text'} dimension={args.dimension}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...args}>
                <InputFrontIcon dimension={args.dimension}>
                    <LockIcon />
                </InputFrontIcon>
                {
                    value &&
                    <InputBehindtIcon dimension={args.dimension}>
                        <Button variant={'transparent'} size={'link'} onClick={() => {
                            setValue(undefined)
                        }}>
                            <CloseIcon />
                        </Button>
                    </InputBehindtIcon>
                }
            </InputCustom>
        );
    }
}