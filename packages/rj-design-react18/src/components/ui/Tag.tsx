import { cn } from "@/lib/utils"
import { Button } from "./Button"
import { CloseIcon } from "../icon/CloseIcon"
import { cva, type VariantProps } from "class-variance-authority"
import { useState } from "react"
import { CheckIcon } from "../icon/CheckIcon"


const tagVariants = cva(
    'data-[state=disabled]:pointer-events-none',
    {
        variants: {
            color: {
                default: [
                    'bg-fill',
                    'data-[state=disabled]:bg-fill-dark-hover-active-disabled',
                    'data-[state=disabled]:text-disabled',
                    'border-border',
                    'data-[state=disabled]:border-border-disabled',
                ],
                primary: [
                    'bg-primary/10',
                    'text-primary',
                    'data-[state=disabled]:text-primary-disabled',
                    'border-primary',
                    'data-[state=disabled]:border-primary-disabled',
                ],
                destructive: [
                    'bg-danger/10',
                    'text-danger',
                    'data-[state=disabled]:text-danger-disabled',
                    'border-danger',
                    'data-[state=disabled]:border-danger-disabled'
                ],
                abnormal: [
                    'bg-[#FFA800]/10',
                    'text-abnormal',
                    'data-[state=disabled]:text-abnormal-disabled',
                    'border-abnormal',
                    'data-[state=disabled]:border-abnormal-disabled'
                ],
                success: [
                    'bg-[#00FFA8]/10',
                    'text-success',
                    'data-[state=disabled]:text-success-disabled',
                    'border-success',
                    'data-[state=disabled]:border-success-disabled'

                ],
                warning: [
                    'bg-[#FFE500]/10',
                    'text-warning',
                    'data-[state=disabled]:text-warning-disabled',
                    'border-warning',
                    'data-[state=disabled]:border-warning-disabled'
                ],
                offline: [
                    'bg-fill-emphasize',
                    'text-secondary',
                    'data-[state=disabled]:text-disabled',
                    'data-[state=disabled]:bg-fill-dark-hover-active-disabled',
                    'border-border',
                    'data-[state=disabled]:border-disabled'
                ],
                blue: [
                    'bg-[#007AFF]/10',
                    'text-data-blue',
                    'data-[state=disabled]:text-[#315882]',
                    'border-data-blue',
                    'data-[state=disabled]:border-[#315882]'
                ]
            },
            variant: {
                light: [
                ],
                'light-line': [
                    'border',
                ],
                line: [
                    'border',
                    'bg-transparent',
                    'data-[state=disabled]:bg-transparent'
                ],
            },
            size: {
                md: [
                    'text-[13px] leading-[20px]',
                    'px-2 py-[1px]',
                    'rounded-sm',],
                sm: [
                    'text-[11px] leading-[16px]',
                    'px-1 py-[1px]',
                    'rounded-sm',],
                text: [
                    'text-[10px] leading-[11px]',
                    'px-1 py-[2px]',
                    'rounded-sm',]
            }
        },
    })
const tagFrontIconVariants = cva(
    '',
    {
        variants: {
            color: {
                default: [
                    '[&_svg]:text-secondary',
                    'data-[state=disabled]:[&_svg]:text-disabled'
                ],
                primary: [
                ],
                destructive: [],
                abnormal: [],
                success: [],
                warning: [],
                offline: [],
                blue: [
                    // 'data-[state=disabled]:[&_svg]:text-disabled'
                ]
            },
            size: {
                md: ['[&_svg]:size-3'],
                sm: ['[&_svg]:size-3'],
                text: ['[&_svg]:size-2']
            }
        },
    })
