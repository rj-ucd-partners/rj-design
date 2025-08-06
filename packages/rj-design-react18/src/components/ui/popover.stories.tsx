import { Button } from "@/components/ui/button"

import {
    Popover,
    PopoverContent,
    PopoverDesc,
    PopoverIcon,
    PopoverTitle,
    PopoverToolbar,
    PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose, type PopoverProps } from "@radix-ui/react-popover";
import type { Meta, StoryObj } from "@storybook/react-vite"
import { InfoCirecledIcon } from "../icon/infoCirecledIcon";
// import { CrossCircledIcon } from "@radix-ui/react-icons";

interface ExtendedPopoverProps extends PopoverProps {
    contentVariant: 'default';
    contentArrowVariant: 'default';
    contentSideOffset: number;
    contentAlignOffset: number;
    contentSide: "top" | "right" | "bottom" | "left",
    contentAlign: "center" | "start" | "end",
    grid: 'default' | 'icon'
}

const meta: Meta<ExtendedPopoverProps> = {
    title: 'Components/Popover',
    tags: ['autodocs'],
    component: Popover,
    argTypes: {
        contentVariant: {
            control: { type: 'select' },
            options: ['default'],
        },
        contentArrowVariant: {
            control: { type: 'select' },
            options: ['default'],
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
        grid: {
            control: { type: 'select' },
            options: ["default", "icon"],
        }
    },
}

export default meta

type Story = StoryObj<ExtendedPopoverProps>

// 上状态
export const Top: Story = {
    args: {
        contentVariant: 'default',
        contentArrowVariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'top',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"primary"}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        variant={args.contentVariant}
                        arrow={args.contentArrowVariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>高度将被动态计算</p>
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}

// 下状态
export const Bottom: Story = {
    args: {
        contentVariant: 'default',
        contentArrowVariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'bottom',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"primary"}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        variant={args.contentVariant}
                        arrow={args.contentArrowVariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>高度将被动态计算</p>
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}

// 左状态
export const Left: Story = {
    args: {
        contentVariant: 'default',
        contentArrowVariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'left',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"primary"}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        variant={args.contentVariant}
                        arrow={args.contentArrowVariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>高度将被动态计算</p>
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}

// right状态
export const Right: Story = {
    args: {
        contentVariant: 'default',
        contentArrowVariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'right',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"primary"}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        variant={args.contentVariant}
                        arrow={args.contentArrowVariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <p>高度将被动态计算</p>
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
//标题+内容
export const ContentTitleAndDesc: Story = {
    args: {
        contentVariant: 'default',
        contentArrowVariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'right',
        contentAlign: 'center'
    },
    render: (args) => {
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"primary"}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        variant={args.contentVariant}
                        arrow={args.contentArrowVariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        {/* <PopoverIcon className="text-primary">
                            <InfoCirecledIcon />
                        </PopoverIcon> */}
                        <PopoverTitle  >
                            标题
                        </PopoverTitle>
                        {/* <PopoverClose>
                            <Button variant='ghost'>
                                <CrossCircledIcon />
                            </Button>
                        </PopoverClose> */}
                        <PopoverDesc  >
                            <p>这是一段内容</p>
                        </PopoverDesc>
                        {/* <PopoverToolbar  >
                            <div className="flex gap-2 justify-end">
                                <Button variant='primary' size={"md"}>
                                    确认
                                </Button>
                                <Button variant='default' size={"md"}>
                                    取消
                                </Button>
                            </div>
                        </PopoverToolbar> */}
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
//图标+内容+描述
export const ContentIconAndTitleAndDesc: Story = {
    args: {
        contentVariant: 'default',
        contentArrowVariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'right',
        contentAlign: 'center',
        grid: 'icon'
    },
    render: (args) => {
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"primary"}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        variant={args.contentVariant}
                        arrow={args.contentArrowVariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <PopoverIcon className="text-primary">
                            <InfoCirecledIcon />
                        </PopoverIcon>
                        <PopoverTitle  >
                            标题
                        </PopoverTitle>
                        {/* <PopoverClose>
                            <Button variant='ghost'>
                                <CrossCircledIcon />
                            </Button>
                        </PopoverClose> */}
                        <PopoverDesc grid={args.grid} >
                            <p>这是一段内容</p>
                        </PopoverDesc>
                        {/* <PopoverToolbar  >
                            <div className="flex gap-2 justify-end">
                                <Button variant='primary' size={"md"}>
                                    确认
                                </Button>
                                <Button variant='default' size={"md"}>
                                    取消
                                </Button>
                            </div>
                        </PopoverToolbar> */}
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}

//图标+内容+描述
export const ContentIconAndTitleAndCloseAndDesc: Story = {
    args: {
        contentVariant: 'default',
        contentArrowVariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'right',
        contentAlign: 'center',
        grid: 'icon'
    },
    render: (args) => {
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"primary"}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        variant={args.contentVariant}
                        arrow={args.contentArrowVariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <PopoverIcon className="text-primary">
                            <InfoCirecledIcon />
                        </PopoverIcon>
                        <PopoverTitle  >
                            标题
                        </PopoverTitle>
                        <PopoverClose>
                            <Button variant='ghost'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM10.046 4.71554L7.7615 7.00004L10.046 9.28454L9.2845 10.046L7 7.76154L4.7155 10.046L3.954 9.28454L6.2385 7.00004L3.954 4.71554L4.7155 3.95405L7 6.23854L9.2845 3.95405L10.046 4.71554Z" fill="#97A7B5" />
                                </svg>
                            </Button>
                        </PopoverClose>
                        <PopoverDesc grid={args.grid} >
                            <p>这是一段内容</p>
                        </PopoverDesc>
                        {/* <PopoverToolbar  >
                            <div className="flex gap-2 justify-end">
                                <Button variant='primary' size={"md"}>
                                    确认
                                </Button>
                                <Button variant='default' size={"md"}>
                                    取消
                                </Button>
                            </div>
                        </PopoverToolbar> */}
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}

//内容部分
export const ContentIconAndTitleAndCloseAndDescAndToolbar: Story = {
    args: {
        contentVariant: 'default',
        contentArrowVariant: 'default',
        contentSideOffset: 0,
        contentAlignOffset: 0,
        contentSide: 'right',
        contentAlign: 'center',
        grid: 'icon'
    },
    render: (args) => {
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"primary"}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        variant={args.contentVariant}
                        arrow={args.contentArrowVariant}
                        side={args.contentSide}
                        align={args.contentAlign}
                        alignOffset={args.contentAlignOffset}
                        sideOffset={args.contentSideOffset}>
                        <PopoverIcon className="text-primary">
                            <InfoCirecledIcon />
                        </PopoverIcon>
                        <PopoverTitle  >
                            标题
                        </PopoverTitle>
                        <PopoverClose>
                            <Button variant='ghost'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM10.046 4.71554L7.7615 7.00004L10.046 9.28454L9.2845 10.046L7 7.76154L4.7155 10.046L3.954 9.28454L6.2385 7.00004L3.954 4.71554L4.7155 3.95405L7 6.23854L9.2845 3.95405L10.046 4.71554Z" fill="#97A7B5" />
                                </svg>
                            </Button>
                        </PopoverClose>
                        <PopoverDesc grid={args.grid} >
                            <p>这是一段内容</p>
                        </PopoverDesc>
                        <PopoverToolbar  >
                            <div className="flex gap-3 justify-end">
                                <Button variant='default' size={"md"}>
                                    取消
                                </Button>
                                <Button variant='primary' size={"md"}>
                                    确认
                                </Button>
                            </div>
                        </PopoverToolbar>
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}