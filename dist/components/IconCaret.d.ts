import { FC } from "react";
import { Color, IconSize } from "..";
interface Props {
    /**
     * Icon fill color
     */
    color?: Color;
    /**
     * Icon fill color
     */
    size?: IconSize;
    /**
     * Show border around icon for debugging?
     */
    debug?: boolean;
    /**
     *  Caret direction
     */
    direction?: "up" | "right" | "down" | "left";
}
export declare const IconCaret: FC<Props>;
export {};
