import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const CloseIcon = ((args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" {...args}>
            <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.046 5.71554L8.7615 8.00004L11.046 10.2845L10.2845 11.046L8 8.76154L5.7155 11.046L4.954 10.2845L7.2385 8.00004L4.954 5.71554L5.7155 4.95405L8 7.23854L10.2845 4.95405L11.046 5.71554Z" />
        </svg>


    );
})