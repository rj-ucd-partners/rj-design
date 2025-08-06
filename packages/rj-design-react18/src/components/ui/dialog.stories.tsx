import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogDetails,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import type { DialogProps } from "@radix-ui/react-dialog"
import type { Meta, StoryObj } from "@storybook/react-vite"

interface ExtentedDialogProps extends DialogProps {
    variant?: 'primary' | 'success'
    titleVariant?: 'default' | 'primary' | 'success' | 'abnormal' | 'danger'
}

const meta: Meta<ExtentedDialogProps> = {
    title: 'Components/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'success', 'abnormal'],
        },
        titleVariant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'abnormal', 'danger'],
        }
    },
}

export default meta

type Story = StoryObj<ExtentedDialogProps>

// Dialog-title+content+footer
export const Default: Story = {
    args: {},
    render: (args) => {
        return (
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="outline">开盖有惊喜</Button>
                    </DialogTrigger>
                    {/* <DialogOverlay className="bg-black/60 backdrop-blur-sm" /> */}
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>这是一个显眼的标题</DialogTitle>
                            {/* <DialogDescription>
                                Make changes to your profile here. Click save when you&apos;re
                                done.
                            </DialogDescription> */}
                        </DialogHeader>
                        <DialogDetails >
                            <div className="w-112 h-40 bg-primary-light flex items-center justify-center">这是一个无害的编辑区</div>
                        </DialogDetails>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="default">取消</Button>
                            </DialogClose>
                            <Button variant='primary' type="submit">确认</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        );
    }
}

// Dialog-title+description+content+footer
export const Description: Story = {
    args: {
        variant: 'primary',
        titleVariant: 'default',
    },
    render: (args) => {
        return (
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="outline">开盖有惊喜</Button>
                    </DialogTrigger>
                    {/* <DialogOverlay className="bg-black/60 backdrop-blur-sm" /> */}
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>标题</DialogTitle>
                            <DialogDescription variant={args.variant}>
                                这是一条普通的消息提示
                            </DialogDescription>
                        </DialogHeader>
                        <DialogDetails>
                            <div className="w-112 h-40 bg-primary-light flex items-center justify-center">这是一个无害的编辑区</div>
                        </DialogDetails>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="default">取消</Button>
                            </DialogClose>
                            <Button variant='primary' type="submit">确认</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        );
    }
}


// Feedback primary
export const Feedback: Story = {
    args: {
        variant: 'primary',
        titleVariant: 'default',
    },
    render: (args) => {
        return (
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="outline">开盖有惊喜</Button>
                    </DialogTrigger>
                    <DialogContent showCloseButton={false}>
                        <DialogHeader>
                            <DialogTitle variant={args.titleVariant}>标题</DialogTitle>
                        </DialogHeader>
                        <DialogDetails variant={args.titleVariant === 'default' ? 'default' : 'icon'}>
                            <div>
                                我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度
                            </div>
                        </DialogDetails>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="default">取消</Button>
                            </DialogClose>
                            <Button variant='primary' type="submit">确认</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        );
    }
}