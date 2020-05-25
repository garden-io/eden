import { FC } from "react";
import { Whitespace } from "../themes";
interface Props {
    /**
     * Component children
     */
    children?: any;
    /**
     * Number of columns or string with CSS grid-template-columns values
     */
    columns?: number | string;
    /**
     * Gap between columns
     */
    gap?: Whitespace;
    /**
     * Section Show border around content for debugging?
     */
    debug?: boolean;
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    align?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
}
export declare const Grid: FC<Props>;
export {};
