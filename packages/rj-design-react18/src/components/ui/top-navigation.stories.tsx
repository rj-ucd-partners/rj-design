import type { Meta, StoryObj } from '@storybook/react-vite'
import { TopNavigation } from './top-navigation'
import { RJNavigationMenu } from './navigation-menu'
import { Button } from './button'
import { GearIcon } from '../icon/gear-icon'
import { HelpIcon } from '../icon/help'
import { ThemeIcon } from '../icon/theme'
import type { VariantProps } from 'class-variance-authority'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'

interface TopNavigationProps extends VariantProps<typeof TopNavigation> {
    avatar?: string
}

const meta: Meta<TopNavigationProps> = {
    title: 'Components/TopNavigation',
    tags: ['autodocs'],
    component: TopNavigation,
    argTypes: {
        avatar: {
            control: 'text',
        },
    },
}

export default meta

type Story = StoryObj<TopNavigationProps>

//#region
const navigationMenus: {
    title: string
    children: {
        title: string
        href: string
    }[]
}[] = [
        {
            title: '首页',
            children: [
                {
                    title: '二级菜单1',
                    href: '/docs/primitives/home1',
                },
                {
                    title: '二级菜单2',
                    href: '/docs/primitives/home1',
                },
                {
                    title: '二级菜单3',
                    href: '/docs/primitives/home1',
                },
                {
                    title: '二级菜单4',
                    href: '/docs/primitives/home1',
                },
                {
                    title: '二级菜单5',
                    href: '/docs/primitives/home1',
                },
            ],
        },
        {
            title: '设计',
            children: [
                {
                    title: '二级菜单1',
                    href: '/docs/primitives/design1',
                },
                {
                    title: '二级菜单2',
                    href: '/docs/primitives/design1',
                },
                {
                    title: '二级菜单3',
                    href: '/docs/primitives/design1',
                },
                {
                    title: '二级菜单4',
                    href: '/docs/primitives/design1',
                },
                {
                    title: '二级菜单5',
                    href: '/docs/primitives/design1',
                },
            ],
        },
        {
            title: '部署',
            children: [
                {
                    title: '二级菜单1',
                    href: '/docs/primitives/publish1',
                },
                {
                    title: '二级菜单2',
                    href: '/docs/primitives/publish1',
                },
                {
                    title: '二级菜单3',
                    href: '/docs/primitives/publish1',
                },
                {
                    title: '二级菜单4',
                    href: '/docs/primitives/publish1',
                },
                {
                    title: '二级菜单5',
                    href: '/docs/primitives/publish1',
                },
            ],
        },
        {
            title: '策略',
            children: [
                {
                    title: '二级菜单1',
                    href: '/docs/primitives/rules1',
                },
                {
                    title: '二级菜单2',
                    href: '/docs/primitives/rules1',
                },
                {
                    title: '二级菜单3',
                    href: '/docs/primitives/rules1',
                },
                {
                    title: '二级菜单4',
                    href: '/docs/primitives/rules1',
                },
                {
                    title: '二级菜单5',
                    href: '/docs/primitives/rules1',
                },
            ],
        },
        {
            title: '分析保障',
            children: [
                {
                    title: '二级菜单1',
                    href: '/docs/primitives/analysis1',
                },
                {
                    title: '二级菜单2',
                    href: '/docs/primitives/analysis1',
                },
                {
                    title: '二级菜单3',
                    href: '/docs/primitives/analysis1',
                },
                {
                    title: '二级菜单4',
                    href: '/docs/primitives/analysis1',
                },
                {
                    title: '二级菜单5',
                    href: '/docs/primitives/analysis1',
                },
            ],
        },
    ]
// #endregion
export const PrimaryTopNavigation: Story = {
    args: {
        avatar: 'https://github.com/evilrabbit.png',
    },
    render: (args) => {
        return (
            <TopNavigation
                navigationMenu={
                    <RJNavigationMenu
                        variant={'primary'}
                        size={3}
                        navigationMenus={navigationMenus}
                        defaultValue='首页'
                    />
                }
                toSet={
                    <Button
                        variant={'transparent'}
                        onClick={() => {
                            alert('设置')
                        }}
                    >
                        <GearIcon className='size-6' />
                    </Button>
                }
                help={
                    <Button
                        variant={'transparent'}
                        onClick={() => {
                            alert('帮助')
                        }}
                    >
                        <HelpIcon className='size-6' />
                    </Button>
                }
                theme={
                    <Button
                        variant={'transparent'}
                        onClick={() => {
                            alert('主题')
                        }}
                    >
                        <ThemeIcon className='size-6' />
                    </Button>
                }
                avatar={args.avatar}
            />
        )
    },
}

