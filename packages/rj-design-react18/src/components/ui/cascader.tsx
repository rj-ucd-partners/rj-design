import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "./button";
import { CloseIcon } from "../icon/closeIcon";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { CheckedState } from "@radix-ui/react-checkbox";
import React, { useEffect } from "react";
import { TriangleDownIcon } from "../icon/TriangleDownIcon";
import { TriangleUpIcon } from "../icon/TriangleUpIcon";
import { Checkbox } from "./checkbox";

interface SelectItem {
    id: number | string,
    title: string,
    disabled?: boolean,
    children?: SelectItem[],
}

interface CascaderItem {
    id: number | string,
    index: number,
    title: string,
    parent?: CascaderItem,
    checked?: CheckedState,
    disabled?: boolean,
    children?: CascaderItem[],
}

const cascaderVariants = cva(
    "",
    {
        variants: {
            variant: {
                primary: '',
            },
            size: {
                sm: '',
                md: '',
                lg: '',
            }
        },
        defaultVariants: {
            variant: "primary",
        },
    }
)

function Cascader({
    disableCheckbox = false,
    className,
    ...props
}: React.ComponentProps<'div'>
    & VariantProps<typeof cascaderVariants>
    & {
        icon?: React.ReactNode,
        items: SelectItem[],
        disableCheckbox?: boolean,
    }) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState<CascaderItem[]>([]);
    useEffect(() => {
        const currentItems: CascaderItem[] = [];
        const initData = (items: SelectItem[], currentItems: CascaderItem[], parent?: CascaderItem) => {
            items.forEach((item: SelectItem, index) => {
                const currentItem: CascaderItem = {
                    id: item.id,
                    index: index,
                    title: item.title,
                    parent: parent,
                    checked: false,
                    disabled: item.disabled,
                }
                if (parent) {
                    if (!parent?.children) parent.children = [];
                    parent.children.push(currentItem);
                }

                if (item.children && item.children.length > 0) {
                    initData(item.children, currentItems, currentItem);
                }
                if (!parent) currentItems.push(currentItem);
            })
        }
        initData(props.items, currentItems);
        setData(currentItems);
    }, [props.items])
    const [checkeds, setCheckeds] = React.useState<CascaderItem[]>([]);
    const updateCheckeds = (item: CascaderItem) => {
        if (disableCheckbox) return;
        item.checked = true;
        setCheckeds([item]);
    }
    const updateDisableCheckboxCheckeds = (item: CascaderItem, checkedState: CheckedState) => {
        if (!disableCheckbox) return;
        const updateICheckedState = (checkedState: CheckedState, item: CascaderItem) => {
            item.checked = checkedState;
            if (item.children) {
                item.children.forEach((child) => {
                    updateICheckedState(checkedState, child);
                })
            }
        }
        updateICheckedState(checkedState, item);
        const updatePCheckedState = (item: CascaderItem) => {
            if (item.children && item.children.length > 0) {
                let mid: number = 0;
                let t: number = 0;
                let f: number = 0;
                item.children.forEach((child) => {
                    if (child.checked === 'indeterminate') mid++;
                    if (child.checked === true) t++;
                    if (child.checked === false) f++;
                })
                if (mid > 0) {
                    item.checked = 'indeterminate';
                } else if (mid === 0) {
                    if (t === item.children.length) {
                        item.checked = true;
                    }
                    if (f === item.children.length) {
                        item.checked = false;
                    }
                    if (f > 0 && t > 0) {
                        item.checked = 'indeterminate';
                    }
                }
            }
            if (item.parent) {
                updatePCheckedState(item.parent);
            }
        }
        updatePCheckedState(item);
        const getRoot = (item: CascaderItem): CascaderItem => {
            if (!item.parent) {
                return item
            }
            return getRoot(item.parent);
        }
        const root = getRoot(item);
        const current = data.slice();
        current[root!.index] = root!;
        setData(current);
        const currentCheckeds: CascaderItem[] = [];
        const getCheckeds = (items: CascaderItem[], currentCheckeds: CascaderItem[]) => {
            items.forEach((item) => {
                if (item.checked === true) {
                    currentCheckeds.push(item);
                }
                if (item.checked === 'indeterminate' && item.children) {
                    getCheckeds(item.children, currentCheckeds);
                }
            })
        }
        getCheckeds(current, currentCheckeds);
        setCheckeds(currentCheckeds);
    }
    const clearCheckeds = () => {
        const current = data.slice();
        current.forEach((item) => {
            dfsClear(item);
        })
        setData(current);
        setCheckeds([]);
    }

    const dfsClear = (item: CascaderItem) => {
        item.checked = false;
        if (item.children) {
            item.children.forEach((child) => {
                dfsClear(child);
            })
        }
    }

    return (
        <div className={cn(
            'flex flex-col items-start justify-center',
            cascaderVariants({ variant: props.variant, size: props.size }),
            className)} >
            <CascaderTrigger
                icon={props.icon}
                open={open}
                disableCheckbox={disableCheckbox}
                items={checkeds}
                onClick={() => { setOpen(!open) }}
                variant={props.variant}
                size={props.size}
                updateDisableCheckboxCheckeds={updateDisableCheckboxCheckeds}
                clearCheckeds={clearCheckeds}
            />
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60" align='start' variant={'default'} itemVariant={'default'} >
                    {
                        data.map((item, index) => {
                            return (
                                <CascaderSelectedItem item={item} key={index}
                                    updateCheckeds={updateCheckeds}
                                    disableCheckbox={disableCheckbox}
                                    updateDisableCheckboxCheckeds={updateDisableCheckboxCheckeds}
                                />
                            )
                        })
                    }
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
                sm: 'w-60 rounded-md px-2 py-[2px] text-[13px] leading-[20px]',
                md: 'w-[280px] rounded-md px-2 py-[5px] text-[13px] leading-[20px]',
                lg: 'w-80 rounded-md px-2 py-3 text-[15px] leading-[22px]',
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
    updateDisableCheckboxCheckeds: (item: CascaderItem, checkedState: CheckedState) => void,
    clearCheckeds: () => void,
}) {
    const [labels, setLabels] = React.useState<string[]>([]);
    const getLabel = (items: CascaderItem[]): string[] => {
        if (items.length === 0) return [];
        const item = items[0];
        const titles: string[] = [];
        const getTitle = (item: CascaderItem, titles: string[]) => {
            titles.push(item.title);
            if (item.parent) getTitle(item.parent, titles);
        }
        getTitle(item, titles);
        return titles;
    }
    React.useEffect(() => {
        const dates = getLabel(props.items);
        setLabels(dates.reverse());
    }, [props.items, props.disableCheckbox])
    return (
        <div className={cn(
            'inline-flex flex-row items-center justify-between',
            'font-normal',
            props.items.length > 0 && 'hover:[&_[data-slot=dropdown-menu-trigger-close]]:block hover:[&_[data-slot=dropdown-menu-trigger-turn]]:hidden',
            cascaderTriggerVariants({ variant: props.variant, size: props.size }),
            className)}
            {...props}>
            <div className={cn(
                "inline-flex items-center justify-center gap-2",
                'overflow-x-hidden')}>
                {
                    icon &&
                    <div className={cn(
                        "inline-flex items-center justify-center",
                        props.size === 'sm' && 'size-[14px]',
                        props.size === 'md' && 'size-4',
                        props.size === 'lg' && 'size-[18xp]',
                    )}>
                        {icon}
                    </div>
                }
                {
                    <div>
                        {
                            props.items.length === 0 ? <span className="text-secondary-information">请选择</span>
                                :
                                props.disableCheckbox ?
                                    <div className="flex gap-[2px]">
                                        {
                                            props.items.map((item, index) => {
                                                return (
                                                    <SelectedTag variant={'primary'} size={props.size} key={index} desc={item.title} closeCallback={() => {
                                                        props.updateDisableCheckboxCheckeds(item, false);
                                                    }} />
                                                );
                                            })
                                        }
                                    </div>
                                    :
                                    <div>
                                        {
                                            labels.map((label, index) => {
                                                return (
                                                    <span key={index} className="text-text-deep">{label}
                                                        {
                                                            index < labels.length - 1 && <span className="text-text-deep">/</span>
                                                        }
                                                    </span>
                                                );
                                            })
                                        }
                                    </div>
                        }
                    </div>
                }
            </div>
            <div className=' flex items-center justify-center'>
                {
                    props.items.length > 0 &&
                    <Button variant={'transparent'} size={'link'} className="hidden z-50" data-slot="dropdown-menu-trigger-close" onClick={(e) => {
                        e.stopPropagation();
                        props.clearCheckeds();
                    }}>
                        <CloseIcon className="size-4" />
                    </Button>
                }
                <div data-slot="dropdown-menu-trigger-turn">
                    {
                        props.open ?
                            <TriangleUpIcon />
                            :
                            <TriangleDownIcon />
                    }
                </div>

            </div>
        </div>
    )
}
function CascaderSelectedItem({
    ...props
}: React.ComponentProps<typeof DropdownMenuItem> & {
    item: CascaderItem,
    disableCheckbox: boolean,
    updateCheckeds: (item: CascaderItem) => void,
    updateDisableCheckboxCheckeds: (item: CascaderItem, checkedState: CheckedState) => void,
}) {
    return (
        (props.item.children && props.item.children.length > 0) ?
            <DropdownMenuSub>
                <DropdownMenuSubTrigger hasSeparator={'default'} >
                    {
                        props.disableCheckbox ?
                            <div className="inline-flex flex-row items-center justify-start gap-2">
                                <Checkbox variant={'default'} checked={props.item.checked} onCheckedChange={(e) => {
                                    props.updateDisableCheckboxCheckeds(props.item, e);
                                }}></Checkbox>
                                {props.item.title}
                            </div> :
                            props.item.title
                    }
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                        {
                            props.item.children.map((item, index) => {
                                return (
                                    <CascaderSelectedItem
                                        item={item}
                                        key={index}
                                        updateCheckeds={props.updateCheckeds}
                                        disableCheckbox={props.disableCheckbox}
                                        updateDisableCheckboxCheckeds={props.updateDisableCheckboxCheckeds} />
                                )
                            })
                        }
                    </DropdownMenuSubContent>
                </DropdownMenuPortal>
            </DropdownMenuSub>
            :
            <DropdownMenuItem {...props} onSelect={(event) => {
                if (!props.disableCheckbox) props.updateCheckeds(props.item);
                if (props.disableCheckbox) event.preventDefault();
            }}>
                {
                    props.disableCheckbox &&
                    <Checkbox variant={'default'} checked={props.item.checked} onCheckedChange={(e) => {
                        props.updateDisableCheckboxCheckeds(props.item, e);
                    }} />
                }
                {props.item.title}
            </DropdownMenuItem>
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
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        props.closeCallback?.();
    };
    return (
        <div className={cn(
            'inline-flex flex-row items-center justify-start',
            'font-normal not-italic',
            selectedTagVariants({ variant: props.variant, size: props.size }),
            className
        )}>
            <span className="max-w-20 whitespace-nowrap overflow-hidden text-ellipsis">{props.desc}</span>
            <Button variant={'transparent'} size={'link'} className={cn(
                "text-secondary-information",
                'hover:text-primary'
            )} onClick={handleClose}>
                <CloseIcon className={cn(
                    props.size === 'sm' && 'size-3',
                    props.size === 'md' && 'size-4',
                    props.size === 'lg' && 'size-5',
                )} />
            </Button>
        </div>
    )
}

export { Cascader, SelectedTag, CascaderSelectedItem };
export type { CascaderItem, SelectItem };
