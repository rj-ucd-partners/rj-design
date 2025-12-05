import { cn } from "@/lib/utils";
import type { CheckedState } from "@radix-ui/react-checkbox";
import React, { useCallback, useEffect, useState } from "react";
import { Checkbox } from "./checkbox";
import { Empty } from "./empty";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { Button } from "./button";
import { AArrowLeft } from "../icon/simple-arrow-left";
import { AArrowRight } from "../icon/simple-arrow-right";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { TriangleDownIcon } from "../icon/TriangleDownIcon";
import { TriangleRightIcon } from "../icon/triangle-right-icon";
import { TriangleLeftIcon } from "../icon/triangle-left-icon";
import { MagnifierIcon } from "../icon/magnifier-icon";
import type { BaseNode } from "@/common/type";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group";



function Transfer({
    dataSource = [],
    selectKeys = [],
    targetKeys = [],
    showPagination = false,
    showSearch = false,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    dataSource: BaseNode[];
    selectKeys?: string[];
    targetKeys?: string[];
    showPagination?: boolean;
    pageSize?: number;
    showSearch?: boolean;
    onSelectChange?: (keys: string[]) => void;
    onTargetChange?: (nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => void;
}) {
    const GenerateLeftData = () => {
        return dataSource.filter(item => !targetKeys.includes(item.key));
    }
    const GenerateRightData = () => {
        return dataSource.filter(item => targetKeys.includes(item.key));
    }
    const GenerateLeftSelectAll = useCallback(() => {
        const leftKeys = dataSource.filter(item => !targetKeys.includes(item.key)).map(item => item.key);
        let checkedState: CheckedState = false;
        if (selectKeys.some(item => leftKeys.includes(item))) {
            checkedState = 'indeterminate';
            if (!leftKeys.some(item => !selectKeys.includes(item))) {
                checkedState = true;
            }
        }
        return checkedState;
    }, [dataSource, selectKeys, targetKeys])
    const GenerateRightSelectAll = useCallback(() => {
        let checkedState: CheckedState = false;
        if (selectKeys.some(item => targetKeys.includes(item))) {
            checkedState = 'indeterminate';
            if (!targetKeys.some(item => !selectKeys.includes(item))) {
                checkedState = true;
            }
        }
        return checkedState;
    }, [selectKeys, targetKeys])
    const onSelectChange = (keys: string[], selected: boolean) => {
        if (!selected) {
            const newSelects = selectKeys.filter(item => !keys.includes(item));
            props.onSelectChange?.(newSelects);
        } else {
            const newSelects = [...new Set([...selectKeys, ...keys])];
            props.onSelectChange?.(newSelects);
        }
    }
    const GenerateCanMoveToRight = useCallback(() => {
        const leftKeys = dataSource.filter(item => !targetKeys.includes(item.key)).map(item => item.key);
        return !selectKeys.some(item => leftKeys.includes(item));
    }, [selectKeys, dataSource, targetKeys])
    const GenerateCanMoveToLeft = useCallback(() => {
        return !selectKeys.some(item => targetKeys.includes(item));
    }, [selectKeys, targetKeys])
    const onMove = (direction: 'left' | 'right') => {
        if (direction === 'right') {
            const leftKeys = dataSource.filter(item => !targetKeys.includes(item.key)).map(item => item.key);
            const leftSelects = selectKeys.filter(item => leftKeys.includes(item));
            const newTargetKeys = [...new Set([...targetKeys, ...leftSelects])];
            props.onTargetChange?.(newTargetKeys, direction, leftSelects);
        } else {
            const rightSelects = selectKeys.filter(item => targetKeys.includes(item));
            const newTargetKeys = targetKeys.filter(item => !rightSelects.includes(item));
            props.onTargetChange?.(newTargetKeys, direction, rightSelects);
        }
    }

    return (
        <div className={cn(
            'flex flex-row gap-2 h-full w-full',
            className,
        )} {...props}>
            <TransferPage dataSource={GenerateLeftData()} selectKeys={selectKeys} onSelectChange={onSelectChange} checkedState={GenerateLeftSelectAll()} showPagination={showPagination} showSearch={showSearch} children={props.children} />
            <TransferAction canMoveToLeft={GenerateCanMoveToLeft()} canMoveToRight={GenerateCanMoveToRight()} onMove={onMove} />
            <TransferPage dataSource={GenerateRightData()} selectKeys={selectKeys} onSelectChange={onSelectChange} checkedState={GenerateRightSelectAll()} showPagination={showPagination} showSearch={showSearch} />
        </div>
    );
}

function TransferPage({
    dataSource,
    selectKeys,
    checkedState,
    onSelectChange,
    showPagination = false,
    showSearch = false,
    pageSize = 10,
    children,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    dataSource: BaseNode[];
    selectKeys: string[];
    checkedState: CheckedState;
    showPagination?: boolean;
    pageSize?: number;
    showSearch?: boolean;
    onSelectChange: (keys: string[], selected: boolean) => void;
}) {

    const updateCheckedAll = (checked: CheckedState) => {
        if (showSearch && value) {
            const keys = searchData.map((item) => item.key);
            onSelectChange?.(keys, checked as boolean);
        } else {
            const keys = dataSource.map((item) => item.key);
            onSelectChange?.(keys, checked as boolean);
        }

    }

    const [value, setValue] = useState<string | undefined>(undefined);
    const [searchData, setSearchData] = useState<BaseNode[]>([]);
    const [searchChecked, setSearchChecked] = useState<CheckedState>(false);
    const onValueChange = useCallback((str: string, update?: boolean) => {
        update = update ?? false;
        setValue(str);
        if (!str) setSearchData([]);
        const currentSearchData = dataSource.filter(item => item.label.includes(str));
        setSearchData(currentSearchData);
        if (update) {
            let checkedState: CheckedState = false;
            const keys = currentSearchData.map(item => item.key);
            if (selectKeys.some(x => keys.includes(x))) {
                checkedState = 'indeterminate';
                if (!keys.some(x => !selectKeys.includes(x))) {
                    checkedState = true;
                }
            }
            setSearchChecked(checkedState);
        }
    }, [dataSource, selectKeys])


    const [page, setPage] = useState<number>(1);
    const [pageData, setPageData] = useState<BaseNode[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    const [selectedCount, setSelectCount] = useState<number>(0);
    useEffect(() => {
        if (!showPagination) return;
        setPage(1);
        const data = dataSource.slice(0, pageSize);
        setPageData(data);
        const count = Math.ceil(dataSource.length / pageSize);
        setPageCount(count);
    }, [dataSource, pageSize, showPagination])
    const prePage = () => {
        const current = page - 1;
        if (current < 1) return;
        const data = dataSource.slice(((current - 1) * pageSize), (current * pageSize));
        setPageData(data);
        setPage(page - 1);
    }
    const nextPage = () => {
        if (page >= pageCount) return;
        const data = dataSource.slice(page * pageSize, (page + 1) * pageSize);
        setPageData(data);
        setPage(page + 1);
    }
    const onSelectPageChange = useCallback((page: number) => {
        const data = dataSource.slice(((page - 1) * pageSize), (page * pageSize));
        setPageData(data);
        setPage(page)
    }, [dataSource, pageSize])
    useEffect(() => {
        const length = dataSource.filter(item => selectKeys.includes(item.key)).length;
        setSelectCount(length);
        if (showPagination) {
            const currentPageCount = Math.ceil(dataSource.length / pageSize);
            setPageCount(currentPageCount);
            let currentPage = page == 0 ? 1 : page;
            if (currentPage > currentPageCount) {
                currentPage = currentPageCount;
            }
            setPage(currentPage);
            const showData = dataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize);
            setPageData(showData);
        }
        if (showSearch) {
            if (value) onValueChange(value, true);
        }
    }, [dataSource, onValueChange, page, pageSize, selectKeys, showPagination, showSearch, value])

    return (
        children ?
            (<div
                className={cn(
                    'flex flex-col flex-1 gap-2 h-full',
                    'bg-card border border-border',
                    'py-2 rounded-md',
                    'min-w-[200px]',
                    className
                )} {...props}>
                <div className={cn(
                    'px-4 py-[5px]',
                    'border-b border-border-split',
                )} >
                    <span> {selectedCount > 0 && <span>{selectedCount}/</span>}{dataSource.length}项</span>
                </div>
                <ScrollArea variant={'default'} vertical={'left'} className="w-full whitespace-nowrap" style={{
                    height: 'calc(100% - 52px)'
                }}>
                    {children}
                </ScrollArea>
            </div>
            )
            :
            (<div className={cn(
                'flex flex-col flex-1 gap-2',
                'bg-card border border-border',
                'py-2 rounded-md',
                'min-w-[200px]',
                className
            )} {...props}>
                {
                    (!showPagination || showSearch) &&
                    <div className={cn(
                        'flex flex-row items-center gap-2',
                        'px-4 py-[5px]',
                        'border-b border-border-split',
                        'flex-shrink-0'
                    )} >
                        <Checkbox checked={value ? searchChecked : checkedState} variant={'default'} onCheckedChange={updateCheckedAll} />
                        <span>{value ? searchData.length : dataSource.length}项</span>
                    </div>
                }
                {
                    (showPagination && !showSearch) &&
                    <div className={cn(
                        'flex flex-row items-center gap-2',
                        'px-4 py-[5px]',
                        'border-b border-border-split',
                        'flex-shrink-0'
                    )}>
                        <span> {selectedCount > 0 && <span>{selectedCount}/</span>}{dataSource.length}项</span>
                    </div>
                }
                {
                    showSearch &&
                    <div className="px-2">
                        <InputGroup className='w-full' size={'md'} variant={'primary'} clearable={true} onClear={() => onValueChange('')}>
                            <InputGroupInput
                                type={'text'}
                                value={value}
                                onChange={(e) => onValueChange(e.target.value)}
                                placeholder="请输入"
                            />
                            <InputGroupAddon align={'inline-end'}>
                                <MagnifierIcon />
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                }

                <div className={cn(
                    'flex flex-col flex-1 h-full',
                    'px-2',
                    'min-h-0'
                )}>
                    {
                        (dataSource.length === 0 && searchData.length === 0) &&
                        <div className="flex items-center justify-center h-full">
                            <Empty size={'md'} />
                        </div>
                    }
                    {
                        (!showPagination || showSearch) && ((value && searchData.length > 0) || (!value && dataSource.length > 0)) &&
                        <ScrollArea variant={'default'} horizontal={'top'} vertical={'right'} className="w-full h-full whitespace-nowrap">
                            {
                                value ?
                                    <div className="flex flex-col gap-1 mt-1">
                                        {
                                            searchData.map((item) => (
                                                <TransferSelectItem
                                                    data={item}
                                                    key={item.key}
                                                    checked={selectKeys.includes(item.key)}
                                                    onSelectChange={onSelectChange}
                                                />
                                            ))}
                                    </div> :
                                    <div className="flex flex-col gap-1 mt-1">
                                        {
                                            dataSource.map((item) => (
                                                <TransferSelectItem
                                                    data={item}
                                                    key={item.key}
                                                    checked={selectKeys.includes(item.key)}
                                                    onSelectChange={onSelectChange}
                                                />
                                            ))}
                                    </div>
                            }
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    }

                    {
                        (!showSearch && showPagination && pageData.length > 0) &&
                        <ScrollArea variant={'default'} horizontal={'top'} vertical={'right'} className="w-full h-full whitespace-nowrap">
                            {
                                <div className="flex flex-col gap-1 mt-1">
                                    {
                                        pageData.map((item) => (
                                            <TransferSelectItem
                                                data={item}
                                                key={item.key}
                                                checked={selectKeys.includes(item.key)}
                                                onSelectChange={onSelectChange}
                                            />
                                        ))}
                                </div>
                            }
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    }

                </div>
                {
                    (!showSearch && dataSource.length > 0 && showPagination) &&
                    <div className={cn(
                        'flex flex-row items-center justify-end',
                        'px-2 py-[5px]',
                    )}>
                        <div className="flex items-center gap-2">
                            <Button variant={'page'} size={'sm-icon'} className="size-6" disabled={(page == 1)} onClick={prePage}>
                                <TriangleLeftIcon className="size-2 text-disabled" />
                            </Button>

                            <DropdownMenu variant="primary">
                                <DropdownMenuTrigger asChild>
                                    <Button variant={"page"} className="h-6 px-[6px] bg-third-background rounded-md">
                                        <div className="inline-flex justify-between items-center gap-4 text-[12px] leading-[20px] text-secondary-information">
                                            <span>{page}/{pageCount}</span>
                                            <TriangleDownIcon className="size-2 " />
                                        </div>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" >
                                    <DropdownMenuGroup>
                                        {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNumber) => (<DropdownMenuItem key={pageNumber} onSelect={() => { onSelectPageChange(pageNumber) }}> {pageNumber} </DropdownMenuItem>))}
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Button variant={'page'} size={'sm-icon'} className="size-6" disabled={!(page < pageCount)} onClick={nextPage}>
                                <TriangleRightIcon className="size-2 text-disabled" />
                            </Button>
                        </div>
                    </div>
                }
            </div>)
    );
}
function TransferSelectItem({
    data,
    checked,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    data: BaseNode;
    checked: boolean;
    onSelectChange: (keys: string[], selected: boolean) => void;
}) {
    const onSelectChange = (selected: CheckedState) => {
        props.onSelectChange?.([data.key], selected as boolean);
    }
    return (
        <div className={cn(
            'flex flex-row items-center justify-start gap-2',
            'px-2 py-[5px] rounded-sm',
            'hover:bg-third-background',
            className
        )} {...props}>
            <Checkbox checked={checked} variant={'default'} disabled={data.disabled ?? false} onCheckedChange={onSelectChange} />
            <span className={cn(
                'text-[13px] leading-[20px]',
                data.disabled ? 'text-disabled' : 'text-text-deep',
                (checked && !data.disabled) && 'text-primary',
            )}>{data.label}</span>
        </div>
    )
}
function TransferAction({
    canMoveToLeft,
    canMoveToRight,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    canMoveToLeft: boolean,
    canMoveToRight: boolean,
    onMove: (direction: 'left' | 'right') => void;
}) {
    return (<div className={cn(
        'inline-flex flex-col items-center justify-center gap-2',
        className
    )} {...props}>
        <Button variant={'default'} size={'sm-icon'} className="size-6" disabled={canMoveToRight} onClick={() => props.onMove('right')}>
            <AArrowRight className={cn(canMoveToRight ? "text-disabled" : "text-text-deep")} />
        </Button>
        <Button variant={'default'} size={'sm-icon'} className="size-6" disabled={canMoveToLeft} onClick={() => props.onMove('left')}>
            <AArrowLeft className={cn(canMoveToLeft ? "text-disabled" : "text-text-deep")} />
        </Button>
    </div>)
}

export { Transfer, TransferPage };