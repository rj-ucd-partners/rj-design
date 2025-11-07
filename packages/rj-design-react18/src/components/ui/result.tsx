import { cn } from "@/lib/utils";
import { SuccessResultIcon } from "../icon/success-result-icon";
import { Button } from "./button";
import { FailResultIcon } from "../icon/fail-result-icon";
import { WarningResultIcon } from "../icon/warning-result-icon";
import { InfoResultIcon } from "../icon/info-result-icon";
import { VerifyResultIcon } from "../icon/verify-result-icon";
import { LoadingResultIcon } from "../icon/loading-result-icon";

function Result({
    result,
    description,
    showAction = false,
    onConfirm,
    onReturn,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    result?: string;
    description?: string | string[];
    status: 'success' | 'fail' | 'warning' | 'info' | 'verify' | 'loading',
    showAction?: boolean,
    onConfirm?: () => void,
    onReturn?: () => void
}) {
    return (
        <div className={cn(
            'w-full h-full',
            'flex flex-col items-center justify-center',
            'gap-6',
            className
        )} {...props}>
            {
                props.status === 'success'
                &&
                <SuccessResultIcon />
            }
            {
                props.status === 'fail'
                &&
                <FailResultIcon />
            }
            {
                props.status === 'warning'
                &&
                <WarningResultIcon />
            }
            {
                props.status === 'info'
                &&
                <InfoResultIcon />
            }
            {
                props.status === 'verify'
                &&
                <VerifyResultIcon />
            }
            {
                props.status === 'loading'
                &&
                <LoadingResultIcon />
            }
            <div className="flex flex-col items-center justify-center gap-2">
                {
                    result &&
                    <span className="text-[23px] leading-[32px] text-text-deep">{result}</span>
                }
                {description &&
                    <span className="text-[15px] leading-[22px] text-secondary-information">{description}</span>
                }
            </div>
            {
                showAction &&
                <div className="flex flex-row items-center justify-center gap-2">
                    <Button variant={'default'} size={'md'} onClick={onReturn}>
                        回到首页
                    </Button>
                    <Button variant={'primary'} size={'md'} onClick={onConfirm}>
                        返回修改
                    </Button>
                </div>
            }
            {props.children}
        </div>
    )
}

function Solution({
    className,
    ...props }: React.ComponentProps<'div'> & {
        solutionItems: string[]
    }) {
    return (<div className={cn(
        'w-full',
        'inline-flex flex-col',
        'rounded-md',
        'bg-fill-dark-hover-active-disabled',
        'px-6 py-10',
        'text-[13px] leading-[20px] font-normal text-secondary-information',
        className
    )} {...props}>
        <span className="text-[15px] leading-[22px] font-medium text-text-deep">解决方案</span>
        {
            props.solutionItems.map((item, index) => {
                return (<span key={index}>
                    {index + 1}.{item}
                </span>);
            })
        }
    </div>)
}


function WebResult({
    result,
    code,
    description,
    onReturn,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    result?: string;
    code?: number;
    description?: string | string[];
    status: 'success' | 'fail' | 'warning' | 'info' | 'verify' | 'loading',
    onConfirm?: () => void,
    onReturn?: () => void
}) {
    return (<div className={cn(
        'inline-flex flex-row gap-10 items-center',
        'px-10',
        className
    )} {...props}>
        {
            props.status === 'success'
            &&
            <SuccessResultIcon />
        }
        {
            props.status === 'fail'
            &&
            <FailResultIcon />
        }
        {
            props.status === 'warning'
            &&
            <WarningResultIcon />
        }
        {
            props.status === 'info'
            &&
            <InfoResultIcon />
        }
        {
            props.status === 'verify'
            &&
            <VerifyResultIcon />
        }
        {
            props.status === 'loading'
            &&
            <LoadingResultIcon />
        }
        <div className={cn(
            'flex flex-col gap-4',
            ''
        )}>
            <span className="text-[23px] leading-[32px] font-large text-text-deep">{result}</span>
            {
                (description && description.length > 0) &&
                <div className={cn(
                    'flex flex-col',
                    'text-[15px] leading-[22px] text-secondary-information'
                )}>
                    {
                        typeof description == 'object' &&
                        description.map((item, index) => {
                            return <span key={index}>{index + 1}.{item}</span>
                        })
                    }
                    {
                        typeof description == 'string' &&
                        <span>{description}</span>
                    }
                </div>
            }
            {props.children}
            <div>
                <Button 
                    variant={'primary'} 
                    size={'md'} 
                    onClick={onReturn} 
                    className={cn(
                        code === 403 && 'bg-gradient-to-r from-[#7240FF] to-[#2797FF]'
                    )}
                    style={code === 403 ? {
                        background: 'linear-gradient(270deg, #7240FF -104.46%, #2797FF 100%)'
                    } : undefined}
                >
                    回到首页
                </Button>
            </div>
        </div>
    </div>);
}

export { Result, Solution, WebResult }