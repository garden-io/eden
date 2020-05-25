import { Color, Whitespace, BorderRadius } from "../themes";
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
     * Border radius
     */
    borderRadius: BorderRadius;
    background?: Color;
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
    align?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
    height?: Whitespace | string;
    shadow?: boolean;
    /**
     * Section Show border around content for debugging?
     */
    debug?: boolean;
    overflow?: string;
}
export declare const Box: FC<Props>;
export {};
