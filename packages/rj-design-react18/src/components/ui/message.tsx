import { cn } from "@/lib/utils";
import { SuccessMessageIcon } from "../icon/success-message-icon";

function Message({
    message = "成功",
    description,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    message?: string;
    description?: string;
}) {
    return (
        <div className={cn(
            'w-full h-full',
            'flex flex-col items-center justify-center',
            'gap-6',
            className
        )} {...props}>
            <SuccessMessageIcon />
            <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-[23px] leading-[32px] text-text-deep">{message}</span>
                {description &&
                    <span className="text-[15px] leading-[22px] text-secondary-information">{description}</span>
                }
            </div>
        </div>
    )
}

export { Message }