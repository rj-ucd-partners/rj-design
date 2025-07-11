import { Badge } from '@/components/ui/badge'
import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Badge>

// 默认徽章
export const Default: Story = {
  args: {
    children: '默认',
    variant: 'default',
  },
}

// 次要徽章
export const Secondary: Story = {
  args: {
    children: '次要',
    variant: 'secondary',
  },
}

// 危险徽章
export const Destructive: Story = {
  args: {
    children: '危险',
    variant: 'destructive',
  },
}

// 描边徽章
export const Outline: Story = {
  args: {
    children: '描边',
    variant: 'outline',
  },
} 