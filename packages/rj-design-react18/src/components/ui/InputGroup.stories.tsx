import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/InputGroup"
import { ManIcon } from '../icon/ManIcon'
import { MagnifierIcon } from '../icon/MagnifierIcon'
import { useState } from 'react'
import { LockIcon } from '../icon/LockIcon'
import { EyeIcon } from '../icon/EyeIcon'
import { EyeClosed } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface InputGroupProps extends React.ComponentProps<"div"> {
  variant?: 'primary' | 'success' | 'destructive' | 'warning',
  size: 'sm' | 'md' | 'lg',
  disabled?: boolean,
  description?: string
}

const meta: Meta<InputGroupProps> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  argTypes: {
    variant: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['primary', 'success', 'destructive', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean'
    }

  },
}

export default meta

type Story = StoryObj<InputGroupProps>

// 输入框: 小
export const SamllInputGroup: Story = {
  args: {
    variant: 'primary',
    size: 'sm'
  },
  render: (args) => {
    return <div className='w-100 '>
      <InputGroup  {...args}>
        <InputGroupAddon>
          <ManIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="请输入"
        />
        <InputGroupAddon align={'inline-end'}>
          <MagnifierIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  }
}

// 输入框： 中
export const MiddleInputGroup: Story = {
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: (args) => {
    return <div className='w-100 '>
      <InputGroup  {...args}>
        <InputGroupAddon>
          <ManIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="请输入"
        />
        <InputGroupAddon align={'inline-end'}>
          <MagnifierIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  }
}

// 输入框： 大
export const LargeInputGroup: Story = {
  args: {
    variant: 'primary',
    size: 'lg'
  },
  render: (args) => {
    return <div className='w-100 '>
      <InputGroup  {...args}>
        <InputGroupAddon>
          <ManIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="请输入"
        />
        <InputGroupAddon align={'inline-end'}>
          <MagnifierIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  }
}

// 受控组件
export const ControlledInputGroup: Story = {
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: (args) => {
    const [data, setData] = useState<string>('');
    return <div className='w-100 '>
      <InputGroup  {...args}>
        <InputGroupAddon>
          <ManIcon />
        </InputGroupAddon>
        <InputGroupInput
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="请输入"
        />
        <InputGroupAddon align={'inline-end'}>
          <MagnifierIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  }
}

// 输入框: 成功
export const SuccessInputGroup: Story = {
  args: {
    variant: 'success',
    size: 'sm'
  },
  render: (args) => {
    return <div className='w-100 '>
      <InputGroup  {...args}>
        <InputGroupAddon>
          <ManIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="请输入"
        />
        <InputGroupAddon align={'inline-end'}>
          <MagnifierIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  }
}

// 输入框: 危险
export const DestructiveInputGroup: Story = {
  args: {
    variant: 'destructive',
    size: 'sm'
  },
  render: (args) => {
    return <div className='w-100 '>
      <InputGroup  {...args}>
        <InputGroupAddon>
          <ManIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="请输入"
        />
        <InputGroupAddon align={'inline-end'}>
          <MagnifierIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  }
}

// 输入框: 警告
export const WarningInputGroup: Story = {
  args: {
    variant: 'warning',
    size: 'sm'
  },
  render: (args) => {
    return <div className='w-100 '>
      <InputGroup  {...args}>
        <InputGroupAddon>
          <ManIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="请输入"
        />
        <InputGroupAddon align={'inline-end'}>
          <MagnifierIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  }
}

// 输入框: 不可用
export const DisabledInputGroup: Story = {
  args: {
    variant: 'primary',
    size: 'sm'
  },
  render: (args) => {
    return <div className='w-100 '>
      <InputGroup disabled={true} {...args}>
        <InputGroupAddon>
          <ManIcon />
        </InputGroupAddon>
        <InputGroupInput disabled={true}
          placeholder="请输入"
        />
        <InputGroupAddon align={'inline-end'}>
          <MagnifierIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  }
}

// 输入框: 密码输入框
export const PasswordInputGroup: Story = {
  args: {
    variant: 'primary',
    size: 'sm'
  },
  render: (args) => {
    const [data, setData] = useState<string>('');
    const [type, setType] = useState<'password' | 'text'>('password')
    const changeType = () => {
      if (type === 'password') {
        setType('text')
      } else {
        setType('password')
      }
    }
    return <div className='w-100 '>
      <InputGroup {...args}>
        <InputGroupAddon>
          <LockIcon />
        </InputGroupAddon>
        <InputGroupInput
          disabled={args.disabled}
          type={type}
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="请输入"
        />
        <InputGroupButton variant={'transparent'} size={'icon-xs'} onClick={changeType} disabled={args.disabled}>
          {
            type === 'password' ?
              <EyeIcon />
              :
              <EyeClosed />
          }
        </InputGroupButton>
      </InputGroup>
    </div>
  }
}
// 输入框: 带描述
export const InputGroupDescription: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    description: "额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行"
  },
  render: (args) => {
    const [data, setData] = useState<string>('');

    return <div className='w-100 '>
      <InputGroup {...args}>
        <InputGroupInput
          disabled={args.disabled}
          type={'text'}
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="请输入"
        />

      </InputGroup>
      <div className={cn(
        'text-[12px] leading-[20px] p-1',
        args.variant === 'primary' && 'text-secondary-information',
        args.variant === 'destructive' && 'text-danger',
        args.variant === 'warning' && 'text-abnormal',
        args.variant === 'success' && 'text-success'
      )}>
        {args.description}
      </div>
    </div>
  }
}

// 输入框: 带描述
export const InputGroupClear: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    description: "额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行额外提示语，文字过多时输入框宽度折行"
  },
  render: (args) => {
    const [data, setData] = useState<string>('');
    const clear = () => {
      setData('')
    }
    return <InputGroup {...args} className='w-40' clearable={true} onClear={clear}>
      <InputGroupInput
        disabled={args.disabled}
        type={'text'}
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="请输入"
      />
      <InputGroupAddon align={'inline-end'}>
        <MagnifierIcon />
      </InputGroupAddon>
    </InputGroup>
  }
}