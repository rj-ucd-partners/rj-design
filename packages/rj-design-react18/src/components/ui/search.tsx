import type { BaseNode } from "@/common/type";
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority";
import { useRef, useState } from "react";
import { Empty } from "./empty";
import { TriangleDownIcon } from "../icon/TriangleDownIcon";
import { Button } from "./button";
import { CloseIcon } from "../icon/closeIcon";
import { useClickAway } from 'react-use';
const searchSelectVariants = cva(
    "",
    {
        variants: {
            size: {
                sm: [
                    'py-0.5 px-2',
                    'text-[12px] leading-[20px]',
                ],
                md: [
                    'py-[5px] px-2',
                    'text-[12px] leading-[22px]'],
                lg: [
                    'py-2 px-3',
                    'text-[15px] leading-[22px]',
                ]
            }
        }
    }
);
function SearchSelect({
    placeholder = '请选择',
    disabled = false,
    size = 'md',
    datasource,
    value,
    onValueChange,
    frontIcon,
    postIcon,
    showClear,
    className,
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof searchSelectVariants> & {
    placeholder?: string,
    datasource?: BaseNode[],
    disabled?: boolean,
    value?: string,
    onValueChange?: (value: string) => void,
    frontIcon?: React.ReactNode,
    postIcon?: React.ReactNode,
    showClear?: boolean,
}) {
    const [data, setData] = useState<BaseNode[]>(datasource ?? []);
    const [open, setOpen] = useState<boolean>(false);
    const updateFilter = (str: string) => {
        setFilter(str);
        if (!datasource) { setData([]); return; }
        const strLow = str.toLocaleLowerCase();
        const currentData = datasource.filter(item => item.label.toLocaleLowerCase().includes(strLow));
        setData(currentData);
    }
    const [filter, setFilter] = useState<string | undefined>(undefined);
    const onChecked = (key: string) => {
        setFilter('')
        setOpen(false)
        if (onValueChange) onValueChange(key);
    }
    const contextRef = useRef<HTMLDivElement>(null);
    useClickAway(contextRef, () => setOpen(false));
    return (
        <div className={cn(
            'inline-flex flex-col gap-1',
            size === "sm" && [
                '[&_[data-slot=select-item]]:text-[12px] [&_[data-slot=select-item]]:leading-[20px] [&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[2px]',
            ],
            size === "md" && [
                '[&_[data-slot=select-item]]:text-[13px] [&_[data-slot=select-item]]:leading-[20px] [&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[3px]',
            ],
            size === "lg" && [
                '[&_[data-slot=select-item]]:text-[15px] [&_[data-slot=select-item]]:leading-[22px] [&_[data-slot=select-item]]:px-3 [&_[data-slot=select-item]]:py-[6px]',
            ],
        )}>
            <div className={cn(
                'rounded-md',
                'flex flex-row gap-1 items-center justfy-center',
                disabled ? 'bg-fill-dark-hover-active-disabled text-disabled' :
                    ['bg-third-background hover:bg-fill-light-hover-bg  hover:outline outline-primary',
                        open && 'outline',
                        'hover:[&_[data-slot=clear]]:block'
                    ],
                searchSelectVariants({ size }),
                className
            )} {...props}>
                {
                    frontIcon
                }
                <input
                    placeholder={(datasource?.find(x => x.key === value)?.label) ?? placeholder}
                    disabled={disabled}
                    value={filter}
                    onChange={(e) => {
                        updateFilter(e.target.value)
                    }}
                    type="text"
                    className={cn("w-full outline-none border-none",
                        value && 'placeholder-text-deep',
                        open && 'placeholder-secondary-information'
                    )}
                    onFocus={() => { setOpen(!disabled) }}
                />
                {
                    <div className="relative flex items-center justify-center">
                        {
                            showClear && value
                            &&
                            <div data-slot='clear' className="hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <Button variant={'transparent'} size={'link'} onClick={(e) => {
                                    e.stopPropagation();
                                    if (onValueChange) {
                                        updateFilter('')
                                        onValueChange('');
                                    }
                                }}>
                                    <CloseIcon className="size-4" />
                                </Button>
                            </div>
                        }
                        <Button variant={'transparent'} size={'link'} onClick={() => { setOpen(!open) }} >
                            {
                                postIcon ?
                                    postIcon :
                                    <TriangleDownIcon className={cn(
                                        "size-2 text-secondary-informatio transition-transform duration-200",
                                        open && "rotate-180"
                                    )} />
                            }
                        </Button>
                    </div>
                }
            </div>
            {
                (open && !disabled) &&
                <div
                    ref={contextRef}
                    className={cn(
                        'w-full',
                        'flex flex-col',
                        'bg-secondary-background',
                        [
                            size === "sm" && [
                                'p-1',
                            ],
                            size === "md" && [
                                'p-2',
                            ],
                            size === "lg" && [
                                'p-3',
                            ],
                        ]
                    )}>
                    {
                        data.length === 0 &&
                        <Empty size={'md'} />
                    }
                    {
                        data.map(item => {
                            return <SelectItem
                                key={item.key}
                                node={item}
                                checked={value === item.key}
                                onChecked={onChecked}
                            />
                        })
                    }
                </div>

            }
        </div>
    )
}

function SelectItem({
    node,
    checked,
    onChecked,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    node: BaseNode,
    checked: boolean,
    onChecked?: (key: string) => void
}) {
    return (<div
        data-slot='select-item'
        className={cn(
            'rounded-md',
            'cursor-default',
            'hover:bg-fill-light-hover-bg focus:text-accent-foreground',
            checked && 'text-primary bg-primary-light [&_svg]:text-primary',
            className
        )}
        onClick={() => {
            if (node.disabled) return;
            if (onChecked) onChecked(node.key);
        }}
        {...props}
    >
        {node.label}
    </div>)
}
export {
    SearchSelect
}

