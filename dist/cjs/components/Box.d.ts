import { Color, Whitespace } from "../themes";
import { FC } from "react";
interface Props {
    /**
     * Component children
     */
    children?: any;
    /**
     * Gap between columns
     */
    padding?: Whitespace;
    /**
     * Border color
     */
    borderColor?: Color;
    /**
     * Background color
     */
    background?: Color;
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
    align?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
    height?: Whitespace | string;
    shadow?: boolean;
    /**
     * Section Show border around content for debugging?
     */
    debug?: boolean;
}
export declare const Box: FC<Props>;
export {};
