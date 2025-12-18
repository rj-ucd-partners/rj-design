import { Button } from "@/components/ui/Button"
import {
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverTrigger,
    type PopoverProps,
} from "@/components/ui/Popover"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { PopoverItem } from "./ItemPrimary"
import { useState, type JSX } from "react";

interface ItemPopoverProps extends PopoverProps {
    title?: string;
    description?: string | React.ReactNode | JSX.Element;
    showIcon?: boolean;
    icon?: React.ReactNode | JSX.Element;
    showClose?: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    onCancel?: () => void;
    showFoot?: boolean;
}

const meta: Meta<ItemPopoverProps> = {
    title: 'Components/Popover',
    tags: ['autodocs'],
    component: Popover,
    argTypes: {
        side: {
            control: { type: 'select' },
            options: ['top', 'right', 'bottom', 'left'],
        },
        align: {
            control: { type: 'select' },
            options: ['start', 'center', 'end'],
        }
    },
}

export default meta

type Story = StoryObj<ItemPopoverProps>

// 上状态
export const TopPrimary: Story = {
    args: {
        variant: 'primary',
        side: "top",
        align: "center",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: "描述内容",
        showIcon: true,
        showClose: true,

    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onClose}
                            onClose={onClose}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
// 下状态
export const BottomPrimary: Story = {
    args: {
        variant: 'primary',
        side: "bottom",
        align: "center",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: "描述内容",
        showIcon: true,
        showClose: true,

    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onClose}
                            onClose={onClose}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
// 左状态
export const LeftPrimary: Story = {
    args: {
        variant: 'primary',
        side: "left",
        align: "center",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: "描述内容",
        showIcon: true,
        showClose: true,

    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onClose}
                            onClose={onClose}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
// 右状态
export const RightPrimary: Story = {
    args: {
        variant: 'primary',
        side: "right",
        align: "center",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: "描述内容",
        showIcon: true,
        showClose: true,

    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onClose}
                            onClose={onClose}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
export const StartPrimary: Story = {
    args: {
        variant: 'primary',
        side: "right",
        align: "start",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: "描述内容",
        showIcon: true,
        showClose: true,

    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onClose}
                            onClose={onClose}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
export const EndPrimary: Story = {
    args: {
        variant: 'primary',
        side: "right",
        align: "end",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: "描述内容",
        showIcon: true,
        showClose: true,

    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onClose}
                            onClose={onClose}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
export const BasicPrimary: Story = {
    args: {
        variant: 'primary',
        side: "right",
        align: "center",
        sideOffset: 0,
        alignOffset: 0,
        description: "较多的内容描述，否则用tooltip",
        showIcon: false,
        showClose: false,
    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, description, showIcon, showClose } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onClose}
                            onClose={onClose}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
export const TitlePrimary: Story = {
    args: {
        variant: 'primary',
        side: "right",
        align: "center",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: "较多的内容描述，否则用tooltip",
        showIcon: false,
        showClose: false,
    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onClose}
                            onClose={onClose}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
export const ClosePrimary: Story = {
    args: {
        variant: 'primary',
        side: "right",
        align: "center",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: "较多的内容描述，否则用tooltip",
        showIcon: false,
        showClose: true,
    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onClose}
                            onClose={onClose}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
export const IconPrimary: Story = {
    args: {
        variant: 'primary',
        side: "right",
        align: "center",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: "较多的内容描述，否则用tooltip",
        showIcon: true,
        showClose: true,
    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onClose}
                            onClose={onClose}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
export const ShowFootPrimary: Story = {
    args: {
        variant: 'primary',
        side: "right",
        align: "center",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: "较多的内容描述，否则用tooltip",
        showIcon: true,
        showClose: true,
        showFoot: true,
    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose, showFoot } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        const onConfirm = () => {
            alert("confirm")
        }
        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onConfirm}
                            onClose={onClose}
                            showFoot={showFoot}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
const getCustomArea = () => {
    return <div className="bg-primary-light w-full h-[52px] flex items-center justify-center">自定义区域</div>
}
export const CustomAreaPrimary: Story = {
    args: {
        variant: 'primary',
        side: "right",
        align: "center",
        sideOffset: 0,
        alignOffset: 0,
        title: "标题",
        description: getCustomArea(),
        showIcon: true,
        showClose: true,
        showFoot: false,
    },
    render: (args) => {
        const { variant, side, align, sideOffset, alignOffset, title, description, showIcon, showClose, showFoot } = args;
        const [open, setOpen] = useState<boolean>(false)
        const onClose = () => {
            setOpen(false)
        }
        const onConfirm = () => {
            alert("confirm")
        }

        return (
            <div className="flex items-center justify-center h-[200px]">
                <Popover variant={variant} open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild >
                        <Button variant={"primary"} size={"md"} onClick={() => setOpen(true)}>
                            没有锚点
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                        <PopoverArrow />
                        <PopoverItem
                            title={title}
                            description={description}
                            showIcon={showIcon}
                            showClose={showClose}
                            onCancel={onClose}
                            onConfirm={onConfirm}
                            onClose={onClose}
                            showFoot={showFoot}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}