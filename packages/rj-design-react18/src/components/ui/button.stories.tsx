import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { TriangleDownIcon } from '@radix-ui/react-icons'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'secondary-text', 'link', 'text', 'destructive', 'secondary-destructive', 'dashed'],
    },
    size: {
      defaultValue: 'md',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean'
    }
  },
}

export default meta

type Story = StoryObj<typeof Button>


// 主要状态
export const Primary: Story = {
  args: {
    children: '主要按钮',
    variant: 'primary',
    size: 'md'
  },
}

// 默认状态
export const Default: Story = {
  args: {
    children: '默认按钮',
    variant: 'default',
    size: 'md'
  },
}

//次强调按钮
export const Secondary: Story = {
  args: {
    children: "次强调按钮",
    variant: 'secondary',
    size: 'md'
  },
}

//文字强调按钮
export const SecondaryText: Story = {
  args: {
    children: "文字强调按钮",
    variant: 'secondary-text',
    size: 'md'
  },
}

//文字按钮
export const Text: Story = {
  args: {
    children: "文字按钮",
    variant: 'text',
    size: 'md'
  },
}

//警告按钮
export const Destructive: Story = {
  args: {
    children: "危险按钮",
    variant: 'destructive',
    size: 'md'
  },
}

//危险描边按钮
export const SecondaryDestructive: Story = {
  args: {
    children: "危险描边按钮",
    variant: 'secondary-destructive',
    size: 'md'
  },
}

//虚线按钮
export const Dashed: Story = {
  args: {
    children: "虚线按钮",
    variant: 'dashed',
    size: 'md'
  },
}

// 后置图标按钮
export const Front: Story = {
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: (args) => {
    return (
      <Button {...args}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 4.5H7.5V7.5H4.5V8.5H7.5V11.5H8.5V8.5H11.5V7.5H8.5V4.5Z" fill="#08121A" />
        </svg>
        前置图标
      </Button>
    )
  }
}

// 后置图标按钮
export const Back: Story = {
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: (args) => {
    return (
      <Button {...args}>
        后置图标
        <TriangleDownIcon />
      </Button>
    )
  }
}

// 纯图标按钮
export const Icon: Story = {
  args: {
    variant: 'icon',
    size: 'icon1'
  },
  render: (args) => {
    return (
      <Button {...args}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 4.5H7.5V7.5H4.5V8.5H7.5V11.5H8.5V8.5H11.5V7.5H8.5V4.5Z" fill="#C0C7CF" />
        </svg>
      </Button>
    )
  }
}
// 纯图标按钮
export const HoverIcon: Story = {
  args: {
    variant: 'hover-icon',
    size: 'icon1'
  },
  render: (args) => {
    return (
      <Button {...args}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 4.5H7.5V7.5H4.5V8.5H7.5V11.5H8.5V8.5H11.5V7.5H8.5V4.5Z" fill="#C0C7CF" />
        </svg>
      </Button>
    )
  }
}