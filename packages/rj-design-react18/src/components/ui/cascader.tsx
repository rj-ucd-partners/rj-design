import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "./button";
import { CloseIcon } from "../icon/closeIcon";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { CheckedState } from "@radix-ui/react-checkbox";
import React, { useEffect } from "react";

interface SelectItem {
    id?: number | string,
    title: string,
    disabled?: boolean,
    children?: SelectItem[],
}

interface CascaderItem {
    id?: number,
    key: string,
    title: string,
    parent?: CascaderItem,
    checked?: CheckedState,
    disabled?: boolean,
    children?: CascaderItem[],
}

function Cascader({
    disableCheckbox = false,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    icon?: React.ReactNode,
    items: [],
    disableCheckbox?: boolean,
}) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState<CascaderItem[]>([]);
    useEffect(() => {
        if (props.items && props.items.length > 0) {

        }
    }, [props.items])
    const [checkedItems, setCheckedItems] = React.useState<CascaderItem[]>([]);
    React.useEffect(() => {
        refreshSelectedState();
    }, [data])
    const refreshSelectedState = () => {
        if (disableCheckbox) {
            // eslint-disable-next-line prefer-const
            let currentItems: CascaderItem[] = [];
            breadth(data, currentItems);
            setCheckedItems(currentItems);
        } else {
            const checkedItem = deep(data);
            if (checkedItem) setCheckedItems([checkedItem]);
            else setCheckedItems([]);
        }
    }
    const breadth = (items: CascaderItem[], checkedItems: CascaderItem[]) => {
        checkedItems = checkedItems ?? [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.checked === true) {
                checkedItems.push(item);
            }
            if (item.children && item.children.length > 0) {
                breadth(item.children, checkedItems);
            }
        }
        return checkedItems;
    }
    const deep = (items: CascaderItem[]): CascaderItem | undefined => {
        items.forEach(item => {
            if ((item.checked === true || item.checked == 'indeterminate') && item.children && item.children.length > 0) {
                deep(item.children);
            }
            if (item.checked === true && (!item.children || item.children.length == 0)) {
                return item;
            }
        });
        return undefined;
    }
    return (
        //需要一个容器
        <div className={cn(
            '',
            className
        )} >
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <CascaderTrigger icon={props.icon} open={open} disableCheckbox={disableCheckbox} items={checkedItems} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align='start' variant={'default'} itemVariant={'default'} >
                    <DropdownMenuGroup>
                        <DropdownMenuItem hasSeparator={'default'} status={"success"}>
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem hasSeparator={'default'} status="default">
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem hasSeparator={'default'} status='danger'>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem hasSeparator={'default'} status='abnormal'>
                            Keyboard shortcuts
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuSub key="suv1">
                            <DropdownMenuSubTrigger hasSeparator={'default'} status="success">Invite users</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem hasSeparator={'default'} status="default">Email</DropdownMenuItem>
                                    <DropdownMenuItem hasSeparator={'default'} status="success">VX</DropdownMenuItem>
                                    <DropdownMenuItem hasSeparator={'default'} status="danger">Message</DropdownMenuItem>
                                    <DropdownMenuItem hasSeparator={'default'} status="abnormal">QQ</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuSub>
                                        <DropdownMenuLabel>三级选项1</DropdownMenuLabel>
                                        <DropdownMenuSubTrigger>More  ...</DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>Email</DropdownMenuItem>
                                                <DropdownMenuItem>Message</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>More...</DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
const cascaderTriggerVariants = cva(
    "",
    {
        variants: {
            variant: {
                primary: 'bg-third-background border-primary hover:border',
            },
            size: {
                sm: 'w-60 rounded-md ',
                md: '',
                lg: '',
            }
        },
        defaultVariants: {
            variant: "primary",
        },
    }
)
function CascaderTrigger({
    className,
    icon,
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cascaderTriggerVariants> & {
    open: boolean,
    items: CascaderItem[],
    icon?: React.ReactNode,
    disableCheckbox: boolean,
}) {

    return (
        <div className={cn(
            'inline-flex flex-row items-center justify-start',
            'font-normal',
            cascaderTriggerVariants({ variant: props.variant, size: props.size }),
            className)}>
            {
                <div className={cn(
                    "inline-flex items-center justify-center",
                    props.size === 'sm' && 'size-5'
                )}>
                    {icon}
                </div>
            }
            {
                <div>
                    {
                        props.disableCheckbox ?
                            <div>
                            </div>
                            :
                            <div>

                            </div>
                    }
                </div>
            }
            {
                <div className="">

                </div>
            }
        </div>
    )
}
const selectedTagVariants = cva(
    "",
    {
        variants: {
            variant: {
                primary: 'bg-fill-emphasize border border-border',
            },
            size: {
                sm: 'text-[12px] leading-[20px] gap-1 px-1 py-[1px] rounded-sm',
                md: 'text-[12px] leading-[20px] gap-2 px-2 py-[1px] rounded-sm',
                lg: 'text-[15px] leading-[22px] gap-2 px-2 py-[1px] rounded-sm',
            }
        },
        defaultVariants: {
            variant: "primary",
        },
    }
)
function SelectedTag({
    className,
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof selectedTagVariants> & {
    desc: string,
    closeCallback?: () => void,
}) {
    return (
        <div className={cn(
            'inline-flex flex-row items-center justify-start',
            'font-normal not-italic',
            selectedTagVariants({ variant: props.variant, size: props.size }),
            className
        )}>
            <span className="max-w-20 whitespace-nowrap overflow-hidden text-ellipsis">{props.desc}</span>
            <Button variant={'transparent'} size={'link'} className="text-secondary-information" onClick={props.closeCallback}>
                <CloseIcon className={cn(
                    props.size === 'sm' && 'size-3',
                    props.size === 'md' && 'size-4',
                    props.size === 'lg' && 'size-5',
                )} />
            </Button>
        </div>
    )
}

export { Cascader, SelectedTag };
export type { CascaderItem, SelectItem };
