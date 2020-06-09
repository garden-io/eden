import { FC } from "react";
interface Props {
    /**
     * Title
     */
    title: string;
    /**
     * Expandable content
     */
    children?: any;
    /**
     * Expandable content
     */
    isExpanded?: boolean;
}
export declare const Expandable: FC<Props>;
export {};
