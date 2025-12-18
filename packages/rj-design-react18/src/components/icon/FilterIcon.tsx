import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const FilterIcon = (args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (<svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...args}>
        <path d="M2.78593 9.49023H7.21407V6.91129H2.78593V9.49023Z" />
        <path d="M10 0.490234H0C0 0.490234 2.29038 5.5062 2.63244 6.06918H7.37028C7.92781 5.15158 9.42133 1.77492 10 0.490234Z" />
    </svg>
    );
}