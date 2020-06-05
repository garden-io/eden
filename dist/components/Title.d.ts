import { FC } from "react";
import { Color, TitleSize, TitleTags, TextAlign, FontFamily, FontWeight } from "..";
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
     * Font weight
     */
    fontWeight?: FontWeight;
    /**
     * Headings tag
     */
    tag?: TitleTags;
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
