import { BadgeDot } from '@/components/ui/badge'
import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'

const meta: Meta<typeof BadgeDot> = {
  title: 'Components/BadgeDot',
  component: BadgeDot,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['destructive'],
    },
  },
}

export default meta

type Story = StoryObj<typeof BadgeDot>

// 破坏性的徽章
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: () => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot variant={'destructive'} /> <span className='text-[14px] leading-[22px]'>断开</span>
      </div>
    )
  }
}

// 离线&down的徽章
export const Offline: Story = {
  args: {
    variant: 'down',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>离线&down</span>
      </div>
    )
  }
}

// 成功的徽章
export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>成功</span>
      </div>
    )
  }
}

// 进度的徽章
export const Purple: Story = {
  args: {
    variant: 'purple',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>进度</span>
      </div>
    )
  }
}

// 预警的徽章
export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>预警</span>
      </div>
    )
  }
}

// 告警的徽章
export const Alarm: Story = {
  args: {
    variant: 'alarm',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>告警</span>
      </div>
    )
  }
}

// 在线的徽章
export const Online: Story = {
  args: {
    variant: 'online',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>在线</span>
      </div>
    )
  }
}

//异常
export const SecondaryDanger: Story = {
  args: {
    variant: 'secondary-danger',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>次警告</span>
      </div>
    )
  }
}

//主要
export const Main: Story = {
  args: {
    variant: 'main',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>主要</span>
      </div>
    )
  }
}

//次要
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>次要</span>
      </div>
    )
  }
}

//青
export const Blueness: Story = {
  args: {
    variant: 'blueness',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>青</span>
      </div>
    )
  }
}

//玫红
export const Rose: Story = {
  args: {
    variant: 'rose',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>玫红</span>
      </div>
    )
  }
}

//绿
export const Green: Story = {
  args: {
    variant: 'green',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>绿帽子</span>
      </div>
    )
  }
}

//离线
export const OfflineDown: Story = {
  args: {
    variant: 'offline',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>离线</span>
      </div>
    )
  }
}

//Blue
export const Blue: Story = {
  args: {
    variant: 'blue',
  },
  render: (args) => {
    return (
      <div className='inline-flex flex-row gap-2 items-center justify-center '>
        <BadgeDot {...args} /> <span className='text-[14px] leading-[22px]'>警告</span>
      </div>
    )
  }
}