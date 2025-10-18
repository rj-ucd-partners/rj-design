import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button"
import { TriangleDownIcon } from "@radix-ui/react-icons"
import { DropdownMenuGroup, type DropdownMenuProps } from "@radix-ui/react-dropdown-menu"
import type { TreeSelectableNode } from "@/common/type"
import { useState, type ReactNode } from "react"
import { FavoriteIcon } from "../icon/FavoriteIcon"

interface ExtendedDropdownMenuProps extends DropdownMenuProps {
    disabled: boolean,
    variant: 'primary'
}

const meta: Meta<ExtendedDropdownMenuProps> = {
    title: 'Components/DropdownMenu',
    tags: ['autodocs'],
    component: DropdownMenu,
    argTypes: {
        disabled: {
            control: 'boolean'
        },
        variant: {
            control: { type: 'select' },
            options: ['primary'],
        }
    },
}

export default meta

type Story = StoryObj<ExtendedDropdownMenuProps>

const menus: TreeSelectableNode[] = [
    {
        key: "1",
        label: "下拉选项1",
        children: [
            {
                key: "1-1",
                label: "下拉选项1-1",
                children: [
                    {
                        key: "1-1-1",
                        label: "下拉选项1-1-1",
                    },
                    {
                        key: "1-1-2",
                        label: "下拉选项1-1-2",
                    },
                ]
            },
            {
                key: "1-2",
                label: "下拉选项1-2",
            },
            {
                key: "1-3",
                label: "下拉选项1-3",
            }
        ]
    },
    {
        key: "2",
        label: "下拉选项2",
        disabled: true
    },
    {
        key: "3",
        label: "下拉选项3",
    },
    {
        key: "4",
        label: "下拉选项4",
    },
    {
        key: "5",
        label: "下拉选项5",
    },
]

const renderMenuItem = (menu: TreeSelectableNode, selectedKeys: string[], onClick?: (key: string) => void, icon?: ReactNode) => {
    return (
        (menu.children && menu.children.length > 0) ?
            <DropdownMenuSub key={menu.key} >
                <DropdownMenuSubTrigger disabled={menu.disabled}>
                    {icon}
                    {menu.label}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuSubContent sideOffset={10} >
                        {menu.children.map((item) => {
                            return renderMenuItem(item, selectedKeys, onClick, icon)
                        })}
                    </DropdownMenuSubContent>
                </DropdownMenuPortal>
            </DropdownMenuSub> :
            <DropdownMenuItem key={menu.key} disabled={menu.disabled} onClick={() => {
                if (onClick) onClick(menu.key)
            }}>
                {icon}
                {menu.label}
            </DropdownMenuItem>
    );
}

