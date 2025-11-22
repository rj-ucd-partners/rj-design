import type { BaseNode } from "@/common/type";
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority";
import { useState, useRef, useLayoutEffect, useMemo } from "react";
import { Empty } from "./empty";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import React from "react";
import { Check, X } from "lucide-react";
import { Checkbox } from "./checkbox";
import { Button } from "./button";
import { CloseIcon } from "../icon/closeIcon";

// 基础属性(不包含 mode、value、defaultValue、onValueChange)
interface BaseSelectProps {
    variant?: 'primary'
    size?: 'sm' | 'md' | 'lg',
    contentClassname?: string,
    canSearch?: boolean,
    clearable?: boolean,
    onClear?: () => void,
    placeholder?: string,
    datasource?: BaseNode[],
    frontIcon?: React.ReactNode,
    postIcon?: React.ReactNode,
    disabled?: boolean,
    className?: string,
    editable?: boolean,
    editCallback?: (value: string) => void
}

// 单选模式的类型
interface SingleSelectProps extends BaseSelectProps {
    mode?: 'single',
    value?: string,
    defaultValue?: string,
    onValueChange?: (value: string) => void,
}

// 多选模式的类型
interface MultipleSelectProps extends BaseSelectProps {
    mode: 'multiple',
    value?: string[],
    defaultValue?: string[],
    onValueChange?: (value: string[]) => void,
}

// 组合类型:根据 mode 自动推断
export type FunctionalitySelectProps = SingleSelectProps | MultipleSelectProps

interface SelectContextType {
    variant?: 'primary',
    size?: 'sm' | 'md' | 'lg',
    mode: 'single' | 'multiple',
    selectedValues: string[],
    onSelect: (key: string) => void,
}

const SelectContext = React.createContext<SelectContextType | undefined>(undefined)
function useSelectContext() {
    const context = React.useContext(SelectContext)
    if (context === undefined) {
        throw new Error('useSelectContext must be used within a Select')
    }
    return context
}

// Tag 组件
const Tag = ({ label, onRemove, className, size }: { label: string, onRemove?: () => void, className?: string, size?: 'sm' | 'md' | 'lg' }) => {
    return (
        <div className={cn(
            "inline-flex items-center gap-1",
            "bg-fill-emphasize text-text-deep",
            "border border-border rounded-sm",
            [
                size === 'sm' && 'px-1 py-[1px] text-[12px] leading-[20px]',
                size === 'md' && 'px-2 py-[1px] text-[13px] leading-[20px]',
                size === 'lg' && 'px-2 py-[1px] text-[15px] leading-[22px]',
            ],
            "max-w-[76px] truncate",
            className
        )}>
            <span className="truncate flex-1">{label}</span>
            {onRemove && (
                <Button
                    variant={'transparent'}
                    size={'link'}
                    className="text-secondary"
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove();
                    }}
                >
                    <CloseIcon


                    />
                </Button>
            )}
        </div>
    )
}

