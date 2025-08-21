import type {
    Meta,
    StoryObj,
} from '@storybook/react-vite'
import {
    Alert,
    AlertClose,
    AlertDescription,
    AlertHeader,
    AlertTitle,
    AlertToolbar,
} from "@/components/ui/alert"
import { Button } from './button'
import { useState } from 'react';
import React from 'react';
import { InfoCirecledIcon } from '../icon/infoCirecledIcon';
import { SuccessIcon } from '../icon/successIcon';
import { AbnormalIcon } from '../icon/abnormalIcon';
import { DestructiveIcon } from '../icon/dangerIcon';

interface AlertVariantsProps extends React.ComponentProps<typeof Alert> {
    alertTitle: string | React.ReactNode;
    layout: 'default' | 'close';
    desc: string | React.ReactNode;
    hasIcon: boolean;
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
    },
}

export default meta

type Story = StoryObj<AlertVariantsProps>

// 主题
export const Primary: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
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
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
                </AlertHeader>
            </Alert >
        );
    }
}
//成功
export const Success: Story = {
    args: {
        variant: 'success',
        alertTitle: '这是一条成功的消息提示',
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
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
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
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        React.useEffect(() => {
            const timer = setTimeout(() => setShow(false), 10000)
            return () => clearTimeout(timer)
        }, [])
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
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
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        React.useEffect(() => {
            const timer = setTimeout(() => setShow(false), 10000)
            return () => clearTimeout(timer)
        }, [])
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>{args.alertTitle}</AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
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
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <InfoCirecledIcon />
                        }
                        {args.alertTitle}
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
                </AlertHeader>
            </Alert >
        );
    }
}

// 成功
export const SuccessIcon1: Story = {
    args: {
        variant: 'success',
        alertTitle: '这是一条成功的消息提示',
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <SuccessIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
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
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <AbnormalIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
                </AlertHeader>
            </Alert >
        );
    }
}


// 破坏性——图标
export const DestructiveIcon1: Story = {
    args: {
        variant: 'destructive',
        alertTitle: '高危操作/出错信息提示',
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <DestructiveIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
                </AlertHeader>
            </Alert >
        );
    }
}


// 主题
export const PrimaryIconFunc: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        const handleClick = () => {
            console.log('点击了相关操作');
            alert('点击了相关操作');
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <InfoCirecledIcon />
                        }
                        {args.alertTitle}
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                        <Button variant={'link'} size={'link'} onClick={handleClick}>
                            相关操作
                        </Button>
                    </AlertClose>
                </AlertHeader>
            </Alert >
        );
    }
}

// 成功
export const SuccessIconFunc: Story = {
    args: {
        variant: 'success',
        alertTitle: '这是一条成功的消息提示',
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        const handleClick = () => {
            console.log('点击了相关操作');
            alert('点击了相关操作');
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <SuccessIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                        <Button variant={'link'} size={'link'} onClick={handleClick}>
                            相关操作
                        </Button>
                    </AlertClose>
                </AlertHeader>
            </Alert >
        );
    }
}


// 警告
export const WarningIconFunc: Story = {
    args: {
        variant: 'abnormal',
        alertTitle: '这是一条警示的消息提示',
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        const handleClick = () => {
            console.log('点击了相关操作');
            alert('点击了相关操作');
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <AbnormalIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                        <Button variant={'link'} size={'link'} onClick={handleClick}>
                            相关操作
                        </Button>
                    </AlertClose>
                </AlertHeader>
            </Alert >
        );
    }
}

