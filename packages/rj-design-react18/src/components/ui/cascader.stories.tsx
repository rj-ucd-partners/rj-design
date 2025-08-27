
import { Cascader, SelectedTag } from "./cascader"
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./button";
import { TriangleDownIcon } from "../icon/TriangleDownIcon";

const meta: Meta<typeof SelectedTag> = {
    title: 'Components/Cascader',
    tags: ['autodocs'],
    component: SelectedTag,
    argTypes: {
        variant: {
            defaultValue: 'primary',
            control: { type: 'select' },
            options: ['primary',],
        },
        size: {
            defaultValue: 'sm',
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        }
    },
}

export default meta

type Story = StoryObj<typeof SelectedTag>


export const TagsSamll: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        desc: '标签'
    },
    render: (args) => {
        const closeCallback = () => {
            alert('汪！')
        }
        return (
            <SelectedTag {...args} closeCallback={closeCallback} />
        );
    }
}

export const TagsMedium: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        desc: '标签'
    },
    render: (args) => {
        const closeCallback = () => {
            alert('汪！')
        }
        return (
            <SelectedTag {...args} closeCallback={closeCallback} />
        );
    }
}

export const TagsLarge: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        desc: '标签'
    },
    render: (args) => {
        const closeCallback = () => {
            alert('汪！')
        }
        return (
            <SelectedTag {...args} closeCallback={closeCallback} />
        );
    }
}


export const Primary: Story = {
    args: {},
    render: () => {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'primary'} size={"md"}>
                        <div className="inline-flex justify-between items-center w-full gap-1">
                            <span>更多</span>
                            <TriangleDownIcon />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start" variant={'default'} itemVariant={'default'} >
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuItem hasSeparator={'default'} status={"success"}>
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem hasSeparator={'default'} status="default">
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem hasSeparator={'default'} status='danger'>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem hasSeparator={'default'} status='abnormal'>
                            Keyboard shortcuts
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }
}

// export const Primary1: Story = {
//     args: {},
//     render: () => {
//         return (
//             // <Cascader />
//         );
//     }
// }