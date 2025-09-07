import type { Meta, StoryObj } from "@storybook/react-vite"
import { Transfer } from "./transfer"
import React, { useEffect, type ReactNode } from "react"
import { Tree } from "./tree"
import type { BaseNode, TreeSelectableNode } from "@/common/type"

const meta: Meta<typeof Transfer> = {
    title: 'Components/Transfer',
    tags: ['autodocs'],
    component: Transfer,
    argTypes: {

    },
}

export default meta

type Story = StoryObj<typeof Transfer>



const mockData = Array.from({ length: 50 }).map<BaseNode>((_, i) => ({
    key: i.toString(),
    label: `content${i + 1}`,
}));

export const Primary: Story = {
    args: {},
    render: (args) => {

        const [selectKeys, setSelectKeys] = React.useState<string[]>([]);
        const [targetKeys, setTargetKeys] = React.useState<string[]>([]);

        const onSelectChange = (keys: string[]) => {
            console.log(keys)
            setSelectKeys(keys);
        }

        const onTargetChange = (nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => {
            console.log(nextTargetKeys, direction, moveKeys)
            setTargetKeys(nextTargetKeys);
        }

        return (
            <div style={{ width: '450px', height: 200 }}>
                <Transfer {...args} selectKeys={selectKeys} targetKeys={targetKeys} dataSource={mockData} onSelectChange={onSelectChange} onTargetChange={onTargetChange} />
            </div>
        )
    }
}


export const PrimaryshowPagination: Story = {
    args: {},
    render: (args) => {

        const [selectKeys, setSelectKeys] = React.useState<string[]>([]);
        const [targetKeys, setTargetKeys] = React.useState<string[]>([]);

        const onSelectChange = (keys: string[]) => {
            console.log(keys)
            setSelectKeys(keys);
        }

        const onTargetChange = (nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => {
            console.log(nextTargetKeys, direction, moveKeys)
            setTargetKeys(nextTargetKeys);
        }

        return (
            <div style={{ width: '450px', height: 250 }}>
                <Transfer {...args} selectKeys={selectKeys} targetKeys={targetKeys} dataSource={mockData} onSelectChange={onSelectChange} onTargetChange={onTargetChange} showPagination={true} />
            </div>
        )
    }
}


export const PrimaryCanSearch: Story = {
    args: {},
    render: (args) => {

        const [selectKeys, setSelectKeys] = React.useState<string[]>([]);
        const [targetKeys, setTargetKeys] = React.useState<string[]>([]);

        const onSelectChange = (keys: string[]) => {
            console.log(keys)
            setSelectKeys(keys);
        }

        const onTargetChange = (nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => {
            console.log(nextTargetKeys, direction, moveKeys)
            setTargetKeys(nextTargetKeys);
        }

        return (
            <div style={{ width: '450px', height: 250 }}>
                <Transfer {...args} selectKeys={selectKeys} targetKeys={targetKeys} dataSource={mockData} onSelectChange={onSelectChange} onTargetChange={onTargetChange} showSearch={true} showPagination={true} />
            </div>
        )
    }
}
const items: TreeSelectableNode[] = [
    {
        key: '1',
        label: '这是一个折叠面板1',
        disabled: false,
        children: [
            {
                key: '1-1',
                label: '这是一个子面板1',
                disabled: false,
                children: [
                    {
                        key: '1-1-1',
                        label: '这是一个孙面板1',
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

export const TreeTransfer: Story = {
    args: {
    },
    render: (args) => {

        const [selectKeys, setSelectKeys] = React.useState<string[]>([]);
        const [targetKeys, setTargetKeys] = React.useState<string[]>([]);
        const [dataSource, setDataSource] = React.useState<BaseNode[]>([]);

        const generateTree = (
            treeNodes: TreeSelectableNode[] = [],
            checkedKeys: string[] = [],
        ): TreeSelectableNode[] =>
            treeNodes.map(({ children, ...props }) => ({
                ...props,
                disabled: checkedKeys.includes(props.key as string),
                children: generateTree(children, checkedKeys),
            }));
        useEffect(() => {
            const data: BaseNode[] = [];
            const treeToItem = (treedata: TreeSelectableNode[], data: BaseNode[]) => {
                treedata.map((tree) => {
                    const item: BaseNode = {
                        key: tree.key,
                        label: tree.label,
                        disabled: tree.disabled
                    }
                    data.push(item);
                    if (tree.children) {
                        treeToItem(tree.children, data);
                    }
                })
            }
            treeToItem(items, data);
            setDataSource(data);
        }, [])

        const onSelectChange = (keys: string[]) => {
            console.log(keys)
            setSelectKeys(keys);
        }

        const onTargetChange = (nextTargetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => {
            console.log(nextTargetKeys, direction, moveKeys)
            setTargetKeys(nextTargetKeys);
        }

        const renderTree = (): ReactNode => {
            return (
                <Tree
                    treeData={generateTree(items, targetKeys)}
                    multiple={true}
                    checkable={true}
                    checkedKeys={selectKeys}
                    onCheck={onSelectChange}
                />
            );
        }

        return (
            <div style={{ width: '500px', height: 250 }}>
                <Transfer {...args} selectKeys={selectKeys} targetKeys={targetKeys} dataSource={dataSource} onTargetChange={onTargetChange} >
                    {renderTree()}
                </Transfer>
            </div>
        )
    }
}