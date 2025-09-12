import type { Meta, StoryObj } from "@storybook/react-vite"
import { HeavyTag, Tag } from "./tag"
import { ManIcon } from "../icon/man-icon"

const meta: Meta<typeof Tag> = {
    title: 'Components/Tag',
    tags: ['autodocs'],
    component: Tag,
    argTypes: {
    },
}

export default meta

type Story = StoryObj<typeof Tag>
//标签
export const Default: Story = {
    args: {

    },
    render: () => {
        return (
            <div className="w-30">
                <Tag>默认标签</Tag>
            </div>
        );
    }
}

export const DefaultShowClose: Story = {
    args: {
        showClose: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag showClose={args.showClose}>默认标签</Tag>
            </div>
        );
    }
}

export const DefaultHasIcon: Story = {
    args: {
        showClose: true,
        frontIcon: <ManIcon className="size-3" />
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DefaultDisabled: Story = {
    args: {
        showClose: true,
        frontIcon: <ManIcon className="size-3" />,
        disabled: true
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DefaultLong: Story = {
    args: {
        showClose: true,
        frontIcon: <ManIcon className="size-3" />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签,但是我要测试超长</Tag>
            </div>
        );
    }
}

export const Primary: Story = {
    args: {
        variant: 'light',
        color: 'primary'
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const PrimaryHasIcon: Story = {
    args: {
        variant: 'light',
        color: 'primary',
        showClose: true,
        frontIcon: <ManIcon className="size-3" />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const PrimaryShowClose: Story = {
    args: {
        variant: 'light',
        color: 'primary',
        showClose: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}


export const PrimaryDisabled: Story = {
    args: {
        variant: 'light',
        color: 'primary',
        showClose: true,
        disabled: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const PrimarySmall: Story = {
    args: {
        variant: 'light',
        color: 'primary',
        showClose: true,
        frontIcon: <ManIcon />,
        size: 'sm'
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const PrimaryOnlyText: Story = {
    args: {
        variant: 'light',
        color: 'primary',
        showClose: true,
        frontIcon: <ManIcon />,
        size: 'text'
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>onlyEnglish</Tag>
            </div>
        );
    }
}

export const Destructive: Story = {
    args: {
        variant: 'light',
        color: 'destructive',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DestructiveDisabled: Story = {
    args: {
        variant: 'light',
        color: 'destructive',
        showClose: true,
        disabled: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const Abnormal: Story = {
    args: {
        variant: 'light',
        color: 'abnormal',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const AbnormalDisabled: Story = {
    args: {
        variant: 'light',
        color: 'abnormal',
        showClose: true,
        disabled: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const Success: Story = {
    args: {
        variant: 'light',
        color: 'success',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const SuccessDisabled: Story = {
    args: {
        variant: 'light',
        color: 'success',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const Warning: Story = {
    args: {
        variant: 'light',
        color: 'warning',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const WarningDisabled: Story = {
    args: {
        variant: 'light',
        color: 'warning',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const Offline: Story = {
    args: {
        variant: 'light',
        color: 'offline',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const OfflineDisabled: Story = {
    args: {
        variant: 'light',
        color: 'offline',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}
export const Blue: Story = {
    args: {
        variant: 'light',
        color: 'blue',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const BlueDisabled: Story = {
    args: {
        variant: 'light',
        color: 'blue',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DefaultLightLine: Story = {
    args: {
        variant: 'light-line',
        color: 'default',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DefaultLightLineDisabled: Story = {
    args: {
        variant: 'light-line',
        color: 'default',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const PrimaryLightLine: Story = {
    args: {
        variant: 'light-line',
        color: 'primary',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const PrimaryLightLineDisabled: Story = {
    args: {
        variant: 'light-line',
        color: 'primary',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DestructiveLightLine: Story = {
    args: {
        variant: 'light-line',
        color: 'destructive',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DestructiveLightLineDisabled: Story = {
    args: {
        variant: 'light-line',
        color: 'destructive',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const AbnormalLightLine: Story = {
    args: {
        variant: 'light-line',
        color: 'abnormal',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const AbnormalLightLineDisabled: Story = {
    args: {
        variant: 'light-line',
        color: 'abnormal',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const OfflineLightLine: Story = {
    args: {
        variant: 'light-line',
        color: 'offline',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const OfflineLightLineDisabled: Story = {
    args: {
        variant: 'light-line',
        color: 'offline',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}
export const BlueLightLine: Story = {
    args: {
        variant: 'light-line',
        color: 'blue',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const BlueLightLineDisabled: Story = {
    args: {
        variant: 'light-line',
        color: 'blue',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}


export const DefaultLine: Story = {
    args: {
        variant: 'line',
        color: 'default',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DefaultLineDisabled: Story = {
    args: {
        variant: 'line',
        color: 'default',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const PrimaryLine: Story = {
    args: {
        variant: 'line',
        color: 'primary',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const PrimaryLineDisabled: Story = {
    args: {
        variant: 'line',
        color: 'primary',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DestructiveLine: Story = {
    args: {
        variant: 'line',
        color: 'destructive',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DestructiveLineDisabled: Story = {
    args: {
        variant: 'line',
        color: 'destructive',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const SuccessLine: Story = {
    args: {
        variant: 'line',
        color: 'success',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const SuccessLineDisabled: Story = {
    args: {
        variant: 'line',
        color: 'success',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const AbnormalLine: Story = {
    args: {
        variant: 'line',
        color: 'abnormal',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const AbnormalLineDisabled: Story = {
    args: {
        variant: 'line',
        color: 'abnormal',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const WarningLine: Story = {
    args: {
        variant: 'line',
        color: 'warning',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const WarningLineDisabled: Story = {
    args: {
        variant: 'line',
        color: 'warning',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const OfflineLine: Story = {
    args: {
        variant: 'line',
        color: 'offline',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const OfflineLineDisabled: Story = {
    args: {
        variant: 'line',
        color: 'offline',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const BlueLine: Story = {
    args: {
        variant: 'line',
        color: 'blue',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const BlueLineDisabled: Story = {
    args: {
        variant: 'line',
        color: 'blue',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DefaultHeavy: Story = {
    args: {
        color: 'default',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const DefaultHeavyDisabled: Story = {
    args: {
        color: 'default',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const PrimaryHeavy: Story = {
    args: {
        color: 'primary',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const PrimaryHeavyDisabled: Story = {
    args: {
        color: 'primary',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const DestructiveHeavy: Story = {
    args: {
        color: 'destructive',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const DestructiveHeavyDisabled: Story = {
    args: {
        color: 'destructive',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const SuccessHeavy: Story = {
    args: {
        color: 'success',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const SuccessHeavyDisabled: Story = {
    args: {
        color: 'success',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const AbnormalHeavy: Story = {
    args: {
        color: 'abnormal',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const AbnormalHeavyDisabled: Story = {
    args: {
        color: 'abnormal',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const WarningHeavy: Story = {
    args: {
        color: 'warning',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const WarningHeavyDisabled: Story = {
    args: {
        color: 'warning',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const OfflineHeavy: Story = {
    args: {
        color: 'offline',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const OfflineHeavyDisabled: Story = {
    args: {
        color: 'offline',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const BlueHeavy: Story = {
    args: {
        color: 'blue',
        showClose: true,
        frontIcon: <ManIcon />,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const BlueHeavyDisabled: Story = {
    args: {
        color: 'blue',
        showClose: true,
        frontIcon: <ManIcon />,
        disabled: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const BlueHeavySmall: Story = {
    args: {
        color: 'blue',
        showClose: true,
        frontIcon: <ManIcon />,
        size: 'sm',
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>默认标签</HeavyTag>
            </div>
        );
    }
}

export const BlueHeavyText: Story = {
    args: {
        color: 'blue',
        showClose: true,
        frontIcon: <ManIcon />,
        size: 'text',
    },
    render: (args) => {
        return (
            <div className="w-30">
                <HeavyTag {...args}>onlyEnglish</HeavyTag>
            </div>
        );
    }
}

export const PrimaryLineCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'primary',
        frontIcon: <ManIcon />,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const PrimaryLineDisabledCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'primary',
        frontIcon: <ManIcon />,
        disabled: true,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DestructiveLineCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'destructive',
        frontIcon: <ManIcon />,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const DestructiveLineDisabledCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'destructive',
        frontIcon: <ManIcon />,
        disabled: true,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const SuccessLineCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'success',
        frontIcon: <ManIcon />,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const SuccessLineDisabledCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'success',
        frontIcon: <ManIcon />,
        disabled: true, checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const AbnormalLineCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'abnormal',
        frontIcon: <ManIcon />,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const AbnormalLineDisabledCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'abnormal',
        frontIcon: <ManIcon />,
        disabled: true,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const WarningLineCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'warning',
        frontIcon: <ManIcon />,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const WarningLineDisabledCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'warning',
        frontIcon: <ManIcon />,
        disabled: true,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const BlueLineCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'blue',
        frontIcon: <ManIcon />,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}

export const BlueLineDisabledCheckedable: Story = {
    args: {
        variant: 'line',
        color: 'blue',
        frontIcon: <ManIcon />,
        disabled: true,
        checkabled: true,
        checked: true,
    },
    render: (args) => {
        return (
            <div className="w-30">
                <Tag {...args}>默认标签</Tag>
            </div>
        );
    }
}