import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuIcon,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button"
import { TriangleDownIcon } from "@radix-ui/react-icons"
import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu"
import { FavoriteIcon } from "../icon/FavoriteIcon"
import type { TreeSelectableNode } from "@/common/type"
import { useState } from "react"
import { Empty } from "./empty"

interface ExtendedDropdownMenuProps extends DropdownMenuProps {
    disabled: boolean,
    dropdownMenuItemHasSeparator: 'default' | 'separator',
    dropdownMenuTriggerButton: 'default' | 'secondary-text',
    status: 'default' | 'success' | 'danger' | 'abnormal'
}

const meta: Meta<ExtendedDropdownMenuProps> = {
    title: 'Components/DropdownMenu ',
    tags: ['autodocs'],
    component: DropdownMenu,
    argTypes: {
        disabled: {
            control: 'boolean'
        },
        dropdownMenuItemHasSeparator: {
            control: { type: 'select' },
            options: ['default', 'separator'],
        },
        dropdownMenuTriggerButton: {
            control: { type: 'select' },
            options: ['default', 'secondary-text'],
        },
        status: {
            control: { type: 'select' },
            options: ['default', 'success', 'danger', 'abnormal'],
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
                disabled: true
            }
        ]
    },
    {
        key: "2",
        label: "下拉选项2",
    },
    {
        key: "3",
        label: "下拉选项3",
    }
]

const renderMenuItem = (menu: TreeSelectableNode, hasSeparator: 'default' | 'separator', status: 'default' | 'success' | 'danger' | 'abnormal', selectedKeys: string[], onClick?: (key: string) => void) => {
    return (
        (menu.children && menu.children.length > 0) ?
            <DropdownMenuSub>
                <DropdownMenuSubTrigger disabled={menu.disabled} hasSeparator={hasSeparator} status={status}>
                    {
                        menu.icon &&
                        <DropdownMenuIcon size={'md'}>
                            {menu.icon}
                        </DropdownMenuIcon>
                    }
                    {menu.label}</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                        {menu.children.map((item) => {
                            return renderMenuItem(item, hasSeparator, status, selectedKeys, onClick)
                        })}
                    </DropdownMenuSubContent>
                </DropdownMenuPortal>
            </DropdownMenuSub> :
            <DropdownMenuItem disabled={menu.disabled} hasSeparator={hasSeparator} status={status} checked={selectedKeys.includes(menu.key)} onClick={() => {
                if (onClick) onClick(menu.key)
            }}>
                {
                    menu.icon &&
                    <DropdownMenuIcon size={'md'}>
                        {menu.icon}
                    </DropdownMenuIcon>
                }
                {menu.label}</DropdownMenuItem>
    );
}

//一级选项
// 默认
export const Default: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
        status: 'default',
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
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                        <div className="inline-flex justify-between items-center w-full gap-1">
                            <span>更多</span>
                            <TriangleDownIcon data-slot="tran-icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                    {menus.map((menu) => {
                        return renderMenuItem(menu, args.dropdownMenuItemHasSeparator, args.status, selectedKeys, onSelectedChanged)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}
//成功
export const Success: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
        status: 'success',
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
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                        <div className="inline-flex justify-between items-center w-full gap-1">
                            <span>更多</span>
                            <TriangleDownIcon data-slot="tran-icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                    {menus.map((menu) => {
                        return renderMenuItem(menu, args.dropdownMenuItemHasSeparator, args.status, selectedKeys, onSelectedChanged)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}
//破坏性的
export const Destructive: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
        status: 'danger',
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
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                        <div className="inline-flex justify-between items-center w-full gap-1">
                            <span>更多</span>
                            <TriangleDownIcon data-slot="tran-icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                    {menus.map((menu) => {
                        return renderMenuItem(menu, args.dropdownMenuItemHasSeparator, args.status, selectedKeys, onSelectedChanged)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}
//告警
export const Warning: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
        status: 'abnormal',
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
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                        <div className="inline-flex justify-between items-center w-full gap-1">
                            <span>更多</span>
                            <TriangleDownIcon data-slot="tran-icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                    {menus.map((menu) => {
                        return renderMenuItem(menu, args.dropdownMenuItemHasSeparator, args.status, selectedKeys, onSelectedChanged)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}
const iconMenus: TreeSelectableNode[] = [
    {
        key: "1",
        label: "下拉选项1",
        icon: <FavoriteIcon />,
        disabled: true,
        children: [
            {
                key: "1-1",
                label: "下拉选项1-1",
                icon: <FavoriteIcon />,
            }
        ]
    },
    {
        key: "2",
        label: "下拉选项2",
        icon: <FavoriteIcon />,
    },
    {
        key: "3",
        label: "下拉选项3",
        icon: <FavoriteIcon />,
        disabled: true
    }
]
//带图标的
export const Icon: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
        status: 'abnormal',
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
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                        <div className="inline-flex justify-between items-center w-full gap-1">
                            <span>更多</span>
                            <TriangleDownIcon data-slot="tran-icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                    {iconMenus.map((menu) => {
                        return renderMenuItem(menu, args.dropdownMenuItemHasSeparator, args.status, selectedKeys, onSelectedChanged)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}
