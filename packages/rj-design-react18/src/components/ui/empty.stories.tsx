import type { Meta, StoryObj } from "@storybook/react-vite"
import { Empty } from "./Empty"
import { Alert, AlertTitle } from "./Alert"
import { useState } from "react"

const meta: Meta<typeof Empty> = {
    title: 'Components/Empty',
    component: Empty,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        }
    },
}

export default meta

type Story = StoryObj<typeof Empty>

//默认
export const Default: Story = {
    args: {
        size: 'md',
    },
    render: (args) => {
        return (
            <div className="w-full h-100">
                <Empty {...args} />
            </div>
        )
    }
}

//带操作的
export const Handler: Story = {
    args: {
        size: 'md',
        desc: '描述文描述文',
        handlerDesc: '操作文案',
    },
    render: (args) => {
        const [alertVisible, setAlertVisible] = useState(false);
        const [alertMessage, setAlertMessage] = useState('');

        const onOK = () => {
            setAlertMessage('不知道干嘛');
            setAlertVisible(true);
        }

        const onDO = () => {
            setAlertMessage('Just do it!');
            setAlertVisible(true);
        }

        return (
            <div className="w-full h-100">
                <Empty {...args} onOK={onOK} onDO={onDO} />
                {alertVisible && (
                    <Alert variant={'primary'} show={true} >
                        <AlertTitle>{alertMessage}</AlertTitle>
                    </Alert>
                )}
            </div>
        )
    }
}