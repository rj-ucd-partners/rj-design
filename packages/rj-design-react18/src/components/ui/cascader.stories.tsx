
import { FavoriteIcon } from "../icon/FavoriteIcon";
import { Cascader, type SelectItem } from "./cascader"
import type { Meta, StoryObj } from "@storybook/react-vite";


const meta: Meta<typeof Cascader> = {
    title: 'Components/Cascader',
    tags: ['autodocs'],
    component: Cascader,
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

type Story = StoryObj<typeof Cascader>

const items: SelectItem[] = [
    {
        id: 1,
        title: '选项1',
        children: [
            {
                id: 11,
                title: '选项1-1',
            },
            {
                id: 12,
                title: '选项1-2',
            },
            {
                id: 13,
                title: '选项1-3',
                children: [
                    {
                        id: 131,
                        title: '选项1-3-1',
                    },
                    {
                        id: 132,
                        title: '选项1-3-2',
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: '选项2',
        children: [
            {
                id: 21,
                title: '选项2-1',
            }
        ]
    },
    {
        id: 3,
        title: '选项3',
    },
    {
        id: 4,
        title: '选项4',
    }
]
export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
    },
    render: (args) => {
        return (
            <Cascader {...args} items={items} />
        );
    }
}
export const PrimaryDisableCheckbox: Story = {
    args: {
        disableCheckbox: true,
        variant: 'primary',
        size: 'sm',
    },
    render: (args) => {
        return (
            <Cascader
                items={items}
                disableCheckbox={args.disableCheckbox}
                variant={args.variant}
                size={args.size}
            />
        );
    }
}

export const PrimaryIcon: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
    },
    render: (args) => {
        return (
            <Cascader
                items={items}
                disableCheckbox={args.disableCheckbox}
                variant={args.variant}
                size={args.size}
                icon={<FavoriteIcon className="text-secondary size-4" />} />
        );
    }
}


export const PrimarySmall: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
    },
    render: (args) => {
        return (
            <Cascader
                items={items}
                disableCheckbox={args.disableCheckbox}
                variant={args.variant}
                size={args.size}
                icon={<FavoriteIcon className="text-secondary size-[14px]" />} />
        );
    }
}

export const PrimaryMid: Story = {
    args: {
        variant: 'primary',
        size: 'md',
    },
    render: (args) => {
        return (
            <Cascader
                items={items}
                disableCheckbox={args.disableCheckbox}
                variant={args.variant}
                size={args.size}
                icon={<FavoriteIcon className="text-secondary size-4" />} />
        );
    }
}

export const PrimaryLg: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
    },
    render: (args) => {
        return (
            <Cascader
                items={items}
                disableCheckbox={args.disableCheckbox}
                variant={args.variant}
                size={args.size}
                icon={<FavoriteIcon className="text-secondary size-[18px]" />} />
        );
    }
}