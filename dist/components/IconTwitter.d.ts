import { FC } from "react";
import { Color, IconSize } from "..";
interface Props {
    /**
     * Icon fill color
     */
    color?: Color | string;
    /**
     * Icon fill color
     */
    size?: IconSize;
    /**
     * Wrapper Show border around icon for debugging?
     */
    debug?: boolean;
    /**
     * Wrapper Display icon inline?
     */
    inline?: boolean;
}
export declare const IconTwitter: FC<Props>;
export {};
