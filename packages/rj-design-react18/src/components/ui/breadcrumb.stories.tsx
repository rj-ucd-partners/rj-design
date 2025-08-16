import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronDownIcon, SlashIcon } from "@radix-ui/react-icons"
import { HomeIcon } from "../icon/home-icon";
import type { ReactNode } from "react";

const meta: Meta<typeof Breadcrumb> = {
    title: 'Components/Breadcrumb',
    tags: ['autodocs'],
    component: Breadcrumb,
    argTypes: {
        variant: {
            defaultValue: 'default',
            control: { type: 'select' },
            options: ['default'],
        },
    },
}

export default meta

interface item {
    title: string,
    Icon?: ReactNode,
    href: string,

}

const data: item[] = [
    {
        title: 'Home',
        Icon: <HomeIcon />,
        href: '/',
    },
    {
        title: 'Comp',
        href: '/',
    },
    {
        title: 'Next',
        href: '/',
    },
    {
        title: 'Next',
        href: '/',
    },
    {
        title: 'Current',
        href: '/',
    }
]

type Story = StoryObj<typeof Breadcrumb>

//默认
export const Default: Story = {
    render: (args) => (
        <Breadcrumb>
            <BreadcrumbList variant={args.variant}>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <div className="inline-flex flex-row gap-1 items-center">
                            <HomeIcon />
                            <span>Home</span>
                        </div>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbEllipsis className="size-4" />
                    <span className="sr-only">Toggle menu</span>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 ">
                            Components
                            <ChevronDownIcon />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>Documentation</DropdownMenuItem>
                            <DropdownMenuItem>Themes</DropdownMenuItem>
                            <DropdownMenuItem>GitHub</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
