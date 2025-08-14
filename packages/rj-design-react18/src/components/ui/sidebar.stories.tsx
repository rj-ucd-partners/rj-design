import { SidebarHeader, SidebarMenuSub, SidebarMenuSubButton, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Calendar } from "lucide-react"
import { Separator } from "./separator"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import React from "react"
import { SidebarFourthMenu, SidebarThirdMenu } from "./sidebar-menu"

const meta: Meta<typeof Sidebar> = {
    title: 'Components/Sidebar',
    tags: ['autodocs'],
    component: Sidebar,
    argTypes: {
        side: {
            control: { type: 'select' },
            options: ['left', 'right'],
        },
        variant: {
            control: { type: 'select' },
            options: ['sidebar', 'floating', 'inset'],
        },
        collapsible: {
            control: { type: 'select' },
            options: ['offcanvas', 'icon', 'none'],
        }
    },
}

export default meta

type Story = StoryObj<typeof Sidebar>

const items = [
    {
        title: "用户管理",
        icon: Calendar,
        index: 1,
        Children: [
            {
                title: "用户管理1",
                icon: Calendar,
                index: 1,
            },
            {
                title: "用户管理2",
                icon: Calendar,
                index: 2,
            }
        ]
    },
    {
        title: "产品管理",
        icon: Calendar,
        index: 2,
        Children: [
            {
                title: "产品管理1",
                icon: Calendar,
                index: 1,
            },
            {
                title: "产品管理2",
                icon: Calendar,
                index: 2,
            }
        ]
    },
    {
        title: "售后服务",
        icon: Calendar,
        index: 3,
        Children: [
            {
                title: "售后服务1",
                icon: Calendar,
                index: 1,
            },
            {
                title: "售后服务2",
                icon: Calendar,
                index: 2,
            }
        ]
    },

]

// 主要单选框
export const Primary: Story = {
    args: {

    },
    render: (args) => {
        const [rootId, setRootId] = React.useState<number | string>(1);
        const [checkedId, setCheckedId] = React.useState<number | string>('');

        return (
            <SidebarProvider>
                <Sidebar {...args}>
                    <SidebarHeader variant={args.variant}>
                        导航标题
                    </SidebarHeader>
                    <Separator />
                    <SidebarContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Collapsible open={rootId == items[0].index}>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <SidebarThirdMenu checked={rootId == items[0].index} index={items[0].index} onClick={() => { setRootId(items[0].index) }}>
                                                {items[0].title}
                                            </ SidebarThirdMenu>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {
                                                items[0].Children.map((sub, index) => {
                                                    return (
                                                        <SidebarMenuSubButton variant={'four'} asChild>
                                                            <SidebarFourthMenu
                                                                key={items[0].index.toString() + index.toString()}
                                                                index={items[0].index.toString() + index.toString()}
                                                                checked={checkedId == items[0].index.toString() + index.toString()}
                                                                onClick={() => {
                                                                    setCheckedId(items[0].index.toString() + index.toString())
                                                                }}
                                                            >
                                                                {sub.title}
                                                            </SidebarFourthMenu>
                                                        </SidebarMenuSubButton>
                                                    )
                                                })
                                            }
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </Collapsible>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Collapsible open={rootId == items[1].index}>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <SidebarThirdMenu checked={rootId == items[1].index} index={items[1].index} onClick={() => { setRootId(items[1].index) }}>
                                                {items[1].title}
                                            </ SidebarThirdMenu>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {
                                                items[1].Children.map((sub, index) => {
                                                    return (
                                                        <SidebarMenuSubButton variant={'four'} asChild>
                                                            <SidebarFourthMenu
                                                                key={items[1].index.toString() + index.toString()}
                                                                index={items[1].index.toString() + index.toString()}
                                                                checked={checkedId == items[1].index.toString() + index.toString()}
                                                                onClick={() => {
                                                                    setCheckedId(items[1].index.toString() + index.toString())
                                                                }}
                                                            >
                                                                {sub.title}
                                                            </SidebarFourthMenu>
                                                        </SidebarMenuSubButton>
                                                    )
                                                })
                                            }
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </Collapsible>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Collapsible open={rootId == items[2].index}>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <SidebarThirdMenu checked={rootId == items[2].index} index={items[2].index} onClick={() => { setRootId(items[2].index) }}>
                                                {items[2].title}
                                            </ SidebarThirdMenu>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {
                                                items[2].Children.map((sub, index) => {
                                                    return (
                                                        <SidebarMenuSubButton variant={'four'} asChild>
                                                            <SidebarFourthMenu
                                                                key={items[2].index.toString() + index.toString()}
                                                                index={items[2].index.toString() + index.toString()}
                                                                checked={checkedId == items[2].index.toString() + index.toString()}
                                                                onClick={() => {
                                                                    setCheckedId(items[2].index.toString() + index.toString())
                                                                }}
                                                            >
                                                                {sub.title}
                                                            </SidebarFourthMenu>
                                                        </SidebarMenuSubButton>
                                                    )
                                                })
                                            }
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </Collapsible>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                </Sidebar>
                <main>
                    <SidebarTrigger />
                    {args.children}
                </main>
            </SidebarProvider >
        )
    }
}
