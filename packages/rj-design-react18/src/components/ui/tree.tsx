import { cn } from "@/lib/utils"
import React, { useCallback, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { TriangleDownIcon, TriangleRightIcon } from "@radix-ui/react-icons"
import { Checkbox } from "./checkbox"
import type { CheckedState } from "@radix-ui/react-checkbox"
import { DeleteIcon } from "../icon/delete-icon"
import { Check } from "lucide-react"
import { PenIcon } from "../icon/pen-icon"
import { Input } from "./input"
import type { TreeSelectableNode } from "@/common/type"


function Tree({
    treeData,
    multiple = false,
    selectable = false,
    selectedKeys = [],
    onSelectedChange,
    checkable = false,
    checkedKeys = [],
    onCheck,
    editCallback,
    deleteCallback,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    treeData: TreeSelectableNode[],
    multiple?: boolean,
    selectable?: boolean,
    selectedKeys?: string[],
    onSelectedChange?: (selectedKeys: string[]) => void,
    checkable?: boolean | undefined,
    checkedKeys?: string[],
    onCheck?: (checkedKeys: string[]) => void,
    checkStrictly?: boolean,
    showIcon?: boolean,
    icon?: ReactNode,
    canDo?: boolean,
    editCallback?: (item: TreeSelectableNode) => void,
    deleteCallback?: (item: TreeSelectableNode) => void,
}) {
    const onSelected = useCallback((selected: boolean, key: string) => {
        if (!selectable) return;
        let newSelectedKeys: string[] = [];
        if (multiple) {
            if (selected) {
                newSelectedKeys = [...selectedKeys, key];
            } else {
                newSelectedKeys = selectedKeys.filter(item => item !== key);
            }
        } else {
            if (selected) {
                newSelectedKeys = [key];
            } else {
                newSelectedKeys = [];
            }
        }
        if (onSelectedChange) onSelectedChange(newSelectedKeys);
    }, [multiple, onSelectedChange, selectable, selectedKeys]);

    return (
        <div className={cn(
            'flex flex-col',
            className)} {...props}>
            {
                treeData?.map((item) => {
                    return <TreeSelect
                        item={item}
                        key={item.key}
                        selectable={selectable}
                        selectedKeys={selectedKeys}
                        onSelectedChange={onSelected}
                        checkable={checkable}
                        checkedKeys={checkedKeys}
                        onCheck={onCheck}
                        showIcon={props.showIcon}
                        icon={props.icon}
                        canDo={props.canDo}
                        editCallback={editCallback}
                        deleteCallback={deleteCallback}
                    />
                })
            }
        </div>
    )
}

function TreeSelect({
    item,
    selectable,
    selectedKeys,
    onSelectedChange,
    checkable = false,
    checkedKeys = [],
    onCheck,
    showIcon = false,
    icon,
    canDo = false,
    editCallback,
    deleteCallback,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    item: TreeSelectableNode,
    selectable: boolean,
    selectedKeys: string[],
    onSelectedChange?: (selected: boolean, key: string) => void,
    checkable: boolean,
    checkedKeys: string[],
    onCheck?: (checkedKeys: string[]) => void,
    updateCheckedCallback?: (checked: boolean, key: string, currentkeys: string[]) => void,
    showIcon?: boolean,
    icon?: ReactNode,
    canDo?: boolean,
    editCallback?: (item: TreeSelectableNode) => void,
    deleteCallback?: (item: TreeSelectableNode) => void,
}) {
    const [expand, setExpand] = React.useState<boolean>(false);
    const onExpand = () => {
        setExpand(!expand);
    }
    const [selected, setSelected] = React.useState<boolean>(false);
    useEffect(() => {
        if (!selectable || !item.disabled) setSelected(false);
        if (selectedKeys.includes(item.key)) setSelected(true);
    }, [item.disabled, item.key, selectable, selectedKeys])
    const getSubKeys = useCallback((items: TreeSelectableNode[], keys: string[]) => {
        keys = keys ?? [];
        items.forEach(item => {
            keys.push(item.key);
            if (item.children) {
                getSubKeys(item.children, keys);
            }
        })
    }, [])
    const [checked, setChecked] = React.useState<CheckedState>(false);
    useEffect(() => {
        if (!checkable) setChecked(false);
        if (checkedKeys.includes(item.key)) {
            setChecked(true);
        } else {
            let checkedState: CheckedState = false;
            if (item.children) {
                const subKeys: string[] = [];
                getSubKeys(item.children, subKeys);
                if (subKeys.some(key => checkedKeys.includes(key))) {
                    checkedState = 'indeterminate';
                }
            }
            setChecked(checkedState);
        }
    }, [item.disabled, item.key, checkable, checkedKeys, item.children, getSubKeys])
    const updateChecked = (checked: boolean) => {
        const keys = [item.key];
        if (item.children) {
            getSubKeys(item.children, keys);
        }
        let currentKeys = [...checkedKeys];
        if (checked) {
            keys.forEach(key => {
                if (!checkedKeys.includes(key)) {
                    currentKeys.push(key);
                }
            })
        } else {
            currentKeys = checkedKeys.filter(x => !keys.includes(x))
        }
        if (props.updateCheckedCallback) props.updateCheckedCallback(checked, item.key, currentKeys);
        else if (onCheck) onCheck(currentKeys);
    }
    const updateCheckedCallback = (checked: boolean, key: string, currentkeys: string[]) => {
        const childKeys = item.children!.map((child) => child.key).filter(x => x !== key);
        if (checked) {
            if (childKeys.every(x => currentkeys.includes(x))) {
                if (!checkedKeys.includes(item.key)) {
                    currentkeys.push(item.key);
                }
                if (props.updateCheckedCallback) props.updateCheckedCallback(checked, item.key, currentkeys);
                else if (onCheck) onCheck(currentkeys);
            } else {
                if (checkedKeys.includes(item.key)) {
                    currentkeys = currentkeys.filter(x => x !== item.key);
                }
                if (props.updateCheckedCallback) props.updateCheckedCallback(false, item.key, currentkeys);
                else if (onCheck) onCheck(currentkeys);
            }
        } else {
            if (checkedKeys.includes(item.key)) {
                currentkeys = currentkeys.filter(x => x !== item.key);
            }
            if (props.updateCheckedCallback) props.updateCheckedCallback(checked, item.key, currentkeys);
            else if (onCheck) onCheck(currentkeys);
        }
    }
    const [showEdit, setShowEdit] = React.useState<boolean>(false);

    return (<div
        data-slot='tree-select'
        className={cn(
            'w-full',
            'flex flex-col flex-start flex-1',
            'pl-2 py-1',
            className,
        )} {...props}>
        <div
            data-slot='tree-select-title'
            className={cn(
                'flex flex-row items-center justify-center flex-1 gap-1',
            )}>
            {
                (item.children && item.children.length > 1 && !item.disabled) &&
                <Button variant={'transparent'} size={'link'} onClick={onExpand}>
                    {
                        expand ?
                            <TriangleDownIcon className="size-4 text-secondary" />
                            :
                            <TriangleRightIcon className="size-4 text-secondary" />
                    }
                </Button>
            }
            <div
                className={cn(
                    'w-full',
                    'flex flex-row items-center justify-between flex-1',
                    'hover:bg-third-background',
                    !item.disabled && 'hover:text-primary',
                    selected && 'text-primary bg-third-background',
                    item.disabled && 'text-disabled',
                    'rounded-md',
                    'p-1',
                )} onClick={
                    () => {
                        if (!showEdit && selectable && !item.disabled && onSelectedChange) {
                            onSelectedChange(!selected, item.key);
                        }
                    }
                }>
                <div
                    className={cn(
                        'w-full',
                        'flex flex-row items-center justify-start',
                        'gap-2',
                        item.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                    )}>
                    {
                        checkable &&
                        <Checkbox disabled={item.disabled ?? false} variant={'default'}
                            checked={checked}
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            onCheckedChange={(event) => {
                                if (!checkable || showEdit) return;
                                if (item.disabled) return;
                                updateChecked(event as boolean);
                            }} />
                    }

                    {showIcon &&
                        <div className="size-5 flex items-center justify-center" >
                            {item.icon ? item.icon : icon}
                        </div>
                    }
                    {
                        showEdit ?
                            <Input
                                variant={'primary'}
                                format={'sm'}
                                onChange={(e) => {
                                    e.stopPropagation();
                                }}
                            />
                            :
                            <div className={cn(
                                'w-full',
                                'text-[13px]/5',
                                item.disabled && 'text-disabled',
                            )}>
                                {item.label}
                            </div>
                    }
                </div>
                {
                    canDo &&
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
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowEdit(true)
                                    }}
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
                                        if (editCallback) editCallback(item);
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
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (deleteCallback) deleteCallback(item);
                                }}
                            >
                                <DeleteIcon />
                            </Button>
                        }

                    </div>
                }
            </div>
        </div>
        {
            expand &&
            <div
                data-slot='tree-select-context'
                className={cn(
                    'pl-8',
                )} >
                {
                    item.children?.map((item) => {
                        return <TreeSelect
                            key={item.key}
                            item={item}
                            selectable={selectable}
                            selectedKeys={selectedKeys}
                            onSelectedChange={onSelectedChange}
                            checkable={checkable}
                            checkedKeys={checkedKeys}
                            onCheck={onCheck}
                            updateCheckedCallback={updateCheckedCallback}
                            showIcon={showIcon}
                            icon={icon}
                            canDo={canDo}
                            editCallback={editCallback}
                            deleteCallback={deleteCallback}
                        />
                    })
                }
            </div>
        }
    </div>);
}

export { Tree, TreeSelect }