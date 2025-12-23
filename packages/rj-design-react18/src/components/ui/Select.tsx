import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority";
import { CloseIcon } from "../icon/CloseIcon";
import { Empty } from "./Empty";
import { Button } from "./Button";
import { InputGroup, InputGroupInput } from "./InputGroup";

export interface SelectVariantsProps {
  variant?: 'primary',
  size?: 'sm' | 'md' | 'lg'
}
const SelectContext = React.createContext<SelectVariantsProps | undefined>(undefined)
function useSelectContext() {
  const context = React.useContext(SelectContext)
  if (context === undefined) {
    throw new Error('useSelectContext must be used within a Select')
  }
  return context
}

function Select({
  size,
  variant,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & SelectVariantsProps) {

  return <SelectContext.Provider value={{ size, variant }}>
    <SelectPrimitive.Root data-slot="select" {...props} />
  </SelectContext.Provider>
}

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const selectTriggerVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: [
          'bg-third-background hover:bg-fill-light-hover-bg',
          "text-text-deep",
          "disabled:bg-fill-dark-hover-active-disabled",
          "disabled:text-disabled",
          "disabled:opacity-100",
          "data-[placeholder]:text-secondary-information",
          "border-none",
          "[&_svg]:text-secondary",
          "disabled:[&_svg]:text-disabled",
          "focus:ring-primary",
          "disabled:data-[placeholder]:text-disabled"
        ],
      },
      size: {
        sm: [
          'text-[13px]',
          'leading-[20px]',
          'px-2 py-[2px]',
          "[&_svg:not([class*='size-'])]:size-3",
        ],
        md: [
          'text-[13px]',
          'leading-[20px]',
          'px-2 py-[5px]',
          "[&_svg:not([class*='size-'])]:size-4",
        ],
        lg: [
          'text-[15px]',
          'leading-[22px]',
          'px-3 py-2',
          "[&_svg:not([class*='size-'])]:size-5",
        ]
      }
    }
  }
);
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    closeCallback?: () => void
  }
>(({ value, closeCallback, className, children, ...props }, ref) => {
  const { size, variant } = useSelectContext()

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        !size && 'h-9',
        selectTriggerVariants({ size, variant }),
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        {
          (value && closeCallback) ?
            <CloseIcon
              className={cn(
                " cursor-pointer",
              )}
              onPointerDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                closeCallback()
              }}
            />
            :
            <ChevronDown className="h-4 w-4 opacity-50" />
        }
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const selectContentVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: [
          'bg-secondary-background shadow-[0px_6px_16px_rgba(0,0,0,0.08)] border-none',
          "[&_[data-slot=select-item]]:hover:bg-fill-dark-hover-active-disabled dark:[&_[data-slot=select-item]]:hover:bg-fill-light-hover-bg",
          "[&_[data-slot=select-item]]:active:bg-fill-light-hover-bg dark:[&_[data-slot=select-item]]:active:bg-fill-dark-hover-active-disabled",
          "[&_[data-slot=select-item][data-checked=true]]:bg-primary-light",
          "[&_[data-slot=select-item]]:text-text-deep",
          "[&_[data-slot=select-item][data-state=checked]]:text-primary",
        ],
      },
      size: {
        sm: [
          'gap-0.5',
          "[&_[data-slot=select-item]]:rounded-md",
          "[&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[1px] [&_[data-slot=select-item]]:gap-2",
          " [&_[data-slot=select-item]]:text-[12px] [&_[data-slot=select-item]]:leading-[20px]",
        ],
        md: [
          'gap-0.5',
          "[&_[data-slot=select-item]]:rounded-md",
          "[&_[data-slot=select-item]]:text-[13px] [&_[data-slot=select-item]]:leading-[20px]",
          "[&_[data-slot=select-item]]:px-2 [&_[data-slot=select-item]]:py-[3px] [&_[data-slot=select-item]]:gap-2",
        ],
        lg: [
          'gap-0.5',
          "[&_[data-slot=select-item]]:rounded-md",
          "[&_[data-slot=select-item]]:text-[15px] [&_[data-slot=select-item]]:leading-[22px]",
          "[&_[data-slot=select-item]]:px-3 [&_[data-slot=select-item]]:py-[6px] [&_[data-slot=select-item]]:gap-2",
        ]
      }
    }
  }
);

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    editable?: boolean
    editCallback?: (value: string) => void
  }
>(({ editable = false, editCallback, className, children, position = "popper", ...props }, ref) => {
  const { size, variant } = useSelectContext()
  const [edit, setEdit] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
          position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          selectContentVariants({ size, variant }),
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            size === 'md' && 'p-2',
            size === 'lg' && 'p-3',
            position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children ? children :
            <Empty size={'md'} desc="暂无相关内容" />
          }
        </SelectPrimitive.Viewport>
        {
          editable &&
          <div className="flex border-t border-border-foreground items-center justify-center ">
            {
              edit ?
                <div className="flex flex-col flex-1 items-center justify-center p-2 gap-2 ">
                  <InputGroup className="flex flex-1" size={size}>
                    <InputGroupInput value={value} onChange={(e) => {
                      setValue(e.target.value)
                    }} />
                  </InputGroup>
                  <div className="flex w-full gap-2 items-center justify-end">
                    <Button
                      variant={'primary'}
                      size={size}
                      onClick={() => {
                        if (editCallback) editCallback(value);
                        setEdit(false);
                        setValue('');
                      }}
                    >
                      确认
                    </Button>
                    <Button
                      variant={'default'}
                      size={size}
                      onClick={() => { setEdit(false); setValue(''); }}
                    >
                      取消
                    </Button>
                  </div>
                </div> :
                <div className="flex items-center justify-center h-[50px]">
                  <span>
                    +
                  </span>
                  <Button
                    variant={'link'}
                    size={size}
                    onClick={() => { setEdit(true) }}
                  >
                    新增选项
                  </Button>
                </div>
            }
          </div>}
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
})
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const { size, variant } = useSelectContext()
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      ref={ref}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {
        !(variant && size) &&
        <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <Check className="h-4 w-4" />
          </SelectPrimitive.ItemIndicator>
        </span>
      }
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
