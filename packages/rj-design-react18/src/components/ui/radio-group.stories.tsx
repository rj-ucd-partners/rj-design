import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"

const meta: Meta<typeof RadioGroup> = {
    title: 'Components/RadioGroup',
    tags: ['autodocs'],
    component: RadioGroup,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary'],
        },
        flex: {
            control: { type: 'select' },
            options: ['row', 'col'],
        },
        disabled: {
            control: 'boolean',
        },
    },
}

export default meta

type Story = StoryObj<typeof RadioGroup>

// 主要单选框
export const Primary: Story = {
    args: {
        variant: 'primary',
        flex: 'row'
    },
    render: (args) => (
        <RadioGroup disabled={args.disabled} flex={args.flex} defaultValue="comfortable">
            <div className="flex items-center gap-3">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
            </div>
        </RadioGroup>
    )
}
