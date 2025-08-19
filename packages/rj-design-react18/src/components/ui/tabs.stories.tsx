import { Tabs, TabsBehindIcon, TabsFrontIcon, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FavoriteIcon } from '../icon/FavoriteIcon'
import { CloseIcon } from '../icon/closeIcon'
import { Button } from './button'
import { useState } from 'react'



const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'card', 'bottom-card'],
        },
        size: {
            control: { type: 'select' },
            options: ['md', 'lg', 'md-card', 'lg-card', 'md-bottom-card'],
        },
    },
}

export default meta

type Story = StoryObj<typeof Tabs>
//标签页
export const Default: Story = {
    args: {
        variant: 'default',
        size: 'md'
    },
    render: args => (
        <Tabs defaultValue='account'>
            <TabsList variant={args.variant} size={args.size}>
                <TabsTrigger disabled variant={args.variant} size={args.size} value='account'>默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='password'>默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='1'>默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='2'>默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='3'>默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='4'>默认选项</TabsTrigger>
            </TabsList>
            {/* <TabsContent value='account'>Make changes to your account here.</TabsContent>
            <TabsContent value='password'>Change your password here.</TabsContent> */}
        </Tabs>
    ),
}


//卡片项
export const Card: Story = {
    args: {
        variant: 'card',
        size: 'md-card'
    },
    render: args => (
        <Tabs defaultValue='account'>
            <TabsList variant={args.variant} size={args.size}>
                <TabsTrigger disabled variant={args.variant} size={args.size} value='account'>默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='password'>默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='1'>默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='2'>默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='3'>默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='4'>默认选项</TabsTrigger>
            </TabsList>
            {/* <TabsContent value='account'>Make changes to your account here.</TabsContent>
            <TabsContent value='password'>Change your password here.</TabsContent> */}
        </Tabs>
    ),
}

//底部条选项卡
export const BottomCard: Story = {
    args: {
        variant: 'bottom-card',
        size: 'md-bottom-card'
    },
    render: args => (
        <Tabs defaultValue='account'>
            <TabsList variant={args.variant} size={args.size}>
                <TabsTrigger disabled variant={args.variant} size={args.size} value='account'>底部条选项卡</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='password'>底部条选项卡</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='1'>底部条选项卡</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='2'>底部条选项卡</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='3'>底部条选项卡</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='4'>底部条选项卡</TabsTrigger>
            </TabsList>
            {/* <TabsContent value='account'>Make changes to your account here.</TabsContent>
            <TabsContent value='password'>Change your password here.</TabsContent> */}
        </Tabs>
    ),
}


//默认图标
export const DefaultWithFrontIcon: Story = {
    args: {
        variant: 'default',
    },
    render: args => (
        <Tabs defaultValue='account'>
            <TabsList variant={args.variant} size={args.size}>
                <TabsTrigger disabled variant={args.variant} size={args.size} value='account'>
                    <TabsFrontIcon size={args.size}>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                </TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='password'>
                    <TabsFrontIcon size={args.size}>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                </TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='1'>
                    <TabsFrontIcon size={args.size}>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                </TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='2'>
                    <TabsFrontIcon size={args.size}>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='3'>
                    <TabsFrontIcon size={args.size}>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='4'>
                    <TabsFrontIcon size={args.size}>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                </TabsTrigger>
            </TabsList>
            {/* <TabsContent value='account'>Make changes to your account here.</TabsContent>
            <TabsContent value='password'>Change your password here.</TabsContent> */}
        </Tabs>
    ),
}


export const CardWithBehindIcon: Story = {
    args: {
        variant: 'card',
        size: 'md-card',
    },
    render: args => {
        const [line, setLine] = useState<string[]>(['1', '2', '3', '4', 'account', 'password']);

        return (<Tabs defaultValue='account'>
            <TabsList variant={args.variant} size={args.size}>
                {
                    line.map((item, index) => {
                        return (
                            <TabsTrigger key={index} variant={args.variant} size={args.size} value={item}>
                                <TabsFrontIcon size={args.size}>
                                    <FavoriteIcon />
                                </TabsFrontIcon>
                                默认选项
                                <TabsBehindIcon size={args.size}>
                                    <Button variant={'transparent'} size={'link'} onClick={() => {
                                        setLine(line.filter((_, i) => i !== index));
                                    }}>
                                        <CloseIcon />
                                    </Button>
                                </TabsBehindIcon>
                            </TabsTrigger>
                        );
                    })
                }
            </TabsList>
            {/* <TabsContent value='account'>Make changes to your account here.</TabsContent>
            <TabsContent value='password'>Change your password here.</TabsContent> */}
        </Tabs>)
    },
}


export const DefaultWithBehindIcon: Story = {
    args: {
        variant: 'default',
        size: 'md',
    },
    render: args => {
        const [line, setLine] = useState<string[]>(['1', '2', '3', '4', 'account', 'password']);

        return (<Tabs defaultValue='account'>
            <TabsList variant={args.variant} size={args.size}>
                {
                    line.map((item, index) => {
                        return (
                            <TabsTrigger key={index} variant={args.variant} size={args.size} value={item}>
                                <TabsFrontIcon size={args.size}>
                                    <FavoriteIcon />
                                </TabsFrontIcon>
                                默认选项
                                <TabsBehindIcon size={args.size}>
                                    <Button variant={'transparent'} size={'link'} onClick={() => {
                                        setLine(line.filter((_, i) => i !== index));
                                    }}>
                                        <CloseIcon />
                                    </Button>
                                </TabsBehindIcon>
                            </TabsTrigger>
                        );
                    })
                }
            </TabsList>
            {/* <TabsContent value='account'>Make changes to your account here.</TabsContent>
            <TabsContent value='password'>Change your password here.</TabsContent> */}
        </Tabs>)
    },
}