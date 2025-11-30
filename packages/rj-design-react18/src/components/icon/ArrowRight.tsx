import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const ArrowRight = ({ fill, color, className, style, ...args }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    // 优先级: fill > color > currentColor（继承父元素）
    const fillColor = fill || color || "currentColor";

    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className={className || "text-secondary-information"}  // 默认颜色用 className
            style={style}
            {...args}
        >
            <path d="M10.6879 7.15831C11.3013 7.5518 11.3013 8.4482 10.6879 8.8417L6.78995 11.3423C6.12439 11.7692 5.25 11.2913 5.25 10.5006L5.25 5.49945C5.25 4.70872 6.12439 4.2308 6.78995 4.65775L10.6879 7.15831Z" fill={fillColor} />
        </svg>
    );
}