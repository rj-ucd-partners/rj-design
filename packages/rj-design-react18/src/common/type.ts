import type { JSX, ReactNode } from "react";

export interface BaseNode {
    key: string,
    label: string,
    disabled?: boolean,
    icon?: ReactNode | JSX.Element,
}

export interface SelectableNode extends BaseNode {
    checkable?: boolean,
    selectable?: boolean,
}

export interface TreeSelectableNode extends SelectableNode {
    children?: TreeSelectableNode[]
}