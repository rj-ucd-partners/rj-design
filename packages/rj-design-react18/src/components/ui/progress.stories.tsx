import type { Meta, StoryObj } from "@storybook/react-vite"
import { Progress, ProgressBlocks, ProgressContext } from "./progress"
import React from "react"

const meta: Meta<typeof Progress> = {
    title: 'Components/Progress',
    tags: ['autodocs'],
    component: Progress,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'destructive', 'success', 'warning'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        }
    },
}

export default meta

type Story = StoryObj<typeof Progress>

// 默认状态
export const Small: Story = {
    args: {
        size: 'sm',
        variant: 'primary'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <Progress value={progress} className="w-[60%]" {...args} />
    }
}

// 默认状态
export const Mid: Story = {
    args: {
        size: 'md',
        variant: 'primary'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <Progress value={progress} className="w-[60%]" {...args} />
    }
}

// 默认状态
export const Default: Story = {
    args: {
        size: 'md',
        variant: 'default'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <Progress value={progress} className="w-[60%]" {...args} />
    }
}

// 主要状态
export const Primary: Story = {
    args: {
        size: 'md',
        variant: 'primary'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <Progress value={progress} className="w-[60%]" {...args} />
    }
}


// 破坏性的状态
export const Destructive: Story = {
    args: {
        size: 'md',
        variant: 'destructive'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <Progress value={progress} className="w-[60%]" {...args} />
    }
}

// 破坏性的状态
export const Warning: Story = {
    args: {
        size: 'md',
        variant: 'warning'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <Progress value={progress} className="w-[60%]" {...args} />
    }
}

// 破坏性的状态
export const Success: Story = {
    args: {
        size: 'md',
        variant: 'success'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <Progress value={progress} className="w-[60%]" {...args} />
    }
}

// 破坏性的状态
export const Number: Story = {
    args: {
        size: 'md',
        variant: 'success'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <ProgressContext value={progress} className="w-[60%]" {...args} >
            <span>{progress}%</span>
        </ProgressContext>
    }
}

// 破坏性的状态
export const Icon: Story = {
    args: {
        size: 'md',
        variant: 'success'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <ProgressContext value={progress} className="w-[60%]" {...args} >
            <svg width={16} height={16} viewBox="0 0 16 16" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM11.5313 6.23225L10.8242 5.52515L7.28871 9.06059L5.53593 7.30781L4.8288 8.01489L7.28862 10.4749L11.5313 6.23225Z" />
            </svg>
        </ProgressContext>
    }
}


// 破坏性的状态
export const Icon1: Story = {
    args: {
        size: 'md',
        variant: 'destructive'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <ProgressContext value={progress} className="w-[60%]" {...args} >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.046 5.71554L8.7615 8.00004L11.046 10.2845L10.2845 11.046L8 8.76154L5.7155 11.046L4.954 10.2845L7.2385 8.00004L4.954 5.71554L5.7155 4.95405L8 7.23854L10.2845 4.95405L11.046 5.71554Z" />
            </svg>
        </ProgressContext>
    }
}

//方块
export const Blocks: Story = {
    args: {
        size: 'md',
        variant: 'primary'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <ProgressBlocks value={progress} className="w-[60%]" {...args} >
            <span>{progress}%</span>
        </ProgressBlocks>
    }
}

export const Blocks1: Story = {
    args: {
        size: 'md',
        variant: 'destructive'
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(13)
        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(100), 500)
            return () => clearTimeout(timer)
        }, [])
        return <ProgressBlocks value={progress} className="w-[60%]" {...args} >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.046 5.71554L8.7615 8.00004L11.046 10.2845L10.2845 11.046L8 8.76154L5.7155 11.046L4.954 10.2845L7.2385 8.00004L4.954 5.71554L5.7155 4.95405L8 7.23854L10.2845 4.95405L11.046 5.71554Z" />
            </svg>
        </ProgressBlocks>
    }
}