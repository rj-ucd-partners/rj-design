import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bold, Italic, Underline } from "lucide-react"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

const meta: Meta<typeof ToggleGroup> = {
    title: 'Components/ToggleGroup',
    tags: ['autodocs'],
    component: ToggleGroup,
    argTypes: {

    },
}

export default meta

type Story = StoryObj<typeof ToggleGroup>

// 主要选项
export const Primary: Story = {
    args: {},
    render: (args) => {
        return (
            <ToggleGroup variant="outline" type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                    <Underline className="h-4 w-4" />
                </ToggleGroupItem>
            </ToggleGroup>
        )
    }
}