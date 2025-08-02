import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const tabsVariants = cva(
  'bg-transparent',
  {
    variants: {
      variant: {
        default: '',
        card: '',
        'bottom-card': ''
      },
      size: {
        md: '',
        lg: '',
        'md-card': '',
        'lg-card': '',
        'md-bottom-card': ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    },
  })

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> & VariantProps<typeof tabsVariants>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  'bg-transparent',
  {
    variants: {
      variant: {
        default: '',
        card: 'gap-1',
        'bottom-card': 'gap-4'
      },
      size: {
        md: '',
        lg: '',
        'md-card': '',
        'lg-card': '',
        'md-bottom-card': ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    },
  })

function TabsList({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className,
        tabsListVariants({ variant, size })
      )}
      {...props}
    />
  )
}

const tabsTriggerVariants = cva(
  '',
  {
    variants: {
      variant: {
        native: "data-[state=active]:bg-primary-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        default: "bg-transparent text-secondary-information data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent data-[state=active]:[&_[data-slot=tabs-trigger-item]]:text-primary dark:data-[state=active]:[&_[data-slot=tabs-trigger-item]]:text-primary data-[state=active]:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:relative dark:data-[state=active]:after:content-[''] dark:data-[state=active]:after:absolute dark:data-[state=active]:after:bottom-0 dark:data-[state=active]:after:left-0 dark:data-[state=active]:after:w-full dark:data-[state=active]:after:h-[1px] dark:data-[state=active]:after:bg-gradient-to-l dark:data-[state=active]:after:from-cyan-400/0 dark:data-[state=active]:after:via-cyan-400 dark:data-[state=active]:after:to-cyan-400/0 disabled:[&_[data-slot=tabs-trigger-item]]:text-disabled",
        card: 'inline-flex rounded-tl-[10px] rounded-tr-[10px] bg-primary-background shadow-[0px_1px_0px_0px_rgba(27,37,46,1.00)] data-[state=active]:bg-card data-[state=active]:border-l data-[state=active]:border-r data-[state=active]:border-t data-[state=active]:border-border-split data-[state=active]:text-primary hover:bg-fill-light-hover-bg outline outline-1 outline-offset-[-1px] hover:outline-border-split disabled:bg-card disabled:text-disabled disabled:outline-border-disabled',
        'bottom-card': 'inline-flex text-secondary-information outline outline-1 outline-offset-[-1px] outline-border data-[state=active]:text-primary  data-[state=active]:outline-primary hover:text-primary-light hover:outline-primary-light disabled:text-disabled disabled:outline-border-disabled'
      },
      size: {
        md: 'p-2 py-[5px] text-[13px] leading-[20px]',
        lg: 'px-4 py-3 text-[15px] leading-[22px]',
        'md-card': 'px-4 py-2 text-[13px] leading-[20px]',
        'lg-card': 'px-6 py-5 text-[15px] leading-[22px]',
        'md-bottom-card': 'px-2 py-1 rounded-md text-[13px] leading-[20px]',
      }
    },
    defaultVariants: {
      variant: 'default'
    },
  })

function TabsTrigger({
  className,

  variant,
  size,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsTriggerVariants>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "",
        className,
        tabsTriggerVariants({
          variant, size
        })
      )}
      {...props}
    >
      {
        variant == 'default' ?
          <div className="inline-flex p-2">
            <div data-slot="tabs-trigger-item" className={
              cn(
                "rounded-lg hover:bg-fill-light-hover-bg active:bg-fill-dark-hover-active-disabled",
                tabsTriggerVariants({ size })
              )
            }>
              {props.children}
            </div>
          </div> :
          props.children
      }
    </TabsPrimitive.Trigger>
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
