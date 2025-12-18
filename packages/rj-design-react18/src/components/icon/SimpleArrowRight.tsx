import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const AArrowRight = (args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (<svg width="12" height="13" viewBox="0 0 12 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...args}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23483 3.23484C4.08839 3.38129 4.08839 3.61873 4.23484 3.76517L6.7045 6.23472C6.85095 6.38117 6.85095 6.6186 6.70451 6.76505L4.23483 9.23484C4.08839 9.38129 4.08839 9.61873 4.23484 9.76517C4.38129 9.91161 4.61873 9.91161 4.76517 9.76516L7.23485 7.29537C7.67418 6.85602 7.67417 6.14371 7.23482 5.70438L4.76516 3.23483C4.61871 3.08839 4.38127 3.08839 4.23483 3.23484Z" />
    </svg>);
}