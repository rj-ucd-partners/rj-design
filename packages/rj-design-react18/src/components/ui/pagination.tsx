import * as React from "react"
import {
  MoreHorizontalIcon,
} from "lucide-react"
import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Pagination({
  className,
  ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("flex justify-center", className)}
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
  return <li data-slot="pagination-item" className={cn('inline-flex items-center justify-center', props.className)} {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">
function PaginationLink({
  className,
  isActive,
  size = "page-md",
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
  size = "page-md",
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink> & {
  size?: "page-sm" | "page-md"
}) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn(
        size === 'page-sm' && "rounded-sm size-6",
        size === 'page-md' && "rounded-md size-8",
        className)}
      {...props}
    >
      <TriangleLeftIcon className="text-disabled" />
    </PaginationLink>
  )
}

function PaginationNext({
  size = 'page-md',
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink> & {
  size?: 'page-sm' | 'page-md'
}) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn(
        size === 'page-sm' && 'size-6 rounded-sm',
        size === 'page-md' && 'size-8 rounded-md',
        className)}
      {...props}
    >
      <TriangleRightIcon className="text-disabled" />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  size = "page-md",
  className,
  ...props
}: React.ComponentProps<"span"> & {
  size?: "page-sm" | "page-md"
}) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex items-center justify-center border border-border-split",
        size === 'page-sm' && 'rounded-sm size-6',
        size === 'page-md' && 'rounded-md size-8',
        className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-3 text-disabled" />
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
