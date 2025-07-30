import * as React from "react"
import {
  MoreHorizontalIcon,
} from "lucide-react"
import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { cva, type VariantProps } from "class-variance-authority"

const paginationVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: "",
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)


function Pagination({
  className,
  variant,
  ...props }: React.ComponentProps<"nav"> & VariantProps<typeof paginationVariants>
) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className, paginationVariants({ variant }))}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-2.5", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "page",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "page-active" : "page",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn("gap-1 px-2.5 sm:pl-2.5 size-8", className)}
      {...props}
    >
      <TriangleLeftIcon className="text-disabled"/>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn("gap-1 px-2.5 sm:pr-2.5 size-8", className)}
      {...props}
    >
      <TriangleRightIcon className="text-disabled"/>
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-8 items-center justify-center rounded-md outline-1 outline-solid outline-offset-[-1px] outline-border-split", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-3 text-disabled"  />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
