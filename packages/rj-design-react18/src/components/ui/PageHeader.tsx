import { cn } from "@/lib/utils"
import { ReturnIcon } from "../icon/ReturnIcon"

function PageHeader({
    className,
    ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn(
            'rounded-[10px]',
            'w-full',
            'p-4',
            'flex flex-col gap-4',
            'bg-card',
            className)}>
            {props.children}
        </div>
    )
}
function PageHeaderTitle({
    className,
    ...props }: React.ComponentProps<"div"> & {
    }) {
    return (
        <div className={cn(
            'flex flex-row items-center justify-between flex-1 gap-4',
            className)} {...props} />
    )
}
function PageHeaderTitleStart({
    hasReturn = true,
    className,
    ...props }: React.ComponentProps<"div"> & {
        hasReturn?: boolean | undefined,
        title: string,
        description?: string,
    }) {
    return (
        <div className={cn(
            'flex flex-row items-center justify-start gap-3',
            className
        )}>
            {
                hasReturn &&
                <ReturnIcon width={24} height={24} />
            }
            <div className={cn(
                'flex flex-row items-center justify-start gap-2',
                className
            )}>
                <span className="text-[17px] leading-[24px] font-medium not-italic text-text-deep">{props.title}</span>
                {
                    props.description &&
                    <span className="text-[13px] leading-[20px] font-nromal not-italic text-secondary-information">{props.description}</span>
                }
                {props.children}
            </div>
        </div>
    )
}
function PageHeaderTitleEnd({
    className,
    ...props }: React.ComponentProps<"div"> & {
    }) {
    return (
        <div className={cn(
            'flex flex-row items-center justify-end gap-2',
            className
        )}>
            {props.children}
        </div>
    )
}
export { PageHeader, PageHeaderTitle, PageHeaderTitleStart, PageHeaderTitleEnd }