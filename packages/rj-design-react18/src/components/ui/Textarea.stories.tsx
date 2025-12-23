import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "./Textarea"
import { useState } from "react"

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    tags: ['autodocs'],
    component: Textarea,
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'success', 'destructive', 'warning'],
        }
    },
}

export default meta

type Story = StoryObj<typeof Textarea>
//文本框
export const Primary: Story = {
    args: {
        maxLength: 100,
        placeholder: "在这里输入的",
        variant: 'primary',
    },
    render: (args) => {
        const [value, setValue] = useState<string | undefined>();
        const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const str = e.target.value;
            if (args.maxLength && str.length > args.maxLength) {
                setValue(str.substring(0, args.maxLength))
            } else {
                setValue(str);
            }
        }
        return <Textarea {...args} value={value} onChange={onValueChange} />
    }
}

export const Success: Story = {
    args: {
        maxLength: 100,
        placeholder: "在这里输入的",
        variant: 'success',
    },
    render: (args) => {
        const [value, setValue] = useState<string | undefined>();
        const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const str = e.target.value;
            if (args.maxLength && str.length > args.maxLength) {
                setValue(str.substring(0, args.maxLength))
            } else {
                setValue(str);
            }
        }
        return <Textarea {...args} value={value} onChange={onValueChange} />
    }
}

export const Destructive: Story = {
    args: {
        maxLength: 100,
        placeholder: "在这里输入的",
        variant: 'destructive',
    },
    render: (args) => {
        const [value, setValue] = useState<string | undefined>();
        const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const str = e.target.value;
            if (args.maxLength && str.length > args.maxLength) {
                setValue(str.substring(0, args.maxLength))
            } else {
                setValue(str);
            }
        }
        return <Textarea {...args} value={value} onChange={onValueChange} />
    }
}

export const Warning: Story = {
    args: {
        maxLength: 100,
        placeholder: "在这里输入的",
        variant: 'warning',
    },
    render: (args) => {
        const [value, setValue] = useState<string | undefined>();
        const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const str = e.target.value;
            if (args.maxLength && str.length > args.maxLength) {
                setValue(str.substring(0, args.maxLength))
            } else {
                setValue(str);
            }
        }
        return <Textarea {...args} value={value} onChange={onValueChange} />
    }
}

export const DestructiveWithDescription: Story = {
    args: {
        maxLength: 100,
        placeholder: "在这里输入的",
        variant: 'destructive',
        description: '额外提示语，文字过多时输入框宽度折行'
    },
    render: (args) => {
        const [value, setValue] = useState<string | undefined>();
        const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const str = e.target.value;
            if (args.maxLength && str.length > args.maxLength) {
                setValue(str.substring(0, args.maxLength))
            } else {
                setValue(str);
            }
        }
        return <Textarea {...args} value={value} onChange={onValueChange} />
    }
}

export const ResizeBoth: Story = {
    args: {
        maxLength: 100,
        placeholder: "在这里输入的",
        variant: 'destructive',
        description: '额外提示语，文字过多时输入框宽度折行',
        resize: 'both'
    },
    render: (args) => {
        const [value, setValue] = useState<string | undefined>();
        const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const str = e.target.value;
            if (args.maxLength && str.length > args.maxLength) {
                setValue(str.substring(0, args.maxLength))
            } else {
                setValue(str);
            }
        }
        return <Textarea {...args} value={value} onChange={onValueChange} />
    }
}

export const ResizeHorizontal: Story = {
    args: {
        maxLength: 100,
        placeholder: "在这里输入的",
        variant: 'destructive',
        description: '额外提示语，文字过多时输入框宽度折行',
        resize: 'horizontal'
    },
    render: (args) => {
        const [value, setValue] = useState<string | undefined>();
        const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const str = e.target.value;
            if (args.maxLength && str.length > args.maxLength) {
                setValue(str.substring(0, args.maxLength))
            } else {
                setValue(str);
            }
        }
        return <Textarea {...args} value={value} onChange={onValueChange} />
    }
}


export const ResizeVertical: Story = {
    args: {
        maxLength: 100,
        placeholder: "在这里输入的",
        variant: 'destructive',
        description: '额外提示语，文字过多时输入框宽度折行',
        resize: 'vertical'
    },
    render: (args) => {
        const [value, setValue] = useState<string | undefined>();
        const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const str = e.target.value;
            if (args.maxLength && str.length > args.maxLength) {
                setValue(str.substring(0, args.maxLength))
            } else {
                setValue(str);
            }
        }
        return <Textarea {...args} value={value} onChange={onValueChange} />
    }
}

export const ResizeNone: Story = {
    args: {
        maxLength: 100,
        placeholder: "在这里输入的",
        variant: 'destructive',
        description: '额外提示语，文字过多时输入框宽度折行',
        resize: 'none'
    },
    render: (args) => {
        const [value, setValue] = useState<string | undefined>();
        const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const str = e.target.value;
            if (args.maxLength && str.length > args.maxLength) {
                setValue(str.substring(0, args.maxLength))
            } else {
                setValue(str);
            }
        }
        return <Textarea {...args} value={value} onChange={onValueChange} />
    }
}