import { NavHeader, NavMain, Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/Sidebar"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./Breadcrumb"
import * as React from "react"
import {
    BookOpen,
    Bot,
    Settings2,
} from "lucide-react"
const meta: Meta<typeof SidebarProvider> = {
    title: 'Components/Sidebar',
    tags: ['autodocs'],
    component: SidebarProvider,
    argTypes: {

    },
}

export interface NetworkItem {
    id: string,
    title: string,
    url: string,
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    isActive?: boolean
    disabled?: boolean,
    items?: NetworkItem[],
}
const header = {
    title: "导航标题",
}
const data: NetworkItem[] = [
    {
        id: "playground",
        title: "Playground",
        url: "#",
        isActive: false,
        disabled: false,
        items: [
            {
                id: "history",
                title: "History",
                url: "#1",
                disabled: false,
            },
            {
                id: "starred",
                title: "Starred",
                url: "#2",
                disabled: false,
            },
            {
                id: "settings-sub",
                title: "Settings",
                url: "#3",
                disabled: true,
            },
        ],
    },
    {
        id: "models",
        title: "Models",
        url: "#",
        icon: Bot,
        disabled: true,
        items: [
            {
                id: "genesis",
                title: "Genesis",
                url: "#4",
            },
            {
                id: "explorer",
                title: "Explorer",
                url: "#5",
            },
            {
                id: "quantum",
                title: "Quantum",
                url: "#6",
            },
        ],
    },
    {
        id: "documentation",
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        isActive: true,
        items: [
            {
                id: "introduction",
                title: "Introduction",
                url: "#7",
            },
            {
                id: "get-started",
                title: "Get Started",
                url: "#8",
            },
            {
                id: "tutorials",
                title: "Tutorials",
                url: "#9",
            },
            {
                id: "changelog",
                title: "Changelog",
                url: "#10",
            },
        ],
    },
    {
        id: "settings",
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
            {
                id: "general",
                title: "General",
                url: "#11",
            },
            {
                id: "team",
                title: "Team",
                url: "#12",
            },
            {
                id: "billing",
                title: "Billing",
                url: "#13",
            },
            {
                id: "limits",
                title: "Limits",
                url: "#14",
            },
        ],
    },
]

export default meta

type Story = StoryObj<typeof SidebarProvider>

// 主要单选框
export const Primary: Story = {
    args: {
        variant: "primary",
    },
    render: (args) => {
        return (
            <SidebarProvider {...args} variant="primary" defaultOpen={false} >
                <Sidebar collapsible="icon" variant="floating" >
                    <SidebarHeader>
                        <NavHeader item={header} />
                    </SidebarHeader>
                    <SidebarContent>
                        <NavMain items={data} />
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarTrigger />
                    </SidebarFooter>
                </Sidebar>
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Building Your Application
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="bg-muted/50 aspect-video rounded-xl" />
                            <div className="bg-muted/50 aspect-video rounded-xl" />
                            <div className="bg-muted/50 aspect-video rounded-xl" />
                        </div>
                        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
                    </div>
                </SidebarInset>
            </SidebarProvider >

        )
    }
}

// 带回调控制的示例
export const WithCallback: Story = {
    args: {
        variant: "primary",
    },
    render: (args) => {
        const [items, setItems] = React.useState(data)
        const [activeUrl, setActiveUrl] = React.useState<string>("#1");
        const [clickLog, setClickLog] = React.useState<string[]>([]);

        const handleSubItemClick = (url: string, subItem: NetworkItem) => {
            setActiveUrl(url);
            setClickLog(prev => [...prev, `Clicked: ${subItem.title} (${url})`]);
            console.log('SubItem clicked:', { url, subItem });

            // 更新数据：激活被点击的子项所属的父级
            setItems(prevItems => {
                return prevItems.map(parentItem => {
                    // 检查当前父项是否包含被点击的子项
                    const hasActiveSubItem = parentItem.items?.some(item => item.url === url);

                    return {
                        ...parentItem,
                        // 如果包含被点击的子项，设置父级为 active
                        isActive: hasActiveSubItem ? true : false,
                        items: parentItem.items?.map(item => ({
                            ...item,
                            // 设置子项的 isActive 状态
                            isActive: item.url === url
                        }))
                    };
                });
            });
        };

        return (
            <SidebarProvider {...args} variant="primary" defaultOpen={false} >
                <Sidebar collapsible="icon" variant="floating" >
                    <SidebarHeader>
                        <NavHeader item={header} />
                    </SidebarHeader>
                    <SidebarContent>
                        <NavMain
                            items={items}
                            activeSubItemUrl={activeUrl}
                            onSubItemClick={handleSubItemClick}
                        />
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarTrigger />
                    </SidebarFooter>
                </Sidebar>
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Controlled Active State
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Active URL: {activeUrl}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="bg-muted/50 p-4 rounded-xl">
                            <h3 className="font-semibold mb-2">Click Log:</h3>
                            <div className="space-y-1 max-h-[200px] overflow-auto">
                                {clickLog.length === 0 ? (
                                    <p className="text-muted-foreground">No clicks yet</p>
                                ) : (
                                    clickLog.map((log, index) => (
                                        <div key={index} className="text-sm">{log}</div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="bg-muted/50 min-h-[50vh] flex-1 rounded-xl">
                            <h3 className="font-semibold p-4">当前数据状态:</h3>
                            <pre className="p-4 text-xs overflow-auto">
                                {JSON.stringify(items.map(item => ({
                                    id: item.id,
                                    title: item.title,
                                    isActive: item.isActive,
                                    items: item.items?.map(sub => ({
                                        id: sub.id,
                                        title: sub.title,
                                        isActive: sub.isActive
                                    }))
                                })), null, 2)}
                            </pre>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider >
        )
    }
}
