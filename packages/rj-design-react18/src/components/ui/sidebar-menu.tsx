import { cn } from "@/lib/utils"
import { MenuIcon } from "../icon/menu-icon"
import { DotFilledIcon, TriangleRightIcon } from "@radix-ui/react-icons"

function SidebarThirdMenu({
    className,
    checked = false,
    ...props }: React.ComponentProps<"div">
    & {
        checked?: boolean,
        index: number | string
    }
) {

    return (
        <div
            data-slot="sidebar-third-menu"
            className={cn(
                "flex flex-1 flex-row items-center",
                "px-2",
                "gap-2",
                "relative",
                "text-[13px] leading-[20px] font-normal",
                checked ? "text-primary" : "text-text-deep",
                checked ? "[&_[data-slot=sidebar-drop-down-icon]]:transition-transform [&_svg]:duration-200 [&_[data-slot=sidebar-drop-down-icon]]:rotate-90" : "",
                className,
            )}
            {...props}
        >
            <MenuIcon />
            {props.children}
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <TriangleRightIcon data-slot="sidebar-drop-down-icon" className="size-4" />
            </div>
        </div>
    )
}

function SidebarFourthMenu({
    className,
    checked = false,
    ...props }: React.ComponentProps<"div">
    & {
        checked?: boolean,
        index: number | string,
    }
) {
    return (
        <div
            data-slot="sidebar-fourth-menu"
            className={cn(
                'cursor-default',
                "flex flex-1 flex-row items-center",
                "gap-1",
                "text-[12px] leading-[20px] font-normal",
                checked ? "text-primary" : "text-secondary-information",
                className,
            )}
            {...props}
        >
            <DotFilledIcon color={checked ? "#00CFF4" : "#13405A"} />
            <div className="pl-2 pr-3 py-1.5 rounded-md w-full h-full hover:bg-primary-light">
                {props.children}
            </div>
        </div>
    )
}

export { SidebarThirdMenu, SidebarFourthMenu }
