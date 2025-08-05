import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from "@/components/ui/slider"
import { cn } from '@/lib/utils'

const meta: Meta<typeof Slider> = {
    title: 'Components/Slider',
    tags: ['autodocs'],
    component: Slider,
    argTypes: {
        disabled: {
            control: 'boolean',
        },
    },
}

export default meta

type Story = StoryObj<typeof Slider>

// 主要单选框
export const Primary: Story = {
    args: {
    },
    render: (args) => {
        return (<Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]", args.className)}
            {...args}
        />);
    }
}