import { cn } from "@/lib/utils"
import { Button } from "./button"
import { CloseIcon } from "../icon/closeIcon"
import { cva, type VariantProps } from "class-variance-authority"

const tagVariants = cva(
    '',
    {
        variants: {
            variant: {
                light: [
                    'text-[13px] leading-[20px] disabled:text-disabled',
                    'px-2 py-[1px]',
                    'rounded-sm',
                ],
                heavy: [],
                line: [],
                text: [],
            },
            color: {
                default: '',
            }
        },
    })

function Tag({
    variant = 'light',
    frontIcon,
    showClose = false,
    closeIcon,
    disabled = false,
    children,
    className,
}: React.ComponentProps<'div'> & VariantProps<typeof tagVariants> & {
    frontIcon?: React.ReactNode,
    showClose?: boolean,
    closeIcon?: React.ReactNode,
    disabled?: boolean,
}) {
    return (
        <div
            aria-disabled={true}
            className={cn(
                'inline-flex flex-row items-center justify-start gap-2',
                tagVariants({ variant }),
                className)}>
            {frontIcon}
            <div className=" line-clamp-1">
                {children}
            </div>
            {
                showClose &&
                <Button variant={'transparent'} size={'link'} disabled={disabled} onClick={() => { alert('close') }}>
                    {
                        closeIcon ? closeIcon : <CloseIcon className="size-4" />
                    }
                </Button>
            }
        </div>)
}
export { Tag }