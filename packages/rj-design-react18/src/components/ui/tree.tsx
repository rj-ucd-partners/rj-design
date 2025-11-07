import { cn } from "@/lib/utils"
import React, { useCallback, useMemo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { TriangleDownIcon, TriangleRightIcon } from "@radix-ui/react-icons"
import { Checkbox } from "./checkbox"
import type { CheckedState } from "@radix-ui/react-checkbox"
import { DeleteIcon } from "../icon/delete-icon"
import { Check } from "lucide-react"
import { PenIcon } from "../icon/pen-icon"
import { Input } from "./input"
import type { TreeSelectableNode } from "@/common/type"

// 类型定义
export interface TreeProps extends Omit<React.ComponentProps<'div'>, 'onSelect'> {
    treeData: TreeSelectableNode[]
    multiple?: boolean
    selectable?: boolean
    selectedKeys?: string[]
    defaultSelectedKeys?: string[]
    onSelectedChange?: (selectedKeys: string[]) => void
    checkable?: boolean
    checkedKeys?: string[]
    defaultCheckedKeys?: string[]
    onCheck?: (checkedKeys: string[]) => void
    checkStrictly?: boolean
    showIcon?: boolean
    icon?: ReactNode
    canDo?: boolean
    editCallback?: (item: TreeSelectableNode) => void
    deleteCallback?: (item: TreeSelectableNode) => void
}

function Tree({
    treeData,
    multiple = false,
    selectable = false,
    selectedKeys: controlledSelectedKeys,
    defaultSelectedKeys = [],
    onSelectedChange,
    checkable = false,
    checkedKeys: controlledCheckedKeys,
    defaultCheckedKeys = [],
    onCheck,
    editCallback,
    deleteCallback,
    className,
    ...props
}: TreeProps) {
    // 判断是否为受控组件
    const isSelectedControlled = controlledSelectedKeys !== undefined
    const isCheckedControlled = controlledCheckedKeys !== undefined

    // 内部状态（非受控模式）
    const [internalSelectedKeys, setInternalSelectedKeys] = React.useState<string[]>(defaultSelectedKeys)
    const [internalCheckedKeys, setInternalCheckedKeys] = React.useState<string[]>(defaultCheckedKeys)

    // 实际使用的值
    const selectedKeys = isSelectedControlled ? controlledSelectedKeys : internalSelectedKeys
    const checkedKeys = isCheckedControlled ? controlledCheckedKeys : internalCheckedKeys

    // 处理选中变化
    const handleSelectedChange = useCallback((newSelectedKeys: string[]) => {
        if (!isSelectedControlled) {
            setInternalSelectedKeys(newSelectedKeys)
        }
        onSelectedChange?.(newSelectedKeys)
    }, [isSelectedControlled, onSelectedChange])

    // 处理勾选变化
    const handleCheckChange = useCallback((newCheckedKeys: string[]) => {
        if (!isCheckedControlled) {
            setInternalCheckedKeys(newCheckedKeys)
        }
        onCheck?.(newCheckedKeys)
    }, [isCheckedControlled, onCheck])

    // 选择逻辑
    const onSelected = useCallback((selected: boolean, key: string) => {
        if (!selectable) return

        let newSelectedKeys: string[]
        if (multiple) {
            newSelectedKeys = selected
                ? [...selectedKeys, key]
                : selectedKeys.filter(item => item !== key)
        } else {
            newSelectedKeys = selected ? [key] : []
        }

        handleSelectedChange(newSelectedKeys)
    }, [multiple, selectable, selectedKeys, handleSelectedChange])

    return (
        <div className={cn('flex flex-col', className)} {...props}>
            {treeData?.map((item) => (
                <TreeSelect
                    key={item.key}
                    item={item}
                    selectable={selectable}
                    selectedKeys={selectedKeys}
                    onSelectedChange={onSelected}
                    checkable={checkable}
                    checkedKeys={checkedKeys}
                    onCheck={handleCheckChange}
                    showIcon={props.showIcon}
                    icon={props.icon}
                    canDo={props.canDo}
                    editCallback={editCallback}
                    deleteCallback={deleteCallback}
                />
            ))}
        </div>
    )
}

// 树节点组件的 Props 类型
interface TreeSelectProps extends Omit<React.ComponentProps<'div'>, 'onSelect'> {
    item: TreeSelectableNode
    selectable: boolean
    selectedKeys: string[]
    onSelectedChange?: (selected: boolean, key: string) => void
    checkable: boolean
    checkedKeys: string[]
    onCheck?: (checkedKeys: string[]) => void
    updateCheckedCallback?: (checked: boolean, key: string, currentkeys: string[]) => void
    showIcon?: boolean
    icon?: ReactNode
    canDo?: boolean
    editCallback?: (item: TreeSelectableNode) => void
    deleteCallback?: (item: TreeSelectableNode) => void
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
}: TreeSelectProps) {
    // 展开/收起状态
    const [expand, setExpand] = React.useState(false)
    const [showEdit, setShowEdit] = React.useState(false)

    // 切换展开状态
    const toggleExpand = useCallback(() => {
        setExpand(prev => !prev)
    }, [])

    // 计算是否选中
    const isSelected = useMemo(() => {
        return selectable && !item.disabled && selectedKeys.includes(item.key)
    }, [selectable, item.disabled, item.key, selectedKeys])

    // 递归获取所有子节点的 key
    const getSubKeys = useCallback((items: TreeSelectableNode[]): string[] => {
        const keys: string[] = []
        const traverse = (nodes: TreeSelectableNode[]) => {
            nodes.forEach(node => {
                keys.push(node.key)
                if (node.children) {
                    traverse(node.children)
                }
            })
        }
        traverse(items)
        return keys
    }, [])

    // 计算勾选状态
    const checkedState = useMemo<CheckedState>(() => {
        if (!checkable) return false

        // 当前节点被勾选
        if (checkedKeys.includes(item.key)) return true

        // 检查是否有子节点被勾选（半选状态）
        if (item.children) {
            const subKeys = getSubKeys(item.children)
            if (subKeys.some(key => checkedKeys.includes(key))) {
                return 'indeterminate'
            }
        }

        return false
    }, [checkable, checkedKeys, item.key, item.children, getSubKeys])

    // 处理勾选变化
    const handleCheckChange = useCallback((checked: boolean) => {
        if (!checkable || !onCheck) return

        // 获取当前节点及其所有子节点的 key
        const keys = [item.key]
        if (item.children) {
            keys.push(...getSubKeys(item.children))
        }

        let newCheckedKeys: string[]
        if (checked) {
            // 勾选：添加所有相关 key
            newCheckedKeys = [...new Set([...checkedKeys, ...keys])]
        } else {
            // 取消勾选：移除所有相关 key
            newCheckedKeys = checkedKeys.filter(key => !keys.includes(key))
        }

        // 如果有父级回调，使用父级回调；否则直接调用 onCheck
        if (props.updateCheckedCallback) {
            props.updateCheckedCallback(checked, item.key, newCheckedKeys)
        } else {
            onCheck(newCheckedKeys)
        }
    }, [checkable, onCheck, item.key, item.children, checkedKeys, getSubKeys, props])

    // 子节点勾选回调（用于向上传播状态）
    const handleChildCheckChange = useCallback((checked: boolean, key: string, currentKeys: string[]) => {
        if (!item.children || !onCheck) return

        const childKeys = item.children.map(child => child.key).filter(k => k !== key)

        let finalKeys = [...currentKeys]
        if (checked) {
            // 如果所有子节点都被勾选，自动勾选父节点
            if (childKeys.every(k => currentKeys.includes(k))) {
                if (!currentKeys.includes(item.key)) {
                    finalKeys.push(item.key)
                }
            }
        } else {
            // 如果取消勾选子节点，移除父节点的勾选
            if (currentKeys.includes(item.key)) {
                finalKeys = finalKeys.filter(k => k !== item.key)
            }
        }

        if (props.updateCheckedCallback) {
            props.updateCheckedCallback(checked, item.key, finalKeys)
        } else {
            onCheck(finalKeys)
        }
    }, [item.children, item.key, onCheck, props])

    // 处理点击选中
    const handleClick = useCallback(() => {
        if (showEdit || !selectable || item.disabled || !onSelectedChange) return
        onSelectedChange(!isSelected, item.key)
    }, [showEdit, selectable, item.disabled, onSelectedChange, isSelected, item.key])

    return (
        <div
            data-slot="tree-select"
            className={cn(
                'w-full flex flex-col flex-start flex-1 pl-2 py-1',
                className
            )}
            {...props}
        >
            {/* 节点标题行 */}
            <div
                data-slot="tree-select-title"
                className="flex flex-row items-center justify-center flex-1 gap-1"
            >
                {/* 展开/收起按钮 */}
                {item.children && item.children.length > 0 && !item.disabled && (
                    <Button variant="transparent" size="link" onClick={toggleExpand}>
                        {expand ? (
                            <TriangleDownIcon className="size-4 text-secondary" />
                        ) : (
                            <TriangleRightIcon className="size-4 text-secondary" />
                        )}
                    </Button>
                )}

                {/* 节点内容 */}
                <div
                    className={cn(
                        'w-full flex flex-row items-center justify-between flex-1 rounded-md p-1',
                        'hover:bg-third-background',
                        !item.disabled && 'hover:text-primary',
                        isSelected && 'text-primary bg-third-background',
                        item.disabled && 'text-disabled'
                    )}
                    onClick={handleClick}
                >
                    {/* 左侧内容 */}
                    <div
                        className={cn(
                            'w-full flex flex-row items-center justify-start gap-2',
                            item.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                        )}
                    >
                        {/* 复选框 */}
                        {checkable && (
                            <Checkbox
                                disabled={item.disabled ?? false}
                                variant="default"
                                checked={checkedState}
                                onClick={(e) => e.stopPropagation()}
                                onCheckedChange={(checked) => {
                                    if (!showEdit && !item.disabled) {
                                        handleCheckChange(checked as boolean)
                                    }
                                }}
                            />
                        )}

                        {/* 图标 */}
                        {showIcon && (
                            <div className="size-5 flex items-center justify-center">
                                {item.icon ?? icon}
                            </div>
                        )}

                        {/* 标签/编辑输入框 */}
                        {showEdit ? (
                            <Input
                                variant="primary"
                                format="sm"
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => e.stopPropagation()}
                            />
                        ) : (
                            <div
                                className={cn(
                                    'w-full text-[13px]/5',
                                    item.disabled && 'text-disabled'
                                )}
                            >
                                {item.label}
                            </div>
                        )}
                    </div>

                    {/* 操作按钮组 */}
                    {canDo && (
                        <div className="flex flex-row items-center justify-center gap-1">
                            {/* 编辑/确认按钮 */}
                            {!showEdit ? (
                                <Button
                                    disabled={item.disabled ?? false}
                                    variant="transparent"
                                    size="link"
                                    className={cn(item.disabled && 'text-disabled')}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setShowEdit(true)
                                    }}
                                >
                                    <PenIcon />
                                </Button>
                            ) : (
                                <Button
                                    disabled={item.disabled ?? false}
                                    variant="transparent"
                                    size="link"
                                    className={cn(item.disabled && 'text-disabled')}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        editCallback?.(item)
                                        setShowEdit(false)
                                    }}
                                >
                                    <Check />
                                </Button>
                            )}

                            {/* 删除按钮 */}
                            <Button
                                disabled={item.disabled ?? false}
                                variant="transparent"
                                size="link"
                                className={cn(item.disabled && 'text-disabled')}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    deleteCallback?.(item)
                                }}
                            >
                                <DeleteIcon />
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* 子节点 */}
            {expand && item.children && (
                <div data-slot="tree-select-context" className="pl-8">
                    {item.children.map((childItem) => (
                        <TreeSelect
                            key={childItem.key}
                            item={childItem}
                            selectable={selectable}
                            selectedKeys={selectedKeys}
                            onSelectedChange={onSelectedChange}
                            checkable={checkable}
                            checkedKeys={checkedKeys}
                            onCheck={onCheck}
                            updateCheckedCallback={handleChildCheckChange}
                            showIcon={showIcon}
                            icon={icon}
                            canDo={canDo}
                            editCallback={editCallback}
                            deleteCallback={deleteCallback}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export { Tree, TreeSelect }