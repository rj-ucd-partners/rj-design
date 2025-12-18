import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const CheckIcon = (args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" {...args}>
            <path d="M12 0V10C12 11.1046 11.1046 12 10 12H0L12 0Z" />
            <path d="M11.6569 6.70711L10.9498 6L8.12132 8.82843L6.70711 7.41422L6 8.12132L8.12132 10.2426L11.6569 6.70711Z" fill="#08121A" />
        </svg>
    );
}