import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useCallback } from "react";

const textareaVariants = cva(
    'px-2 py-[5px] text-text-deep text-[13px] leading-[20px] rounded-md overflow-hidden text-ellipsis outline-none focus-visible:outline focus-visible:outline-solid disabled:hover:bg-fill-dark-hover-active-disabled disabled:bg-fill-dark-hover-active-disabled disabled:text-disabled',
    {
        variants: {
            variant: {
                primary: 'bg-third-background hover:bg-fill-light-hover-bg focus-visible:outline-primary',
                success: 'bg-success-light focus-visible:outline-success-hover',
                destructive: 'bg-danger-light focus-visible:outline-danger',
                warning: 'bg-warning-light focus-visible:outline-warning'
            },
            resize: {
                both: "resize",
                vertical: "resize-y",
                horizontal: "resize-x",
                none: "resize-none"
            }
        },
        defaultVariants: {
        },
    })

export const Textarea = ({
    variant,
    resize = 'both',
    value,
    onChange,
    maxLength,
    description,
    className,
    ...props
}: React.ComponentProps<'textarea'> & VariantProps<typeof textareaVariants> & {
    description?: string
}) => {
    const getValueLength = useCallback(() => {
        if (!value) return 0;
        if (typeof value == 'string') return value.length;
        if (typeof value == 'number') return value.toString().length;
        if (typeof value == 'object') return value.toString().length;
    }, [value])
    return (
        <div className=" ">
            <div className="relative inline-flex">
                <textarea
                    className={cn(
                        textareaVariants({ variant, resize }),
                        className
                    )}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
                <span className="z-50 absolute bottom-1 right-1 text-[13px] leading-[20px] text-secondary-information">{getValueLength()}/{maxLength}</span>
                <span className={cn(
                    'z-50 absolute bottom-[-40px] ',
                    'text-[12px] leading-[20px]',
                    variant === 'primary' && 'text-text-secondary-information',
                    variant === 'destructive' && 'text-danger',
                    variant === 'warning' && 'text-abnormal',
                    variant === 'success' && 'text-success'
                )}>{description}</span>
            </div>
        </div>

    );
}