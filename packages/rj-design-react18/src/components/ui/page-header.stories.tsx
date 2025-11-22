import type { Meta, StoryObj } from "@storybook/react-vite"
import { PageHeader, PageHeaderTitle, PageHeaderTitleEnd, PageHeaderTitleStart } from "./page-header"
import { Ellipsis, Info } from "lucide-react"
import { Badge } from "./badge"
import { Button } from "./button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./breadcrumb"
import { SlashIcon } from "@radix-ui/react-icons"
import { Tabs, TabsItem, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { BaseNode } from "@/common/type"
import { useState } from "react"
interface PageHeaderProps extends React.ComponentProps<"div"> {
    title: string,
    description?: string,
    inputmargin?: number
}

const meta: Meta<PageHeaderProps> = {
    title: 'Components/PageHeader',
    tags: ['autodocs'],
    component: PageHeader,
    argTypes: {
        title: {
            control: 'text',
        },
        description: {
            control: 'text',
        }
    },
}

export default meta

type Story = StoryObj<PageHeaderProps>

// 标题
export const Title: Story = {
    args: {
        title: '标题名称',
        description: '辅助信息',
    },
    render: (args) => (
        <PageHeaderTitleStart {...args} >
            <Info size={16} />
            <Badge variant={'default'}>
                标签
            </Badge>
            <Button variant={'link'} size={'link'} className="text-[13px] leading-[20px]">
                链接按钮
            </Button>
        </PageHeaderTitleStart>
    )
}

// 操作功能区
export const FunctionalArea: Story = {
    args: {

    },
    render: (args) => (
        <PageHeaderTitleEnd {...args} >
            <Button variant={'primary'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                默认按钮
            </Button>
            <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                默认按钮
            </Button>
            <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                默认按钮
            </Button>
            <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                默认按钮
            </Button>
            <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                默认按钮
            </Button>
            <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                默认按钮
            </Button>
            <Button variant={'default'} size={'md-icon'} onClick={() => { alert('点什么，手多？') }}>
                <Ellipsis size={4} />
            </Button>
        </PageHeaderTitleEnd>
    )
}

// 标题Title
export const PageTitle: Story = {
    args: {
        title: '标题名称',
        description: '辅助信息',
    },
    render: (args) => (
        <PageHeaderTitle>
            <PageHeaderTitleStart {...args} >
                <Info size={16} />
                <Badge variant={'default'}>
                    标签
                </Badge>
                <Button variant={'link'} size={'link'} className="text-[13px] leading-[20px]">
                    链接按钮
                </Button>
            </PageHeaderTitleStart>
            <PageHeaderTitleEnd {...args} >
                <Button variant={'primary'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                    默认按钮
                </Button>
                <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                    默认按钮
                </Button>
                <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                    默认按钮
                </Button>
                <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                    默认按钮
                </Button>
                <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                    默认按钮
                </Button>
                <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                    默认按钮
                </Button>
                <Button variant={'default'} size={'md-icon'} onClick={() => { alert('点什么，手多？') }}>
                    <Ellipsis size={4} />
                </Button>
            </PageHeaderTitleEnd>
        </PageHeaderTitle>
    )
}

// 标题
export const Primary: Story = {
    args: {
        title: '标题名称',
        description: '辅助信息',
    },
    render: (args) => (
        <PageHeader >
            <PageHeaderTitle>
                <PageHeaderTitleStart {...args} >
                    <Info size={16} />
                    <Badge variant={'default'}>
                        标签
                    </Badge>
                    <Button variant={'link'} size={'link'} className="text-[13px] leading-[20px]">
                        链接按钮
                    </Button>
                </PageHeaderTitleStart>
                <PageHeaderTitleEnd {...args} >
                    <Button variant={'primary'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md-icon'} onClick={() => { alert('点什么，手多？') }}>
                        <Ellipsis size={4} />
                    </Button>
                </PageHeaderTitleEnd>
            </PageHeaderTitle>
        </PageHeader>

    )
}

// 标题
export const Primary1: Story = {
    args: {
        title: '标题名称',
        description: '辅助信息',
    },
    render: (args) => (
        <PageHeader >
            <Breadcrumb>
                <BreadcrumbList variant={'default'}>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <span>Home</span>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <span>上个页面</span>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>当前页面</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <PageHeaderTitle>
                <PageHeaderTitleStart {...args} >
                    <Info size={16} />
                    <Badge variant={'default'}>
                        标签
                    </Badge>
                    <Button variant={'link'} size={'link'} className="text-[13px] leading-[20px]">
                        链接按钮
                    </Button>
                </PageHeaderTitleStart>
                <PageHeaderTitleEnd {...args} >
                    <Button variant={'primary'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                        默认按钮
                    </Button>
                    <Button variant={'default'} size={'md-icon'} onClick={() => { alert('点什么，手多？') }}>
                        <Ellipsis size={4} />
                    </Button>
                </PageHeaderTitleEnd>
            </PageHeaderTitle>
        </PageHeader>

    )
}

const tags: BaseNode[] = Array.from({ length: 8 }).map((_, index) => {
    return {
        key: (index + 1).toString(),
        label: `默认标签${index + 1}`
    } as BaseNode
})

// 标题
export const Primary2: Story = {
    args: {
        title: '标题名称',
        description: '辅助信息1',
    },
    render: (args) => {
        const [value, setValue] = useState<string>();
        return (
            <PageHeader >
                <Breadcrumb>
                    <BreadcrumbList variant={'default'}>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <span>Home</span>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <SlashIcon />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <span>上个页面</span>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <SlashIcon />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage>当前页面</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <PageHeaderTitle>
                    <PageHeaderTitleStart {...args} >
                        <Info size={16} />
                        <Badge variant={'default'}>
                            标签
                        </Badge>
                        <Button variant={'link'} size={'link'} className="text-[13px] leading-[20px]">
                            链接按钮
                        </Button>
                    </PageHeaderTitleStart>
                    <PageHeaderTitleEnd {...args} >
                        <Button variant={'primary'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                            默认按钮
                        </Button>
                        <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                            默认按钮
                        </Button>
                        <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                            默认按钮
                        </Button>
                        <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                            默认按钮
                        </Button>
                        <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                            默认按钮
                        </Button>
                        <Button variant={'default'} size={'md'} onClick={() => { alert('点什么，手多？') }}>
                            默认按钮
                        </Button>
                        <Button variant={'default'} size={'md-icon'} onClick={() => { alert('点什么，手多？') }}>
                            <Ellipsis size={4} />
                        </Button>
                    </PageHeaderTitleEnd>
                </PageHeaderTitle>
                <Tabs defaultValue="1" value={value} onValueChange={(e) => { setValue(e) }}>
                    <TabsList variant={'tab'} size={'md'}>
                        {
                            tags.map((item) => {
                                return (
                                    <TabsTrigger size={'md'} key={item.key} value={item.key} variant={'tab'} disabled={item.disabled ?? false}>
                                        <TabsItem>
                                            {item.label}
                                        </TabsItem>
                                    </TabsTrigger>
                                );
                            })
                        }
                    </TabsList>
                </Tabs>
            </PageHeader>
        )
    }
}

//带输入框的标题
export const PrimaryInput: Story = {
    args: {
        title: '标题名称',
        description: '辅助信息',
        inputmargin: 40,
    },
    render: (args) => {
        return (<PageHeader >
            <PageHeaderTitle>
                <PageHeaderTitleStart {...args} />
                <PageHeaderTitleEnd className="flex-1">
                    <div className="flex flex-1 flex-row items-center justify-center gap-[120px]">
                        <input
                            placeholder="请输入"
                            className="w-full outline-none bg-secondary-background rounded-md px-[8px] py-[5px] text-[12px] leading-[20px]"
                            style={{
                                marginLeft: args.inputmargin ? `${args.inputmargin}px` : undefined
                            }}
                        />
                        <input
                            placeholder="请输入"
                            className="w-full outline-none bg-secondary-background rounded-md px-[8px] py-[5px] text-[12px] leading-[20px]"
                            style={{
                                marginLeft: args.inputmargin ? `${args.inputmargin}px` : undefined
                            }}
                        />
                    </div>
                </PageHeaderTitleEnd>
            </PageHeaderTitle>
        </PageHeader>)
    }
}