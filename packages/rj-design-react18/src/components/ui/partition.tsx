import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { TriangleDownIcon } from "../icon/TriangleDownIcon"

const partitionVariants = cva(
    "font-medium not-italic text-text-deep",
    {
        variants: {
            size: {
                xs: 'text-[15px] leading-[22px]',
                sm: 'text-[17px] leading-[24px]',
                md: 'text-[19px] leading-[28px]',
                lg: 'text-[23px] leading-[32px]',
            },
        },
        defaultVariants: {
        },
    }
)


function Partition({
    className,
    variant,
    size = 'md',
    ...props }: React.ComponentProps<"div">
    & VariantProps<typeof partitionVariants>
    & {
        variant?: 'solid' | 'outline' | 'dashed' | undefined,
        title: string,
    }
) {
    return (
        <div className={cn(
            'flex flex-row gap-2 items-center justify-start',
            'w-full',
            partitionVariants({ size: size }),
            className
        )}>
            {
                variant === 'solid' &&
                <div className={cn(
                    'bg-primary rounded-full',
                    size === 'xs' ? 'size-1' : 'size-2',
                )} />
            }
            {
                variant === 'outline' &&
                <div className={cn(
                    'box-border border-[2px] border-primary rounded-full',
                    size === 'xs' ? 'size-1' : 'size-2',
                )} />
            }
            <span>
                {props.title}
            </span>
            {
                variant === 'dashed' &&
                <div className='inline-flex flex-row gap-2 items-center justify-start'>
                    <div className="size-4 flex items-center justify-center text-secondary">
                        <TriangleDownIcon />
                    </div>
                    <div className="w-16 h-[1px] box-border border-t border-dashed border-border-split">
                    </div>
                </div>
            }
            {props.children}
        </div>
    )
}

export { Partition }