import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const AArrowLeft = (args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (<svg width="12" height="13" viewBox="0 0 12 13" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" {...args}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.76517 3.23484C7.91161 3.38129 7.91161 3.61873 7.76516 3.76517L5.2955 6.23472C5.14905 6.38117 5.14905 6.6186 5.29549 6.76505L7.76517 9.23484C7.91161 9.38129 7.91161 9.61873 7.76516 9.76517C7.61871 9.91161 7.38127 9.91161 7.23483 9.76516L4.76515 7.29537C4.32582 6.85602 4.32583 6.14371 4.76518 5.70438L7.23484 3.23483C7.38129 3.08839 7.61873 3.08839 7.76517 3.23484Z" fill="white" />
    </svg>
    );
}