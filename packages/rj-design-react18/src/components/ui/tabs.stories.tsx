
import {
    Tabs,
    TabsContent,
    TabsItem,
    TabsList,
    TabsTrigger,
} from "@/components/ui/Tabs"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { FavoriteIcon } from "../icon/FavoriteIcon"

interface TabsProps extends React.ComponentProps<typeof Tabs> {
    variant: 'tag' | 'tab' | 'card',
    size: 'md' | 'lg',
    frontIcon?: React.ReactNode,
    showClose?: boolean
}

const meta: Meta<TabsProps> = {
    title: 'Components/Tabs',
    component: Tabs,
    argTypes: {
        variant: {
            control: 'select',
            options: ['tag', 'tab', 'card']
        },
        size: {
            control: 'select',
            options: ['md', 'lg']
        },
    },
}

export default meta

type Story = StoryObj<TabsProps>


//标签页
export const PrimaryTag: Story = {
    args: {
        variant: 'tag'
    },
    render: args => {
        const tags = [
            {
                key: '1',
                label: "底部选项卡1"
            },
            {
                key: '2',
                label: "底部选项卡2"
            },
            {
                key: '3',
                label: "底部选项卡3"
            },
            {
                key: '4',
                label: "底部选项卡4",
                disabled: true
            }
        ]
        const [value, setValue] = useState<string>('1')
        return (<div className="flex flex-col ">
            <Tabs defaultValue="1" value={value} onValueChange={(e) => { setValue(e) }}>
                <TabsList variant={args.variant}>
                    {
                        tags.map((item) => {
                            return (
                                <TabsTrigger key={item.key} value={item.key} variant={args.variant} disabled={item.disabled ?? false}>
                                    <TabsItem>
                                        {item.label}
                                    </TabsItem>
                                </TabsTrigger>
                            );
                        })
                    }
                </TabsList>
                <TabsContent value="1">
                    aaa
                </TabsContent>
                <TabsContent value="2">
                    bbb
                </TabsContent>
            </Tabs>
        </div>)
    },
}

export const PrimaryTabMd: Story = {
    args: {
        variant: 'tab',
        size: 'md'
    },
    render: args => {
        const tags = [
            {
                key: '1',
                label: "标签选项卡1"
            },
            {
                key: '2',
                label: "标签选项卡2"
            },
            {
                key: '3',
                label: "标签选项卡3"
            },
            {
                key: '4',
                label: "标签选项卡4",
                disabled: true
            }
        ]
        const [value, setValue] = useState<string>('1')
        return (<div className="flex flex-col gap-6">
            <Tabs defaultValue="1" value={value} onValueChange={(e) => { setValue(e) }}>
                <TabsList variant={args.variant} size={args.size}>
                    {
                        tags.map((item) => {
                            return (
                                <TabsTrigger size={args.size} key={item.key} value={item.key} variant={args.variant} disabled={item.disabled ?? false}>
                                    <TabsItem>
                                        {item.label}
                                    </TabsItem>
                                </TabsTrigger>
                            );
                        })
                    }
                </TabsList>
                <TabsContent value="1">
                    aaa
                </TabsContent>
                <TabsContent value="2">
                    bbb
                </TabsContent>
            </Tabs>
        </div>)
    },
}

export const PrimaryTabLg: Story = {
    args: {
        variant: 'tab',
        size: 'lg'
    },
    render: args => {
        const tags = [
            {
                key: '1',
                label: "标签选项卡1"
            },
            {
                key: '2',
                label: "标签选项卡2"
            },
            {
                key: '3',
                label: "标签选项卡3"
            },
            {
                key: '4',
                label: "标签选项卡4",
                disabled: true
            }
        ]
        const [value, setValue] = useState<string>('1')
        return (<div className="flex flex-col gap-6">
            <Tabs defaultValue="1" value={value} onValueChange={(e) => { setValue(e) }}>
                <TabsList variant={args.variant} size={args.size}>
                    {
                        tags.map((item) => {
                            return (
                                <TabsTrigger size={args.size} key={item.key} value={item.key} variant={args.variant} disabled={item.disabled ?? false}>
                                    <TabsItem>
                                        {item.label}
                                    </TabsItem>
                                </TabsTrigger>
                            );
                        })
                    }
                </TabsList>
                <TabsContent value="1">
                    aaa
                </TabsContent>
                <TabsContent value="2">
                    bbb
                </TabsContent>
            </Tabs>
        </div>)
    },
}

export const PrimaryCardMd: Story = {
    args: {
        variant: 'card',
        size: 'md'
    },
    render: args => {
        const tags = [
            {
                key: '1',
                label: "卡片选项1"
            },
            {
                key: '2',
                label: "卡片选项2"
            },
            {
                key: '3',
                label: "卡片选项3"
            },
            {
                key: '4',
                label: "卡片选项4",
                disabled: true
            }
        ]
        const [value, setValue] = useState<string>('1')
        return (
            <div className="flex flex-col gap-6 bg-card w-full h-100">
                <Tabs defaultValue="1" value={value} onValueChange={(e) => { setValue(e) }}>
                    <TabsList variant={args.variant} size={args.size}>
                        {
                            tags.map((item) => {
                                return (
                                    <TabsTrigger size={args.size} key={item.key} value={item.key} variant={args.variant} disabled={item.disabled ?? false}>
                                        <TabsItem>
                                            {item.label}
                                        </TabsItem>
                                    </TabsTrigger>
                                );
                            })
                        }
                    </TabsList>
                    <TabsContent value="1">
                        aaa
                    </TabsContent>
                    <TabsContent value="2">
                        bbb
                    </TabsContent>
                </Tabs>
            </div>)
    },
}

