import React from "react";
import { forwardRef } from "react";
export type TriangleDownIconRefType = object
export interface TriangleDownIconPropsType {
    size: 'sm' | 'md' | 'lg'
}
const sizeRecord: Record<string, number> = { 'sm': 14, 'md': 16, 'lg': 18 };
export const TriangleDownIconRef = React.createRef<TriangleDownIconRefType>();
export const TriangleDownIcon = forwardRef<TriangleDownIconRefType, TriangleDownIconPropsType>((props) => {
    const { size } = props;
    const sizeValue = sizeRecord[size];

    return (
        <svg data-slot="tran-icon" className="fill-secondary" width={sizeValue} height={sizeValue} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.15835 10.6879C7.55185 11.3013 8.44825 11.3013 8.84175 10.6879L11.3423 6.78995C11.7693 6.12439 11.2913 5.25 10.5006 5.25L5.4995 5.25C4.70877 5.25 4.23084 6.12439 4.6578 6.78995L7.15835 10.6879Z" />
        </svg>
    );
});