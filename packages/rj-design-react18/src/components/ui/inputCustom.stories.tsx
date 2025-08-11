import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputBehindtIcon, InputCustom, InputFrontIcon } from '@/components/ui/inputCustom'
import { ManIcon } from '../icon/manIcon'
import { MagnifierIcon } from '../icon/magnifierIcon'


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
            <InputCustom size={args.dimension} {...args}>
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
            <InputCustom size={args.dimension} {...args}>
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
            <InputCustom size={args.dimension} {...args}>
                <InputBehindtIcon>
                    <MagnifierIcon />
                </InputBehindtIcon>
            </InputCustom>
        );
    }
}