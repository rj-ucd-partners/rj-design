import type { Meta, StoryObj } from '@storybook/react-vite'
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from './Item'
import { Button } from './Button'
import { InfoCirecledIcon } from '../icon/InfoCirecledIcon'

const meta: Meta<typeof Item> = {
    title: 'Components/Item',
    tags: ['autodocs'],
    component: Item,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'popover'],
        },
        size: {
            control: { type: 'select' },
            options: ['flex', 'sm', 'default'],
        }
    },
}
export default meta
type Story = StoryObj<typeof Item>

// 输入框
export const PopoverItem: Story = {
    args: {
        variant: "popover",
        size: "flex"
    },
    render: (args) => {
        return (
            <div className='w-100 bg-fill-light-hover-bg'>
                <Item variant={args.variant} size={args.size}>
                    <ItemHeader>
                        <ItemTitle><InfoCirecledIcon className='text-primary' /> 标题</ItemTitle>
                    </ItemHeader>
                    <ItemContent>
                        <ItemDescription>
                            描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容 描述内容
                        </ItemDescription>
                    </ItemContent>
                    <ItemFooter className='mt-2'>
                        <Button
                            variant="default"
                            size="md"
                        >
                            取消
                        </Button>
                        <Button
                            variant="primary"
                            size="md"
                        >
                            确认
                        </Button>
                    </ItemFooter>
                </Item>
            </div>
        );
    }
}


