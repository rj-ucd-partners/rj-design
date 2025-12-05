import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const InfoResultIcon = (args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
            <path opacity="0.1" d="M45 1.73205C46.8564 0.660255 49.1436 0.660254 51 1.73205L86.5692 22.268C88.4256 23.3397 89.5692 25.3205 89.5692 27.4641V68.5359C89.5692 70.6795 88.4256 72.6603 86.5692 73.732L51 94.268C49.1436 95.3397 46.8564 95.3397 45 94.268L9.43078 73.732C7.57438 72.6603 6.43078 70.6795 6.43078 68.5359V27.4641C6.43078 25.3205 7.57438 23.3397 9.43078 22.268L45 1.73205Z" fill="#45E3FF" />
            <path d="M45.207 14.7321C47.0634 13.6603 49.3506 13.6603 51.207 14.7321L76.3839 29.268C78.2403 30.3397 79.3839 32.3205 79.3839 34.4641V63.5359C79.3839 65.6795 78.2403 67.6603 76.3839 68.7321L51.207 83.268C49.3506 84.3397 47.0634 84.3397 45.207 83.268L20.0301 68.7321C18.1737 67.6603 17.0301 65.6795 17.0301 63.5359V34.4641C17.0301 32.3205 18.1737 30.3397 20.0301 29.268L45.207 14.7321Z" fill="url(#paint0_linear_12782_396)" />
            <path d="M50.6685 31.9902H45.3315V37.335H50.6685V31.9902ZM50.6685 41.0156H45.3315V64.0098H50.6685V41.0156Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear_12782_396" x1="84.7576" y1="133.835" x2="111.367" y2="-40.3862" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00FFAA" />
                    <stop offset="0.575" stop-color="#43E3FF" />
                </linearGradient>
            </defs>
        </svg>
    );
}