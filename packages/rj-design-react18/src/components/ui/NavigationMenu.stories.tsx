import type { Meta, StoryObj } from "@storybook/react-vite"
import { NavigationMenu, RJNavigationMenu, type NavigationMenuProps } from "./NavigationMenu"

const meta: Meta<NavigationMenuProps> = {
    title: 'Components/NavigationMenu',
    tags: ['autodocs'],
    component: NavigationMenu,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary'],
        },
        size: {
            control: "number"
        }
    },
}

const navigationMenus: {
    title: string;
    children: {
        title: string;
        href: string;
    }[]
}[] = [
        {
            title: "首页",
            children: [
                {
                    title: "二级菜单1",
                    href: "/docs/primitives/home1",
                },
                {
                    title: "二级菜单2",
                    href: "/docs/primitives/home1",
                },
                {
                    title: "二级菜单3",
                    href: "/docs/primitives/home1",
                },
                {
                    title: "二级菜单4",
                    href: "/docs/primitives/home1",
                },
                {
                    title: "二级菜单5",
                    href: "/docs/primitives/home1",
                }
            ]
        },
        {
            title: "设计",
            children: [
                {
                    title: "二级菜单1",
                    href: "/docs/primitives/design1",
                },
                {
                    title: "二级菜单2",
                    href: "/docs/primitives/design1",
                },
                {
                    title: "二级菜单3",
                    href: "/docs/primitives/design1",
                },
                {
                    title: "二级菜单4",
                    href: "/docs/primitives/design1",
                },
                {
                    title: "二级菜单5",
                    href: "/docs/primitives/design1",
                }
            ]
        },
        {
            title: "部署",
            children: [
                {
                    title: "二级菜单1",
                    href: "/docs/primitives/publish1",
                },
                {
                    title: "二级菜单2",
                    href: "/docs/primitives/publish1",
                },
                {
                    title: "二级菜单3",
                    href: "/docs/primitives/publish1",
                },
                {
                    title: "二级菜单4",
                    href: "/docs/primitives/publish1",
                },
                {
                    title: "二级菜单5",
                    href: "/docs/primitives/publish1",
                }
            ]
        },
        {
            title: "策略",
            children: [
                {
                    title: "二级菜单1",
                    href: "/docs/primitives/rules1",
                },
                {
                    title: "二级菜单2",
                    href: "/docs/primitives/rules1",
                },
                {
                    title: "二级菜单3",
                    href: "/docs/primitives/rules1",
                },
                {
                    title: "二级菜单4",
                    href: "/docs/primitives/rules1",
                },
                {
                    title: "二级菜单5",
                    href: "/docs/primitives/rules1",
                }
            ]
        },
        {
            title: "分析保障",
            children: [
                {
                    title: "二级菜单1",
                    href: "/docs/primitives/analysis1",
                },
                {
                    title: "二级菜单2",
                    href: "/docs/primitives/analysis1",
                },
                {
                    title: "二级菜单3",
                    href: "/docs/primitives/analysis1",
                },
                {
                    title: "二级菜单4",
                    href: "/docs/primitives/analysis1",
                },
                {
                    title: "二级菜单5",
                    href: "/docs/primitives/analysis1",
                }
            ]
        }
    ]

export default meta

type Story = StoryObj<NavigationMenuProps>

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 3,
        navigationMenus: navigationMenus,
    },
    render: (args) => {
        return (
            <RJNavigationMenu {...args} defaultValue="首页" />
        )
    }
}



