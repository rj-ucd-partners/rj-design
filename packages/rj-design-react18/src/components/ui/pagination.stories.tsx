import type { Meta, StoryObj } from '@storybook/react-vite'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import { Button } from './button'
import { TriangleDownIcon } from '@radix-ui/react-icons'
import { Input } from './input'

const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    tags: ['autodocs'],
    component: Pagination,
    argTypes: {


    },
}

export default meta

type Story = StoryObj<typeof Pagination>

// 主要状态
export const Primary: Story = {
    args: {
    },
    render: () => (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">6</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}



// 主要状态
export const Main: Story = {
    args: {
    },
    render: () => {
        const [page, setPage] = React.useState<number>(1)
        const [total, setTotal] = React.useState<number>(20)
        return (
            <div className="flex flex-row gap-4">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant={"page"} size={'md'}>
                            <div className="inline-flex justify-between items-center ">
                                <span>{page}/10页</span>
                            </div>
                            <TriangleDownIcon data-slot="tran-icon" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" variant={"page"} itemVariant={"default"} >
                        <DropdownMenuGroup>
                            <DropdownMenuItem hasSeparator={"default"} status={"page"} >
                                1
                            </DropdownMenuItem>
                            <DropdownMenuItem hasSeparator={"default"} status={"page"}>
                                2
                            </DropdownMenuItem>
                            <DropdownMenuItem hasSeparator={"default"} status={"page"}>
                                3
                            </DropdownMenuItem>
                            <DropdownMenuItem hasSeparator={"default"} status={"page"}>
                                4
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">6</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

                <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>
                    <span>
                        跳至
                    </span>
                    <Input variant={'page'} placeholder={`${page}/${total}`} />
                    <span>
                        页
                    </span>
                </div>
            </div >
        );
    }
}

// 全部状态
export const Full: Story = {
    args: {
    },
    render: () => {
        const [page, setPage] = React.useState<number>(1)
        const [total, setTotal] = React.useState<number>(20)
        return (
            <div className="flex flex-row w-full justify-between items-center px-3 py-4">
                <div className="text-[13px] leading-[20px] font-normal not-italic text-secondary">
                    共 {total} 条数据
                </div>
                <div className="flex flex-row gap-4">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant={"page"} size={'md'}>
                                <div className="inline-flex justify-between items-center ">
                                    <span>{page}/10页</span>
                                </div>
                                <TriangleDownIcon data-slot="tran-icon" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" variant={"page"} itemVariant={"default"} >
                            <DropdownMenuGroup>
                                <DropdownMenuItem hasSeparator={"default"} status={"page"} >
                                    1
                                </DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={"default"} status={"page"}>
                                    2
                                </DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={"default"} status={"page"}>
                                    3
                                </DropdownMenuItem>
                                <DropdownMenuItem hasSeparator={"default"} status={"page"}>
                                    4
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">6</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                    <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>
                        <span>
                            跳至
                        </span>
                        <Input variant={'page'} placeholder={`${page}/${total}`} />
                        <span>
                            页
                        </span>
                    </div>
                </div >
            </div>
        );
    }
}