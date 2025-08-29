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
    disabled = false,
    className,
    ...props
}: React.ComponentProps<'div'>
    & VariantProps<typeof cascaderVariants>
    & {
        icon?: React.ReactNode,
        items: SelectItem[],
        disableCheckbox?: boolean,
        disabled?: boolean,
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
        const dfsClear = (item: CascaderItem) => {
            item.checked = false;
            if (item.children) {
                item.children.forEach((child) => {
                    dfsClear(child);
                })
            }
        }
        const current = data.slice();
        current.forEach((item) => {
            dfsClear(item);
        })
        setData(current);
        setCheckeds([]);
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
                disabled={disabled} />
            <DropdownMenu open={(!disabled && open)} onOpenChange={setOpen} >
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
                primary: 'bg-third-background border-primary hover:border hover:bg-fill-light-hover-bg',
            },
            size: {
                sm: 'w-60 rounded-md px-1 py-[2px] text-[13px] leading-[20px]',
                md: 'w-[280px] rounded-md px-2 py-[5px] text-[13px] leading-[20px]',
                lg: 'w-80 rounded-md p-1 text-[15px] leading-[22px]',
            },
            disabled: {
                true: 'bg-third-background border-none',
                false: '',
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
    disabled = false,
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cascaderTriggerVariants> & {
    open: boolean,
    items: CascaderItem[],
    icon?: React.ReactNode,
    disableCheckbox: boolean,
    updateDisableCheckboxCheckeds: (item: CascaderItem, checkedState: CheckedState) => void,
    clearCheckeds: () => void,
    disabled?: boolean,
}) {
    const [labels, setLabels] = React.useState<string[]>([]);
    const [visibleCount, setVisibleCount] = React.useState<number>(0);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const tagsContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
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
        const dates = getLabel(props.items);
        setLabels(dates.reverse());
    }, [props.items, props.disableCheckbox]);

    // 计算可见标签数量
    React.useEffect(() => {
        if (!props.disableCheckbox || props.items.length === 0) {
            setVisibleCount(props.items.length);
            return;
        }

        const calculateVisibleTags = () => {
            const container = containerRef.current;
            const tagsContainer = tagsContainerRef.current;

            if (!container || !tagsContainer) return;

            // 获取容器总宽度
            const containerWidth = container.offsetWidth;

            // 计算其他元素占用的宽度
            const iconWidth = icon ? (
                props.size === 'sm' ? 14 :
                    props.size === 'md' ? 16 : 20
            ) + 8 : 0; // 8px 是 gap

            const buttonWidth = 24; // 右侧按钮区域预估宽度

            // 可用于标签的宽度
            const availableWidth = containerWidth - iconWidth - buttonWidth; // 16px 额外边距

            if (availableWidth <= 0) {
                setVisibleCount(0);
                return;
            }

            const gap = 2; // gap-[2px]
            let totalWidth = 0;
            let count = 0;

            // 遍历所有标签计算宽度
            for (let i = 0; i < props.items.length; i++) {
                // 估算当前标签宽度 (文字长度 * 8 + padding + 关闭按钮)
                const textWidth = props.items[i].title.length * 8;
                const tagPadding = props.size === 'sm' ? 12 : props.size === 'md' ? 16 : 20;
                const closeButtonWidth = 16;
                const currentTagWidth = textWidth + tagPadding + closeButtonWidth;

                // 计算包含当前标签的总宽度
                const widthWithCurrentTag = totalWidth + currentTagWidth + (i > 0 ? gap : 0);

                // 如果不是最后一个标签，检查是否需要为 +n 标签预留空间
                if (i < props.items.length - 1) {
                    const remainingCount = props.items.length - i - 1;
                    const plusTagWidth = `+${remainingCount}`.length * 8 + tagPadding;

                    // 检查当前标签 + +n标签是否超出
                    if (widthWithCurrentTag + gap + plusTagWidth > availableWidth) {
                        break;
                    }
                }

                // 检查当前标签是否超出
                if (widthWithCurrentTag > availableWidth) {
                    break;
                }

                totalWidth = widthWithCurrentTag;
                count = i + 1;
            }

            setVisibleCount(Math.max(0, count));
        };

        // 延迟执行确保DOM渲染完成
        const timer = setTimeout(calculateVisibleTags, 0);

        // 监听窗口大小变化
        const handleResize = () => {
            calculateVisibleTags();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, [props.items, props.size, props.disableCheckbox, icon]);

    const genTitles = (): string => {
        let titles: string = '';
        labels.forEach((label, index) => {
            titles += label;
            if (index < labels.length - 1) {
                titles += ' / ';
            }
        });
        return titles;
    };

    const renderTags = () => {
        let actualVisibleCount = Math.min(visibleCount, props.items.length);
        actualVisibleCount = actualVisibleCount > 3 ? (props.size === 'lg' ? actualVisibleCount - 1 : actualVisibleCount) : actualVisibleCount;
        const visibleItems = props.items.slice(0, actualVisibleCount);
        const hiddenCount = props.items.length - actualVisibleCount;
        return (
            <div ref={tagsContainerRef} className="flex gap-[2px] flex-1 min-w-0 overflow-hidden">
                {visibleItems.map((item, index) => (
                    <SelectedTag
                        variant={disabled ? 'disabled' : 'primary'}
                        size={props.size}
                        key={`visible-${index}`}
                        desc={item.title}
                        disabled={disabled}
                        closeCallback={() => {
                            props.updateDisableCheckboxCheckeds(item, false);
                        }}
                    />
                ))}
                {hiddenCount > 0 && (
                    <div className={cn(
                        "inline-flex items-center px-2 py-1 bg-fill-emphasize rounded-sm text-xs whitespace-nowrap",
                        props.size === 'sm' && 'h-5',
                        props.size === 'md' && 'h-5.5',
                        props.size === 'lg' && 'h-8',
                    )}>
                        +{hiddenCount}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={cn(
            'inline-flex flex-row items-center justify-between',
            'font-normal',
            (!disabled && props.items.length > 0) && 'hover:[&_[data-slot=dropdown-menu-trigger-close]]:block hover:[&_[data-slot=dropdown-menu-trigger-turn]]:hidden',
            cascaderTriggerVariants({ variant: props.variant, size: props.size, disabled }),
            className)}
            {...props}>
            <div ref={containerRef} className={cn(
                "inline-flex items-center gap-2 flex-1 min-w-0",
                props.size === 'sm' && 'h-min-5',
                props.size === 'md' && 'h-min-5.5',
                props.size === 'lg' && 'h-min-6')}>
                {icon && (
                    <div className={cn(
                        "inline-flex items-center justify-center flex-shrink-0",
                        props.size === 'sm' && 'size-[14px]',
                        props.size === 'md' && 'size-4',
                        props.size === 'lg' && 'size-[18px]',
                    )}>
                        {icon}
                    </div>
                )}
                {props.items.length === 0 ? (
                    <span className="text-secondary-information">请选择</span>
                ) : props.disableCheckbox ? (
                    renderTags()
                ) : (
                    <div className={cn(
                        "w-full truncate",
                        disabled && "text-disabled"
                    )}>
                        {genTitles()}
                    </div>
                )}
            </div>
            <div className='flex items-center justify-center flex-shrink-0'>
                {props.items.length > 0 && (
                    <Button variant={'transparent'} size={'link'} className="hidden z-50" data-slot="dropdown-menu-trigger-close"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.clearCheckeds();
                        }}>
                        <CloseIcon className="size-4" />
                    </Button>
                )}
                <div data-slot="dropdown-menu-trigger-turn" className="size-4 flex items-center justify-center">
                    {disabled ? <TriangleDownIcon /> : props.open ? <TriangleUpIcon /> : <TriangleDownIcon />}
                </div>
            </div>
        </div>
    );
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
                                        updateDisableCheckboxCheckeds={props.updateDisableCheckboxCheckeds} />)
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
                disabled: 'bg-fill border border-border-disabled text-disabled',
            },
            size: {
                sm: 'text-[12px] leading-[20px] gap-1 px-1 py-[1px] rounded-sm h-5',
                md: 'text-[12px] leading-[20px] gap-2 px-2 py-[1px] rounded-sm h-5.5',
                lg: 'text-[15px] leading-[22px] gap-2 px-2 py-[1px] rounded-sm h-8',
            }
        },
        defaultVariants: {
            variant: "primary",
        },
    }
)
function SelectedTag({
    className,
    disabled = false,
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof selectedTagVariants> & {
    desc: string,
    closeCallback?: () => void,
    disabled?: boolean,
}) {
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (disabled) return;
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
                disabled && 'text-disabled'
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
