import {
  TableGroup,

} from '@/components/ui/table'
import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'
import { useState } from 'react'

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

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '3',
    name: '牛魔王',
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
const columns = [
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
    columns: columns,
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
    columns: columns,
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
    columns: columns,
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
    columns: columns,
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
    columns: columns,
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
    columns: columns,
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
//带排序的表格
export const HasSort: Story = {
  args: {
    caption: '这是一个表格',
    direction: 'start',
    dataSource: dataSource,
    columns: columns,
    showSelected: true,
    selectdType: 'radio',
    selectedKeys: [],
    showSort: true
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

// // 带页脚的表格
// export const WithFooter: Story = {
//   args: {
//     direction: 'start',
//   },
//   render: (args) => (
//     <Table {...args}>
//       <TableCaption>带页脚的表格示例</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead>产品</TableHead>
//           <TableHead>价格</TableHead>
//           <TableHead>库存</TableHead>
//           <TableHead>总价值</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         <TableRow>
//           <TableCell>笔记本电脑</TableCell>
//           <TableCell>¥8,999</TableCell>
//           <TableCell>15</TableCell>
//           <TableCell>¥134,985</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>智能手机</TableCell>
//           <TableCell>¥3,299</TableCell>
//           <TableCell>32</TableCell>
//           <TableCell>¥105,568</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>无线耳机</TableCell>
//           <TableCell>¥899</TableCell>
//           <TableCell>45</TableCell>
//           <TableCell>¥40,455</TableCell>
//         </TableRow>
//       </TableBody>
//       <TableFooter>
//         <TableRow>
//           <TableCell colSpan={2}>总计</TableCell>
//           <TableCell>92</TableCell>
//           <TableCell>¥281,008</TableCell>
//         </TableRow>
//       </TableFooter>
//     </Table>
//   ),
// }

// // 紧凑型表格
// export const Compact: Story = {
//   render: () => (
//     <Table className="text-xs">
//       <TableCaption>紧凑型表格示例</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">ID</TableHead>
//           <TableHead>任务</TableHead>
//           <TableHead>负责人</TableHead>
//           <TableHead>截止日期</TableHead>
//           <TableHead>状态</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         <TableRow>
//           <TableCell>#001</TableCell>
//           <TableCell>设计系统更新</TableCell>
//           <TableCell>张三</TableCell>
//           <TableCell>2024-01-15</TableCell>
//           <TableCell>进行中</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>#002</TableCell>
//           <TableCell>用户界面优化</TableCell>
//           <TableCell>李四</TableCell>
//           <TableCell>2024-01-20</TableCell>
//           <TableCell>待开始</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>#003</TableCell>
//           <TableCell>性能测试</TableCell>
//           <TableCell>王五</TableCell>
//           <TableCell>2024-01-18</TableCell>
//           <TableCell>已完成</TableCell>
//         </TableRow>
//       </TableBody>
//     </Table>
//   ),
// }
