import { Badge, BadgeDot } from '@/components/ui/Badge'
import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary-light', 'primary-heary', 'success-light', 'success-heary', 'abnormal-light', 'abnormal-heary'],
    },
    corner: {
      control: { type: 'select' },
      options: ['default', 'rounded'],
    }
  },
}

export default meta

type Story = StoryObj<typeof Badge>

// ========== Badge 徽章用例 ==========

// 默认徽章
export const Default: Story = {
  args: {
    children: '99+',
    variant: 'default',
    corner: 'default'
  },
}

// 主色调-浅色
export const PrimaryLight: Story = {
  args: {
    children: '99+',
    variant: 'primary-light',
    corner: 'default'
  },
}

// 主色调-深色
export const PrimaryHeary: Story = {
  args: {
    children: '99+',
    variant: 'primary-heary',
    corner: 'default'
  },
}

// 成功-浅色
export const SuccessLight: Story = {
  args: {
    children: '成功',
    variant: 'success-light',
    corner: 'default'
  },
}

// 成功-深色
export const SuccessHeary: Story = {
  args: {
    children: '成功',
    variant: 'success-heary',
    corner: 'default'
  },
}

// 警告-浅色
export const AbnormalLight: Story = {
  args: {
    children: '警告',
    variant: 'abnormal-light',
    corner: 'default'
  },
}

// 警告-深色
export const AbnormalHeary: Story = {
  args: {
    children: '警告',
    variant: 'abnormal-heary',
    corner: 'default'
  },
}

// ========== 圆角变体 ==========

// 默认圆角
export const DefaultRounded: Story = {
  args: {
    children: '圆角',
    variant: 'default',
    corner: 'rounded'
  },
}

// 主色调-浅色-圆角
export const PrimaryLightRounded: Story = {
  args: {
    children: 'NEW',
    variant: 'primary-light',
    corner: 'rounded'
  },
}

// 主色调-深色-圆角
export const PrimaryHearyRounded: Story = {
  args: {
    children: 'HOT',
    variant: 'primary-heary',
    corner: 'rounded'
  },
}

// 成功-浅色-圆角
export const SuccessLightRounded: Story = {
  args: {
    children: '已完成',
    variant: 'success-light',
    corner: 'rounded'
  },
}

// 成功-深色-圆角
export const SuccessHearyRounded: Story = {
  args: {
    children: '已完成',
    variant: 'success-heary',
    corner: 'rounded'
  },
}

// 警告-浅色-圆角
export const AbnormalLightRounded: Story = {
  args: {
    children: '待处理',
    variant: 'abnormal-light',
    corner: 'rounded'
  },
}

// 警告-深色-圆角
export const AbnormalHearyRounded: Story = {
  args: {
    children: '待处理',
    variant: 'abnormal-heary',
    corner: 'rounded'
  },
}

// ========== 组合展示 ==========

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm text-secondary w-32">默认圆角：</span>
        <Badge variant="default">默认</Badge>
        <Badge variant="primary-light">主色浅</Badge>
        <Badge variant="primary-heary">主色深</Badge>
        <Badge variant="success-light">成功浅</Badge>
        <Badge variant="success-heary">成功深</Badge>
        <Badge variant="abnormal-light">警告浅</Badge>
        <Badge variant="abnormal-heary">警告深</Badge>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm text-secondary w-32">圆角样式：</span>
        <Badge variant="default" corner="rounded">默认</Badge>
        <Badge variant="primary-light" corner="rounded">主色浅</Badge>
        <Badge variant="primary-heary" corner="rounded">主色深</Badge>
        <Badge variant="success-light" corner="rounded">成功浅</Badge>
        <Badge variant="success-heary" corner="rounded">成功深</Badge>
        <Badge variant="abnormal-light" corner="rounded">警告浅</Badge>
        <Badge variant="abnormal-heary" corner="rounded">警告深</Badge>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm text-secondary w-32">徽章点：</span>
        <BadgeDot variant="destructive" />
        <BadgeDot variant="primary" />
        <BadgeDot variant="success" />
        <BadgeDot variant="abnormal" />
        <BadgeDot variant="warning" />
        <BadgeDot variant="alarm" />
        <BadgeDot variant="online" />
        <BadgeDot variant="offline" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '所有徽章变体的组合展示'
      }
    }
  }
}
