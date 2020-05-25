import { Color, TitleSize, TitleTags, TextAlign, FontFamily } from "../themes";
import { FC } from "react";
interface Props {
    /**
     * Component children
     */
    children?: any;
    /**
     * Title size
     */
    size?: TitleSize;
    /**
     * Horizontal text alignment
     */
    textAlign?: TextAlign;
    /**
     * Font family
     */
    fontFamily?: FontFamily;
    /**
     * Headings tag
     */
    tag?: TitleTags;
    /**
     * Headings tag
     */
    to?: string;
    /**
     * Function called when title is clicked
     */
    onClick?: Function;
    /**
     * Title color
     */
    color?: Color;
}
export declare const Title: FC<Props>;
export {};