// 破坏性——图标
export const DestructiveIconFunc: Story = {
    args: {
        variant: 'destructive',
        alertTitle: '高危操作/出错信息提示',
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        const handleClick = () => {
            console.log('点击了相关操作');
            alert('点击了相关操作');
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <DestructiveIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                        <Button variant={'link'} size={'link'} onClick={handleClick}>
                            相关操作
                        </Button>
                    </AlertClose>
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
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        const handleClick = () => {
            console.log('点击了相关操作');
            alert('点击了相关操作');
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <InfoCirecledIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                        <Button variant={'link'} size={'link'} onClick={handleClick}>
                            相关操作
                        </Button>
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
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
        desc: '这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息',
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const [expand, setExpand] = useState(false);
        const handleClose = () => {
            setShow(false);
        }
        const handleClick = () => {
            console.log('点击了相关操作');
            alert('点击了相关操作');
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {args.alertTitle}
                        <Button variant={'link'} size={'link'} onClick={handleClick}>
                            相关操作
                        </Button>
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
                </AlertHeader>
                <AlertDescription expand={expand} >
                    {args.desc}
                </AlertDescription>
                <AlertToolbar>
                    {
                        expand ?
                            <Button variant={'link'} size={'link'} onClick={() => setExpand(false)}>
                                收起
                            </Button>
                            :
                            <Button variant={'link'} size={'link'} onClick={() => setExpand(true)}>
                                展开更多
                            </Button>
                    }
                </AlertToolbar>
            </Alert >
        );
    }
}

//带Iconde 
export const PrimaryIconFuncDescription: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        desc: '这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息',
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const [expand, setExpand] = useState(false);
        const handleClose = () => {
            setShow(false);
        }
        const handleClick = () => {
            console.log('点击了相关操作');
            alert('点击了相关操作');
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <InfoCirecledIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                        <Button variant={'link'} size={'link'} onClick={handleClick}>
                            相关操作
                        </Button>
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
                </AlertHeader>
                <AlertDescription expand={expand} layout={args.hasIcon ? 'hasIcon' : 'default'}>
                    {args.desc}
                </AlertDescription>
                <AlertToolbar layout={args.hasIcon ? 'hasIcon' : 'default'}>
                    {
                        expand ?
                            <Button variant={'link'} size={'link'} onClick={() => setExpand(false)}>
                                收起
                            </Button>
                            :
                            <Button variant={'link'} size={'link'} onClick={() => setExpand(true)}>
                                展开更多
                            </Button>
                    }
                </AlertToolbar>
            </Alert >
        );
    }
}


//带Iconde 
export const DestructiveIconFuncDescription: Story = {
    args: {
        variant: 'destructive',
        alertTitle: '这是一条普通的消息提示',
        desc: '这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息',
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const [expand, setExpand] = useState(false);
        const handleClose = () => {
            setShow(false);
        }
        const handleClick = () => {
            console.log('点击了相关操作');
            alert('点击了相关操作');
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <DestructiveIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                        <Button variant={'link'} size={'link'} onClick={handleClick}>
                            相关操作
                        </Button>
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
                </AlertHeader>
                <AlertDescription expand={expand} layout={args.hasIcon ? 'hasIcon' : 'default'}>
                    {args.desc}
                </AlertDescription>
                <AlertToolbar layout={args.hasIcon ? 'hasIcon' : 'default'}>
                    {
                        expand ?
                            <Button variant={'link'} size={'link'} onClick={() => setExpand(false)}>
                                收起
                            </Button>
                            :
                            <Button variant={'link'} size={'link'} onClick={() => setExpand(true)}>
                                展开更多
                            </Button>
                    }
                </AlertToolbar>
            </Alert >
        );
    }
}


export const PrimaryIconDescription: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        desc: '这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息',
        hasIcon: true,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const [expand, setExpand] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        const handleClick = () => {
            console.log('点击了相关操作');
            alert('点击了相关操作');
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <InfoCirecledIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                        <Button variant={'link'} size={'link'} onClick={handleClick}>
                            相关操作
                        </Button>
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
                </AlertHeader>
                <AlertDescription expand={expand} layout={args.hasIcon ? 'hasIcon' : 'default'}>
                    {args.desc}
                </AlertDescription>
            </Alert >
        );
    }
}


export const PrimaryIconDescription1: Story = {
    args: {
        variant: 'primary',
        alertTitle: '这是一条普通的消息提示',
        desc: '这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息',
        hasIcon: false,
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        const [expand, setExpand] = useState(true);
        const handleClose = () => {
            setShow(false);
        }
        const handleClick = () => {
            console.log('点击了相关操作');
            alert('点击了相关操作');
        }
        return (
            <Alert show={show} variant={args.variant} >
                <AlertHeader>
                    <AlertTitle>
                        {
                            args.hasIcon &&
                            <InfoCirecledIcon className='size-5.5' />
                        }
                        {args.alertTitle}
                        <Button variant={'link'} size={'link'} onClick={handleClick}>
                            相关操作
                        </Button>
                    </AlertTitle>
                    <AlertClose onClose={handleClose}>
                    </AlertClose>
                </AlertHeader>
                <AlertDescription expand={expand} layout={args.hasIcon ? 'hasIcon' : 'default'}>
                    {args.desc}
                </AlertDescription>
            </Alert >
        );
    }
}

