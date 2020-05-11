import { Color, TextSize, TextAlign, FontFamily } from "../themes";
import React, { FC } from "react";
interface Props {
    /**
     * Component children
     */
    children?: any;
    /**
     * Text size
     */
    size?: TextSize;
    /**
     * Font family
     */
    fontFamily?: FontFamily;
    /**
     * Text horizontal alignment
     */
    textAlign?: TextAlign;
    /**
     * Router link to navigate to
     */
    to?: string;
    /**
     * Function called when text is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    /**
     * Text color
     */
    color?: Color;
}
export declare const Text: FC<Props>;
export {};
