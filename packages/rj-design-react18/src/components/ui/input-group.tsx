import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const inputGroupVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: [
          'bg-third-background dark:bg-third-background',
          'hover:bg-fill-light-hover-bg dark:hover:bg-fill-light-hover-bg',
          'border-transparent dark:border-transparent',
          "has-[[data-slot=input-group-control]:focus-visible]:ring-primary has-[[data-slot=input-group-control]:focus-visible]:ring-1",
          'data-[disabled=true]:hover:bg-fill-dark-hover-active-disabled dark:data-[disabled=true]:hover:bg-fill-dark-hover-active-disabled data-[disabled=true]:bg-fill-dark-hover-active-disabled dark:data-[disabled=true]:bg-fill-dark-hover-active-disabled data-[disabled=true]:text-disabled data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed'
        ],
        success: [
          'bg-success-active dark:bg-success-active',
          'border-transparent dark:border-transparent',
          "has-[[data-slot=input-group-control]:focus-visible]:ring-success-hover has-[[data-slot=input-group-control]:focus-visible]:ring-1",
          'data-[disabled=true]:text-disabled data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed'
        ],
        destructive: [
          'bg-danger-light dark:bg-danger-light',
          'border-transparent dark:border-transparent',
          "has-[[data-slot=input-group-control]:focus-visible]:ring-danger has-[[data-slot=input-group-control]:focus-visible]:ring-1",
          'data-[disabled=true]:text-disabled data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed'
        ],
        warning: [
          'bg-warning-light dark:bg-warning-light',
          'border-transparent dark:border-transparent',
          "has-[[data-slot=input-group-control]:focus-visible]:ring-warning has-[[data-slot=input-group-control]:focus-visible]:ring-1",
          'data-[disabled=true]:text-disabled data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed'
        ],
      },
      size: {
        sm: [
          "has-[>input]:[&>input]:text-[13px] has-[>input]:[&>input]:leading-[20px]",
          "[&_svg:not([class*='size-'])]:size-3",
          "px-2 py-[2px]",
          "has-[>[data-align=inline-start]]:[&>[data-align=inline-start]]:pl-0 has-[>[data-align=inline-start]]:[&>[data-align=inline-start]]:py-0",
          "has-[>[data-align=inline-end]]:[&>[data-align=inline-end]]:px-0 has-[>[data-align=inline-end]]:[&>[data-align=inline-end]]:py-0",
        ],
        md: [
          "has-[>input]:[&>input]:text-[13px] has-[>input]:[&>input]:leading-[20px]",
          "[&_svg:not([class*='size-'])]:size-4",
          "px-2 py-[5px]",
          "has-[>[data-align=inline-start]]:[&>[data-align=inline-start]]:pl-0 has-[>[data-align=inline-start]]:[&>[data-align=inline-start]]:py-0",
          "has-[>[data-align=inline-end]]:[&>[data-align=inline-end]]:px-0 has-[>[data-align=inline-end]]:[&>[data-align=inline-end]]:py-0",
        ],
        lg: [
          "has-[>input]:[&>input]:text-[15px] has-[>input]:[&>input]:leading-[22px]",
          "[&_svg:not([class*='size-'])]:size-5",
          "px-3 py-2",
          "has-[>[data-align=inline-start]]:[&>[data-align=inline-start]]:pl-0 has-[>[data-align=inline-start]]:[&>[data-align=inline-start]]:py-0",
          "has-[>[data-align=inline-end]]:[&>[data-align=inline-end]]:px-0 has-[>[data-align=inline-end]]:[&>[data-align=inline-end]]:py-0",
        ],
      },
    },
  },
)

function InputGroup({ className, disabled, ...props }: React.ComponentProps<"div"> & VariantProps<typeof inputGroupVariants> & {
  disabled?: boolean
}) {
  return (
    <div
      data-slot="input-group"
      data-disabled={disabled}
      role="group"
      aria-disabled={disabled}
      className={cn(
        "group/input-group border-input bg-input/30 dark:bg-input/30 shadow-xs relative flex w-full items-center rounded-md border outline-none transition-[color,box-shadow]",
        "has-[>textarea]:h-auto",
        !props.size && "h-9",
        "[&>svg:not([class*='size-'])]:size-4",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",

        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-1",

        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",

        //自定义的样式
        inputGroupVariants({ variant: props.variant, size: props.size }),
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)]",
  // [&>svg:not([class*='size-'])]:size-4  这个就先丢弃，就给父类控制
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "[.border-b]:pb-3 order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "[.border-t]:pt-3 order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={
        cn(inputGroupAddonVariants({ align }),
          "text-secondary", className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "flex items-center gap-2 text-sm shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
        "icon-xs":
          "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      variant={'transparent'}
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
