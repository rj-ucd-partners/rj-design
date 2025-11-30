import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const Flod = ({ fill, color, ...args }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    const fillColor = fill || color || "var(--secondary-information)";

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...args}>
            <path d="M18.5 10.6699C19.1667 10.285 20 10.7663 20 11.5361V18.4639C20 19.2337 19.1667 19.715 18.5 19.3301L12.5 15.8662C11.8333 15.4813 11.8333 14.5187 12.5 14.1338L18.5 10.6699ZM11 17C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H11ZM9 11C9.55228 11 10 11.4477 10 12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H9ZM19 5C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H19Z" fill={fillColor} />
        </svg>
    );
}