import type { Meta, StoryObj } from "@storybook/react-vite"
import { Transfer, type TransferItem, } from "./transfer"
import React from "react"

const meta: Meta<typeof Transfer> = {
    title: 'Components/Transfer',
    tags: ['autodocs'],
    component: Transfer,
    argTypes: {

    },
}

export default meta

type Story = StoryObj<typeof Transfer>



const mockData = Array.from({ length: 50 }).map<TransferItem>((_, i) => ({
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
                <Transfer {...args} selectKeys={selectKeys} targetKeys={targetKeys} dataSource={mockData} onSelectChange={onSelectChange} onTargetChange={onTargetChange} showSearch={true} />
            </div>
        )
    }
}