export const PrimaryTopNavigationHasFunction: Story = {
    args: {
        avatar: 'https://github.com/evilrabbit.png',
    },
    render: (args) => {
        return (
            <TopNavigation
                slector={
                    <DropdownMenu variant={'primary'} >
                        <DropdownMenuTrigger asChild >
                            <Button variant={'default'} size={"md"} className='w-[100px] justify-between' >
                                <span>全局</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.15829 10.6879C7.55179 11.3013 8.44819 11.3013 8.84169 10.6879L11.3422 6.78995C11.7692 6.12439 11.2913 5.25 10.5005 5.25L5.49944 5.25C4.7087 5.25 4.23078 6.12439 4.65774 6.78995L7.15829 10.6879Z" fill="#97A7B5" />
                                </svg>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start" >
                            <DropdownMenuItem onClick={() => { }}>
                                不知道是什么
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => { }}>
                                不知道是什么
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => { }}>
                                不知道是什么
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => { }}>
                                不知道是什么
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => { }}>
                                不知道是什么
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                }
                navigationMenu={
                    <RJNavigationMenu
                        variant={'primary'}
                        size={3}
                        navigationMenus={navigationMenus}
                        defaultValue='首页'
                    />
                }

                outButton={
                    <Button
                        variant={'default'}
                        size={"md"} className='w-[96px] font-medium'
                        onClick={() => {
                            alert('这个不懂干嘛的')
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0C0.447715 0 0 0.447716 0 1V13C0 13.5523 0.447715 14 1 14H8.35418C7.52375 13.2671 7 12.1947 7 11C7 8.79086 8.79086 7 11 7C11.3453 7 11.6804 7.04375 12 7.12602V1C12 0.447715 11.5523 0 11 0H1ZM2.5 2H9.5C9.77614 2 10 2.22386 10 2.5C10 2.77614 9.77614 3 9.5 3H2.5C2.22386 3 2 2.77614 2 2.5C2 2.22386 2.22386 2 2.5 2ZM2.5 5H9.5C9.77614 5 10 5.22386 10 5.5C10 5.77614 9.77614 6 9.5 6H2.5C2.22386 6 2 5.77614 2 5.5C2 5.22386 2.22386 5 2.5 5ZM2 8.5C2 8.22386 2.22386 8 2.5 8H5.5C5.77614 8 6 8.22386 6 8.5C6 8.77614 5.77614 9 5.5 9H2.5C2.22386 9 2 8.77614 2 8.5ZM14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11ZM11.9942 10.1648C12.0016 10.1416 12.0019 10.1168 11.9952 10.0934C11.9885 10.07 11.975 10.0489 11.9563 10.0326C11.9376 10.0164 11.9144 10.0057 11.8896 10.0017C11.8648 9.99774 11.8393 10.0007 11.8162 10.0103L10.0795 10.7326C10.0563 10.7423 10.0365 10.7582 10.0224 10.7784C10.0084 10.7986 10.0006 10.8223 10 10.8467C9.99948 10.8711 10.0062 10.8951 10.0193 10.9159C10.0325 10.9367 10.0515 10.9534 10.0742 10.9641L10.7477 11.2791C10.7701 11.2896 10.789 11.3059 10.8022 11.3263L11.1979 11.94C11.2113 11.9607 11.2305 11.9773 11.2534 11.9878C11.2762 11.9982 11.3017 12.0021 11.3267 11.9989C11.3518 11.9958 11.3754 11.9858 11.3947 11.97C11.414 11.9543 11.4283 11.9335 11.4357 11.9102L11.9942 10.1648Z" fill="#C0C7CF" />
                        </svg>
                        部署向导
                    </Button>
                }
                toSet={
                    <Button
                        variant={'transparent'}
                        onClick={() => {
                            alert('设置')
                        }}
                    >
                        <GearIcon className='size-6' />
                    </Button>
                }
                help={
                    <Button
                        variant={'transparent'}
                        onClick={() => {
                            alert('帮助')
                        }}
                    >
                        <HelpIcon className='size-6' />
                    </Button>
                }
                theme={
                    <Button
                        variant={'transparent'}
                        onClick={() => {
                            alert('主题')
                        }}
                    >
                        <ThemeIcon className='size-6' />
                    </Button>
                }
                avatar={args.avatar}
            />
        )
    },
}
