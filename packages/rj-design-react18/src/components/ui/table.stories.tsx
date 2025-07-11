import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Table>

// 基础表格
export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>基础表格示例</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>姓名</TableHead>
          <TableHead>邮箱</TableHead>
          <TableHead>角色</TableHead>
          <TableHead>状态</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>张三</TableCell>
          <TableCell>zhangsan@example.com</TableCell>
          <TableCell>管理员</TableCell>
          <TableCell>活跃</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>李四</TableCell>
          <TableCell>lisi@example.com</TableCell>
          <TableCell>用户</TableCell>
          <TableCell>活跃</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>王五</TableCell>
          <TableCell>wangwu@example.com</TableCell>
          <TableCell>编辑</TableCell>
          <TableCell>非活跃</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

// 带页脚的表格
export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>带页脚的表格示例</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>产品</TableHead>
          <TableHead>价格</TableHead>
          <TableHead>库存</TableHead>
          <TableHead>总价值</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>笔记本电脑</TableCell>
          <TableCell>¥8,999</TableCell>
          <TableCell>15</TableCell>
          <TableCell>¥134,985</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>智能手机</TableCell>
          <TableCell>¥3,299</TableCell>
          <TableCell>32</TableCell>
          <TableCell>¥105,568</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>无线耳机</TableCell>
          <TableCell>¥899</TableCell>
          <TableCell>45</TableCell>
          <TableCell>¥40,455</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>总计</TableCell>
          <TableCell>92</TableCell>
          <TableCell>¥281,008</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

// 紧凑型表格
export const Compact: Story = {
  render: () => (
    <Table className="text-xs">
      <TableCaption>紧凑型表格示例</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>任务</TableHead>
          <TableHead>负责人</TableHead>
          <TableHead>截止日期</TableHead>
          <TableHead>状态</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>#001</TableCell>
          <TableCell>设计系统更新</TableCell>
          <TableCell>张三</TableCell>
          <TableCell>2024-01-15</TableCell>
          <TableCell>进行中</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#002</TableCell>
          <TableCell>用户界面优化</TableCell>
          <TableCell>李四</TableCell>
          <TableCell>2024-01-20</TableCell>
          <TableCell>待开始</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#003</TableCell>
          <TableCell>性能测试</TableCell>
          <TableCell>王五</TableCell>
          <TableCell>2024-01-18</TableCell>
          <TableCell>已完成</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

// 可选择的表格
export const Selectable: Story = {
  render: () => (
    <Table>
      <TableCaption>可选择行的表格示例</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <input type="checkbox" />
          </TableHead>
          <TableHead>文件名</TableHead>
          <TableHead>大小</TableHead>
          <TableHead>修改日期</TableHead>
          <TableHead>类型</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-state="selected">
          <TableCell>
            <input type="checkbox" defaultChecked />
          </TableCell>
          <TableCell>document.pdf</TableCell>
          <TableCell>2.5 MB</TableCell>
          <TableCell>2024-01-10</TableCell>
          <TableCell>PDF</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>image.jpg</TableCell>
          <TableCell>1.8 MB</TableCell>
          <TableCell>2024-01-12</TableCell>
          <TableCell>图片</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>data.xlsx</TableCell>
          <TableCell>856 KB</TableCell>
          <TableCell>2024-01-14</TableCell>
          <TableCell>Excel</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

// 空状态表格
export const Empty: Story = {
  render: () => (
    <Table>
      <TableCaption>空状态表格示例</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>订单号</TableHead>
          <TableHead>客户</TableHead>
          <TableHead>金额</TableHead>
          <TableHead>状态</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
            暂无数据
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
} 