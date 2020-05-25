import { Breakpoint, Color, Whitespace } from "../themes";
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
    padding?: Whitespace;
    /**
     * Section content padding
     */
    contentPadding?: Whitespace;
    /**
     * Content width
     */
    width?: Breakpoint;
    /**
     * Section Show border around content for debugging?
     */
    debug?: boolean;
    /**
     * Data selector for testing
     */
    testid?: string;
}
export declare const Section: FC<Props>;
export {};
