import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"

import { Button } from "@/components/ui/Button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleHeader,
    CollapsibleTrigger,
} from "@/components/ui/Collapsible"
import type { CollapsibleProps } from "@radix-ui/react-collapsible"
import { TriangleRightIcon } from "@radix-ui/react-icons"

export interface CollapsibleVariantsProps extends CollapsibleProps {
    variant: 'primary',
    size: 'sm' | 'lg',
    layout: 'forward' | 'back',
    border: 'none' | 'bottom',
}

const meta: Meta<CollapsibleVariantsProps> = {
    title: 'Components/Collapsible',
    tags: ['autodocs'],
    component: Collapsible,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary'],
        },
        border: {
            control: { type: 'select' },
            options: ['none', 'bottom'],
        },
        disabled: {
            control: 'boolean',
        }
    },
}

export default meta

type Story = StoryObj<CollapsibleVariantsProps>

//主题选项
export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        layout: 'forward',
        border: 'none',
        disabled: false,
    },
    render: (args) => {
        const [isOpen, setIsOpen] = React.useState(false)
        return (
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="flex w-full flex-col"
                disabled={args.disabled}
            >
                <CollapsibleHeader layout={args.layout} variant={args.variant} size={args.size} border={args.border} disabled={args.disabled}>
                    <CollapsibleTrigger asChild>
                        <Button variant={'collapsible'}  >
                            <TriangleRightIcon />
                        </Button>
                    </CollapsibleTrigger>
                    <h4 className="text-sm font-semibold">
                        这是一个折叠面板标题
                    </h4>
                </CollapsibleHeader>

                <CollapsibleContent variant={args.variant} size={args.size} disabled={args.disabled}>
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
                </CollapsibleContent>
            </Collapsible>
        )
    }
}


export const Border: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        layout: 'forward',
        border: 'bottom',
    },
    render: (args) => {
        const [isOpen, setIsOpen] = React.useState(false)
        return (
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="flex w-full flex-col"
                disabled={false}
            >
                <CollapsibleHeader layout={args.layout} variant={args.variant} size={args.size} border={args.border}>
                    <CollapsibleTrigger asChild>
                        <Button variant={'collapsible'}  >
                            <TriangleRightIcon />
                        </Button>
                    </CollapsibleTrigger>
                    <h4 className="text-sm font-semibold">
                        这是一个折叠面板标题
                    </h4>
                </CollapsibleHeader>

                <CollapsibleContent variant={args.variant} size={args.size} disabled={args.disabled}>
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
                </CollapsibleContent>
            </Collapsible>
        )
    }
}


export const Back: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        layout: 'back',
        border: 'bottom',
    },
    render: (args) => {
        const [isOpen, setIsOpen] = React.useState(false)
        return (
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="flex w-full flex-col"
                disabled={false}
            >
                <CollapsibleHeader layout={args.layout} variant={args.variant} size={args.size} border={args.border}>
                    <h4 className="text-sm font-semibold">
                        这是一个折叠面板标题
                    </h4>
                    <CollapsibleTrigger asChild>
                        <Button variant={'collapsible'}  >
                            <TriangleRightIcon />
                        </Button>
                    </CollapsibleTrigger>
                </CollapsibleHeader>
                <CollapsibleContent variant={args.variant} size={args.size} disabled={args.disabled}>
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
                </CollapsibleContent>
            </Collapsible>
        )
    }
}

export const Disabled: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        layout: 'forward',
        border: 'none',
        disabled: true,
    },
    render: (args) => {
        const [isOpen, setIsOpen] = React.useState(false)
        return (
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="flex w-full flex-col"
                disabled={args.disabled}
            >
                <CollapsibleHeader layout={args.layout} variant={args.variant} size={args.size} border={args.border} disabled={args.disabled}>
                    <CollapsibleTrigger asChild>
                        <Button variant={'collapsible'}  >
                            <TriangleRightIcon />
                        </Button>
                    </CollapsibleTrigger>
                    <h4 className="text-sm font-semibold">
                        这是一个折叠面板标题
                    </h4>
                </CollapsibleHeader>

                <CollapsibleContent variant={args.variant} size={args.size} disabled={args.disabled}>
                    这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。
                </CollapsibleContent>
            </Collapsible>
        )
    }
}