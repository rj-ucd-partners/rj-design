import { Badge } from '@/components/ui/badge'
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
      options: ['default', 'primary', 'success', 'abnormal'],
    },
    corner: {
      control: { type: 'select' },
      options: ['default', 'rounded',],
    }
  },
}

export default meta

type Story = StoryObj<typeof Badge>

// 默认徽章
export const Default: Story = {
  args: {
    children: '99+',
    variant: 'default',
    corner: 'default'
  },
}

// 默认徽章
export const Primary: Story = {
  args: {
    children: '99+',
    variant: 'primary',
    corner: 'default'
  },
}

// 成功徽章
export const Success: Story = {
  args: {
    children: '99+',
    variant: 'success',
    corner: 'default'
  },
}

// 警告徽章
export const Abnormal: Story = {
  args: {
    children: '99+',
    variant: 'abnormal',
    corner: 'default'
  },
}

// 默认徽章带圆角
export const DefaultRounded: Story = {
  args: {
    children: '99+',
    variant: 'default',
    corner: 'rounded'
  },
}

// 默认徽章带圆角
export const PrimaryRounded: Story = {
  args: {
    children: '99+',
    variant: 'primary',
    corner: 'rounded'
  },
}

// 成功徽章带圆角
export const SuccessRounded: Story = {
  args: {
    children: '99+',
    variant: 'success',
    corner: 'rounded'
  },
}

// 警告徽章带圆角
export const AbnormalRounded: Story = {
  args: {
    children: '99+',
    variant: 'abnormal',
    corner: 'rounded'
  },
}