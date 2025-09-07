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
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React, { useEffect, useState } from 'react'
import { Button } from './button'
import { TriangleDownIcon } from '@radix-ui/react-icons'
import { Input } from './input'
import { cn } from '@/lib/utils'

interface PaginationProps extends React.ComponentProps<typeof Pagination> {
    size: 'page-sm' | 'page-md';
}

const meta: Meta<PaginationProps> = {
    title: 'Components/Pagination',
    tags: ['autodocs'],
    component: Pagination,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['page-sm', 'page-md'],
            }
        }
    },
}

export default meta

type Story = StoryObj<PaginationProps>

// 主要状态
export const Primary: Story = {
    args: {
        size: 'page-md'
    },
    render: () => (
        <div className='inline-flex'>
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
        </div>
    )
}
//小分页器
export const PrimarySmall: Story = {
    args: {
        size: 'page-sm'
    },
    render: (args) => (
        <div className='inline-flex items-center justify-center'>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious size={args.size} href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink size={args.size} href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink size={args.size} href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink size={args.size} href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis size={args.size} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink size={args.size} href="#">6</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext size={args.size} href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
// 主要状态
export const Main: Story = {
    args: {
        size: 'page-md'
    },
    render: (args) => {
        const page = 1
        const total = 20
        const [size, setSize] = useState<number>(10);
        const sizes: number[] = [10, 20, 30, 50, 100];
        const updateSize = (s: number) => {
            setSize(s);
            //其他逻辑
        }
        return (
            <div className="inline-flex flex flex-row gap-4">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>
                            <span className='w-min-10'>{size}/页</span>
                            <TriangleDownIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" variant={"page"}  >
                        <DropdownMenuGroup>
                            {
                                sizes.map((s, index) => {
                                    return (<DropdownMenuItem hasSeparator={"default"} status={"page"} key={index} onClick={() => { updateSize(s) }}>
                                        {s}页
                                    </DropdownMenuItem>)
                                })
                            }
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
export const MainSmall: Story = {
    args: {
        size: 'page-sm'
    },
    render: (args) => {
        const [size, setSize] = useState<number>(10);
        const sizes: number[] = [10, 20, 30, 50, 100];
        const updateSize = (s: number) => {
            setSize(s);
            //其他逻辑
        }
        return (
            <div className="inline-flex flex-row gap-4 items-center justify-center">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>
                            <span className='w-min-10'>{size}/页</span>
                            <TriangleDownIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" variant={"page"}  >
                        <DropdownMenuGroup>
                            {
                                sizes.map((s, index) => {
                                    return (<DropdownMenuItem hasSeparator={"default"} status={"page"} key={index} onClick={() => { updateSize(s) }}>
                                        {s}页
                                    </DropdownMenuItem>)
                                })
                            }
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious size={args.size} href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink size={args.size} href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink size={args.size} href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink size={args.size} href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis size={args.size} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink size={args.size} href="#">6</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext size={args.size} href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
                <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>
                    <span>
                        跳至
                    </span>
                    <Input variant={'page'} placeholder={`${1}/${20}`} className={cn(
                        args.size === 'page-sm' && 'h-6',
                        args.size === 'page-md' && 'h-8'
                    )} />
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
    render: (args) => {
        const total = 25;
        const page = 8;
        const [size, setSize] = useState<number>(10);
        const sizes: number[] = [10, 20, 30, 50, 100];
        const updateSize = (s: number) => {
            setSize(s);
            //其他逻辑
        }
        return (
            <div className='w-200'>
                <div className="flex flex-row w-full justify-between items-center px-3 py-4">
                    <div className={cn(
                        "font-normal not-italic text-disabled",
                        args.size === 'page-md' && 'text-[13px] leading-[20px]',
                        args.size === 'page-sm' && 'text-[13px] leading-[20px]',
                    )}>
                        共 {total} 条数据
                    </div>
                    <div className="flex flex-row gap-4">
                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>
                                    <span className='w-min-10'>{size}/页</span>
                                    <TriangleDownIcon />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" variant={"page"}  >
                                <DropdownMenuGroup>
                                    {
                                        sizes.map((s, index) => {
                                            return (<DropdownMenuItem hasSeparator={"default"} status={"page"} key={index} onClick={() => { updateSize(s) }}>
                                                {s}页
                                            </DropdownMenuItem>)
                                        })
                                    }
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
                            <Input variant={'page'} placeholder={`${page}/${total}`} className={cn(
                                args.size === 'page-sm' && 'h-6',
                                args.size === 'page-md' && 'h-8'
                            )} />
                            <span>
                                页
                            </span>
                        </div>
                    </div >
                </div>
            </div>
        );
    }
}
// 全部状态Small
export const FullSmall: Story = {
    args: {
        size: 'page-sm',
    },
    render: (args) => {
        const total = 25;
        const page = 8;
        const [shows, setShows] = useState<number[]>([]);
        const [preSkips, setPreSkips] = useState<number[]>([]);
        const [nextSkips, setNextSkips] = useState<number[]>([]);
        const [starts, setStarts] = useState<number[]>([]);
        const [ends, setEnds] = useState<number[]>([]);
        useEffect(() => {
            const pres: number[] = [];
            const nexts: number[] = [];
            const toShow: number[] = [];
            const toStart: number[] = [];
            const toEnd: number[] = [];
            for (let index = 1; index <= total; index++) {
                const value = index - page;
                if (value > 2) {
                    if (total - index < 2) {
                        toEnd.push(index);
                    } else {
                        pres.push(index);
                    }
                    nexts.push(index);
                } else if (value < -2) {
                    if (index <= 2) {
                        toStart.push(index);
                    } else {
                        pres.push(index);
                    }
                } else {
                    toShow.push(index);
                }
            }
            setPreSkips(pres);
            setNextSkips(nexts);
            setShows(toShow);
            setStarts(toStart);
            setEnds(toEnd);
        }, [page])
        const [size, setSize] = useState<number>(10);
        const sizes: number[] = [10, 20, 30, 50, 100];
        const updateSize = (s: number) => {
            setSize(s);
            //其他逻辑
        }
        return (
            <div className='w-200'>
                <div className="flex flex-row w-full justify-between items-center px-3 py-4">
                    <div className={cn(
                        "font-normal not-italic text-disabled",
                        args.size === 'page-md' && 'text-[13px] leading-[20px]',
                        args.size === 'page-sm' && 'text-[12px] leading-[20px]',
                    )}>
                        共 {total} 条数据
                    </div>
                    <div className="flex flex-row gap-4">
                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>
                                    <span className='w-min-10'>{size}/页</span>
                                    <TriangleDownIcon />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" variant={"page"}  >
                                <DropdownMenuGroup>
                                    {
                                        sizes.map((s, index) => {
                                            return (<DropdownMenuItem hasSeparator={"default"} status={"page"} key={index} onClick={() => { updateSize(s) }}>
                                                {s}页
                                            </DropdownMenuItem>)
                                        })
                                    }
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious size={args.size} href="#" />
                                </PaginationItem>
                                {
                                    starts.length > 0 &&
                                    starts.map((item, index) => {
                                        return <PaginationItem key={index}>
                                            <PaginationLink isActive={item == page} size={args.size} href="#">{item}</PaginationLink>
                                        </PaginationItem>
                                    })
                                }
                                {
                                    preSkips.length > 0 &&
                                    <PaginationItem>
                                        <PaginationEllipsis size={args.size} />
                                    </PaginationItem>
                                }
                                {
                                    shows.map((item, index) => {
                                        return <PaginationItem key={index}>
                                            <PaginationLink isActive={item == page} size={args.size} href="#">{item}</PaginationLink>
                                        </PaginationItem>
                                    })
                                }
                                {
                                    nextSkips.length > 0 &&
                                    <PaginationItem>
                                        <PaginationEllipsis size={args.size} />
                                    </PaginationItem>
                                }
                                {
                                    ends.length > 0 &&
                                    ends.map((item, index) => {
                                        return <PaginationItem key={index}>
                                            <PaginationLink isActive={item == page} size={args.size} href="#">{item}</PaginationLink>
                                        </PaginationItem>
                                    })
                                }
                                <PaginationItem>
                                    <PaginationNext size={args.size} href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>

                        <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>
                            <span>
                                跳至
                            </span>
                            <Input variant={'page'} placeholder={`${page}/${total}`} className={cn(
                                args.size === 'page-sm' && 'h-6',
                                args.size === 'page-md' && 'h-8'
                            )} />
                            <span>
                                页
                            </span>
                        </div>
                    </div >
                </div>
            </div>
        );
    }
}
//简易模式
export const Simple: Story = {
    args: {
        size: 'page-md',
    },
    render: (args) => {
        const total = 25;
        const page = 8;
        const [size, setSize] = useState<number>(10);
        const sizes: number[] = [10, 20, 30, 50, 100];
        const updateSize = (s: number) => {
            setSize(s);
            //其他逻辑
        }

        return (
            <div className="flex flex-row w-full justify-center items-center px-3 py-4">
                <div className="flex flex-row gap-4">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>
                                <span className='w-min-10'>{size}/页</span>
                                <TriangleDownIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" variant={"page"}  >
                            <DropdownMenuGroup>
                                {
                                    sizes.map((s, index) => {
                                        return (<DropdownMenuItem hasSeparator={"default"} status={"page"} key={index} onClick={() => { updateSize(s) }}>
                                            {s}页
                                        </DropdownMenuItem>)
                                    })
                                }
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious size={args.size} href="#" />
                            </PaginationItem>
                            <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>
                                <Input variant={'page'} placeholder={`${page}/${total}`} className={cn(
                                    args.size === 'page-sm' && 'h-6',
                                    args.size === 'page-md' && 'h-8')} />
                            </div>
                            <PaginationItem>
                                <PaginationNext size={args.size} href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div >
            </div>
        );
    }
}
//精简模式
export const SimpleHasTotal: Story = {
    args: {
        size: 'page-sm',
    },
    render: (args) => {
        const total = 25;
        const page = 8;
        const [size, setSize] = useState<number>(10);
        const sizes: number[] = [10, 20, 30, 50, 100];
        const updateSize = (s: number) => {
            setSize(s);
            //其他逻辑
        }

        return (
            <div className='w-200'>
                <div className="flex flex-row w-full justify-between items-center px-3 py-4">
                    <div className={cn(
                        "font-normal not-italic text-disabled",
                        args.size === 'page-md' && 'text-[13px] leading-[20px]',
                        args.size === 'page-sm' && 'text-[12px] leading-[20px]',
                    )}>
                        共 {total} 条数据
                    </div>
                    <div className="flex flex-row gap-4">
                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>
                                    <span className='w-min-10'>{size}/页</span>
                                    <TriangleDownIcon />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" variant={"page"}  >
                                <DropdownMenuGroup>
                                    {
                                        sizes.map((s, index) => {
                                            return (<DropdownMenuItem hasSeparator={"default"} status={"page"} key={index} onClick={() => { updateSize(s) }}>
                                                {s}页
                                            </DropdownMenuItem>)
                                        })
                                    }
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious size={args.size} href="#" />
                                </PaginationItem>
                                <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>
                                    <Input variant={'page'} placeholder={`${page}/${total}`} className={cn(
                                        args.size === 'page-sm' && 'h-6',
                                        args.size === 'page-md' && 'h-8'
                                    )} />
                                </div>
                                <PaginationItem>
                                    <PaginationNext size={args.size} href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>


                    </div >
                </div>
            </div>
        );
    }
}
//精简模式
export const SimpleSmall: Story = {
    args: {
        size: 'page-sm',
    },
    render: (args) => {
        const total = 25;
        const page = 8;
        const [size, setSize] = useState<number>(10);
        const sizes: number[] = [10, 20, 30, 50, 100];
        const updateSize = (s: number) => {
            setSize(s);
            //其他逻辑
        }

        return (
            <div className="flex flex-row w-full justify-center items-center px-3 py-4">
                <div className="flex flex-row gap-4">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant={"page"} size={args.size === 'page-md' ? 'md' : 'sm'}>
                                <span className='w-min-10'>{size}/页</span>
                                <TriangleDownIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" variant={"page"}  >
                            <DropdownMenuGroup>
                                {
                                    sizes.map((s, index) => {
                                        return (<DropdownMenuItem hasSeparator={"default"} status={"page"} key={index} onClick={() => { updateSize(s) }}>
                                            {s}页
                                        </DropdownMenuItem>)
                                    })
                                }
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious size={args.size} href="#" />
                            </PaginationItem>
                            <div className='flex flex-row gap-2 items-center text-[13px] leading-[20px] font-normal not-italic text-secondary'>
                                <Input variant={'page'} placeholder={`${page}/${total}`} className={cn(
                                    args.size === 'page-sm' && 'h-6',
                                    args.size === 'page-md' && 'h-8')} />
                            </div>
                            <PaginationItem>
                                <PaginationNext size={args.size} href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div >
            </div>
        );
    }
}