import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input, type InputProps } from '@/components/ui/Input'

const meta: Meta<InputProps> = {
  title: 'Components/Input',

  component: Input,
  argTypes: {
    variant: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['primary', 'success', 'destructive', 'warning'],
    },
    format: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      defaultValue: 'text',
      control: { type: 'select' },
      options: ['text', 'password', 'number'],
    },
    disabled: {
      control: 'boolean'
    }
  },
}

export default meta

type Story = StoryObj<InputProps>

// 输入框
export const Samll: Story = {
  args: {
    variant: 'primary',
    type: 'text',
    format: 'sm'
  },
  render: (args) => {
    return <div className='w-100'>
      <Input {...args} />
    </div>
  }
}
//中等
export const Mid: Story = {
  args: {
    variant: 'primary',
    type: 'text',
    format: 'md'
  },
  render: (args) => {
    return <div className='w-100'>
      <Input {...args} />
    </div>
  }
}
//大号
export const Large: Story = {
  args: {
    variant: 'primary',
    type: 'text',
    format: 'lg'
  },
  render: (args) => {
    return <div className='w-100'>
      <Input {...args} />
    </div>
  }
}

// 成功
export const Success: Story = {
  args: {
    variant: 'success',
    type: 'text',
    format: 'sm'
  },
  render: (args) => {
    return <div className='w-100'>
      <Input {...args} />
    </div>
  }
}

// 破坏性的
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    type: 'text',
    format: 'sm'
  },
  render: (args) => {
    return <div className='w-100'>
      <Input {...args} />
    </div>
  }
}

// 警示
export const Warning: Story = {
  args: {
    variant: 'warning',
    type: 'text',
    format: 'sm'
  },
  render: (args) => {
    return <div className='w-100'>
      <Input {...args} />
    </div>
  }
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    type: 'text',
    format: 'sm',
    disabled: true
  },
  render: (args) => {
    return <div className='w-100'>
      <Input {...args} />
    </div>
  }
}

// export const Icon: Story = {
//   args: {
//     variant: 'primary',
//     type: 'text',
//     format: 'sm'
//   },
//   render: (args) => {
//     return <div className='w-100'>
//       <Input {...args} frontIcon={<ManIcon className='text-disabled size-3' />} />
//     </div>
//   }
// }

// export const MidIcon: Story = {
//   args: {
//     variant: 'primary',
//     type: 'text',
//     format: 'md'
//   },
//   render: (args) => {
//     return <div className='w-100'>
//       <Input {...args} frontIcon={<ManIcon className='text-disabled size-4' />} />
//     </div>
//   }
// }

// export const LargeIcon: Story = {
//   args: {
//     variant: 'primary',
//     type: 'text',
//     format: 'md'
//   },
//   render: (args) => {
//     return <div className='w-100'>
//       <Input {...args} frontIcon={<ManIcon className='text-disabled size-5' />} />
//     </div>
//   }
// }
// export const PostIconSmall: Story = {
//   args: {
//     variant: 'primary',
//     type: 'text',
//     format: 'sm'
//   },
//   render: (args) => {
//     return <div className='w-100'>
//       <Input {...args} frontIcon={<ManIcon className='text-disabled size-3' />} postIcon={<MagnifierIcon className='text-secondary size-3' />} onClickCallback={() => { alert('乖！自己去实现') }} />
//     </div>
//   }
// }


// export const Password: Story = {
//   args: {
//     variant: 'primary',
//     format: 'sm'
//   },
//   render: (args) => {
//     const [type, setType] = useState<'text' | 'password'>('password');
//     const changeInputState = () => {
//       if (type === 'text') {
//         setType('password');
//       } else {
//         setType('text');
//       }
//     }
//     return <div className='w-100'>
//       <Input {...args} type={type} frontIcon={<ManIcon className='text-disabled size-3' />} postIcon={type === 'text' ? <Eye className='size-3' /> : <EyeClosed className='size-3' />} onClickCallback={changeInputState} />
//     </div>
//   }
// }

// export const CanClose: Story = {
//   args: {
//     variant: 'primary',
//     format: 'sm',
//     showClose: true
//   },
//   render: (args) => {
//     const [value, setValue] = useState<string | undefined>();
//     const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setValue(e.target.value)
//     }
//     const onCloseCallback = () => {
//       setValue('')
//     }
//     return <div className='w-100'>
//       <Input {...args} value={value} onValueChange={onValueChange} onCloseCallback={onCloseCallback}
//         frontIcon={<ManIcon className='text-disabled size-3' />} postIcon={<MagnifierIcon className='text-secondary size-3' />} onClickCallback={() => { alert('嘀嘀嘀打滴滴') }} />
//     </div>
//   }
// }


