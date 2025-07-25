import React from "react";
import { forwardRef } from "react";
export interface TriangleDownIconRefType { }
export interface TriangleDownIconPropsType {
    size: 'sm' | 'md' | 'lg'
    color: string
}
export const TriangleDownIconRef = React.createRef<TriangleDownIconRefType>();
export const TriangleDownIcon = forwardRef<TriangleDownIconRefType, TriangleDownIconPropsType>((props, ref) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.15835 10.6879C7.55185 11.3013 8.44825 11.3013 8.84175 10.6879L11.3423 6.78995C11.7693 6.12439 11.2913 5.25 10.5006 5.25L5.4995 5.25C4.70877 5.25 4.23084 6.12439 4.6578 6.78995L7.15835 10.6879Z" fill="#97A7B5" />
        </svg>
    );
});