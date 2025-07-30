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
import { SlashIcon } from "@radix-ui/react-icons"

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

type Story = StoryObj<typeof Breadcrumb>


export const Default: Story = {
    render: (args) => (
        <Breadcrumb>
            <BreadcrumbList variant={args.variant}>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <span>Home</span>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1">
                            <BreadcrumbEllipsis className="size-4" />
                            <span className="sr-only">Toggle menu</span>
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
                    <BreadcrumbLink asChild>
                        {/* <Link href="/docs/components">Components</Link> */}
                        <span>Components</span>
                    </BreadcrumbLink>
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