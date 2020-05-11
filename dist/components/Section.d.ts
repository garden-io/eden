import { Breakpoint, Color, Space } from "../themes";
import { FC } from "react";
interface Props {
    /**
     * Component children
     */
    children?: any;
    /**
     * Section background color
     */
    background?: Color;
    /**
     * Section content background color
     */
    contentBackground?: Color;
    /**
     * Section padding
     */
    padding?: Space;
    /**
     * Section content padding
     */
    contentPadding?: Space;
    /**
     * Content width
     */
    width?: Breakpoint;
    /**
     * Section Show border around content for debugging?
     */
    debug?: boolean;
}
export declare const Section: FC<Props>;
export {};