function Select({
    variant = 'primary',
    size = 'md',
    mode = 'single',
    canSearch = false,
    placeholder = '请选择',
    disabled = false,
    datasource = [],
    value: controlledValue,
    defaultValue,
    onValueChange,
    editable,
    editCallback,
    frontIcon,
    postIcon,
    clearable,
    onClear,
    className,
    contentClassname,
}: FunctionalitySelectProps) {
    // 受控/非受控处理
    const [internalValue, setInternalValue] = useState<string[]>(() => {
        if (controlledValue !== undefined) {
            return Array.isArray(controlledValue) ? controlledValue : controlledValue ? [controlledValue] : [];
        }
        if (defaultValue !== undefined) {
            return Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : [];
        }
        return [];
    });

    const isControlled = controlledValue !== undefined;
    const selectedValues = useMemo(() => {
        return isControlled
            ? (Array.isArray(controlledValue) ? controlledValue : controlledValue ? [controlledValue] : [])
            : internalValue;
    }, [isControlled, controlledValue, internalValue]);

    const [searchValue, setSearchValue] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const tagsContainerRef = useRef<HTMLDivElement>(null);
    const searchContainerRef = useRef<HTMLDivElement>(null); // 整个搜索区域(tags + input)
    const [visibleTagCount, setVisibleTagCount] = useState<number>(2); // 不带搜索框时的可见tag数
    const [visibleTagCountWithSearch, setVisibleTagCountWithSearch] = useState<number>(2); // 带搜索框时的可见tag数

    // 筛选数据
    const filteredData = canSearch && searchValue
        ? datasource.filter(item => item.label.toLowerCase().includes(searchValue.toLowerCase()))
        : datasource;

    // 获取选中的项 (必须在 useLayoutEffect 之前定义)
    const selectedItems = selectedValues
        .map(val => datasource.find(item => item.key === val))
        .filter(Boolean) as BaseNode[];

    // 计算显示的label（单选模式）
    const displayLabel = mode === 'single' && selectedItems.length > 0
        ? selectedItems[0].label
        : '';

    // 动态计算可显示的 tag 数量 (不带搜索框)
    useLayoutEffect(() => {
        if (!tagsContainerRef.current || mode !== 'multiple' || selectedItems.length === 0 || canSearch) {
            return;
        }

        const calculateVisibleTags = () => {
            const container = tagsContainerRef.current;
            if (!container) return;

            const containerWidth = container.offsetWidth;
            const gap = 4; // gap-1 = 4px
            const moreTagWidth = 60; // "+N..." tag 的预估宽度
            const reservedWidth = moreTagWidth + gap; // 为 "+N..." 预留空间

            let totalWidth = 0;
            let count = 0;

            // 遍历所有 tag 元素,计算可以显示多少个
            const tagElements = container.querySelectorAll('[data-tag-item]');

            for (let i = 0; i < tagElements.length; i++) {
                const tagWidth = (tagElements[i] as HTMLElement).offsetWidth + gap;

                // 如果不是最后一个,需要为 "+N..." 预留空间
                if (i < tagElements.length - 1) {
                    if (totalWidth + tagWidth + reservedWidth <= containerWidth) {
                        totalWidth += tagWidth;
                        count++;
                    } else {
                        break;
                    }
                } else {
                    // 最后一个不需要预留空间
                    if (totalWidth + tagWidth <= containerWidth) {
                        count++;
                    }
                }
            }

            // 至少显示1个,最多显示所有
            setVisibleTagCount(Math.max(1, Math.min(count, selectedItems.length)));
        };

        calculateVisibleTags();

        // 监听容器尺寸变化
        const resizeObserver = new ResizeObserver(() => {
            calculateVisibleTags();
        });

        resizeObserver.observe(tagsContainerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [mode, canSearch, selectedValues, datasource, selectedItems.length]);

    // 动态计算可显示的 tag 数量 (带搜索框)
    useLayoutEffect(() => {
        if (!searchContainerRef.current || mode !== 'multiple' || selectedItems.length === 0 || !canSearch) {
            return;
        }

        const calculateVisibleTags = () => {
            const container = searchContainerRef.current;
            if (!container) return;

            const totalWidth = container.offsetWidth; // 整个输入区域的宽度
            const gap = 4; // gap-1 = 4px
            const moreTagWidth = 60; // "+N..." tag 的预估宽度
            const minInputWidth = Math.max(totalWidth * 0.2, 80); // 输入框至少占20%宽度,最小80px
            const availableWidth = totalWidth - minInputWidth - gap; // 为 tags 留出的空间
            const reservedWidth = moreTagWidth + gap;

            let totalTagWidth = 0;
            let count = 0;

            // 获取隐藏的测量容器中的tag元素
            const tagElements = container.querySelectorAll('[data-tag-item-search]');

            for (let i = 0; i < tagElements.length; i++) {
                const tagWidth = (tagElements[i] as HTMLElement).offsetWidth + gap;

                if (i < tagElements.length - 1) {
                    // 不是最后一个,需要为 "+N..." 预留空间
                    if (totalTagWidth + tagWidth + reservedWidth <= availableWidth) {
                        totalTagWidth += tagWidth;
                        count++;
                    } else {
                        break;
                    }
                } else {
                    // 最后一个,不需要预留空间
                    if (totalTagWidth + tagWidth <= availableWidth) {
                        count++;
                    }
                }
            }

            // 至少显示1个,最多显示所有
            setVisibleTagCountWithSearch(Math.max(1, Math.min(count, selectedItems.length)));
        };

        calculateVisibleTags();

        const resizeObserver = new ResizeObserver(() => {
            calculateVisibleTags();
        });

        resizeObserver.observe(searchContainerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [mode, canSearch, selectedValues, datasource, selectedItems.length]);

    // 选择处理
    const handleSelect = (key: string) => {
        let newValues: string[];

        if (mode === 'single') {
            newValues = [key];
            setOpen(false);
            setSearchValue('');
        } else {
            // 多选：切换选中状态
            if (selectedValues.includes(key)) {
                newValues = selectedValues.filter(v => v !== key);
            } else {
                newValues = [...selectedValues, key];
            }
        }

        if (!isControlled) {
            setInternalValue(newValues);
        }

        if (onValueChange) {
            if (mode === 'single') {
                const func = onValueChange as ((value: string) => void);
                func(newValues[0] || '');
            } else {
                const func = onValueChange as ((value: string[]) => void);
                func(newValues);
            }
        }
    };

    // 移除tag
    const handleRemoveTag = (key: string) => {
        const newValues = selectedValues.filter(v => v !== key);
        if (!isControlled) {
            setInternalValue(newValues);
        }
        if (mode === 'single') {
            (onValueChange as ((value: string) => void))?.(newValues[0] || '');
        } else {
            (onValueChange as ((value: string[]) => void))?.(newValues);
        }
    };

    // Popover 打开处理
    const onContentOpen = (current: boolean) => {
        setOpen(current);
        if (!current) {
            setSearchValue('');
        }
    };

    const [edit, setEdit] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>('');
    const editInputRef = useRef<HTMLInputElement>(null);

    return (
        <SelectContext.Provider value={{ size, variant, mode, selectedValues, onSelect: handleSelect }}>
            <Popover open={open} onOpenChange={onContentOpen}>
                <PopoverTrigger asChild disabled={disabled}>
                    <InputGroup
                        size={size}
                        variant={'primary'}
                        disabled={disabled}
                        clearable={clearable}
                        onClear={() => {
                            if (!isControlled) {
                                setInternalValue([]);
                            }
                            if (onValueChange) {
                                if (mode === 'single') {
                                    const func = onValueChange as ((value: string) => void);
                                    func('');
                                } else {
                                    const func = onValueChange as ((value: string[]) => void);
                                    func([]);
                                }
                            }
                            onClear?.();
                        }}
                        className={className}
                    >
                        {frontIcon && (
                            <InputGroupAddon>
                                {frontIcon}
                            </InputGroupAddon>
                        )}

                        {/* 情况1: 不带搜索框/单选 - 不可输入的InputGroupInput */}
                        {!canSearch && mode === 'single' && (
                            <InputGroupInput
                                disabled={disabled}
                                readOnly
                                value={displayLabel}
                                placeholder={placeholder}
                                className="cursor-pointer"
                            />
                        )}

                        {/* 情况2: 带搜索框/单选 - 可输入的InputGroupInput */}
                        {canSearch && mode === 'single' && (
                            <InputGroupInput
                                ref={inputRef}
                                disabled={disabled}
                                type={'text'}
                                value={searchValue || displayLabel}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder={placeholder}
                            />
                        )}

                        {/* 情况3: 不带搜索框/多选 - 展示tags (动态计算显示数量) */}
                        {!canSearch && mode === 'multiple' && (
                            <div
                                ref={tagsContainerRef}
                                className="flex-1 flex items-center gap-1 overflow-hidden min-h-[20px] relative"
                            >
                                {selectedItems.length === 0 ? (
                                    <span className="text-secondary-information text-sm">{placeholder}</span>
                                ) : (
                                    <>
                                        {/* 隐藏的测量容器 - 用于计算每个tag的实际宽度 */}
                                        <div className="absolute opacity-0 pointer-events-none flex gap-1">
                                            {selectedItems.map(item => (
                                                <div
                                                    key={item.key}
                                                    data-tag-item
                                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary-light text-primary text-xs max-w-[76px] truncate"
                                                >
                                                    <span className="truncate flex-1">{item.label}</span>
                                                    <X className="size-3 flex-shrink-0" />
                                                </div>
                                            ))}
                                        </div>

                                        {/* 显示可见的 tags */}
                                        {selectedItems.slice(0, visibleTagCount).map(item => (
                                            <Tag
                                                size={size}
                                                key={item.key}
                                                label={item.label}
                                                onRemove={() => handleRemoveTag(item.key)}
                                                className="flex-shrink-0"
                                            />
                                        ))}

                                        {/* 如果有隐藏的tag,显示 +N */}
                                        {selectedItems.length > visibleTagCount && (
                                            <Tag
                                                size={size}
                                                label={`+${selectedItems.length - visibleTagCount}...`}
                                                className="flex-shrink-0"
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                        )}

                        {/* 情况4: 带搜索框/多选 - tags + 搜索框动态布局 */}
                        {canSearch && mode === 'multiple' && (
                            <div
                                ref={searchContainerRef}
                                className="flex-1 flex items-center gap-1 overflow-hidden ml-1"
                            >
                                {/* 隐藏的测量容器 - 放在最外层,用于计算每个tag的实际宽度 */}
                                <div className="absolute opacity-0 pointer-events-none flex gap-1">
                                    {selectedItems.map(item => (
                                        <div
                                            key={item.key}
                                            data-tag-item-search
                                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary-light text-primary text-xs max-w-[76px] truncate"
                                        >
                                            <span className="truncate flex-1">{item.label}</span>
                                            <X className="size-3 flex-shrink-0" />
                                        </div>
                                    ))}
                                </div>

                                {selectedItems.length > 0 && (
                                    <div className="flex items-center gap-1 flex-shrink-0">
                                        {/* 显示可见的 tags */}
                                        {selectedItems.slice(0, visibleTagCountWithSearch).map(item => (
                                            <Tag
                                                size={size}
                                                key={item.key}
                                                label={item.label}
                                                onRemove={() => handleRemoveTag(item.key)}
                                                className="flex-shrink-0"
                                            />
                                        ))}

                                        {/* 如果有更多,显示收缩 tag */}
                                        {selectedItems.length > visibleTagCountWithSearch && (
                                            <Tag
                                                size={size}
                                                label={`+${selectedItems.length - visibleTagCountWithSearch}...`}
                                                className="flex-shrink-0"
                                            />
                                        )}
                                    </div>
                                )}
                                <InputGroupInput
                                    ref={inputRef}
                                    disabled={disabled}
                                    type={'text'}
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder={selectedItems.length === 0 ? placeholder : ''}
                                    className="flex-1 min-w-0"
                                    style={{
                                        minWidth: selectedItems.length > 0 ? '20%' : '100%'
                                    }}
                                />
                            </div>
                        )}
                        {postIcon && (
                            <InputGroupAddon align={'inline-end'}>
                                {postIcon}
                            </InputGroupAddon>
                        )}
                    </InputGroup>
                </PopoverTrigger>
                <PopoverContent
                    className={cn(
                        "w-[var(--radix-popover-trigger-width)]",
                        "bg-secondary-background",
                        "rounded-md",
                        contentClassname
                    )}
                    alignOffset={5}
                    sideOffset={5}
                    onOpenAutoFocus={(e) => {
                        e.preventDefault();
                        if (canSearch) {
                            inputRef.current?.focus();
                        }
                    }}
                >
                    <SelectContent>
                        {filteredData.length === 0 ? (
                            <Empty size={'md'} desc="暂无相关内容" />
                        ) : (
                            filteredData.map(item => (
                                <SelectItem
                                    key={item.key}
                                    value={item.key}
                                    disabled={item.disabled}
                                >
                                    {item.label}
                                </SelectItem>
                            ))
                        )}
                    </SelectContent>
                    {
                        editable &&
                        <div className="flex border-t border-border-foreground items-center justify-center ">
                            {
                                edit ?
                                    <div className="flex flex-col flex-1 items-center justify-center p-2 gap-2 ">
                                        <InputGroup className="flex flex-1" size={size}>
                                            <InputGroupInput 
                                                ref={editInputRef}
                                                value={value} 
                                                onChange={(e) => {
                                                    setValue(e.target.value)
                                                }} 
                                            />
                                        </InputGroup>
                                        <div className="flex w-full gap-2 items-center justify-end">
                                            <Button
                                                variant={'primary'}
                                                size={size}
                                                onClick={() => {
                                                    if (editCallback) editCallback(value);
                                                    setEdit(false);
                                                    setValue('');
                                                }}
                                            >
                                                确认
                                            </Button>
                                            <Button
                                                variant={'default'}
                                                size={size}
                                                onClick={() => { setEdit(false); setValue(''); }}
                                            >
                                                取消
                                            </Button>
                                        </div>
                                    </div> :
                                    <div className="flex items-center justify-center h-[50px]">
                                        <span>
                                            +
                                        </span>
                                        <Button
                                            variant={'link'}
                                            size={size}
                                            onClick={() => { 
                                                setEdit(true);
                                                // 延迟聚焦，确保 DOM 更新后再聚焦
                                                setTimeout(() => {
                                                    editInputRef.current?.focus();
                                                }, 0);
                                            }}
                                        >
                                            新增选项
                                        </Button>
                                    </div>
                            }
                        </div>}
                </PopoverContent>
            </Popover>
        </SelectContext.Provider>
    )
}

const selectContentVariants = cva(
    "p-2 overflow-y-auto rounded-md",
    {
        variants: {
            variant: {
                primary: [
                    'flex flex-col',
                    'bg-secondary-background',
                    "[&_[data-slot=select-item]]:text-text-deep",
                    "[&_[data-slot=select-item]]:hover:bg-fill-light-hover-bg",
                    "[&_[data-slot=select-item][data-checked=true]]:text-primary",
                    "[&_[data-slot=select-item][data-checked=true]]:bg-primary-light"
                ],
            },
            size: {
                sm: [
                    'gap-0.5',
                    "[&_[data-slot=select-item]]:rounded-md",
                    "[&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[1px]",
                    "[&_[data-slot=select-item]]:text-[12px] [&_[data-slot=select-item]]:leading-[20px]",
                    "gap-[2px]"
                ],
                md: [
                    'gap-0.5',
                    "[&_[data-slot=select-item]]:rounded-md",
                    "[&_[data-slot=select-item]]:text-[13px] [&_[data-slot=select-item]]:leading-[20px]",
                    "[&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[3px]",
                    "gap-[2px]"
                ],
                lg: [
                    'gap-0.5',
                    "[&_[data-slot=select-item]]:rounded-md",
                    "[&_[data-slot=select-item]]:text-[15px] [&_[data-slot=select-item]]:leading-[22px]",
                    "[&_[data-slot=select-item]]:px-3 [&_[data-slot=select-item]]:py-[6px]",
                    "gap-[2px]"
                ]
            }
        }
    }
);

const SelectContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<'div'>
>(({ className, children, ...props }, ref) => {
    const { size, variant } = useSelectContext()

    return (
        <div
            ref={ref}
            className={cn(
                selectContentVariants({ size, variant }),
                className
            )}
            {...props}
        >
            {children}

        </div>
    )
})
SelectContent.displayName = 'SelectContent'

const SelectItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<'div'> & {
        value: string,
        disabled?: boolean
    }
>(({ className, children, value, disabled, ...props }, ref) => {
    const { mode, selectedValues, onSelect } = useSelectContext()
    const isChecked = selectedValues.includes(value)

    return (
        <div
            ref={ref}
            data-slot="select-item"
            data-checked={isChecked}
            className={cn(
                "flex w-full cursor-pointer select-none items-center gap-2 outline-none transition-colors rounded-md",
                disabled && "pointer-events-none opacity-50 cursor-not-allowed",
                className
            )}
            onClick={() => {
                if (!disabled) {
                    onSelect(value)
                }
            }}
            {...props}
        >
            {mode === 'multiple' && (
                <Checkbox
                    checked={isChecked}
                    disabled={disabled}
                    onCheckedChange={() => {
                        if (!disabled) {
                            onSelect(value)
                        }
                    }}
                />
            )}
            <span className="flex-1">{children}</span>
            {mode === 'single' && isChecked && (
                <Check className="size-4 text-primary" />
            )}
        </div>
    )
})
SelectItem.displayName = 'SelectItem'

export {
    Select as FunctionalitySelect
}