const tagCloseIconVariants = cva(
    '',
    {
        variants: {
            color: {
                default: [
                    '[&_svg]:text-secondary-information',
                    'data-[state=disabled]:[&_svg]:text-disabled'
                ],
                primary: [
                ],
                destructive: [],
                abnormal: [],
                success: [],
                warning: [],
                offline: [],
                blue: [
                    // 'data-[state=disabled]:[&_svg]:text-disabled'
                ]
            },
            size: {
                md: ['[&_svg]:size-4'],
                sm: ['[&_svg]:size-3'],
                text: ['[&_svg]:size-2']
            }
        },
    })
const tagCheckIconVariants = cva(
    '',
    {
        variants: {
            color: {
                default: [
                ],
                primary: [
                    'text-primary',
                    'data-[state=disabled]:text-primary-disabled',
                ],
                destructive: [
                    'text-danger',
                    'data-[state=disabled]:text-danger-disabled',
                ],
                abnormal: [
                    'text-abnormal',
                    'data-[state=disabled]:text-abnormal-disabled',
                ],
                success: [
                    'text-success',
                    'data-[state=disabled]:text-success-disabled',
                ],
                warning: [
                    'text-warning',
                    'data-[state=disabled]:text-warning-disabled',
                ],
                offline: [],
                blue: [
                    'text-data-blue',
                    'data-[state=disabled]:text-[#315882]',
                ]
            },

        },
    })
function Tag({
    variant = 'light',
    color = 'default',
    size = 'md',
    frontIcon,
    showClose = false,
    closeIcon,
    disabled = false,
    children,
    className,
    checkabled = false,
    checked = false,
}: React.ComponentProps<'div'> & VariantProps<typeof tagVariants> & {
    frontIcon?: React.ReactNode,
    showClose?: boolean,
    closeIcon?: React.ReactNode,
    disabled?: boolean,
    checkabled?: boolean,
    checked?: boolean,
}) {
    const [hidden, setHidden] = useState<boolean>(false);

    return (
        <div
            data-state={disabled ? 'disabled' : 'enable'}
            className={cn(
                'inline-flex flex-row items-center justify-start gap-2',
                'cursor-pointer',
                'relative',
                tagVariants({ variant, color, size }),
                className,
                hidden && 'hidden',
            )}>
            {
                frontIcon
                &&
                <div
                    data-state={disabled ? 'disabled' : 'enable'}
                    className={cn(
                        tagFrontIconVariants({ color, size })
                    )}>
                    {frontIcon}
                </div>
            }
            <div className="line-clamp-1">
                {children}
            </div>
            {
                showClose &&
                <Button
                    data-state={disabled ? 'disabled' : 'enable'}
                    className={cn(
                        tagCloseIconVariants({ color, size })
                    )} variant={'transparent'} size={'link'} disabled={disabled} onClick={(e) => {
                        e.stopPropagation();
                        setHidden(true);
                    }}>
                    {
                        closeIcon ? closeIcon : <CloseIcon className="size-4" />
                    }
                </Button>
            }
            {
                checkabled && checked &&
                <CheckIcon
                    data-state={disabled ? 'disabled' : 'enable'}
                    className={cn(
                        'absolute bottom-[-1px] right-[-1px]',
                        tagCheckIconVariants({ color })
                    )} />

            }

        </div>)
}

