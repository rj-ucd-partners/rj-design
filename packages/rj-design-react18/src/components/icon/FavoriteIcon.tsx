
import React from "react";
import { forwardRef } from "react";
export type FavoriteIconRefType = object
export interface FavoriteIconPropsType {
    size: 'sm' | 'md' | 'lg'
}
const sizeRecord: Record<string, number> = { 'sm': 14, 'md': 16, 'lg': 18 };
export const FavoriteIconRef = React.createRef<FavoriteIconRefType>();
export const FavoriteIcon = forwardRef<FavoriteIconRefType, FavoriteIconPropsType>((props) => {
    const { size } = props;
    const sizeValue = sizeRecord[size];

    return (
        <svg className="fill-secondary" width={sizeValue} height={sizeValue} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6396 5.36629L9.07263 4.81159L7.49119 1.41041C7.42219 1.26265 7.27364 1.16774 7.10965 1.16675C6.9463 1.1664 6.7962 1.25991 6.72598 1.40679L5.10416 4.79444L1.52803 5.32387C1.37159 5.34709 1.24106 5.45519 1.18937 5.60416C1.13839 5.75327 1.17506 5.91795 1.2845 6.03141L3.86877 8.69216L3.23517 12.4327C3.20854 12.5913 3.27518 12.7511 3.40699 12.844C3.53859 12.937 3.71204 12.9471 3.85396 12.87L7.05346 11.1294L10.2327 12.8933C10.2961 12.9283 10.3669 12.9461 10.4375 12.9461C10.576 12.9464 10.7146 12.8791 10.7939 12.7658C10.8735 12.6526 10.8921 12.5079 10.844 12.3786L10.2654 8.71503L12.8751 6.07632C12.9856 5.96356 13.0242 5.79911 12.9752 5.64955C12.9258 5.49975 12.7961 5.39038 12.6396 5.36629Z" />
        </svg>
    );
});