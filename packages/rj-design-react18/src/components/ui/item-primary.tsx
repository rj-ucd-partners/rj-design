import type { JSX } from "react";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from './item'
import { InfoCirecledIcon } from "../icon/infoCirecledIcon";
import { Button } from "./button";
import { CloseIcon } from "../icon/closeIcon";
interface PopoverItemProps {
    title?: string;
    description?: string | React.ReactNode | JSX.Element;
    showIcon?: boolean;
    icon?: React.ReactNode | JSX.Element;
    showClose?: boolean;
    onClose?: () => void;
    showFoot?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    className?: string;
}
function PopoverItem({
    title,
    description,
    showIcon = false,
    icon,
    showClose = false,
    onClose,
    showFoot = false,
    onConfirm,
    onCancel,
    className,
}: PopoverItemProps) {
    const shouldShowHeader = title || showClose;
    return <Item variant={"popover"} size={"flex"} className={className}>
        {shouldShowHeader && (
            <ItemHeader>
                <ItemTitle>
                    {showIcon && (icon ?? <InfoCirecledIcon className='text-primary' />)}
                    {title && ` ${title}`}
                </ItemTitle>
                {
                    showClose &&
                    <Button
                        variant="transparent"
                        size="link"
                        onClick={onClose}
                    >
                        <CloseIcon className="text-secondary-information" />
                    </Button>
                }
            </ItemHeader>
        )}
        <ItemContent>
            <ItemDescription>
                {description}
            </ItemDescription>
        </ItemContent>
        {
            showFoot &&
            <ItemFooter className='mt-2'>
                <Button
                    variant="default"
                    size="md"
                    onClick={onCancel}
                >
                    取消
                </Button>
                <Button
                    variant="primary"
                    size="md"
                    onClick={onConfirm}
                >
                    确认
                </Button>
            </ItemFooter>
        }
    </Item>
}

export { PopoverItem }