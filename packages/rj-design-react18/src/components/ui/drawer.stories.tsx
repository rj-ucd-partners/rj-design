import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerDetails,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import type { Meta, StoryObj } from "@storybook/react-vite"
import type { DialogProps } from "@radix-ui/react-dialog"

interface DrawerProps extends DialogProps {
    direction?: 'left' | 'right' | 'top' | 'bottom';
    drawerContentVariant?: 'default';
    drawerHeaderVariant?: 'default';
    drawerTitleVariant?: 'default';
    drawerDetailsVariant?: 'default';
    showClose?: boolean;
    drawerrDescriptionVariant?: 'primary';
}
const meta: Meta<DrawerProps> = {
    title: 'Components/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['left', 'right', 'top', 'bottom'],
        },
        drawerContentVariant: {
            control: { type: 'select' },
            options: ['default'],
        },
        drawerHeaderVariant: {
            control: { type: 'select' },
            options: ['default'],
        },
        drawerTitleVariant: {
            control: { type: 'select' },
            options: ['default'],
        },
        drawerDetailsVariant: {
            control: { type: 'select' },
            options: ['default'],
        },
        showClose: {
            control: { type: 'boolean' },
        },
        drawerrDescriptionVariant: {
            control: { type: 'select' },
            options: ['primary'],
        }
    },
}

export default meta

type Story = StoryObj<DrawerProps>

//默认
export const Default: Story = {
    args: {
        direction: 'bottom',
        drawerContentVariant: 'default',
        drawerHeaderVariant: 'default',
        drawerTitleVariant: 'default',
        drawerDetailsVariant: 'default',
        showClose: true,
    },
    render: (args) => {
        return (
            <Drawer direction={args.direction}>
                <DrawerTrigger asChild>
                    <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent variant={args.drawerContentVariant}>
                    <DrawerHeader>
                        <DrawerTitle variant={args.drawerTitleVariant} showClose={args.showClose}>
                            <div className="flex flex-row items-center justify-between">
                                Move Goal
                            </div>
                        </DrawerTitle>
                    </DrawerHeader>
                    <DrawerDetails variant={args.drawerDetailsVariant}>

                    </DrawerDetails>
                    {/* <DrawerFooter>
                        <Button variant="primary" size={"md"}>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline" size={"md"}>Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        );
    }
}

//Description
export const Description: Story = {
    args: {
        direction: 'bottom',
        drawerContentVariant: 'default',
        drawerHeaderVariant: 'default',
        drawerTitleVariant: 'default',
        drawerDetailsVariant: 'default',
        showClose: true,
        drawerrDescriptionVariant: 'primary',
    },
    render: (args) => {
        return (
            <Drawer direction={args.direction}>
                <DrawerTrigger asChild>
                    <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent variant={args.drawerContentVariant}>
                    <DrawerHeader>
                        <DrawerTitle variant={args.drawerTitleVariant} showClose={args.showClose}>
                            <div className="flex flex-row items-center justify-between">
                                Move Goal
                            </div>
                        </DrawerTitle>
                    </DrawerHeader>
                    <DrawerDescription variant={args.drawerrDescriptionVariant}>
                        这是一条普通的消息提示
                    </DrawerDescription>
                    <DrawerDetails variant={args.drawerDetailsVariant}>

                    </DrawerDetails>
                    {/* <DrawerFooter>
                        <Button variant="primary" size={"md"}>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline" size={"md"}>Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        );
    }
}


//有底部
export const Footer: Story = {
    args: {
        direction: 'bottom',
        drawerContentVariant: 'default',
        drawerHeaderVariant: 'default',
        drawerTitleVariant: 'default',
        drawerDetailsVariant: 'default',
        showClose: true,
    },
    render: (args) => {
        return (
            <Drawer direction={args.direction}>
                <DrawerTrigger asChild>
                    <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent variant={args.drawerContentVariant}>
                    <DrawerHeader>
                        <DrawerTitle variant={args.drawerTitleVariant} showClose={args.showClose}>
                            Move Goal
                        </DrawerTitle>
                    </DrawerHeader>

                    <DrawerDetails variant={args.drawerDetailsVariant}>

                    </DrawerDetails>
                    <DrawerFooter>
                        <Button variant="primary" size={"md"}>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline" size={"md"}>Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );
    }
}