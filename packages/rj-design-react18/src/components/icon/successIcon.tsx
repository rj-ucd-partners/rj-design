import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const SuccessIcon = ((args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg {...args} width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM14.5313 9.23225L13.8242 8.52515L10.2887 12.0606L8.53593 10.3078L7.8288 11.0149L10.2886 13.4749L14.5313 9.23225Z" fill="#00FFA8" />
        </svg>
    );
})