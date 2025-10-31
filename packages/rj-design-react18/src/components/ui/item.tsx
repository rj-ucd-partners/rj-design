import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"



function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn("group/item-group flex flex-col", className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-0", className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  "group/item [a]:hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-ring/50 [a]:transition-colors flex flex-wrap items-center rounded-md border border-transparent text-sm outline-none transition-colors duration-100 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
        popover: [
          "bg-transparent",
          "gap-2"
        ],

      },
      size: {
        default: "gap-4 p-4 ",
        sm: "gap-2.5 px-4 py-3",
        flex: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ItemContext {
  variant: "popover" | "default" | "outline" | "muted" | null,
  size: "default" | "sm" | "flex" | null,
}

const ItemContext = React.createContext<ItemContext | undefined>(undefined);
function useItemContext() {
  const context = React.useContext(ItemContext)
  if (context === undefined) {
    throw new Error('useItemContext must be used within a Item')
  }
  return context
}


function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"
  return (
    <ItemContext.Provider value={{ variant, size }}>
      <Comp
        data-slot="item"
        data-variant={variant}
        data-size={size}
        className={cn(itemVariants({ variant, size, className }))}
        {...props}
      />
    </ItemContext.Provider>
  )
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted size-8 rounded-sm border [&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

const itemContentVariants = cva(
  "",
  {
    variants: {
      variant: {
        popover: [],
        default: "",
        outline: "",
        muted: "",
      },
    },

  }
)

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useItemContext();
  return (
    <div
      data-slot="item-content"
      className={cn(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        itemContentVariants({ variant }),
        className
      )}
      {...props}
    />
  )
}

const itemTitleVariants = cva(
  "",
  {
    variants: {
      variant: {
        popover: [
          "text-text-deep",
          "text-[15px] leading-[22px]",
          "[&_svg:not([class*='size-'])]:size-4",
        ],
        default: "",
        outline: "",
        muted: "",
      },
    },

  }
)


function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useItemContext();
  return (
    <div
      data-slot="item-title"
      className={cn(
        "flex w-fit items-center gap-2 text-sm font-medium leading-snug",
        itemTitleVariants({ variant }),
        className
      )}
      {...props}
    />
  )
}

const itemDescriptionVariants = cva(
  "",
  {
    variants: {
      variant: {
        popover: [
          "text-secondary",
          "text-[13px] leading-[20px]",
        ],
        default: "",
        outline: "",
        muted: "",
      },
    },

  }
)


function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { variant } = useItemContext();
  return (
    <p
      data-slot="item-description"
      className={cn(
        "text-muted-foreground line-clamp-2 text-balance text-sm font-normal leading-normal",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        itemDescriptionVariants({ variant }),
        className
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        "empty:hidden empty:basis-0",
        className
      )}
      {...props}
    />
  )
}

const itemFooterVariants = cva(
  "",
  {
    variants: {
      variant: {
        popover: [
          "justify-end",
        ],
        default: "",
        outline: "",
        muted: "",
      },
    },

  }
)

function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useItemContext();
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        itemFooterVariants({ variant }),
        className
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
