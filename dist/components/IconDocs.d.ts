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
}
export declare const IconDocs: FC<Props>;
export {};
