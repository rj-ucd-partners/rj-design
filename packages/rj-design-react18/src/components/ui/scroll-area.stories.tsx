import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta<typeof ScrollArea> = {
    title: 'Components/ScrollArea',
    tags: ['autodocs'],
    component: ScrollArea,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default'],
        },
        horizontal: {
            control: { type: 'select' },
            options: ['top', 'bottom'],
        },
        vertical: {
            control: { type: 'select' },
            options: ['left', 'right'],
        },
    },
}
export default meta

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

type Story = StoryObj<typeof ScrollArea>

//水平滚动条
export const Vertical: Story = {
    args: {

    },
    render: (args) => (
        <ScrollArea variant={args.variant} horizontal={args.horizontal} vertical={args.vertical} className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
                {tags.map((tag) => (
                    <React.Fragment key={tag}>
                        <div className="text-sm">{tag}</div>
                        <Separator className="my-2" />
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    )
}

export interface Artwork {
    artist: string
    art: string
}
const works: Artwork[] = [
    {
        artist: "Ornella Binni",
        art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
]


export const Horizontal: Story = {
    render: (args) => (
        <ScrollArea variant={args.variant} horizontal={args.horizontal} vertical={args.vertical} className="w-96 rounded-md border whitespace-nowrap">
            <div className="flex w-max space-x-4 p-4">
                {works.map((artwork) => (
                    <figure key={artwork.artist} className="shrink-0">
                        <div className="overflow-hidden rounded-md">
                            <img
                                src={artwork.art}
                                alt={`Photo by ${artwork.artist}`}
                                className="aspect-[3/4] h-fit w-fit object-cover"
                                width={300}
                                height={400}
                            />
                        </div>
                        <figcaption className="text-muted-foreground pt-2 text-xs">
                            Photo by{" "}
                            <span className="text-foreground font-semibold">
                                {artwork.artist}
                            </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

