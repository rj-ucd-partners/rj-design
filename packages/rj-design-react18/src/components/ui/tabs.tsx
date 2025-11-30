import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Button } from "./button"
import { CloseIcon } from "../icon/closeIcon"

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn(
      className
    )}
    {...props}
  />
))
Tabs.displayName = TabsPrimitive.Root.displayName

const tabsListVariants = cva(
  'flex items-center justify-start',
  {
    variants: {
      variant: {
        tag: 'gap-4 p-2',
        tab: 'border-b border-border-split',
        card: 'gap-1'
      },
      size: {
        md: '',
        lg: ''
      }
    },
  })
interface TabsListPrors extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>, VariantProps<typeof tabsListVariants> {

}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListPrors
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      tabsListVariants({ variant: props.variant }),
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

interface TabsTriggerPrors extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>, VariantProps<typeof tabsTriggerVariants> {
  size?: 'md' | 'lg'
}
const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none [&_[data-slot=tabs-item-close]]:ml-2 [&_[data-slot=tabs-item-close]]:ml-4",
  {
    variants: {
      variant: {
        tag: [
          'text-[13px] leading-5',
          'text-secondary-information disabled:text-disabled',
          'data-[state=active]:text-text',
          '[&_[data-slot=tabs-item]]:border [&_[data-slot=tabs-item]]:border-border',
          '[&_[data-slot=tabs-item]]:px-2 [&_[data-slot=tabs-item]]:py-1',
          '[&_[data-slot=tabs-item]]:rounded-md',
          'hover:[&_[data-slot=tabs-item]]:border-primary hover:[&_[data-slot=tabs-item]]:bg-primary-light hover:[&_[data-slot=tabs-item]]:text-primary hover:data-[state=active]:[&_[data-slot=tabs-item]]:text-text hover:data-[state=active]:[&_[data-slot=tabs-item]]:border-primary disabled:[&_[data-slot=tabs-item]]:border-border-disabled',
          'data-[state=active]:[&_[data-slot=tabs-item]]:bg-primary',
          'active:text-primary-active active:[&_[data-slot=tabs-item]]:border-primary-active active:[&_[data-slot=tabs-item]]:bg-primary-light',
        ],
        card: [
          'text-secondary-information disabled:text-disabled',
          'data-[state=active]:text-primary data-[state=active]:border data-[state=active]:border-b-0 data-[state=active]:border-border-split',
          'hover:bg-fill-light-hover-bg hover:border hover:border-b-0 hover:border-border-split',
          'rounded-t-[10px]',
          'bg-background',
          'active:bg-fill-dark-hover-active-disabled active:border hover:border-border-split',
          'disabled:border disabled:bg-border-disabled disabled:bg-card'
        ],
        tab: [
          'text-secondary-information disabled:text-disabled',
          'data-[state=active]:text-primary',
          'hover:[&_[data-slot=tabs-item]]:bg-fill-light-hover-bg',
          'p-2',
          "data-[state=active]:relative data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-[1px] data-[state=active]:after:bg-gradient-to-l data-[state=active]:after:from-cyan-400/0 data-[state=active]:after:via-cyan-400 data-[state=active]:after:to-cyan-400/0",
          '[&_[data-slot=tabs-item]]:rounded-lg'
        ]
      },
    },
  })
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerPrors
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      tabsTriggerVariants({ variant: props.variant }),

      props.variant === 'tab' &&
      [
        props.size === 'md' && '[&_[data-slot=tabs-item]]:px-2 [&_[data-slot=tabs-item]]:py-[5px] text-[13px] leading-5 [&_[data-slot=tabs-item]]:[&_svg]:size-4',
        props.size === 'lg' && '[&_[data-slot=tabs-item]]:px-4 [&_[data-slot=tabs-item]]:py-3 text-[15px] leading-[22px] [&_[data-slot=tabs-item]]:[&_svg]:size-5'
      ],
      props.variant === 'card' &&
      [
        props.size === 'md' && '[&_[data-slot=tabs-item]]:px-4 [&_[data-slot=tabs-item]]:py-2 text-[13px] leading-5 [&_[data-slot=tabs-item]]:[&_svg]:size-4',
        props.size === 'lg' && '[&_[data-slot=tabs-item]]:px-6 [&_[data-slot=tabs-item]]:py-5 text-[15px] leading-[22px] [&_[data-slot=tabs-item]]:[&_svg]:size-5'
      ],
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName


interface TabsItemPrors extends React.ComponentPropsWithoutRef<'div'> {
  frontIcon?: React.ReactNode,
  showClose?: boolean,
  closeCallback?: () => void
}
const TabsItem = React.forwardRef<
  React.ElementRef<'div'>,
  TabsItemPrors
>(({ className, frontIcon, showClose, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="tabs-item"
    className={cn(
      'inline-flex flex-row items-center justify-start',
      className
    )}
    {...props}
  >
    {
      frontIcon &&
      <div className={cn(
        "inline-flex mr-2",
      )}>
        {frontIcon}
      </div>
    }
    {
      props.children
    }
    {
      showClose &&
      <Button
        data-slot="tabs-item-close"
        variant={'transparent'}
        size={'link'}
        onClick={props.closeCallback}>
        <CloseIcon />
      </Button>
    }
  </div >
))

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsItem }
