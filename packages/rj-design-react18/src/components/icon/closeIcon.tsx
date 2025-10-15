import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const CloseIcon = ((args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 12 12" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" {...args}>
            <g clipPath="url(#clip0_2064_6617)">
                <path d="M6 11.25C8.89949 11.25 11.25 8.89949 11.25 6C11.25 3.10051 8.89949 0.75 6 0.75C3.10051 0.75 0.75 3.10051 0.75 6C0.75 8.89949 3.10051 11.25 6 11.25ZM8.2845 4.28666L6.57113 6.00003L8.2845 7.71341L7.71337 8.28453L6 6.57116L4.28663 8.28453L3.7155 7.71341L5.42888 6.00003L3.7155 4.28666L4.28663 3.71553L6 5.42891L7.71337 3.71553L8.2845 4.28666Z" />
            </g>
            <defs>
                <clipPath id="clip0_2064_6617">
                    <rect width="12" height="12" fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
})