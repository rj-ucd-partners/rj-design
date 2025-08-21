import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { EmptyIcon } from "../icon/empty-icon"
import { Button } from "./button"

const emptyVariants = cva(
    '',
    {
        variants: {
            variant: {

            },
            size: {
                sm: 'size-14',
                md: 'size-22',
                lg: 'size-30',
            },
        },
        defaultVariants: {

        },
    }
)

function Empty({
    className,
    variant,
    size,
    desc,
    onOK,
    onDO,
    handlerDesc,
    ...props }:
    React.ComponentProps<"div">
    & VariantProps<typeof emptyVariants>
    & {
        desc?: string | undefined,
        handlerDesc?: string | undefined,
        onOK?: (() => (void | unknown)) | undefined,
        onDO?: (() => (void | unknown)) | undefined,
    }
) {
    return (
        <div
            data-slot="drawer-details"
            className={cn(
                "inline-flex flex-col flex-1 w-full h-full items-center justify-center gap-2",
                "text-[13px] leading-[20px] text-secondary-information",
                emptyVariants({ variant }),
                className,
            )}
            {...props}
        >
            <EmptyIcon className={cn(
                emptyVariants({ size: size }),
            )} />
            {
                desc ?
                    <div className="inline-flex flex-col gap-4">
                        <div className="inline-flex flex-row items-center justify-center gap-2">
                            <span>{desc}</span>
                            <Button variant={'link'} size={'link'} onClick={onDO}>{handlerDesc ?? '相关操作'}</Button>
                        </div>
                        <Button variant={'primary'} size={'md'} onClick={onOK}>
                            <span>知道了</span>
                        </Button>
                    </div>
                    :
                    <span>暂无内容</span>
            }

        </div>
    )
}
export { Empty }