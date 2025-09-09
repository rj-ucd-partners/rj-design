import type { Meta, StoryObj } from "@storybook/react-vite"
import { SearchSelect } from "./search"
import { FavoriteIcon } from "../icon/FavoriteIcon"
import { MagnifierIcon } from "../icon/magnifier-icon"
import { useState } from "react"


const meta: Meta<typeof SearchSelect> = {
    title: 'Components/SearchSelect',
    component: SearchSelect,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
    },
}

export default meta

type Story = StoryObj<typeof SearchSelect>
const items = [
    {
        key: 'apple',
        label: 'Apple',
    },
    {
        key: 'banana',
        label: 'Banana',
    },
    {
        key: 'orange',
        label: 'Orange',
    },
    {
        key: 'grape',
        label: 'Grape',
    },
    {
        key: 'bayberry',
        label: 'Bayberry',
    },
    {
        key: 'cherry',
        label: 'Cherry',
    },
    {
        key: 'strawberry',
        label: 'Strawberry',
    },
    {
        key: 'blueberry',
        label: 'Blueberry',
        disabled: true,
    }
]

export const Primary: Story = {
    args: {
        datasource: items,
        size: 'lg',
        disabled: false,
        placeholder: '请选择',
        frontIcon: <FavoriteIcon className='size-4' />,
        postIcon: <MagnifierIcon className='size-4' />,
        showClear: true
    },
    render: (args) => {
        const [selectValue, setSelectValue] = useState<string | undefined>();
        const onValueChange = (value: string) => {
            setSelectValue(value);
        }

        return (<SearchSelect value={selectValue} onValueChange={onValueChange} {...args} className="w-100" />);
    }
}