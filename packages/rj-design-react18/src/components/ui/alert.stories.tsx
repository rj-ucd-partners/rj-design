import type {
    Meta,
    StoryObj,
} from '@storybook/react-vite'
import { Info } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    AlertToolbar,
} from "@/components/ui/alert"
import { Button } from './button'

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'success'],
        },
        grid: {
            control: { type: 'select' },
            options: ['title', 'hasIcon'],
        },
    },
}

export default meta

type Story = StoryObj<typeof Alert>

// 标题
export const Title: Story = {
    args: {
        variant: 'primary',
    },
    render: (args) => (
        <Alert variant={args.variant} close={false} >
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
        </Alert>
    )
}

// Icon + 标题
export const Icon: Story = {
    args: {
        variant: 'primary',
        grid: 'icon',
    },
    render: (args) => (
        <Alert variant={args.variant} grid={args.grid} close={false} >
            <AlertIcon>
                <Info size={16} />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
        </Alert>
    )
}

// Close
export const Close: Story = {
    args: {
        variant: 'primary',
        grid: 'icon',
    },
    render: (args) => (
        <Alert variant={args.variant} grid={args.grid} close={true} >
            <AlertIcon>
                <Info size={16} />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
        </Alert>
    )
}

// Toolbar
export const Toolbar: Story = {
    args: {
        variant: 'primary',
        grid: 'icon',
    },
    render: (args) => (
        <Alert variant={args.variant} grid={args.grid} close={true} >
            <AlertIcon>
                <Info size={16} />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertToolbar>
                <Button variant="link" size="sm">
                    相关操作
                </Button>
            </AlertToolbar>
        </Alert>
    )
}


// 主要
export const Primary: Story = {
    args: {
        variant: 'primary',
        grid: 'desc',

    },
    render: (args) => (
        <Alert variant={args.variant} grid={args.grid} close={true} >
            <AlertIcon>
                <Info size={16} />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertToolbar>
                <Button variant="link" size="sm">
                    相关操作
                </Button>
            </AlertToolbar>
            <AlertDescription>
                This is an alert with icon, title and description.
            </AlertDescription>
        </Alert>
    )
}

// 成功
export const Success: Story = {
    args: {
        variant: 'success',
        grid: 'desc',
    },
    render: (args) => (
        <Alert variant={args.variant} grid={args.grid} close={true} >
            <AlertIcon>
                <Info size={16} />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertToolbar>
                <Button variant="link" size="sm">
                    相关操作
                </Button>
            </AlertToolbar>
            <AlertDescription>
                This is an alert with icon, title and description.
            </AlertDescription>
        </Alert>
    )
}

// 告警
export const Abnormal: Story = {
    args: {
        variant: 'abnormal',
        grid: 'desc',
    },
    render: (args) => (
        <Alert variant={args.variant} grid={args.grid} close={true} >
            <AlertIcon>
                <Info size={16} />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertToolbar>
                <Button variant="link" size="sm">
                    相关操作
                </Button>
            </AlertToolbar>
            <AlertDescription>
                This is an alert with icon, title and description.
            </AlertDescription>
        </Alert>
    )
}

// 危险
export const Danger: Story = {
    args: {
        variant: 'danger',
        grid: 'desc',
    },
    render: (args) => (
        <Alert variant={args.variant} grid={args.grid} close={true} >
            <AlertIcon>
                <Info size={16} />
            </AlertIcon>
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertToolbar>
                <Button variant="link" size="sm">
                    相关操作
                </Button>
            </AlertToolbar>
            <AlertDescription>
                This is an alert with icon, title and description.
            </AlertDescription>
        </Alert>
    )
}