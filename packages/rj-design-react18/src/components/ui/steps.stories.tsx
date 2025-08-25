import type { Meta, StoryObj } from "@storybook/react-vite"
import { Steps } from "./steps"
import { Button } from "./button"
import { useState } from "react"
import { CatIcon, DogIcon, HomeIcon } from "lucide-react"

const meta: Meta<typeof Steps> = {
    title: 'Components/Steps',
    tags: ['autodocs'],
    component: Steps,
    argTypes: {

    },
}

const items = [
    {
        title: 'Finished',
        description: 'This is a description.',
    },
    {
        title: 'In Progress',
        description: 'This is a description.',
    },
    {
        title: 'Waiting',
        description: 'This is a description.',
    },
]
const itemsWithIcon = [
    {
        title: 'Finished',
        description: 'This is a description.',
        icon: <HomeIcon />,
    },
    {
        title: 'In Progress',
        description: 'This is a description.',
        icon: <DogIcon />,
    },
    {
        title: 'Waiting',
        description: 'This is a description.',
        icon: <CatIcon />,
    },
    {
        title: 'Waiting',
        description: 'This is a description.',
        icon: <CatIcon />,
    },
    {
        title: 'Waiting',
        description: 'This is a description.',
        icon: <CatIcon />,
    },
]
export default meta

type Story = StoryObj<typeof Steps>

export const HasError: Story = {
    args: {},
    render: () => {
        return (
            <Steps items={items} current={1} status='error' />
        )
    }
}
export const Primary: Story = {
    args: {},
    render: () => {
        const [current, setCurrent] = useState(0);

        const next = () => {
            setCurrent(current + 1);
        };

        const prev = () => {
            setCurrent(current - 1);
        };

        return (
            <div>
                <Steps items={items} current={current} />
                {current < items.length - 1 && (
                    <Button variant="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === items.length - 1 && (
                    <Button variant="primary" onClick={() => alert('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        )
    }
}
export const PrimaryWithIcon: Story = {
    args: {},
    render: () => {
        const [current, setCurrent] = useState(0);

        const next = () => {
            setCurrent(current + 1);
        };

        const prev = () => {
            setCurrent(current - 1);
        };

        return (
            <div>
                <Steps items={itemsWithIcon} current={current} />
                {current < itemsWithIcon.length - 1 && (
                    <Button variant="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === itemsWithIcon.length - 1 && (
                    <Button variant="primary" onClick={() => alert('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        )
    }
}
export const Dot: Story = {
    args: {

    },
    render: () => {
        const [current, setCurrent] = useState(0);

        const next = () => {
            setCurrent(current + 1);
        };

        const prev = () => {
            setCurrent(current - 1);
        };

        return (
            <div>
                <Steps items={itemsWithIcon} current={current} progressDot={true} />
                {current < itemsWithIcon.length && (
                    <Button variant="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === itemsWithIcon.length && (
                    <Button variant="primary" onClick={() => alert('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        )
    }
}
export const PrimaryVertical: Story = {
    args: {
        direction: 'vertical',
    },
    render: (args) => {
        const [current, setCurrent] = useState(0);

        const next = () => {
            setCurrent(current + 1);
        };

        const prev = () => {
            setCurrent(current - 1);
        };

        return (
            <div className=" flex flex-row gap-4 h-[550px]">
                <div>
                    <Steps items={items} current={current} {...args} />
                </div>
                {current < items.length && (
                    <Button variant="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === items.length && (
                    <Button variant="primary" onClick={() => alert('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        )
    }
}
export const PrimaryVerticalIcon: Story = {
    args: {
        direction: 'vertical',
    },
    render: (args) => {
        const [current, setCurrent] = useState(0);

        const next = () => {
            setCurrent(current + 1);
        };

        const prev = () => {
            setCurrent(current - 1);
        };

        return (
            <div className=" flex flex-row gap-4 h-[550px]">
                <div>
                    <Steps items={itemsWithIcon} current={current} {...args} />
                </div>
                {current < itemsWithIcon.length && (
                    <Button variant="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === itemsWithIcon.length && (
                    <Button variant="primary" onClick={() => alert('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        )
    }
}
export const PrimaryVerticalDot: Story = {
    args: {
        direction: 'vertical',
    },
    render: (args) => {
        const [current, setCurrent] = useState(0);

        const next = () => {
            setCurrent(current + 1);
        };

        const prev = () => {
            setCurrent(current - 1);
        };

        return (
            <div className=" flex flex-row gap-4 h-[550px]">
                <div>
                    <Steps items={itemsWithIcon} current={current} progressDot={true} {...args} />
                </div>
                {current < itemsWithIcon.length && (
                    <Button variant="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === itemsWithIcon.length && (
                    <Button variant="primary" onClick={() => alert('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        )
    }
}