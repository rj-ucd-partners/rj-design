import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const DestructiveIcon = ((args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg {...args} viewBox="0 0 22 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM14.046 8.71554L11.7615 11L14.046 13.2845L13.2845 14.046L11 11.7615L8.7155 14.046L7.954 13.2845L10.2385 11L7.954 8.71554L8.7155 7.95405L11 10.2385L13.2845 7.95405L14.046 8.71554Z" fill="#D02600" />
        </svg>
    );
})