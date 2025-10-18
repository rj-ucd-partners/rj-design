import { cn } from "@/lib/utils";
import { LogoIcon } from "../icon/logo";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

function TopNavigation({
    logo,
    slector,
    navigationMenu,
    outButton,
    toSet,
    help,
    theme,
    avatar,
    className,
    ...props
}: React.ComponentProps<"div"> & {
    logo?: React.ReactNode,
    slector?: React.ReactNode,
    navigationMenu?: React.ReactNode,
    outButton?: React.ReactNode,
    toSet?: React.ReactNode,
    help?: React.ReactNode,
    theme?: React.ReactNode,
    avatar?: string
}
) {
    return (
        <div
            data-slot="top-navigation"
            role="top-navigation"
            className={cn(
                [
                    "px-8 py-[14px]",
                    "flex flex-1 items-center justify-between",
                    "bg-background",
                    " border-b  border-border-split",
                ],
                className)}
            {...props}
        >
            <NavigationMenuViewport
                logo={logo}
                slector={slector}
                navigationMenu={navigationMenu} />
            <NavigationMenuOptionsBar
                outButton={outButton}
                toSet={toSet}
                help={help}
                theme={theme}
                avatar={avatar}
            />
        </div>
    )
}

function NavigationMenuViewport({
    logo,
    slector,
    navigationMenu,
    className,
    ...props
}: React.ComponentProps<"div"> & {
    logo?: React.ReactNode,
    slector?: React.ReactNode,
    navigationMenu?: React.ReactNode,
}) {
    return <div className={cn(
        "flex flex-row gap-20 items-center justify-center",
        className
    )} {...props}>
        <div className="flex flex-row items-center justify-start gap-6">
            {
                logo ?
                    logo :
                    <LogoIcon />
            }
            {slector}
        </div>
        {navigationMenu}
    </div>
}

function NavigationMenuOptionsBar({
    outButton,
    toSet,
    help,
    theme,
    avatar,
    className,
    ...props
}: React.ComponentProps<"div"> & {
    outButton?: React.ReactNode,
    toSet?: React.ReactNode,
    help?: React.ReactNode,
    theme?: React.ReactNode,
    avatar?: string
}) {
    return <div className={cn(
        "flex flex-row gap-8 items-center justify-end",
        className
    )} {...props}>
        {
            outButton
        }
        {
            outButton &&
            <svg width="1" height="18" viewBox="0 0 1 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0V17.5" stroke="#13405A" />
            </svg>
        }
        {
            toSet
        }
        {
            help
        }
        {
            theme
        }
        {
            <Avatar className="size-8">
                <AvatarImage src={avatar} />
                <AvatarFallback>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z" fill="#2B577C" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8593 26.3078L16 32L6.14233 26.3087C6.22021 26.0409 6.32963 25.7833 6.46895 25.5423C6.77538 24.9984 7.21408 24.5313 7.77457 24.1548C8.45423 23.6988 9.31461 23.3725 10.3321 23.1912C10.3339 23.1909 10.3399 23.19 10.3497 23.1885C10.4725 23.17 11.1981 23.0607 11.935 22.8594C13.2977 22.4873 13.4314 22.1588 13.4357 22.1484L13.4358 22.1482C13.4435 22.1153 13.455 22.0834 13.4698 22.0534C13.4829 21.9906 13.5091 21.7564 13.4567 21.1289C13.3206 19.5367 12.518 18.5955 11.8725 17.8383L11.8722 17.838L11.8532 17.8157C11.6572 17.5855 11.4721 17.3681 11.33 17.1533C10.6954 16.2075 10.6329 15.131 10.6295 15.0725L10.6294 15.0714C10.6294 14.617 10.8375 14.4175 11.0208 14.2419L11.021 14.2417C11.0467 14.1897 11.032 14.1134 11.0215 14.0592L11.021 14.0563C10.8507 13.0983 10.8402 11.7108 10.9843 10.8211C11.038 9.64981 12.0136 8.75319 12.0555 8.71554C12.1996 8.59902 12.3267 8.46039 12.4327 8.30418C12.4497 8.24422 12.4405 8.22051 12.4327 8.20238L12.4315 8.19959C12.3778 8.06989 12.2968 7.87429 12.3436 7.62508C12.3711 7.47448 12.4785 7.20257 12.8805 7.09241C13.0318 7.05551 13.1863 7.03496 13.3415 7.03105C13.872 6.99266 14.4043 6.98987 14.9352 7.02269C18.8285 7.33086 20.1695 8.83546 20.2258 8.8996C20.5559 9.31813 20.7931 9.81048 20.9199 10.3401C20.9601 10.4919 20.9903 10.6466 21.0102 10.803C21.1477 11.6202 21.1242 12.4596 21.0953 13.0216C21.0796 13.3367 21.0443 13.6672 20.988 14.0618C20.9725 14.1688 20.9887 14.1895 20.9955 14.1981L20.9958 14.1985C21.0153 14.2214 21.0354 14.2437 21.0561 14.2654L21.0613 14.2713C21.146 14.3655 21.2603 14.4928 21.3219 14.6977C21.3546 14.8115 21.3701 14.9301 21.3677 15.0491C21.3115 15.8036 21.0704 16.5291 20.6684 17.1533C20.5288 17.3625 20.3495 17.5743 20.1591 17.799C20.1478 17.8124 20.1364 17.8259 20.125 17.8394C19.4794 18.5952 18.6779 19.5364 18.5404 21.1303C18.488 21.7564 18.5155 21.9906 18.5273 22.0534C18.5426 22.0834 18.5545 22.1152 18.5627 22.1482L18.5628 22.1484C18.567 22.1589 18.7009 22.4887 20.07 22.8608C20.8649 23.0769 21.6414 23.1885 21.6506 23.1885C22.6969 23.3892 23.5625 23.7211 24.2435 24.1813C24.7743 24.527 25.2208 25.0014 25.5465 25.566C25.692 25.8258 25.7915 26.0781 25.8593 26.3078Z" fill="#6D9CC1" />
                    </svg>
                </AvatarFallback>
            </Avatar>
        }
    </div>
}

export {
    TopNavigation
}