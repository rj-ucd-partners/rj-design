import type {
    Meta,
    StoryObj,
} from '@storybook/react-vite'
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { YesIcon } from '../icon/yes'

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default',],
        },
    },
}

export default meta

type Story = StoryObj<typeof Alert>

// 默认
export const Default: Story = {
    args: {

    },
    render: (args) => (
        <Alert>
            <YesIcon />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
                This is an alert with icon, title and description.
            </AlertDescription>
        </Alert>
    )
}