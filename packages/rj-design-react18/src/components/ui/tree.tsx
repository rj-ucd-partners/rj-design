import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { TriangleDownIcon, TriangleRightIcon } from "@radix-ui/react-icons"
import { Check, Delete, PenIcon } from "lucide-react"
import { Checkbox } from "./checkbox"
import type { CheckedState } from "@radix-ui/react-checkbox"
import { Input } from "./input"

interface TreeItem {
    title: string,
    icon?: React.ReactNode,
    disabled?: boolean,
    showFunc?: boolean,
    children?: TreeItem[],
    checked?: CheckedState,
}

function Tree({
    isCheckedBox = false,
    hasFunc,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    items: TreeItem[] | undefined,
    isCheckedBox?: boolean | undefined,
    hasFunc?: boolean | undefined
}) {
    const [data, setData] = React.useState<TreeItem[] | undefined>(props.items)
    const updateItemCheckedState = (item: TreeItem): CheckedState => {
        if (!item.children || item.children.length === 0) {
            return item.checked || false;
        }
        const childrenStates = item.children.map(updateItemCheckedState);
        const allChecked = childrenStates.every(state => state === true);
        const someChecked = childrenStates.some(state => state === true || state === 'indeterminate');
        if (allChecked) {
            item.checked = true;
        } else if (someChecked) {
            item.checked = 'indeterminate';
        } else {
            item.checked = false;
        }

        return item.checked;
    }
    const onChecked = (checked: boolean, indexList: number[]) => {
        try {
            if (!data || data.length === 0) return;
            let items = data.slice();
            //先改自身
            let me = getItemByIndex(items, indexList);
            me.checked = checked;
            //先子，深度优先算法
            processChildren(me, checked);
            //后父
            updateParents(items, indexList);
            setData(items);
        } catch (e) {
            console.log('e', e)
            return;
        }
    }
    const getItemByIndex = (items: TreeItem[], indexList: number[]) => {
        if (indexList.length === 0) {
            throw new Error("索引列表不能为空");
        }
        let currentLevel = items;
        for (let i = 0; i < indexList.length - 1; i++) {
            const index = indexList[i];
            if (index < 0 || index >= currentLevel.length) {
                throw new Error(`无效索引: ${index}`);
            }
            if (!currentLevel[index].children) {
                throw new Error(`节点在索引 ${index} 处没有子节点`);
            }
            currentLevel = currentLevel[index].children;
        }

        // 获取最后一个索引对应的节点
        const lastIndex = indexList[indexList.length - 1];

        // 检查最后一个索引是否有效
        if (lastIndex < 0 || lastIndex >= currentLevel.length) {
            throw new Error(`无效索引: ${lastIndex}`);
        }
        return currentLevel[lastIndex];
    };
    const processChildren = (item: TreeItem, checked: boolean) => {
        item.children?.map((s, i) => {
            s.checked = checked;
            if (s.children && s.children.length > 0) {
                processChildren(s, checked);
            }
        })
    }
    const updateParents = (items: TreeItem[], indices: number[]) => {
        if (indices.length === 0) return;

        const parentIndices = indices.slice(0, -1);
        if (parentIndices.length === 0) return;

        const parentItem = getItemByIndex(items, parentIndices);

        if (parentItem.children) {
            const childrenStates = parentItem.children.map(child => child.checked);
            const allChecked = childrenStates.every(state => state === true);
            const someChecked = childrenStates.some(state => state === true || state === 'indeterminate');

            if (allChecked) {
                parentItem.checked = true;
            } else if (someChecked) {
                parentItem.checked = 'indeterminate';
            } else {
                parentItem.checked = false;
            }

            // 递归更新更上层的父节点
            updateParents(items, parentIndices);
        }
    };
    const deleteNode = (indexList: number[]) => {
        if (!data || data.length === 0) return;
        let items = data.slice();
        if (indexList.length === 0) {
            throw new Error("索引列表不能为空");
        }
        let currentLevel = items;
        for (let i = 0; i < indexList.length - 1; i++) {
            const index = indexList[i];
            if (index < 0 || index >= currentLevel.length) {
                throw new Error(`无效索引: ${index}`);
            }
            if (!currentLevel[index].children) {
                throw new Error(`节点在索引 ${index} 处没有子节点`);
            }
            currentLevel = currentLevel[index].children;
        }

        // 获取最后一个索引对应的节点
        const lastIndex = indexList[indexList.length - 1];

        // 检查最后一个索引是否有效
        if (lastIndex < 0 || lastIndex >= currentLevel.length) {
            throw new Error(`无效索引: ${lastIndex}`);
        }
        // 使用 splice 正确删除数组元素
        currentLevel.splice(lastIndex, 1);
        // 重新计算所有节点的选中状态
        const updateAllCheckedStates = (items: TreeItem[]): TreeItem[] => {
            return items.map(item => {
                if (item.children && item.children.length > 0) {
                    // 递归更新子节点
                    const updatedChildren = updateAllCheckedStates(item.children);

                    // 计算当前节点的状态
                    const childrenStates = updatedChildren.map(child => child.checked);
                    const allChecked = childrenStates.every(state => state === true);
                    const someChecked = childrenStates.some(state =>
                        state === true || state === 'indeterminate'
                    );

                    return {
                        ...item,
                        children: updatedChildren,
                        checked: allChecked ? true : (someChecked ? 'indeterminate' : false)
                    };
                }
                return item;
            });
        };

        // 更新数据并重新计算状态
        const updatedData = updateAllCheckedStates(items);
        setData(updatedData);
    }
    const editTitle = (indexList: number[], title: string) => {
        if (!title) return;
        if (!data || data.length === 0) return;
        let items = data.slice();
        let current = getItemByIndex(items, indexList);
        if (title === current.title) return;
        current.title = title;
        setData(items);
    }

    return (
        <div className={cn(
            'flex flex-col flex-1',
            className
        )}>
            {
                data?.map((item, index) => {
                    return <TreeSelect
                        item={item}
                        key={index}
                        isCheckedBox={isCheckedBox}
                        hasFunc={hasFunc}
                        indexList={[index]}
                        index={index}
                        onChecked={onChecked}
                        onDelete={deleteNode}
                        onEdit={editTitle}
                    />
                })
            }
        </div>
    )
}