export const PrimaryCardLg: Story = {
    args: {
        variant: 'card',
        size: 'lg'
    },
    render: args => {
        const tags = [
            {
                key: '1',
                label: "卡片选项1"
            },
            {
                key: '2',
                label: "卡片选项2"
            },
            {
                key: '3',
                label: "卡片选项3"
            },
            {
                key: '4',
                label: "卡片选项4",
                disabled: true
            }
        ]
        const [value, setValue] = useState<string>('1')
        return (
            <div className="flex flex-col gap-6 bg-card w-full h-100">
                <Tabs defaultValue="1" value={value} onValueChange={(e) => { setValue(e) }}>
                    <TabsList variant={args.variant} size={args.size}>
                        {
                            tags.map((item) => {
                                return (
                                    <TabsTrigger size={args.size} key={item.key} value={item.key} variant={args.variant} disabled={item.disabled ?? false}>
                                        <TabsItem>
                                            {item.label}
                                        </TabsItem>
                                    </TabsTrigger>
                                );
                            })
                        }
                    </TabsList>
                    <TabsContent value="1">
                        aaa
                    </TabsContent>
                    <TabsContent value="2">
                        bbb
                    </TabsContent>
                </Tabs>
            </div>)
    },
}

export const PrimaryTabMdIcon: Story = {
    args: {
        variant: 'tab',
        size: 'md',
        frontIcon: <FavoriteIcon />
    },
    render: args => {
        const tags = [
            {
                key: '1',
                label: "标签选项卡1"
            },
            {
                key: '2',
                label: "标签选项卡2"
            },
            {
                key: '3',
                label: "标签选项卡3"
            },
            {
                key: '4',
                label: "标签选项卡4",
                disabled: true
            }
        ]
        const [value, setValue] = useState<string>('1')
        return (<div className="flex flex-col gap-6">
            <Tabs defaultValue="1" value={value} onValueChange={(e) => { setValue(e) }}>
                <TabsList variant={args.variant} size={args.size}>
                    {
                        tags.map((item) => {
                            return (
                                <TabsTrigger size={args.size} key={item.key} value={item.key} variant={args.variant} disabled={item.disabled ?? false}>
                                    <TabsItem frontIcon={args.frontIcon}>
                                        {item.label}
                                    </TabsItem>
                                </TabsTrigger>
                            );
                        })
                    }
                </TabsList>
                <TabsContent value="1">
                    aaa
                </TabsContent>
                <TabsContent value="2">
                    bbb
                </TabsContent>
            </Tabs>
        </div>)
    },
}

export const PrimaryTabMdIconShowClose: Story = {
    args: {
        variant: 'tab',
        size: 'md',
        frontIcon: <FavoriteIcon />,
        showClose: true
    },
    render: args => {
        const tags = [
            {
                key: '1',
                label: "标签选项卡1"
            },
            {
                key: '2',
                label: "标签选项卡2"
            },
            {
                key: '3',
                label: "标签选项卡3"
            },
            {
                key: '4',
                label: "标签选项卡4",
                disabled: true
            }
        ]
        const [value, setValue] = useState<string>('1')
        const closeCallback = () => {
            alert('受控组件的关闭逻辑');
        }
        return (<div className="flex flex-col gap-6">
            <Tabs defaultValue="1" value={value} onValueChange={(e) => { setValue(e) }}>
                <TabsList variant={args.variant} size={args.size}>
                    {
                        tags.map((item) => {
                            return (
                                <TabsTrigger size={args.size} key={item.key} value={item.key} variant={args.variant} disabled={item.disabled ?? false}>
                                    <TabsItem frontIcon={args.frontIcon} showClose={args.showClose} closeCallback={closeCallback}>
                                        {item.label}
                                    </TabsItem>
                                </TabsTrigger>
                            );
                        })
                    }
                </TabsList>
                <TabsContent value="1">
                    aaa
                </TabsContent>
                <TabsContent value="2">
                    bbb
                </TabsContent>
            </Tabs>
        </div>)
    },
}

export const PrimaryCardMdIconShowClose: Story = {
    args: {
        variant: 'card',
        size: 'md',
        frontIcon: <FavoriteIcon />,
        showClose: true
    },
    render: args => {
        const tags = [
            {
                key: '1',
                label: "标签选项卡1"
            },
            {
                key: '2',
                label: "标签选项卡2"
            },
            {
                key: '3',
                label: "标签选项卡3"
            },
            {
                key: '4',
                label: "标签选项卡4",
                disabled: true
            }
        ]
        const [value, setValue] = useState<string>('1')
        const closeCallback = () => {
            alert('受控组件的关闭逻辑');
        }
        return (<div className="flex flex-col gap-6">
            <Tabs defaultValue="1" value={value} onValueChange={(e) => { setValue(e) }}>
                <TabsList variant={args.variant} size={args.size}>
                    {
                        tags.map((item) => {
                            return (
                                <TabsTrigger size={args.size} key={item.key} value={item.key} variant={args.variant} disabled={item.disabled ?? false}>
                                    <TabsItem frontIcon={args.frontIcon} showClose={args.showClose} closeCallback={closeCallback}>
                                        {item.label}
                                    </TabsItem>
                                </TabsTrigger>
                            );
                        })
                    }
                </TabsList>
                <TabsContent value="1">
                    aaa
                </TabsContent>
                <TabsContent value="2">
                    bbb
                </TabsContent>
            </Tabs>
        </div>)
    },
}