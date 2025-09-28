import type { Meta, StoryObj } from "@storybook/react-vite"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { ManIcon } from "../icon/man-icon"
import type { BaseNode } from "@/common/type"
import { cn } from "@/lib/utils"

const meta: Meta<typeof ToggleGroup> = {
    title: 'Components/ToggleGroup',
    tags: ['autodocs'],
    component: ToggleGroup,
    argTypes: {

    },
}

export default meta


type Story = StoryObj<typeof ToggleGroup>
const items: BaseNode[] = [
    {
        key: '1',
        label: "选项左",
        disabled: true
    },
    {
        key: '2',
        label: "选项中"
    },
    {
        key: '3',
        label: "选项中"
    },
    {
        key: '4',
        label: "选项中"
    },
    {
        key: '5',
        label: "选项中"
    }, {
        key: '6',
        label: "选项右"
    }
]

// 主要选项
export const Primary: Story = {
    args: {
        size: 'sm'
    },
    render: (args) => {
        return (
            <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'} >
                {
                    items.map(item => {
                        return <div className={cn(
                            "inline-flex item-center justify-center",
                            args.size === 'sm' ? 'p-0.5' : 'p-1',
                        )}>
                            <ToggleGroupItem key={item.key} value={item.key} >
                                {item.label}
                            </ToggleGroupItem>
                        </div>
                    })
                }

            </ToggleGroup>
        )
    }
}

// 主要选项
export const PrimaryMD: Story = {
    args: {
        size: 'md'
    },
    render: (args) => {
        return (
            <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'} >
                {
                    items.map(item => {
                        return <div className={cn(
                            "inline-flex item-center justify-center",
                            args.size === 'sm' ? 'p-0.5' : 'p-1',
                        )}>
                            <ToggleGroupItem key={item.key} value={item.key} >
                                {item.label}
                            </ToggleGroupItem>
                        </div>
                    })
                }

            </ToggleGroup>
        )
    }
}

// 主要选项大
export const PrimaryLG: Story = {
    args: {
        size: 'lg'
    },
    render: (args) => {
        return (
            <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'} >
                {
                    items.map(item => {
                        return <div className={cn(
                            "inline-flex item-center justify-center",
                            args.size === 'sm' ? 'p-0.5' : 'p-1',
                        )}>
                            <ToggleGroupItem key={item.key} value={item.key} >
                                {item.label}
                            </ToggleGroupItem>
                        </div>
                    })
                }

            </ToggleGroup>
        )
    }
}

// 主要选项禁止
export const PrimaryDisabled: Story = {
    args: {
        size: 'md'
    },
    render: (args) => {
        return (
            <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'} >
                {
                    items.map(item => {
                        return <div className={cn(
                            "inline-flex item-center justify-center",
                            args.size === 'sm' ? 'p-0.5' : 'p-1',
                        )}>
                            <ToggleGroupItem key={item.key} value={item.key} disabled={item.disabled} >
                                {item.label}
                            </ToggleGroupItem>
                        </div>
                    })
                }

            </ToggleGroup>
        )
    }
}

export const PrimaryDisabledChecked: Story = {
    args: {
        size: 'md'
    },
    render: (args) => {
        return (
            <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'} value="1" >
                {
                    items.map(item => {
                        return <div className={cn(
                            "inline-flex item-center justify-center",
                            args.size === 'sm' ? 'p-0.5' : 'p-1',
                        )}>
                            <ToggleGroupItem key={item.key} value={item.key} disabled={item.disabled} >
                                {item.label}
                            </ToggleGroupItem>
                        </div>
                    })
                }

            </ToggleGroup>
        )
    }
}


export const PrimaryIcon: Story = {
    args: {
        size: 'sm'
    },
    render: (args) => {
        return (
            <ToggleGroup variant="primary" type="single" size={'sm'}  >
                {
                    items.map(item => {
                        return <div className={cn(
                            "inline-flex item-center justify-center",
                            args.size === 'sm' ? 'p-0.5' : 'p-1',
                        )}>
                            <ToggleGroupItem key={item.key} value={item.key} >
                                <ManIcon />
                            </ToggleGroupItem>
                        </div>
                    })
                }
            </ToggleGroup>
        )
    }
}

export const PrimaryIconMD: Story = {
    args: {
        size: 'md'
    },
    render: (args) => {
        return (
            <ToggleGroup variant="primary" type="single" size={args.size ?? 'sm'}  >
                {
                    items.map(item => {
                        return <div className={cn(
                            "inline-flex item-center justify-center",
                            args.size === 'sm' ? 'p-0.5' : 'p-1',
                        )}>
                            <ToggleGroupItem key={item.key} value={item.key} >
                                <ManIcon />
                            </ToggleGroupItem>
                        </div>
                    })
                }
            </ToggleGroup>
        )
    }
}

export const PrimaryIconLG: Story = {
    args: {
        size: 'lg'
    },
    render: (args) => {
        return (
            <ToggleGroup variant="primary" type="single" size={'lg'}  >
                {
                    items.map(item => {
                        return <div className={cn(
                            "inline-flex item-center justify-center",
                            args.size === 'sm' ? 'p-0.5' : 'p-1',
                        )}>
                            <ToggleGroupItem key={item.key} value={item.key} >
                                <ManIcon />
                            </ToggleGroupItem>
                        </div>
                    })
                }
            </ToggleGroup>
        )
    }
}