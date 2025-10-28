import type {
    Meta,
    StoryObj,
} from '@storybook/react-vite'
import {
    Alert,
    AlertDescription,
    AlertHeader,
    AlertTitle,
} from "@/components/ui/alert"
import { useState } from 'react';
import React from 'react';
import { Button } from './button';

interface AlertVariantsProps extends React.ComponentProps<typeof Alert> {
    alertTitle: string | React.ReactNode;
    layout: 'default' | 'close';
    desc: string | React.ReactNode;
    time?: number
}

const meta: Meta<AlertVariantsProps> = {
    title: 'Components/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'success', 'destructive', 'abnormal'],
        },
        border: {
            control: { type: 'boolean' },
        }
    },
}

export default meta

type Story = StoryObj<AlertVariantsProps>
//主题色
export const Primary: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
    },
    render: (args) => {
        const [show, setShow] = useState<boolean>(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
//带过期时间的
//主题色
export const Primary带过期时间: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        time: 10000,
    },
    render: (args) => {
        const [show, setShow] = useState<boolean>(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
//成功
export const Success: Story = {
    args: {
        variant: 'success',
        alertTitle: '这是一条普通的消息提示',
    },
    render: (args) => {
        const [show, setShow] = useState<boolean>(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
//破坏性
export const Destructive: Story = {
    args: {
        variant: 'destructive',
        alertTitle: '高危操作/出错信息提示',
    },
    render: (args) => {
        const [show, setShow] = useState<boolean>(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
// 警告
export const Warning: Story = {
    args: {
        variant: 'abnormal',
        alertTitle: '这是一条警示的消息提示',
    },
    render: (args) => {
        const [show, setShow] = useState<boolean>(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
// 主题
export const PrimaryWithBorder: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        border: true,
    },
    render: (args) => {
        const [show, setShow] = useState<boolean>(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
//成功
export const SuccessWithBorder: Story = {
    args: {
        variant: 'success',
        alertTitle: '这是一条成功的消息提示',
        border: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
//破坏性
export const DestructiveWithBorder: Story = {
    args: {
        variant: 'destructive',
        alertTitle: '高危操作/出错信息提示',
        border: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
// 警告
export const WarningWithBorder: Story = {
    args: {
        variant: 'abnormal',
        alertTitle: '这是一条警示的消息提示',
        border: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        React.useEffect(() => {
            const timer = setTimeout(() => setShow(false), 10000)
            return () => clearTimeout(timer)
        }, [])
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
// 主题
export const PrimaryIcon: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        border: true,
        icon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border} icon={args.icon}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
// 成功
export const SuccessIcon: Story = {
    args: {
        variant: 'success',
        alertTitle: '这是一条成功的消息提示',
        border: true,
        icon: true
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border} icon={args.icon}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
// 警告
export const WarningIcon: Story = {
    args: {
        variant: 'abnormal',
        alertTitle: '这是一条警示的消息提示',
        border: true,
        icon: true
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border} icon={args.icon}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
// 破坏性——图标
export const DestructiveIcon: Story = {
    args: {
        variant: 'destructive',
        alertTitle: '高危操作/出错信息提示',
        border: true,
        icon: true
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} onClose={handleClose} time={args.time} border={args.border} icon={args.icon}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
const renderFuncArea = () => {
    const onClick = () => {
        alert('自己传入的子组件')
    }
    return (<Button variant={'link'} size={'md'} onClick={onClick}>
        相关操作
    </Button>)
}
// 主题
export const PrimaryIconFunc: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        border: true,
        icon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert
                show={show}
                variant={args.variant}
                onClose={handleClose}
                time={args.time}
                border={args.border}
                icon={args.icon}
                closeFuncArea={renderFuncArea()}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}

// 主题
export const PrimaryIconFunc1: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        border: true,
        icon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }

        return (
            <Alert
                show={show}
                variant={args.variant}
                onClose={handleClose}
                time={args.time}
                border={args.border}
                icon={args.icon}
                titleFuncArea={renderFuncArea()}
                closeFuncArea={renderFuncArea()}>
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
            </Alert >
        );
    }
}
// 主题
export const PrimaryFuncDescription: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        description: '这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息',
        border: true,
        icon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert
                show={show}
                variant={args.variant}
                onClose={handleClose}
                time={args.time}
                border={args.border}
                icon={args.icon}
                titleFuncArea={renderFuncArea()}
                closeFuncArea={renderFuncArea()}
            >
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
                <AlertDescription>
                    {args.description}
                </AlertDescription>
            </Alert >
        );
    }
}

// 主题
export const PrimaryFuncDescriptionFoldable: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        description: '这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息',
        border: true,
        icon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert
                show={show}
                variant={args.variant}
                onClose={handleClose}
                time={args.time}
                border={args.border}
                icon={args.icon}
                titleFuncArea={renderFuncArea()}
                closeFuncArea={renderFuncArea()}
            >
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                </AlertHeader>
                <AlertDescription foldable={true}>
                    {args.description}
                </AlertDescription>
            </Alert >
        );
    }
}
