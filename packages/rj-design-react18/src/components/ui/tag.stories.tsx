import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tag } from "./tag"

const meta: Meta<typeof Tag> = {
    title: 'Components/Tag',
    tags: ['autodocs'],
    component: Tag,
    argTypes: {
    },
}

export default meta

type Story = StoryObj<typeof Tag>
//标签页
export const Default: Story = {
    args: {

    },
    render: () => {
        return (
            <div className="w-30">
                <Tag showClose={true}>这是一个标签,这是一个标签,这是一个标签</Tag>
            </div>
        );
    }
}