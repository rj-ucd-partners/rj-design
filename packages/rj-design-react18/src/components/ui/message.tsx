import { cn } from "@/lib/utils";
import { InfoFillIcon } from "../icon/info-fill";
import { Button } from "./button";
import { CloseIcon } from "../icon/closeIcon";
import { useEffect, useState } from "react";
import { SuccessFillIcon } from "../icon/success-fill";
import { AbnormalFillIcon } from "../icon/abnormal-fill-icon";

function Message({
    message,
    showClose = false,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    message: string;
    status: 'success' | 'fail' | 'warning' | 'info' | 'destructive' | 'loading';
    showClose?: boolean;
}) {
    useEffect(() => {
        // const timer = setTimeout(() => setShow(false), 3000)
        // return () => clearTimeout(timer)
    }, [])

    const [show, setShow] = useState(true);
    const toClose = () => {
        setShow(false);
    }

    return (<div className={cn(
        'absolute top-5 left-1/2 transform -translate-x-1/2',
        'bg-text',
        'inline-flex flex-row items-center justify-center gap-2',
        'px-4 py-3 rounded-md',
        'border border-border-disabled shadow-[0px_5px_20px] shadow-background',
        !show && 'hidden',
        className
    )} {...props}>
        {
            props.status === 'info'
            &&
            <InfoFillIcon className="w-4 h-4" />
        }
        {
            props.status === 'destructive'
            &&
            <CloseIcon className="w-4 h-4 text-danger" />
        }
        {
            props.status === 'loading'
            &&
            <div className={`w-4 h-4 rounded-full border-1 border-t-transparent animate-spin`}></div>
        }
        {
            props.status === 'success'
            &&
            <SuccessFillIcon className="size-4" />
        }
        {
            props.status === 'warning'
            &&
            <AbnormalFillIcon className="size-4" />
        }
        <span className="w-min-[380px] text-[13px] leading-[20px] text-text-deep font-normal not-italic">{message}</span>
        {showClose &&
            <Button variant={'transparent'} size={'link'} onClick={toClose}>
                <CloseIcon className="size-4 text-secondary-information" />
            </Button>}
    </div>);
}


export { Message };