export const Disabled: Story = {
    args: {
        disabled: true,
        dropdownMenuItemHasSeparator: 'default',
        status: 'abnormal',
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
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                        <div className="inline-flex justify-between items-center w-full gap-1">
                            <span>更多</span>
                            <TriangleDownIcon data-slot="tran-icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                    {iconMenus.map((menu) => {
                        return renderMenuItem(menu, args.dropdownMenuItemHasSeparator, args.status, selectedKeys, onSelectedChanged)
                    })}
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}
export const Group: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
        status: 'abnormal',
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
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                        <div className="inline-flex justify-between items-center w-full gap-1">
                            <span>更多</span>
                            <TriangleDownIcon data-slot="tran-icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>分组</DropdownMenuLabel>
                        {iconMenus.map((menu) => {
                            return renderMenuItem(menu, args.dropdownMenuItemHasSeparator, args.status, selectedKeys, onSelectedChanged)
                        })}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}

const emptyMenus = [];

export const EmptyMenus: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
        status: 'abnormal',
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
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                        <div className="inline-flex justify-between items-center w-full gap-1">
                            <span>更多</span>
                            <TriangleDownIcon data-slot="tran-icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 h-60" align="start">
                    {
                        emptyMenus.length === 0 &&
                        <Empty size={'md'} />
                    }
                </DropdownMenuContent>
            </DropdownMenu>)
    }
}
//默认:有分割线
export const DefaultHasSeparator: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'separator',
    },
    render: (args) => (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                    <div className="inline-flex justify-between items-center w-full gap-1">
                        <span>更多</span>
                        <TriangleDownIcon data-slot="tran-icon" />
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start" >
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status={"success"}>
                        Profile
                        <DropdownMenuShortcut>这啥</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="default">
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status='danger'>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status='abnormal'>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status={"success"}>
                        Profile
                        <DropdownMenuShortcut>这啥</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status="default">
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status='danger'>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status='abnormal'>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
//主要
export const Primary: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
    },
    render: (args) => (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button disabled={args.disabled} variant={'primary'} size={"md"}>
                    <div className="inline-flex justify-between items-center w-full gap-1">
                        <span>更多</span>
                        <TriangleDownIcon data-slot="tran-icon" />
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start" >
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status={"success"}>
                        Profile
                        <DropdownMenuShortcut>这啥</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="default">
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status='danger'>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status='abnormal'>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status={"success"}>
                        Profile
                        <DropdownMenuShortcut>这啥</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status="default">
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status='danger'>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status='abnormal'>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
//文字按钮
export const Text: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
        dropdownMenuTriggerButton: 'secondary-text'
    },
    render: (args) => (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                    <div className="inline-flex justify-between items-center w-full gap-1">
                        <span>更多</span>
                        <TriangleDownIcon data-slot="tran-icon" />
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start" >
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status={"success"}>
                        Profile
                        <DropdownMenuShortcut>这啥</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="default">
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status='danger'>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status='abnormal'>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status={"success"}>
                        Profile
                        <DropdownMenuShortcut>这啥</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status="default">
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status='danger'>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} disabled status='abnormal'>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
//二级菜单
export const Sub: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
        dropdownMenuTriggerButton: 'secondary-text',
    },
    render: (args) => (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button disabled={args.disabled} variant={args.dropdownMenuTriggerButton} size={"md"}>
                    <div className="inline-flex justify-between items-center w-full gap-1">
                        <span>更多</span>
                        <TriangleDownIcon data-slot="tran-icon" />
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>二级选项1</DropdownMenuLabel>
                    <DropdownMenuSub key="suv1">
                        <DropdownMenuSubTrigger hasSeparator={args.dropdownMenuItemHasSeparator} status="success">Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="default">Email</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="success">VX</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="danger">Message</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="abnormal">QQ</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuSub>
                                    <DropdownMenuLabel>三级选项1</DropdownMenuLabel>
                                    <DropdownMenuSubTrigger>More  ...</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>Email</DropdownMenuItem>
                                            <DropdownMenuItem>Message</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>More...</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSub key="suv2">
                        <DropdownMenuSubTrigger hasSeparator={args.dropdownMenuItemHasSeparator} status="default">Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="default">Email</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="success">VX</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="danger">Message</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="abnormal">QQ</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuSub>
                                    <DropdownMenuLabel>三级选项1</DropdownMenuLabel>
                                    <DropdownMenuSubTrigger hasSeparator={args.dropdownMenuItemHasSeparator} >More  ...</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} >Email</DropdownMenuItem>
                                            <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} >Message</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} >More...</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSub key="suv3">
                        <DropdownMenuSubTrigger hasSeparator={args.dropdownMenuItemHasSeparator} status="danger">Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="default">Email</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="success">VX</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="danger">Message</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="abnormal">QQ</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuSub>
                                    <DropdownMenuLabel>三级选项1</DropdownMenuLabel>
                                    <DropdownMenuSubTrigger hasSeparator={args.dropdownMenuItemHasSeparator} >More  ...</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} >Email</DropdownMenuItem>
                                            <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} >Message</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} >More...</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSub key="suv4">
                        <DropdownMenuSubTrigger hasSeparator={args.dropdownMenuItemHasSeparator} status="abnormal">Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="default">Email</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="success">VX</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="danger">Message</DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="abnormal">QQ</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuSub>
                                    <DropdownMenuLabel>三级选项1</DropdownMenuLabel>
                                    <DropdownMenuSubTrigger hasSeparator={args.dropdownMenuItemHasSeparator} >More  ...</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} >Email</DropdownMenuItem>
                                            <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} >Message</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} >More...</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
