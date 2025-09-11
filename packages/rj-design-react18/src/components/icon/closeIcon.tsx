import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const CloseIcon = ((args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"{...args}>
            <path d="M6 0.75C3.10051 0.75 0.75 3.10051 0.75 6C0.75 8.8995 3.10051 11.25 6 11.25C8.8995 11.25 11.25 8.8995 11.25 6C11.25 3.10051 8.8995 0.75 6 0.75ZM4.67417 4.1438L6.00002 5.46966L7.32582 4.14386L7.85615 4.67419L6.53035 5.99999L7.85615 7.32578L7.32582 7.85611L6.00002 6.53032L4.67417 7.85617L4.14384 7.32584L5.46969 5.99999L4.14384 4.67413L4.67417 4.1438Z" />
        </svg>
    );
})