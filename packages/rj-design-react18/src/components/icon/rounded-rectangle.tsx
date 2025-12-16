import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const RoundedRectangle = ({ fill, color, ...args }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    const fillColor = fill || color || "var(--secondary)";

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...args}>
            <path fillRule="evenodd" clipRule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V12C0 14.2091 1.79086 16 4 16H12C14.2091 16 16 14.2091 16 12V4C16 1.79086 14.2091 0 12 0H4ZM4 5H12V3H4V5ZM4 7H10V9H4V7ZM4 13H12V11H4V13ZM12.5001 9H12V9.33337V10H11V8V6H12V6.6667V7H12.4999L14 8.0001L12.5001 9Z" fill={fillColor} />
        </svg>

    );
}