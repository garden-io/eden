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
     * Section Show border around icon for debugging?
     */
    debug?: boolean;
    /**
     * Data selector for testing
     */
    testid?: string;
}
export declare const IconGithub: FC<Props>;
export {};
