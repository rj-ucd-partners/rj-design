import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HexagonIcon } from "../icon/hexagon-icon";
import { useLayoutEffect, useRef, useState } from "react";
import { SuccessIconStep } from "../icon/success-icon";

interface StepItem {
    title: string,
    description?: string,
    icon?: React.ReactNode,
}

const Status = {
    Wait: 'wait',
    Process: 'process',
    Finish: 'finish',
    Error: 'error',
} as const;
type Status = typeof Status[keyof typeof Status];

const stepsVariants = cva(
    "flex",
    {
        variants: {
            direction: {
                horizontal: cn(
                    'flex-row',
                    'w-full',
                ),
                vertical: cn(
                    'flex-col',
                    'h-full'
                )
            }
        },
        defaultVariants: {
            direction: 'horizontal'
        },
    })
function Steps({
    className,
    progressDot = false,
    direction = 'horizontal',
    current = 0,
    status = Status.Process,
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof stepsVariants> & {
    items?: StepItem[] | undefined,
    current?: number | undefined,
    progressDot?: boolean,
    status?: Status,
}) {
    const getItemStatus = (index: number) => {
        if (index < current) {
            return Status.Finish;
        }
        if (index === current) {
            return status;
        }
        return Status.Wait;
    }
    return (
        <div
            data-slot="steps"
            className={cn(
                stepsVariants({ direction: direction }),
                (!progressDot || direction === 'vertical') && "gap-2",

                className)}
            {...props}>
            {
                props.items?.map((item, index) => {
                    return (
                        <Step
                            key={index}
                            item={item}
                            progressDot={progressDot}
                            status={getItemStatus(index)}
                            direction={direction}
                            index={index}
                            totalCount={props.items?.length}
                        />
                    );
                })
            }
        </div>
    );
}
function Step({
    direction = 'horizontal',
    item,
    index,
    totalCount,
    ...props
}: React.ComponentProps<'div'>
    & {
        item: StepItem,
        progressDot: boolean,
        status: Status,
        direction?: 'horizontal' | 'vertical' | null,
        index: number,
        totalCount?: number,
    }
) {
    const isLast = index === (totalCount || 0) - 1;
    return (
        direction === 'horizontal' ? (
            props.progressDot ?
                <StepHorizontalDot
                    item={item}
                    status={props.status}
                    index={index}
                    isLast={isLast} />
                :
                <StepHorizontalIcon
                    item={item}
                    status={props.status}
                    index={index}
                    isLast={isLast}
                />
        ) : (
            <StepVertical
                item={item}
                status={props.status}
                index={index}
                isLast={isLast}
                progressDot={props.progressDot} />
        )
    );
}
function StepHorizontalDot({
    className,
    item,
    ...props
}: React.ComponentProps<'div'> & {
    item: StepItem,
    status: Status,
    index: number,
    isLast: boolean,
}) {
    const contextRef = useRef<HTMLDivElement>(null);
    const [leftOffset, setLeftOffset] = useState(0);

    useLayoutEffect(() => {
        if (contextRef.current) {
            const width = contextRef.current.offsetWidth;
            setLeftOffset(width / 2);
        }
    }, [item.title, item.description]);
    return (
        <div
            data-slot="step-dot"
            className={cn(
                'relative',
                'flex flex-col items-start justify-center',
                !props.isLast && 'flex-1',
                className)}
            {...props}>
            {!props.isLast && (
                <div className={cn(
                    'absolute top-[7px] w-full h-[1px] z-0',
                    props.status === Status.Finish && 'bg-success',
                    props.status === Status.Process && 'bg-primary',
                    props.status === Status.Wait && 'bg-border',
                    props.status === Status.Error && 'bg-danger',
                )}
                    style={{
                        left: `${leftOffset}px`,
                    }} />
            )}
            <div
                ref={contextRef}
                className={cn(
                    'flex flex-col items-center justify-center',
                )}>
                <div className={cn(
                    'size-4 bg-background z-10',
                    'flex flex-col items-center justify-center',
                )}>
                    <div className={cn(
                        'relative z-10',
                        'h-2 w-2',
                        'rounded-full',
                        "border-[2px]",
                        props.status === Status.Finish && 'border-success',
                        props.status === Status.Process && 'bg-primary border-primary',
                        props.status === Status.Wait && 'border-border',
                        props.status === Status.Error && 'border-danger')}
                    />
                </div>
                <div className={cn(
                    'text-[15px]/5.5',
                    'line-clamp-1',
                    props.status === Status.Finish && 'text-text-deep',
                    props.status === Status.Process && 'text-primary',
                    props.status === Status.Wait && 'text-secondary-information',
                    props.status === Status.Error && 'text-danger',
                )}>
                    {item.title}
                </div>
                <div className={cn(
                    'text-[12px]/5 text-secondary-information',
                    'line-clamp-1',
                )}>
                    {item.description}
                </div>
            </div>
        </div>
    );
}
function StepHorizontalIcon({
    className,
    item,
    index,
    isLast,
    ...props
}: React.ComponentProps<'div'>
    &
    {
        item: StepItem,
        status: Status,
        index: number,
        isLast?: boolean,
    }
) {
    const num = index + 1;
    return (
        <div
            data-slot="step-icon"
            className={cn(
                'flex flex-col',
                !isLast && 'flex-1',
            )}>
            <div className={cn(
                "flex flex-row items-center",
                'gap-4',
                'h-min-10',
                className)} {...props}>
                {
                    item.icon ?
                        <div className={cn(
                            "size-8 flex items-center justify-center",
                            props.status === Status.Finish && 'text-success',
                            props.status === Status.Process && 'text-primary',
                            props.status === Status.Wait && 'text-secondary',
                            props.status === Status.Error && 'text-danger',
                        )}>
                            {item.icon}
                        </div>
                        :
                        (
                            <>
                                {
                                    props.status === Status.Finish
                                    &&
                                    <SuccessIconStep className="size-8" fill="text-" />
                                }
                                {
                                    props.status === Status.Process
                                    &&
                                    <div className="size-8 relative" >
                                        <HexagonIcon className="size-8 fill-primary" />
                                        <div className={cn(
                                            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                                            'text-text text-[13px] font-normal leading-[20px]',
                                        )}>
                                            {num}
                                        </div>
                                    </div>
                                }
                                {
                                    props.status === Status.Wait
                                    &&
                                    <div className={cn(
                                        'size-8',
                                        'rounded-full',
                                        'bg-primary-light',
                                        'border border-primary',
                                        'relative'
                                    )}>

                                        <div className={cn(
                                            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                                            'text-primary text-[13px] font-normal leading-[20px]',
                                        )}>
                                            {num}
                                        </div>
                                    </div>
                                }
                                {
                                    props.status === Status.Error
                                    &&
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 28.25C22.7655 28.25 28.25 22.7655 28.25 16C28.25 9.23451 22.7655 3.75 16 3.75C9.23451 3.75 3.75 9.23451 3.75 16C3.75 22.7655 9.23451 28.25 16 28.25ZM21.3305 12.0022L17.3326 16.0001L21.3305 19.9979L19.9979 21.3306L16 17.3327L12.0021 21.3306L10.6695 19.9979L14.6674 16.0001L10.6695 12.0022L12.0021 10.6696L16 14.6675L19.9979 10.6696L21.3305 12.0022Z" fill="#D02600" />
                                    </svg>
                                }
                            </>
                        )
                }
                <div className={cn(
                    'text-[15px] font-normal leading-[22px]',
                    'line-clamp-1',
                    props.status === Status.Finish && 'text-text-deep',
                    props.status === Status.Process && 'text-primary',
                    props.status === Status.Wait && 'text-secondary-information',
                    props.status === Status.Error && 'text-danger',
                )}>
                    {item.title}
                </div>
                {!isLast && (
                    <div
                        className={cn(
                            'z-0',
                            'flex-1',
                            'h-[2px]',
                            props.status === Status.Finish && 'bg-success',
                            props.status === Status.Process && 'bg-primary',
                            props.status === Status.Wait && 'bg-border',
                            props.status === Status.Error && 'bg-danger',
                        )}
                        style={{
                            minWidth: '80px',
                        }}
                    />
                )}
            </div>
            <div className={cn(
                'w-full',
                'text-secondary-information text-[12px] font-normal leading-[20px] line-clamp-1',
            )}
                style={{ paddingLeft: '48px' }}
            >
                {item.description}
            </div>
        </div>


    );
}
function StepVertical({
    className,
    item,
    index,
    isLast,
    progressDot = false,
    ...props }: React.ComponentProps<'div'> & {
        item: StepItem,
        status: Status,
        index: number,
        isLast: boolean,
        count?: number,
        progressDot?: boolean,
    }) {
    const num = index + 1;
    return (
        <div
            data-slot="step-dot"
            className={cn(
                'relative',
                'flex flex-row flex-1 gap-2',
                className)}
        >
            {/**
             * 图标部分
             */}
            <div className={cn(
                'flex flex-col items-center gap-1',)}>
                {
                    progressDot ?
                        <div className={cn(
                            'relative z-10',
                            'h-2 w-2',
                            'rounded-full',
                            "border-[2px]",
                            props.status === Status.Finish && 'border-success',
                            props.status === Status.Process && 'bg-primary border-primary',
                            props.status === Status.Wait && 'border-border',
                            props.status === Status.Error && 'border-danger')} /> : (
                            item.icon ?
                                <div className={cn(
                                    "size-8 flex items-center justify-center",
                                    props.status === Status.Finish && 'text-success',
                                    props.status === Status.Process && 'text-primary',
                                    props.status === Status.Wait && 'text-secondary',
                                    props.status === Status.Error && 'text-danger',
                                )}>
                                    {item.icon}
                                </div>
                                :
                                <div
                                    className={cn(
                                        'size-8',
                                    )}>
                                    {
                                        props.status === Status.Finish &&
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.25 16C28.25 22.7655 22.7655 28.25 16 28.25C9.23451 28.25 3.75 22.7655 3.75 16C3.75 9.23451 9.23451 3.75 16 3.75C22.7655 3.75 28.25 9.23451 28.25 16ZM22.1797 12.9064L20.9423 11.669L14.7552 17.856L11.6879 14.7887L10.4504 16.0261L14.7551 20.3311L22.1797 12.9064Z" fill="#00FFA8" />
                                        </svg>
                                    }
                                    {
                                        props.status === Status.Process
                                        &&
                                        <div className="size-8 relative" >
                                            <HexagonIcon className="size-8 fill-primary" />
                                            <div className={cn(
                                                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                                                'text-text text-[13px] font-normal leading-[20px]',
                                            )}>
                                                {num}
                                            </div>
                                        </div>
                                    }
                                    {
                                        props.status === Status.Wait
                                        &&
                                        <div className={cn(
                                            'size-8',
                                            'rounded-full',
                                            'bg-primary-light',
                                            'border border-primary',
                                            'relative'
                                        )}>

                                            <div className={cn(
                                                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                                                'text-primary text-[13px] font-normal leading-[20px]',
                                            )}>
                                                {num}
                                            </div>
                                        </div>
                                    }
                                    {
                                        props.status === Status.Error
                                        &&
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 28.25C22.7655 28.25 28.25 22.7655 28.25 16C28.25 9.23451 22.7655 3.75 16 3.75C9.23451 3.75 3.75 9.23451 3.75 16C3.75 22.7655 9.23451 28.25 16 28.25ZM21.3305 12.0022L17.3326 16.0001L21.3305 19.9979L19.9979 21.3306L16 17.3327L12.0021 21.3306L10.6695 19.9979L14.6674 16.0001L10.6695 12.0022L12.0021 10.6696L16 14.6675L19.9979 10.6696L21.3305 12.0022Z" fill="#D02600" />
                                        </svg>
                                    }
                                </div>
                        )
                }
                {
                    !isLast &&
                    <div
                        className={cn(
                            'flex',
                            'h-full w-[2px]',
                            props.status === Status.Finish && 'bg-success',
                            props.status === Status.Process && 'bg-primary',
                            props.status === Status.Wait && 'bg-border',
                            props.status === Status.Error && 'bg-danger',
                        )}
                    ></div>
                }
            </div>
            {/**
             * 文字部分
             */}
            <div className={cn(
                'flex flex-col gap-2',
                'font-normal not-italic'
            )}>
                <div className={cn(
                    'text-[15px]/5.5 ',
                    props.status === Status.Finish && 'text-text-deep',
                    props.status === Status.Process && 'text-primary',
                    props.status === Status.Wait && 'text-secondary-information',
                    props.status === Status.Error && 'text-danger',
                )}>
                    {item.title}
                </div>
                <div className={cn(
                    'flex flex-1',
                    'text-[12px]/5',
                )}>
                    {item.description}
                </div>
            </div>
        </div>
    );
}

export { Steps, Step };