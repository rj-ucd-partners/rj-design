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
      options: ['default', 'primary', 'secondary', 'secondary-text', 'link', 'text', 'destructive', 'secondary-destructive', 'dashed', 'icon'],
    },
    size: {
      defaultValue: 'md',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'sm-icon', 'md-icon', 'lg-icon', 'sm-link', 'md-link', 'lg-link'],
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

// 前置图标按钮
export const Front: Story = {
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: (args) => {
    return (
      <Button {...args}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.50845 3C4.50844 3 4.50847 3 4.50845 3L7.4915 3C7.49149 3 7.49152 3 7.4915 3L9.75 3C10.1642 3 10.5 2.66421 10.5 2.25C10.5 1.83579 10.1642 1.5 9.75 1.5H7.5V0.766968C7.5 0.756787 7.4966 0.75 7.4915 0.75H4.5085C4.5034 0.75 4.5 0.756787 4.5 0.766968V1.5H2.25C1.83579 1.5 1.5 1.83579 1.5 2.25C1.5 2.66421 1.83579 3 2.25 3H4.50845Z" fill="white" />
          <path d="M3.37248 11.25H8.62726C8.9018 11.25 9.12914 11.0443 9.14777 10.7785L9.59871 4.28881C9.61859 3.99776 9.38008 3.75 9.07821 3.75H2.92154C2.61967 3.75 2.38115 3.99655 2.40103 4.28881L2.85197 10.7785C2.87061 11.0443 3.09794 11.25 3.37248 11.25ZM4.49991 5.25H5.24991V10.2981H4.49991V5.25ZM7.49991 5.25V10.2981H6.74991V5.25H7.49991Z" fill="white" />
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
    size: 'sm-icon'
  },
  render: (args) => {
    return (
      <Button {...args}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 2.5H5.5V5.5H2.5V6.5H5.5V9.5H6.5V6.5H9.5V5.5H6.5V2.5Z" />
        </svg>
      </Button>
    )
  }
}
// 悬浮按钮
export const HoverIcon: Story = {
  args: {
    variant: 'hover-icon',
    size: 'sm-icon'
  },
  render: (args) => {
    return (
      <Button {...args}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 4.5H7.5V7.5H4.5V8.5H7.5V11.5H8.5V8.5H11.5V7.5H8.5V4.5Z" />
        </svg>
      </Button>
    )
  }
}

// 悬浮按钮
export const Link: Story = {
  args: {
    variant: 'link',
    size: 'sm-link'
  },
  render: (args) => {
    return (
      <Button {...args}>
        链接按钮
      </Button>
    )
  }
}

// 图标链接按钮
export const IconLink: Story = {
  args: {
    variant: 'link',
    size: 'sm-link'
  },
  render: (args) => {
    return (
      <Button {...args}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5991 2.94197C14.355 2.69789 13.9593 2.69789 13.7152 2.94197L12.1154 4.5418C11.8713 4.78587 11.8713 5.1816 12.1154 5.42568L14.7671 8.07733C15.0111 8.32141 15.4069 8.32141 15.6509 8.07733L17.2508 6.4775C17.4948 6.23343 17.4948 5.8377 17.2508 5.59362L14.5991 2.94197ZM11.2315 6.30952C10.9874 6.06545 10.5917 6.06545 10.3476 6.30952L3.01765 13.6395C2.90044 13.7567 2.8346 13.9157 2.83459 14.0814L2.83459 16.7331C2.8346 17.0782 3.11442 17.3581 3.45959 17.3581L6.11125 17.3581C6.27701 17.3581 6.43598 17.2922 6.55319 17.175L13.8831 9.84506C14.1272 9.60098 14.1272 9.20525 13.8831 8.96118L11.2315 6.30952Z" fill="#00CFF4" />
        </svg>
        链接按钮
      </Button>
    )
  }
}