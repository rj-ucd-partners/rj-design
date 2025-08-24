import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tree } from "./tree"
import { PersonIcon } from "@radix-ui/react-icons"

const meta: Meta<typeof Tree> = {
    title: 'Components/Tree',
    tags: ['autodocs'],
    component: Tree,
    argTypes: {

    },
}

const items = [
    {
        title: '这是一个折叠面板1',
        disabled: false,
        icon: <PersonIcon />,
        children: [
            {
                title: '这是一个子面板1',
                disabled: false,
                children: [
                    {
                        title: '这是一个孙面板1',
                        disabled: true,
                    }
                ]
            },
            {
                title: '这是一个子折叠面板2',
                disabled: false,
            },
            {
                title: '这是一个子折叠面板3',
                disabled: false,
            },
        ]
    },
    {
        title: '这是一个折叠面板2',
        disabled: false,
        children: [
            {
                title: '这是一个子面板1',
                disabled: false,
            },
            {
                title: '这是一个子折叠面板2',
                disabled: false,
            },
            {
                title: '这是一个子折叠面板3',
                disabled: false,
            },
        ]
    },
    {
        title: '这是一个折叠面板3',
        disabled: false,
        showFunc: true,
    },
    {
        title: '这是一个折叠面板4',
        disabled: false,
        showFunc: true,
    }
]


export default meta

type Story = StoryObj<typeof Tree>

export const Default: Story = {
    args: {},
    render: args => {
        return <Tree className="w-80" items={items} isCheckedBox={false} />
    }
}

export const Checked: Story = {
    args: {},
    render: args => {
        return <Tree items={items} isCheckedBox={true} />
    }
}


export const HasFunc: Story = {
    args: {},
    render: args => {
        return <Tree items={items} isCheckedBox={true} hasFunc={true} />
    }
}