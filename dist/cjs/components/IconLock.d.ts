import { Color, IconSize } from "../themes";
import { FC } from "react";
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
export declare const IconLock: FC<Props>;
export {};