//一级选项
// 默认
export const DefaultDropdownMenu: Story = {
    args: {
        disabled: false,
        variant: 'primary',
    },
    render: (args) => {
        const { variant } = args;
        const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
        const onSelectedChanged = (key: string) => {
            if (selectedKeys.includes(key)) {
                const keys = selectedKeys.filter(item => item !== key);
                setSelectedKeys(keys);
            } else {
                const keys = [...selectedKeys, key];
                setSelectedKeys(keys);
            }
        }
        return (
            <DropdownMenu variant={variant} >
                <DropdownMenuTrigger asChild >
                    <Button disabled={args.disabled} variant={'default'} size={"md"}>
                        <span>更多</span>
                        <TriangleDownIcon data-slot="tran-icon" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start"  >
                    <DropdownMenuLabel>分组文字</DropdownMenuLabel>
                    {menus.map((menu) => {
                        return renderMenuItem(menu, selectedKeys, onSelectedChanged)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}


export const SecondaryTextDropdownMenu: Story = {
    args: {
        disabled: false,
        variant: 'primary',
    },
    render: (args) => {
        const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
        const onSelectedChanged = (key: string) => {
            if (selectedKeys.includes(key)) {
                const keys = selectedKeys.filter(item => item !== key);
                setSelectedKeys(keys);
            } else {
                const keys = [...selectedKeys, key];
                setSelectedKeys(keys);
            }
        }
        return (
            <DropdownMenu {...args}>
                <DropdownMenuTrigger asChild >
                    <Button disabled={args.disabled} variant={'secondary-text'} size={"md"}>
                        <span>更多</span>
                        <TriangleDownIcon data-slot="tran-icon" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start"  >
                    {menus.map((menu) => {
                        return renderMenuItem(menu, selectedKeys, onSelectedChanged)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}

export const PrimaryDropdownMenu: Story = {
    args: {
        disabled: false,
        variant: 'primary',
    },
    render: (args) => {
        const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
        const onSelectedChanged = (key: string) => {
            if (selectedKeys.includes(key)) {
                const keys = selectedKeys.filter(item => item !== key);
                setSelectedKeys(keys);
            } else {
                const keys = [...selectedKeys, key];
                setSelectedKeys(keys);
            }
        }
        return (
            <DropdownMenu {...args}>
                <DropdownMenuTrigger asChild >
                    <Button disabled={args.disabled} variant={'primary'} size={"md"}>
                        <span>更多</span>
                        <TriangleDownIcon data-slot="tran-icon" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start" >
                    {menus.map((menu) => {
                        return renderMenuItem(menu, selectedKeys, onSelectedChanged)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}


export const IconDropdownMenu: Story = {
    args: {
        disabled: false,
        variant: 'primary',
    },
    render: (args) => {
        const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
        const onSelectedChanged = (key: string) => {
            if (selectedKeys.includes(key)) {
                const keys = selectedKeys.filter(item => item !== key);
                setSelectedKeys(keys);
            } else {
                const keys = [...selectedKeys, key];
                setSelectedKeys(keys);
            }
        }
        return (
            <DropdownMenu {...args}>
                <DropdownMenuTrigger asChild >
                    <Button disabled={args.disabled} variant={'hover-icon'} size={"md"}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9C2.44775 9 2 8.55228 2 8C2 7.44772 2.44775 7 3 7C3.55225 7 4 7.44772 4 8C4 8.55228 3.55225 9 3 9Z" fill="white" />
                            <path d="M7 8C7 8.55228 7.44775 9 8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8Z" fill="white" />
                            <path d="M12 8C12 8.55228 12.4478 9 13 9C13.5522 9 14 8.55228 14 8C14 7.44772 13.5522 7 13 7C12.4478 7 12 7.44772 12 8Z" fill="white" />
                        </svg>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start"  >
                    {menus.map((menu) => {
                        return renderMenuItem(menu, selectedKeys, onSelectedChanged)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}

export const DropdownMenuItemHasIcon: Story = {
    args: {
        disabled: false,
        variant: 'primary',
    },
    render: (args) => {
        const { variant } = args;
        const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
        const onSelectedChanged = (key: string) => {
            if (selectedKeys.includes(key)) {
                const keys = selectedKeys.filter(item => item !== key);
                setSelectedKeys(keys);
            } else {
                const keys = [...selectedKeys, key];
                setSelectedKeys(keys);
            }
        }
        return (
            <DropdownMenu open={true} variant={variant} >
                <DropdownMenuTrigger asChild >
                    <Button disabled={args.disabled} variant={'default'} size={"md"}>
                        <span>更多</span>
                        <TriangleDownIcon data-slot="tran-icon" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start"  >
                    <DropdownMenuLabel>分组文字</DropdownMenuLabel>
                    {menus.map((menu) => {
                        return renderMenuItem(menu, selectedKeys, onSelectedChanged, <FavoriteIcon />)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}

export const DropdownMenuItemHasIconSeparator: Story = {
    args: {
        disabled: false,
        variant: 'primary',
    },
    render: (args) => {
        const { variant } = args;
        return (
            <DropdownMenu open={true} variant={variant} >
                <DropdownMenuTrigger asChild >
                    <Button disabled={args.disabled} variant={'default'} size={"md"}>
                        <span>更多</span>
                        <TriangleDownIcon data-slot="tran-icon" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start"  >
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>分组文字</DropdownMenuLabel>
                        {menus.map((menu, index) => {
                            return <div key={menu.key}>
                                <DropdownMenuItem disabled={menu.disabled} >
                                    {<FavoriteIcon />}
                                    {menu.label}
                                </DropdownMenuItem>
                                {
                                    index < menus.length - 1 && <DropdownMenuSeparator />
                                }
                            </div>
                        })}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}

export const DropdownMenuItemHasIconWithStatus: Story = {
    args: {
        disabled: false,
        variant: 'primary',
    },
    render: (args) => {
        const { variant } = args;
        return (
            <DropdownMenu open={true} variant={variant} >
                <DropdownMenuTrigger asChild >
                    <Button disabled={args.disabled} variant={'default'} size={"md"}>
                        <span>更多</span>
                        <TriangleDownIcon data-slot="tran-icon" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start"  >
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>主题色</DropdownMenuLabel>
                        {
                            Array.from({ length: 5 }).map((_, index) => {
                                return <DropdownMenuItem key={index} disabled={index === 2} status={'primary'} >
                                    {<FavoriteIcon />}
                                    {`选项${index}`}
                                </DropdownMenuItem>
                            })
                        }
                    </DropdownMenuGroup>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>成功色</DropdownMenuLabel>
                        {
                            Array.from({ length: 5 }).map((_, index) => {
                                return <DropdownMenuItem key={index + 10} disabled={index === 2} status={'success'} >
                                    {<FavoriteIcon />}
                                    {`选项${index}`}
                                </DropdownMenuItem>
                            })
                        }
                    </DropdownMenuGroup>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>破坏性</DropdownMenuLabel>
                        {
                            Array.from({ length: 5 }).map((_, index) => {
                                return <DropdownMenuItem key={index + 10} disabled={index === 2} status={'destructive'} >
                                    {<FavoriteIcon />}
                                    {`选项${index}`}
                                </DropdownMenuItem>
                            })
                        }
                    </DropdownMenuGroup>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>警告色</DropdownMenuLabel>
                        {
                            Array.from({ length: 5 }).map((_, index) => {
                                return <DropdownMenuItem key={index + 10} disabled={index === 2} status={'warning'} >
                                    {<FavoriteIcon />}
                                    {`选项${index}`}
                                </DropdownMenuItem>
                            })
                        }
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}


