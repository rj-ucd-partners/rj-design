import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { BaseNode } from "@/common/type"
import { useRef, useState } from "react"
import { TriangleDownIcon } from "../icon/TriangleDownIcon"
import { Button } from "./button"
import { Empty } from "./empty"
import { CloseIcon } from "../icon/closeIcon"


function SelectRoot({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props}>

  </SelectPrimitive.Value>
}

function SelectIcon({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Icon>) {
  return <SelectPrimitive.Icon data-slot="select-icon" {...props}>
  </SelectPrimitive.Icon>
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex w-full items-center outline-none justify-between whitespace-nowrap bg-transparent data-[placeholder]:text-secondary-information disabled:cursor-not-allowed [&>span]:line-clamp-1",
        className,
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  size,
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & {
  size: "sm" | "md" | "lg";
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'rounded-md',
          'text-text-deep',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
          position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-slot="select-view-port"
          className={cn(
            'bg-secondary-background flex gap-0.5 flex-col',
            size === "sm" && [
              'p-1',
              '[&_[data-slot=select-item]]:text-[12px] [&_[data-slot=select-item]]:leading-[20px] [&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[2px]',
            ],
            size === "md" && [
              'p-2',
              '[&_[data-slot=select-item]]:text-[13px] [&_[data-slot=select-item]]:leading-[20px] [&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[3px]',
            ],
            size === "lg" && [
              'p-3',
              '[&_[data-slot=select-item]]:text-[15px] [&_[data-slot=select-item]]:leading-[22px] [&_[data-slot=select-item]]:px-3 [&_[data-slot=select-item]]:py-[6px]',
            ],
            position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center outline-none focus:bg-fill-light-hover-bg focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:text-disabled active:bg-fill-dark-hover-active-disabled",
        'rounded-md',
        'data-[state=checked]:text-primary data-[state=checked]:bg-primary-light data-[state=checked]:[&_svg]:text-primary',
        className
      )}
      {...props}
    >
      {/* <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span> */}
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}


const selectVariants = cva(
  "",
  {
    variants: {
      size: {
        sm: [
          '[&_[data-slot=select-trigger]]:py-0.5 px-2',
          '[&_[data-slot=select-value]]:text-[12px] [&_[data-slot=select-value]]:leading-[20px]',
        ],
        md: [
          '[&_[data-slot=select-trigger]]:py-[5px] px-2',
          '[&_[data-slot=select-value]]:text-[12px] [&_[data-slot=select-value]]:leading-[22px]',],
        lg: [
          '[&_[data-slot=select-trigger]]:py-2 px-3',
          '[&_[data-slot=select-value]]:text-[15px] [&_[data-slot=select-value]]:leading-[22px]',
        ]
      }
    }
  }
);

function Select({
  placeholder = '请选择',
  disabled = false,
  size = 'md',
  datasource,
  value,
  onValueChange,
  frontIcon,
  postIcon,
  showClear,
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof selectVariants> & {
  placeholder?: string,
  datasource?: BaseNode[],
  disabled?: boolean,
  value?: string,
  onValueChange?: (value: string) => void,
  frontIcon?: React.ReactNode,
  postIcon?: React.ReactNode,
  showClear?: boolean,
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [offsetX, setOffsetX] = useState<number | undefined>(undefined);
  React.useEffect(() => {
    if (!triggerRef || !selectRef) return;
    try {
      const w = triggerRef.current?.clientWidth;
      setWidth(w);
      const x1 = selectRef.current?.getBoundingClientRect().left;
      const x2 = triggerRef.current?.getBoundingClientRect().left;
      const offsetX = x2! - x1!;
      setOffsetX(offsetX);
    } catch (e) {
      console.log(e)
    }
  }, [triggerRef, selectRef])


  return (
    <div
      ref={triggerRef}
      className={cn(
        'rounded-md',
        disabled ? 'bg-fill-dark-hover-active-disabled text-disabled' :
          ['bg-third-background hover:bg-fill-light-hover-bg  hover:outline outline-primary',
            open && 'outline',
            'hover:[&_[data-slot=clear]]:block'
          ],
        selectVariants({ size }),
        className
      )} {...props}>
      <SelectRoot open={open} onOpenChange={setOpen} disabled={disabled} value={value} onValueChange={onValueChange}>
        <div className="flex flex-row items-center gap-1 [&_svg]:pointer-events-none [&_svg]:text-secondary-information"  >
          {
            frontIcon
          }
          <SelectTrigger ref={selectRef} value={value} >
            <SelectValue placeholder={placeholder ?? '请选择'} />
          </SelectTrigger>
          <div className="relative">
            {
              showClear && value
              &&
              <div data-slot='clear' className="hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Button variant={'transparent'} size={'link'} onClick={(e) => {
                  e.stopPropagation();
                  if (onValueChange) onValueChange('');
                }}>
                  <CloseIcon className="size-4" />
                </Button>
              </div>
            }
            <Button variant={'transparent'} size={'link'} onClick={() => { setOpen(!open) }} >
              {
                postIcon ?
                  postIcon :
                  <TriangleDownIcon className={cn(
                    "size-2 text-secondary-informatio transition-transform duration-200",
                    open && "rotate-180"
                  )} />
              }
            </Button>
          </div>
        </div>
        <SelectContent size={size ?? 'sm'} style={{
          width: (width ?? 0) > 0 ? width : undefined,
          left: offsetX ?? 0
        }}>
          {
            datasource?.map(item => {
              return (<SelectItem key={item.key} value={item.key} disabled={item.disabled}>{item.label}</SelectItem>)
            })
          }{
            (!datasource || datasource.length === 0) &&
            <Empty size={'md'} />
          }
        </SelectContent>
      </SelectRoot>
    </div>
  );
}

export {
  Select,
  SelectRoot,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectIcon
}
