import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tree } from "./Tree"
import React from "react"
import { ManGroupIcon } from "../icon/ManGroupIcon"
import { DogIcon } from "lucide-react"
import type { TreeSelectableNode } from "@/common/type"

const meta: Meta<typeof Tree> = {
    title: 'Components/Tree',
    tags: ['autodocs'],
    component: Tree,
    argTypes: {

    },
}

const items: TreeSelectableNode[] = [
    {
        key: '1',
        label: '这是一个折叠面板1',
        disabled: false,
        icon: <DogIcon />,
        children: [
            {
                key: '1-1',
                label: '这是一个子面板1',
                disabled: false,
                children: [
                    {
                        key: '1-1-1',
                        label: '这是一个孙面板1',
                        disabled: true,
                    }
                ]
            },
            {
                key: '1-2',
                label: '这是一个子折叠面板2',
                disabled: false,
            },
            {
                key: '1-3',
                label: '这是一个子折叠面板3',
                disabled: false,
            },
        ]
    },
    {
        key: '2',
        label: '这是一个折叠面板2',
        disabled: false,
        children: [
            {
                key: '2-1',
                label: '这是一个子面板1',
                disabled: false,
            },
            {
                key: '2-2',
                label: '这是一个子折叠面板2',
                disabled: false,
            },
            {
                key: '2-3',
                label: '这是一个子折叠面板3',
                disabled: false,
            },
        ]
    },
    {
        key: '3-1',
        label: '这是一个折叠面板3',
        disabled: false,
    },
    {
        key: '3-3',
        label: '这是一个折叠面板4',
        disabled: false,
    }
]
export default meta

type Story = StoryObj<typeof Tree>

export const Default: Story = {
    args: {},
    render: () => {
        const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
        const onSelectedChange = (keys: string[]) => {
            setSelectedKeys(keys);
        }
        return (
            <div className="w-60">
                <Tree treeData={items} checkable={false} selectedKeys={selectedKeys} onSelectedChange={onSelectedChange} />
            </div>);
    }
}

export const Selected: Story = {
    args: {},
    render: () => {
        const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
        const onSelectedChange = (keys: string[]) => {
            setSelectedKeys(keys);
        }
        return (
            <div className="w-60">
                <Tree treeData={items} selectable={true} checkable={false} selectedKeys={selectedKeys} onSelectedChange={onSelectedChange} />
            </div>);
    }
}

export const Multiple: Story = {
    args: {},
    render: () => {
        const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
        const onSelectedChange = (keys: string[]) => {
            setSelectedKeys(keys);
        }
        return (
            <div className="w-60">
                <Tree treeData={items} selectable={true} multiple={true} checkable={false} selectedKeys={selectedKeys} onSelectedChange={onSelectedChange} />
            </div>);
    }
}

export const Checkedable: Story = {
    args: {},
    render: () => {
        const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
        const onSelectedChange = (keys: string[]) => {
            setSelectedKeys(keys);
        }
        const [checkedKeys, setCheckedKeys] = React.useState<string[]>([]);
        const onCheckedChange = (keys: string[]) => {
            setCheckedKeys(keys);
        }
        return (
            <div className="w-60">
                <Tree
                    treeData={items}
                    selectable={true}
                    multiple={true}
                    checkable={true}
                    selectedKeys={selectedKeys}
                    onSelectedChange={onSelectedChange}
                    checkedKeys={checkedKeys}
                    onCheck={onCheckedChange}
                />
            </div>);
    }
}

export const Icon: Story = {
    args: {},
    render: () => {
        const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
        const onSelectedChange = (keys: string[]) => {
            setSelectedKeys(keys);
        }
        const [checkedKeys, setCheckedKeys] = React.useState<string[]>([]);
        const onCheckedChange = (keys: string[]) => {
            setCheckedKeys(keys);
        }
        return (
            <div className="w-60">
                <Tree
                    showIcon={true}
                    icon={<ManGroupIcon />}
                    treeData={items}
                    selectable={true}
                    multiple={true}
                    checkable={true}
                    selectedKeys={selectedKeys}
                    onSelectedChange={onSelectedChange}
                    checkedKeys={checkedKeys}
                    onCheck={onCheckedChange}
                />
            </div>);
    }
}

export const CanDo: Story = {
    args: {},
    render: () => {
        const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
        const onSelectedChange = (keys: string[]) => {
            setSelectedKeys(keys);
        }
        const [checkedKeys, setCheckedKeys] = React.useState<string[]>([]);
        const onCheckedChange = (keys: string[]) => {
            setCheckedKeys(keys);
        }
        const toEdit = (item: TreeSelectableNode) => {
            console.log('item', item);
            alert('编辑,这是一个受控组件，自己补充逻辑');
        }
        const toDelete = (item: TreeSelectableNode) => {
            console.log('item', item);
            alert('删除,这是一个受控组件，自己补充逻辑');
        }
        return (
            <div className="w-90">
                <Tree
                    showIcon={true}
                    icon={<ManGroupIcon />}
                    treeData={items}
                    selectable={true}
                    multiple={true}
                    checkable={true}
                    selectedKeys={selectedKeys}
                    onSelectedChange={onSelectedChange}
                    checkedKeys={checkedKeys}
                    onCheck={onCheckedChange}
                    canDo={true}
                    editCallback={toEdit}
                    deleteCallback={toDelete}
                />
            </div>);
    }
}