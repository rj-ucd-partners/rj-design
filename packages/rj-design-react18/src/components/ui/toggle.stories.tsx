import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toggle } from "@/components/ui/toggle"
import { Button } from "./button"
import { useState } from "react"

const sizes: Record<string, string> = {
    sm: 'toggle-sm',
    md: 'toggle-md',
    lg: 'toggle-lg'
}

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    tags: ['autodocs'],
    component: Toggle,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        direction: {
            control: { type: 'select' },
            options: ['left', 'center', 'right'],
        },
        disabled: {
            control: 'boolean',
        }
    },
}

export default meta

type Story = StoryObj<typeof Toggle>

//标签页-Small
export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        direction: 'center'
    },
    render: args => {
        const [check, setCheck] = useState<boolean>(false)
        return (
            <Toggle {...args} onPressedChange={(e) => { setCheck(e); }}>
                <Button variant={check ? 'primary' : 'toggle'} size={sizes[args.size ?? 'sm']}>
                    选项小
                </Button>
            </Toggle>
        )
    }
}


//标签页-Middle
export const Middle: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        direction: 'center'
    },
    render: args => {
        const [check, setCheck] = useState<boolean>(false)
        return (
            <Toggle {...args} onPressedChange={(e) => { setCheck(e); }}>
                <Button variant={check ? 'primary' : 'toggle'} size={sizes[args.size ?? 'sm']}>
                    选项中
                </Button>
            </Toggle>
        )
    }
}

//标签页-Large
export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        direction: 'center'
    },
    render: args => {
        const [check, setCheck] = useState<boolean>(false)
        return (
            <Toggle {...args} onPressedChange={(e) => { setCheck(e); }}>
                <Button variant={check ? 'primary' : 'toggle'} size={sizes[args.size ?? 'sm']}>
                    选项大
                </Button>
            </Toggle>
        )
    }
}

//标签页-Disabled
export const Disabled: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        direction: 'center',
        disabled: true
    },
    render: args => {
        const [check, setCheck] = useState<boolean>(false)
        return (
            <Toggle {...args} onPressedChange={(e) => { setCheck(e); }}>
                <Button variant={check ? 'primary' : 'toggle'} size={sizes[args.size ?? 'sm']}>
                    选项大
                </Button>
            </Toggle>
        )
    }
}

//标签页-left
export const Left: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        direction: 'left',
    },
    render: args => {
        const [check, setCheck] = useState<boolean>(false)
        return (
            <Toggle {...args} onPressedChange={(e) => { setCheck(e); }}>
                <Button variant={check ? 'primary' : 'toggle'} size={sizes[args.size ?? 'sm']}>
                    选项左
                </Button>
            </Toggle>
        )
    }
}

//标签页-居中
export const Center: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        direction: 'center',
    },
    render: args => {
        const [check, setCheck] = useState<boolean>(false)
        return (
            <Toggle {...args} onPressedChange={(e) => { setCheck(e); }}>
                <Button variant={check ? 'primary' : 'toggle'} size={sizes[args.size ?? 'sm']}>
                    选项左
                </Button>
            </Toggle>
        )
    }
}
//标签页-right
export const Right: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        direction: 'right',
    },
    render: args => {
        const [check, setCheck] = useState<boolean>(false)
        return (
            <Toggle {...args} onPressedChange={(e) => { setCheck(e); }}>
                <Button variant={check ? 'primary' : 'toggle'} size={sizes[args.size ?? 'sm']}>
                    选项左
                </Button>
            </Toggle>
        )
    }
}


//标签页，选组
export const Group: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
    },
    render: args => {
        const [index, setIndex] = useState<number>(-1)
        return (
            <div>
                <Toggle direction={'left'} {...args} onPressedChange={(e) => {
                    setIndex(0);
                }}>
                    <Button variant={index === 0 ? 'primary' : 'toggle'} size={sizes[args.size ?? 'sm']}>
                        选项左
                    </Button>
                </Toggle>
                <Toggle direction={'center'} {...args} onPressedChange={(e) => {
                    setIndex(1);
                }}>
                    <Button variant={index === 1 ? 'primary' : 'toggle'} size={sizes[args.size ?? 'sm']}>
                        选项中
                    </Button>
                </Toggle>
                <Toggle direction={'right'} {...args} onPressedChange={(e) => {
                    setIndex(2);
                }}>
                    <Button variant={index === 2 ? 'primary' : 'toggle'} size={sizes[args.size ?? 'sm']}>
                        选项右
                    </Button>
                </Toggle>
            </div>
        )
    }
}