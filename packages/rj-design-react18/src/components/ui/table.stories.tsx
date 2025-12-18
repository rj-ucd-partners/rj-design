import {
  TableGroup,
  type TableColumn,
  type TableItem,

} from '@/components/ui/Table'
import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'
import { useState, type ReactNode } from 'react'

const meta: Meta<typeof TableGroup> = {
  title: 'Components/Table',
  tags: ['autodocs'],
  component: TableGroup,
  argTypes: {
    direction: {
      control: 'select',
      options: ['start', 'center', 'end']
    },
  },
}

export default meta

type Story = StoryObj<typeof TableGroup>

interface UserData extends TableItem {
  key: string;
  name: string;
  age: number;
  address: string | ReactNode;
}


const dataSource: UserData[] = [
  {
    key: '1',
    name: '普京',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '玉米晓夫',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '3',
    name: '安德罗波夫',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '4',
    name: '褚潇',
    age: 43,
    address: '湖南省邵阳市野猪窝',
  },
  {
    key: '5',
    name: '李知潭',
    age: 22,
    address: '湖南省邵阳市仙女洞',
  },
  {
    key: '6',
    name: '陈思伊',
    age: 28,
    address: '湖南省邵阳市陈家岭',
  },
  {
    key: '7',
    name: '谢飞机',
    age: 29,
    address: <div>东北谢家屯</div>
  }
];
const columns: TableColumn<UserData>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

//基础表格
export const Table: Story = {
  args: {
    direction: 'start',
    caption: '这是一个表格',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: false,
    selectdType: 'checkbox',
    selectedKeys: [],
  },
  render: (args) => {
    return <div className='w-250'><TableGroup {...args} /></div>
  }
}

//基础表格
export const StartTable: Story = {
  args: {
    direction: 'start',
    caption: '这是一个表格',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: false,
    selectdType: 'checkbox',
    selectedKeys: [],
  },
  render: (args) => {
    return <div className='w-250'><TableGroup {...args} /></div>
  }
}
//基础表格
export const CenterTable: Story = {
  args: {
    direction: 'center',
    caption: '这是一个表格',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: false,
    selectdType: 'checkbox',
    selectedKeys: [],
  },
  render: (args) => {
    return <div className='w-250'><TableGroup {...args} /></div>
  }
}
//基础表格
export const EndTable: Story = {
  args: {
    direction: 'end',
    caption: '这是一个表格',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: false,
    selectdType: 'checkbox',
    selectedKeys: [],
  },
  render: (args) => {
    return <div className='w-250'><TableGroup {...args} /></div>
  }
}

//带复选框的表格
export const HasCheckedBox: Story = {
  args: {
    caption: '这是一个表格',
    direction: 'start',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: true,
    selectdType: 'checkbox',
    selectedKeys: [],

  },
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(args.selectedKeys);
    const onSelectedChange = (keys: string[]) => {
      setSelected(keys);
    }
    return <div className='w-250'>
      <TableGroup  {...args}
        selectedKeys={selected}
        onSelectedChange={onSelectedChange} />
    </div>
  }
}

//带d单选框的表格
export const HasRadio: Story = {
  args: {
    caption: '这是一个表格',
    direction: 'start',
    dataSource: dataSource,
    columns: columns as TableColumn<TableItem>[],
    showSelected: true,
    selectdType: 'radio',
    selectedKeys: [],

  },
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(args.selectedKeys);
    const onSelectedChange = (keys: string[]) => {
      setSelected(keys);
    }
    return <div className='w-250'>
      <TableGroup
        {...args}
        selectedKeys={selected}
        onSelectedChange={onSelectedChange} />
    </div>
  }
}
const columns1: TableColumn<UserData>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend']
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
//带排序的表格
export const HasSort: Story = {
  args: {
    caption: '这是一个排序表格',
    direction: 'start',
    dataSource: dataSource,
    columns: columns1 as TableColumn<TableItem>[],
    showSelected: true,
    selectdType: 'radio',
    selectedKeys: [],
  },
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(args.selectedKeys);
    const onSelectedChange = (keys: string[]) => {
      setSelected(keys);
    }
    return <div className='w-250'>
      <TableGroup
        {...args}
        selectedKeys={selected}
        onSelectedChange={onSelectedChange} />
    </div>
  }
}
const columns2: TableColumn<UserData>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend']
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
    onFilter: (value, record) => { try { return record.age > parseFloat(value) } catch (e) { console.log('e', e); return false; } }
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    onFilter: (value, record) => {
      try {
        if (!record || !record.address) return false;
        const result = (record.address as string).indexOf(value as string) === 0;
        return result;
      } catch (e) { console.log('e', e); return false; }
    }
  },
];
//带筛选
export const HasFilter: Story = {
  args: {
    caption: '这是一个筛选表格',
    direction: 'start',
    dataSource: dataSource,
    columns: columns2 as TableColumn<TableItem>[],
    showSelected: true,
    selectdType: 'radio',
    selectedKeys: [],
  },
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(args.selectedKeys);
    const onSelectedChange = (keys: string[]) => {
      setSelected(keys);
    }
    return <div className='w-full'>
      <TableGroup
        {...args}
        selectedKeys={selected}
        onSelectedChange={onSelectedChange} />
    </div>
  }
}

