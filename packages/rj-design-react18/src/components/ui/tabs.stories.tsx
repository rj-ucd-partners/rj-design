import { Tabs, TabsBehindIcon, TabsContent, TabsFrontIcon, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FavoriteIcon } from '../icon/FavoriteIcon'



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
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                </TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='password'>
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                </TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='1'>
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                </TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='2'>
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='3'>
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='4'>
                    <TabsFrontIcon>
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


export const DefaultWithBehindIcon: Story = {
    args: {
        variant: 'default',
    },
    render: args => (
        <Tabs defaultValue='account'>
            <TabsList variant={args.variant} size={args.size}>
                <TabsTrigger disabled variant={args.variant} size={args.size} value='account'>
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                </TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='password'>
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                </TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='1'>
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                </TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='2'>
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='3'>
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项</TabsTrigger>
                <TabsTrigger variant={args.variant} size={args.size} value='4'>
                    <TabsFrontIcon>
                        <FavoriteIcon />
                    </TabsFrontIcon>
                    默认选项
                    <TabsBehindIcon>
                        <FavoriteIcon />
                    </TabsBehindIcon>
                </TabsTrigger>
            </TabsList>
            {/* <TabsContent value='account'>Make changes to your account here.</TabsContent>
            <TabsContent value='password'>Change your password here.</TabsContent> */}
        </Tabs>
    ),
}