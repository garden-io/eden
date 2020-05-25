import { Color, CodeSize } from "../themes";
import React, { FC } from "react";
interface Props {
    /**
     * Component children
     */
    children?: any;
    /**
     * Text size
     */
    size?: CodeSize;
    /**
     * Function called when code is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Text color
     */
    color?: Color;
    /**
     * Background color
     */
    background?: Color;
    /**
     * Data selector for testing
     */
    dataTest?: string;
}
export declare const Code: FC<Props>;
export {};