const heavyTagVariants = cva(
    'data-[state=disabled]:pointer-events-none',
    {
        variants: {
            color: {
                default: [
                    'bg-fill',
                    'data-[state=disabled]:bg-fill-dark-hover-active-disabled',
                    'data-[state=disabled]:text-disabled',
                ],
                primary: [
                    'bg-primary',
                    'text-text',
                    'data-[state=disabled]:bg-primary/10',
                    'data-[state=disabled]:text-primary-disabled',
                ],
                destructive: [
                    'bg-danger',
                    'text-text-deep',
                    'data-[state=disabled]:bg-danger/10',
                    'data-[state=disabled]:text-danger-disabled',
                ],
                abnormal: [
                    'bg-abnormal',
                    'text-text',
                    'data-[state=disabled]:bg-abnormal-light',
                    'data-[state=disabled]:text-abnormal-disabled',
                ],
                success: [
                    'bg-success',
                    'text-text',
                    'data-[state=disabled]:bg-success-active',
                    'data-[state=disabled]:text-success-disabled',
                ],
                warning: [
                    'bg-warning',
                    'text-text',
                    'data-[state=disabled]:bg-[#493e23]',
                    'data-[state=disabled]:text-warning-disabled',
                ],
                offline: [
                    'bg-fill-emphasize',
                    'text-text-deep',
                    'data-[state=disabled]:text-disabled',
                    'data-[state=disabled]:bg-fill-dark-hover-active-disabled',
                ],
                blue: [
                    'bg-data-blue',
                    'text-text',
                    'data-[state=disabled]:text-[#00264F]',
                    'data-[state=disabled]:bg-[#1D4A7B]'
                ]
            },
            size: {
                md: [
                    'text-[13px] leading-[20px]',
                    'px-2 py-[1px]',
                    'rounded-sm',],
                sm: [
                    'text-[11px] leading-[16px]',
                    'px-1 py-[1px]',
                    'rounded-sm',],
                text: [
                    'text-[10px] leading-[11px]',
                    'px-1 py-[2px]',
                    'rounded-sm',]
            }
        },
    })

const heavyTagFrontIconVariants = cva(
    '',
    {
        variants: {
            color: {
                default: [
                    '[&_svg]:text-secondary-information',
                    'data-[state=disabled]:[&_svg]:text-disabled'
                ],
                primary: [
                ],
                destructive: [],
                abnormal: [],
                success: [],
                warning: [],
                offline: [],
                blue: []
            },
            size: {
                md: ['[&_svg]:size-3'],
                sm: ['[&_svg]:size-3'],
                text: ['[&_svg]:size-2']
            }
        },
    })

const heavyTagCloseIconVariants = cva(
    '',
    {
        variants: {
            color: {
                default: [
                    '[&_svg]:text-secondary-information',
                    'data-[state=disabled]:[&_svg]:text-disabled'
                ],
                primary: [
                ],
                destructive: [],
                abnormal: [],
                success: [],
                warning: [],
                offline: [],
                blue: [
                ]
            },
            size: {
                md: ['[&_svg]:size-4'],
                sm: ['[&_svg]:size-3'],
                text: ['[&_svg]:size-2']
            }
        },
    })

function HeavyTag({
    color = 'default',
    size = 'md',
    frontIcon,
    showClose = false,
    closeIcon,
    disabled = false,
    children,
    className,
}: React.ComponentProps<'div'> & VariantProps<typeof heavyTagVariants> & {
    frontIcon?: React.ReactNode,
    showClose?: boolean,
    closeIcon?: React.ReactNode,
    disabled?: boolean,
}) {
    const [hidden, setHidden] = useState<boolean>(false);

    return (
        <div
            data-state={disabled ? 'disabled' : 'enable'}
            className={cn(
                'inline-flex flex-row items-center justify-start gap-2',
                'cursor-pointer',
                heavyTagVariants({ color, size }),
                className,
                hidden && 'hidden',
            )}>
            {
                frontIcon
                &&
                <div
                    data-state={disabled ? 'disabled' : 'enable'}
                    className={cn(
                        heavyTagFrontIconVariants({ color, size })
                    )}>
                    {frontIcon}
                </div>
            }
            <div className="line-clamp-1">
                {children}
            </div>
            {
                showClose &&
                <Button
                    data-state={disabled ? 'disabled' : 'enable'}
                    className={cn(
                        heavyTagCloseIconVariants({ color, size })
                    )} variant={'transparent'} size={'link'} disabled={disabled} onClick={(e) => {
                        e.stopPropagation();
                        setHidden(true);
                    }}>
                    {
                        closeIcon ? closeIcon : <CloseIcon className="size-4" />
                    }
                </Button>
            }
        </div>)
}
export { Tag, HeavyTag }