import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverAnchor,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import type { Meta, StoryObj } from "@storybook/react-vite"



const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    tags: ['autodocs'],
    component: Popover,
    argTypes: {


    },
}

export default meta

type Story = StoryObj<typeof Popover>

// 主要状态
import React, { useRef, useState, useEffect } from 'react';

export const Primary: Story = {
    render: () => {
        const popoverRef = useRef<HTMLDivElement>(null);
        const [popoverHeight, setPopoverHeight] = useState(0);

        useEffect(() => {
            if (popoverRef.current) {
                // 获取PopoverContent的实际高度
                const height = popoverRef.current.offsetHeight;
                setPopoverHeight(height);
            }
        }, []);

        return (
            <div id='mmsd' className="flex items-center justify-center h-[200px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button id='button-1' className="relative">
                            远程打开
                            {/* 动态计算锚点位置 */}
                            <PopoverAnchor asChild>
                                <div
                                    id='anchor-1'
                                    className="absolute"
                                    style={{
                                        left: 0,
                                        bottom: `calc(100% + ${popoverHeight}px)`
                                    }}
                                />
                            </PopoverAnchor>
                        </Button>
                    </PopoverTrigger>

                    {/* 获取PopoverContent高度 */}
                    <PopoverContent ref={popoverRef}>
                        <p>我出现在锚定区域附近</p>
                        {/* 示例内容 */}
                        <div className="p-4 bg-gray-100 rounded">
                            <p>内容区域</p>
                            <p>高度将被动态计算</p>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}