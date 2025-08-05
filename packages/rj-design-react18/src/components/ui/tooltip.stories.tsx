import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import type { TooltipProps } from "@radix-ui/react-tooltip";
import type { Meta, StoryObj } from '@storybook/react-vite'

interface ExtendedTooltipProps extends TooltipProps {
    contentvariant: 'default' | 'primary' | 'custom';
    contentArrowvariant: 'default' | 'primary' | 'custom';
    contentSideOffset: number;
    contentAlignOffset: number;
    contentSide: "top" | "right" | "bottom" | "left",
    contentAlign: "center" | "start" | "end"
}

const meta: Meta<ExtendedTooltipProps> = {
    title: 'Components/Tooltip',
    tags: ['autodocs'],
    component: Tooltip,
    argTypes: {
        contentvariant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'custom'],
        },
        contentArrowvariant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'custom'],
        },
        contentSideOffset: {
            control: 'number',
        },
        contentAlignOffset: {
            control: 'number',
        },
        contentSide: {
            control: { type: 'select' },
            options: ["top", "right", "bottom", "left"],
        },
        contentAlign: {
            control: { type: 'select' },
            options: ["center", "start", "end"],
        },
    },
}

export default meta

type Story = StoryObj<ExtendedTooltipProps>


//默认色
export const Default: Story = {
    args: {
        contentvariant: 'default',
        contentArrowvariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'top',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="h-[200px] flex items-center justify-center">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="default">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent
                        variant={args.contentvariant}
                        arrow={args.contentArrowvariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>Add to library！ Add to library！ Add to library！</p>
                        <h1>Add to library</h1>
                    </TooltipContent>
                </Tooltip>
            </div>
        )
    }
}

//主题色
export const Primary: Story = {
    args: {
        contentvariant: 'primary',
        contentArrowvariant: 'primary',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'top',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="h-[200px] flex items-center justify-center">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="default">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent
                        variant={args.contentvariant}
                        arrow={args.contentArrowvariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>Add to library！ Add to library！ Add to library！</p>
                        <h1>Add to library</h1>
                    </TooltipContent>
                </Tooltip>
            </div>
        )
    }
}

//自定义
export const Custom: Story = {
    args: {
        contentvariant: 'custom',
        contentArrowvariant: 'custom',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'top',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="h-[200px] flex items-center justify-center">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="default">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent
                        variant={args.contentvariant}
                        arrow={args.contentArrowvariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>Add to library！ Add to library！ Add to library！</p>
                        <h1>Add to library</h1>
                    </TooltipContent>
                </Tooltip>
            </div>
        )
    }
}

//顶部消息
export const Top: Story = {
    args: {
        contentvariant: 'default',
        contentArrowvariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'top',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="h-[200px] flex items-center justify-center">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="default">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent
                        variant={args.contentvariant}
                        arrow={args.contentArrowvariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>Add to library！ Add to library！ Add to library！</p>
                        <h1>Add to library</h1>
                    </TooltipContent>
                </Tooltip>
            </div>
        )
    }
}

//底部消息
export const Bottom: Story = {
    args: {
        contentvariant: 'default',
        contentArrowvariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'bottom',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="h-[200px] flex items-center justify-center">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="default">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent
                        variant={args.contentvariant}
                        arrow={args.contentArrowvariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>Add to library！ Add to library！ Add to library！</p>
                        <h1>Add to library</h1>
                    </TooltipContent>
                </Tooltip>
            </div>
        )
    }
}

//左边
export const Left: Story = {
    args: {
        contentvariant: 'default',
        contentArrowvariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'left',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="h-[200px] flex items-center justify-center">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="default">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent
                        variant={args.contentvariant}
                        arrow={args.contentArrowvariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>Add to library！ Add to library！ Add to library！</p>
                        <h1>Add to library</h1>
                    </TooltipContent>
                </Tooltip>
            </div>
        )
    }
}

//右边
export const Right: Story = {
    args: {
        contentvariant: 'default',
        contentArrowvariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'right',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="h-[200px] flex items-center justify-center">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="default">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent
                        variant={args.contentvariant}
                        arrow={args.contentArrowvariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>Add to library！ Add to library！ Add to library！</p>
                        <h1>Add to library</h1>
                    </TooltipContent>
                </Tooltip>
            </div>
        )
    }
}   