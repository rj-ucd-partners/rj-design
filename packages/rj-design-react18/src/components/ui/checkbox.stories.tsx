import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    tags: ['autodocs'],
    component: Checkbox,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default'],
        },
        checked: {
            control: { type: 'select' },
            options: ['indeterminate', true, false],
        },
        disabled: {
            control: 'boolean'
        }
    },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
    args: {
        checked: 'indeterminate',
        variant: 'default'
    },
    render: (args) => (
        <div className="flex items-center gap-2">
            <Checkbox variant={args.variant} disabled={args.disabled} id={'check'} defaultChecked={args.checked} checked={args.checked} />
            <Label htmlFor={'check'}>Indeterminate checkbox</Label>
        </div>)
}