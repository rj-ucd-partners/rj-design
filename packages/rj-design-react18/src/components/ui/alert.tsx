import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { CloseIcon } from "../icon/closeIcon"
import { InfoCirecledIcon } from "../icon/infoCirecledIcon"
import { SuccessIcon } from "../icon/successIcon"
import { AbnormalIcon } from "../icon/abnormalIcon"
import type { JSX } from "react/jsx-runtime"

export interface AlertProps {
  variant?: 'primary' | 'success' | 'destructive' | 'abnormal',
  time?: number,
  onClose?: () => void,
  show?: boolean,
  icon?: boolean,
  border?: boolean,
  closeFuncArea?: React.ReactNode | JSX.Element,
  titleFuncArea?: React.ReactNode | JSX.Element,
  description?: string,
}
interface AlertContextProps {
  variant?: 'primary' | 'success' | 'destructive' | 'abnormal',
  icon?: boolean,
  border?: boolean,
  onClose?: () => void,
  closeFuncArea?: React.ReactNode | JSX.Element,
  titleFuncArea?: React.ReactNode | JSX.Element,
}
const AlertContext = React.createContext<AlertContextProps | undefined>(undefined)
function useAlertContext() {
  const context = React.useContext(AlertContext)
  if (context === undefined) {
    throw new Error('useAlertContext must be used within a Alert')
  }
  return context
}


const alertVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: "bg-[#00CFF4]/20 border-primary-disabled",
        success: "bg-[#00FFA8]/20 border-success-special",
        abnormal: "bg-[#FFA800]/20 border-abnormal-special",
        destructive: "bg-[#FF3C00]/20 border-danger-special"
      },
      border: {
        true: "border",
        false: "border-none",
      }
    },
  }
)

function Alert({
  time,
  show,
  onClose,
  icon,
  border,
  closeFuncArea,
  titleFuncArea,
  variant,
  className,
  ...props
}: React.ComponentProps<"div">
  & AlertProps) {
  // 判断是否为受控组件（有外部 show 传入）
  const isControlled = show !== undefined;

  // 内部状态：仅在非受控模式下使用
  const [internalShow, setInternalShow] = React.useState(true);

  // 实际显示状态：受控时用外部 show，非受控时用内部状态
  const isVisible = isControlled ? show : internalShow;

  // 处理关闭事件
  const handleClose = React.useCallback(() => {
    if (isControlled && onClose) {
      // 受控模式：调用外部 onClose
      onClose();
    } else if (!isControlled) {
      // 非受控模式：更新内部状态
      setInternalShow(false);
    }
  }, [isControlled, onClose]);

  // 自动关闭定时器
  React.useEffect(() => {
    if (time && time > 0 && isVisible) {
      const timer = setTimeout(() => {
        handleClose();
      }, time);
      return () => clearTimeout(timer);
    }
  }, [time, isVisible, handleClose]);

  return (
    <AlertContext.Provider value={{ icon, border, variant, onClose: handleClose, closeFuncArea: closeFuncArea, titleFuncArea: titleFuncArea }}>
      <div
        data-slot="alert"
        role="alert"
        className={cn(
          "w-full rounded-lg px-4 py-[9px]",
          "inline-flex flex-col items-center justify-center",
          'gap-1',
          'box-border',
          'animate-fade-in',
          !isVisible && 'hidden',
          alertVariants({ variant, border }),
          className)}
        {...props}
      />
    </AlertContext.Provider>
  )
}

function AlertHeader({
  className,
  ...props }: React.ComponentProps<"div">
) {
  const { icon, variant, onClose, titleFuncArea } = useAlertContext();
  return (
    <div data-slot="alert-header"
      className={
        cn(
          "inline-flex flex-row w-full items-center justify-between",
          "[&_svg:not([class*='size-'])]:size-4",
          className)} {...props} >
      <div className="inline-flex flex-row items-center justify-start ">
        {
          icon &&
          <div className="flex w-[22px] h-[22px] items-center justify-center">
            {
              variant === 'primary' &&
              <InfoCirecledIcon className="text-primary" />
            }
            {
              variant === 'success' &&
              <SuccessIcon className="text-success" />
            }
            {
              variant === 'abnormal' &&
              <AbnormalIcon className="text-abnormal" />
            }
            {
              variant === 'destructive' &&
              <CloseIcon className="text-danger" />
            }
          </div>
        }
        {props.children}
        <span className="ml-2 text-[13px] leading-[20px] font-normal not-italic">
          {titleFuncArea}
        </span>
      </div>
      <AlertClose onClose={onClose} />
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "inline-flex flex-row items-center justify-center",
        "text-[13px] leading-[20px] font-normal not-italic text-text-deep",
        "gap-[2px]",
        className
      )}
      {...props}
    />
  )
}

function AlertClose({
  className,
  onClose,
  ...props }: React.ComponentProps<"div">
  & {
    onClose?: () => void | undefined,
  }
) {
  const { closeFuncArea } = useAlertContext();
  return (
    <div
      data-slot="alert-close"
      className={cn(
        "inline-flex flex-row items-center gap-1",
        'text-[13px] leading-[20px] font-normal not-italic',
        className
      )}
      {...props}
    >
      {closeFuncArea}
      <Button variant={'transparent'} size={'link'} onClick={onClose}>
        <CloseIcon className="size-4 text-secondary-information" />
      </Button>
    </div>
  )
}
const alertDescriptionVariants = cva(
  "",
  {
    variants: {
      icon: {
        false: "",
        true: "pl-5.5",
      },
    },
  }
)
function AlertDescription({
  foldable = false,
  className,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertDescriptionVariants> & {
  expand?: boolean,
  foldable?: boolean,
}) {
  const { icon } = useAlertContext();
  const [expand, setExpand] = React.useState(true);
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "inline-flex flex-col items-start gap-2",
        "text-muted-foreground text-[13px] leading-[20px] font-normal text-secondary",
        alertDescriptionVariants({ icon: icon }),
        className
      )}
      {...props}
    >
      <div className={cn(expand ? "line-clamp-none" : "line-clamp-1",)}>
        {props.children}
      </div>
      <div data-slot="alert-toolbar" className={cn(
        "inline-flex items-start justify-start")}
        {...props}>
        {
          foldable &&
          <>
            {
              expand ?
                <Button variant={'link'} size={'link'} onClick={() => setExpand(false)}>
                  收起
                </Button>
                :
                <Button variant={'link'} size={'link'} onClick={() => setExpand(true)}>
                  展开更多
                </Button>
            }
          </>
        }
      </div>
    </div >
  )
}

export { Alert, AlertTitle, AlertDescription, AlertHeader, AlertClose }
