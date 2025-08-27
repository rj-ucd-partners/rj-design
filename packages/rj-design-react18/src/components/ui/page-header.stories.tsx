import type { Meta, StoryObj } from "@storybook/react-vite"
import { PageHeader, PageHeaderTitle, PageHeaderTitleEnd, PageHeaderTitleStart } from "./page-header"
import { Ellipsis, Info } from "lucide-react"
import { Badge } from "./badge"
import { Button } from "./button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./breadcrumb"
import { SlashIcon } from "@radix-ui/react-icons"
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
interface PageHeaderProps extends React.ComponentProps<"div"> {
    title: string,
    description?: string,
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
            <Tabs defaultValue='account'>
                <TabsList variant={'default'} size={'md'}>
                    <TabsTrigger disabled variant={'default'} size={'md'} value='account'>默认选项</TabsTrigger>
                    <TabsTrigger variant={'default'} size={'md'} value='password'>默认选项</TabsTrigger>
                    <TabsTrigger variant={'default'} size={'md'} value='1'>默认选项</TabsTrigger>
                    <TabsTrigger variant={'default'} size={'md'} value='2'>默认选项</TabsTrigger>
                    <TabsTrigger variant={'default'} size={'md'} value='3'>默认选项</TabsTrigger>
                    <TabsTrigger variant={'default'} size={'md'} value='4'>默认选项</TabsTrigger>
                </TabsList>
                {/* <TabsContent value='account'>Make changes to your account here.</TabsContent>
            <TabsContent value='password'>Change your password here.</TabsContent> */}
            </Tabs>
        </PageHeader>

    )
}