function TreeSelect({
    item,
    isCheckedBox = false,
    hasFunc,
    indexList,
    index,
    onChecked,
    onDelete,
    onEdit,
    ...props
}: React.ComponentProps<'div'> & {
    item: TreeItem,
    isCheckedBox: boolean | undefined,
    hasFunc?: boolean | undefined,
    indexList: number[],
    index: number,
    onChecked: Function,
    onDelete: Function,
    onEdit: Function,
}) {
    const [isOpen, setIsOpen] = React.useState(false)
    const openContext = () => {
        setIsOpen(!isOpen);
    }
    const generateIndexList = (indexList: number[], index: number) => {
        let newIndexList = indexList.slice();
        newIndexList.push(index);
        return newIndexList;
    }
    const [showEdit, setShowEdit] = React.useState<boolean>(false);
    const [title, setTitle] = React.useState<string>(item.title);
    return (
        <div
            data-slot='tree-select'
            className={cn(
                'w-full',
                'flex flex-col flex-start flex-1',
            )}>
            <div
                data-slot='tree-select-title'
                className={cn(
                    'flex flex-row items-center justify-center flex-1 gap-1',
                )}>
                {/** 按钮操作区 */}
                <div
                    className={cn(
                        'size-8 ',
                        'flex items-center justify-center'
                    )}>
                    {
                        item.children ?
                            <Button variant={'transparent'} size={'link'} onClick={openContext}>
                                {
                                    isOpen ?
                                        <TriangleDownIcon />
                                        :
                                        <TriangleRightIcon />
                                }
                            </Button>
                            :
                            <></>
                    }
                </div>
                <div
                    className={cn(
                        'w-full',
                        'flex flex-row items-center justify-between flex-1',
                        'hover:text-primary hover:bg-third-background',
                        'rounded-md',
                        'p-1',
                    )}>
                    {/** 前部 */}
                    <div
                        className={cn(
                            'w-full',
                            'flex flex-row items-center justify-start',
                            'gap-1',
                        )}>
                        {
                            isCheckedBox &&
                            <Checkbox disabled={item.disabled ?? false} variant={'default'} checked={item.checked ?? false} onCheckedChange={(event) => {
                                onChecked(event, indexList);
                            }} />
                        }

                        {item.icon
                            &&
                            <div className="size-5 flex items-center justify-center" >
                                {item.icon}
                            </div>
                        }
                        {
                            showEdit ?
                                <Input
                                    variant={'select-title'}
                                    dimension={'borderless-sm'}
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                />
                                :
                                <div className={cn(
                                    'w-full',
                                    'text-[13px]/5',
                                    item.disabled && 'text-disabled',
                                )}>
                                    {item.title}
                                </div>
                        }
                    </div>
                    {
                        hasFunc &&
                        <div className={cn(
                            'flex flex-row items-center justify-center gap-1'
                        )}>
                            {
                                !showEdit ?
                                    <Button
                                        disabled={item.disabled ?? false}
                                        variant={'transparent'}
                                        size={'link'}
                                        className={cn(
                                            item.disabled && 'text-disabled'
                                        )}
                                        onClick={() => { setShowEdit(true) }}
                                    >
                                        <PenIcon />
                                    </Button>
                                    :
                                    <Button
                                        disabled={item.disabled ?? false}
                                        variant={'transparent'}
                                        size={'link'}
                                        className={cn(
                                            item.disabled && 'text-disabled'
                                        )}
                                        onClick={() => {
                                            if (item.title === title) return;
                                            if (!showEdit) return;
                                            onEdit(indexList, title);
                                            setShowEdit(false);
                                        }}
                                    >
                                        <Check />
                                    </Button>
                            }

                            {
                                <Button
                                    disabled={item.disabled ?? false}
                                    variant={'transparent'}
                                    size={'link'}
                                    className={cn(
                                        item.disabled && 'text-disabled'
                                    )}
                                    onClick={() => {
                                        onDelete(indexList);
                                    }}
                                >
                                    <Delete />
                                </Button>
                            }

                        </div>
                    }
                </div>
            </div>
            {
                isOpen &&
                <div
                    data-slot='tree-select-context'
                    className={cn(
                        'pl-8',
                    )} >
                    {
                        item.children?.map((item, index) => {
                            return <TreeSelect
                                key={index}
                                item={item}
                                isCheckedBox={isCheckedBox}
                                hasFunc={hasFunc}
                                indexList={generateIndexList(indexList, index)}
                                index={index}
                                onChecked={onChecked}
                                onDelete={onDelete}
                                onEdit={onEdit}
                            />
                        })
                    }
                </div>
            }
        </div>
    );
}

export { Tree, TreeSelect }