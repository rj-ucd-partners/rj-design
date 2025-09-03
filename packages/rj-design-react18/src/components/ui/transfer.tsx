import { cn } from "@/lib/utils";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { useCallback } from "react";
import { Checkbox } from "./checkbox";
import { Empty } from "./empty";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { Button } from "./button";
import { AArrowLeft } from "../icon/simple-arrow-left";
import { AArrowRight } from "../icon/simple-arrow-right";

interface TransferItem {
    key: string;
    label: string;
    disabled?: boolean;
}

function Transfer({
    dataSource = [],
    selectKeys = [],
    targetKeys = [],
    className,
    ...props
}: React.ComponentProps<'div'> & {
    dataSource: TransferItem[];
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
            <TransferPage dataSource={GenerateLeftData()} selectKeys={selectKeys} onSelectChange={onSelectChange} checkedState={GenerateLeftSelectAll()} />
            <TransferAction canMoveToLeft={GenerateCanMoveToLeft()} canMoveToRight={GenerateCanMoveToRight()} onMove={onMove} />
            <TransferPage dataSource={GenerateRightData()} selectKeys={selectKeys} onSelectChange={onSelectChange} checkedState={GenerateRightSelectAll()} />
        </div>
    );
}

function TransferPage({
    dataSource,
    selectKeys,
    checkedState,
    onSelectChange,
    showPagination = false,
    className,
    children,
    ...props
}: React.ComponentProps<'div'> & {
    dataSource: TransferItem[];
    selectKeys: string[];
    checkedState: CheckedState;
    showPagination?: boolean;
    pageSize?: number;
    showSearch?: boolean;
    onSelectChange: (keys: string[], selected: boolean) => void;
}) {

    const updateCheckedAll = (checked: CheckedState) => {
        const keys = dataSource.map((item) => item.key);
        onSelectChange?.(keys, checked as boolean);
    }

    // const [page, setPage] = useState<number>(1);

    return (
        <div className={cn(
            'flex flex-col flex-1 h-full',
            'bg-card border border-border',
            'py-2 rounded-md',
            'min-w-[200px]',
            className
        )}>
            {
                !children &&
                <div className={cn('flex flex-col h-full')}>
                    <div className={cn(
                        'flex flex-row items-center gap-2',
                        'px-4 py-[5px]',
                        'border-b border-border-split',
                        'flex-shrink-0'
                    )} {...props}>
                        <Checkbox checked={checkedState} variant={'default'} onCheckedChange={updateCheckedAll} />
                        <span>{dataSource.length}项</span>
                    </div>

                    <div className={cn(
                        'flex flex-col flex-1',
                        'px-2',
                        'min-h-0'
                    )}>
                        {
                            dataSource.length === 0 && (
                                <div className="flex items-center justify-center h-full">
                                    <Empty size={'md'} />
                                </div>
                            )
                        }
                        {
                            dataSource.length > 0 &&
                            <ScrollArea variant={'default'} horizontal={'top'} vertical={'right'} className="w-full h-full whitespace-nowrap">
                                {
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
                            (dataSource.length > 0 && showPagination) &&
                            <div className={cn()}>

                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
}
function TransferSelectItem({
    data,
    checked,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    data: TransferItem;
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
                'text-[13px] leading-[20px] text-text-deep',
                checked && 'text-primary',
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
            <AArrowRight className="text-text-deep" />
        </Button>
        <Button variant={'default'} size={'sm-icon'} className="size-6" disabled={canMoveToLeft} onClick={() => props.onMove('left')}>
            <AArrowLeft className="text-text-deep" />
        </Button>
    </div>)
}


export { Transfer, TransferPage };
export type { TransferItem };