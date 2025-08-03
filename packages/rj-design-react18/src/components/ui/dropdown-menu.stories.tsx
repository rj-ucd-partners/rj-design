import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
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

interface ExtendedDropdownMenuProps extends DropdownMenuProps {
    disabled: boolean,
    //DropdownMenuItem
    dropdownMenuItemHasSeparator: 'default' | 'separator',
    dropdownMenuTriggerButton: 'default' | 'secondary-text' | 'dropdown-Menu-primary',
    dropdownContentvariant: 'default',
    dropdownItemvariant: 'default'
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
            options: ['default', 'secondary-text', 'dropdown-Menu-primary'],
        },
    },
}

export default meta

type Story = StoryObj<ExtendedDropdownMenuProps>

//一级选项
// 默认
export const Default: Story = {
    args: {
        disabled: false,
        dropdownMenuItemHasSeparator: 'default',
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
            <DropdownMenuContent className="w-56" align="start" variant={args.dropdownContentvariant} itemVariant={args.dropdownItemvariant} >
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
                {/* <DropdownMenuGroup>
                    <DropdownMenuItem hasSeparator={args.dropdownMenuItemHasSeparator} status="default" >Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Invite users2</DropdownMenuSubTrigger>
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
                    <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup> */}
                {/* <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    )
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
            <DropdownMenuContent className="w-56" align="start" variant={args.dropdownContentvariant} itemVariant={args.dropdownItemvariant} >
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
        dropdownMenuTriggerButton: 'dropdown-Menu-primary'
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
            <DropdownMenuContent className="w-56" align="start" variant={args.dropdownContentvariant} itemVariant={args.dropdownItemvariant} >
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
            <DropdownMenuContent className="w-56" align="start" variant={args.dropdownContentvariant} itemVariant={args.dropdownItemvariant} >
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
