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
     * Wrapper Show border around icon for debugging?
     */
    debug?: boolean;
    /**
     *  Arrow direction
     */
    direction?: "up" | "right" | "down" | "left";
}
export declare const IconArrow: FC<Props>;
export {};
