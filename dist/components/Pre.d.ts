import { FC } from "react";
import { Color } from "../themes";
interface Props {
    /**
     *  Content
     */
    children?: any;
    /**
     *  Show button to copy contents to a clipboard?
     */
    copy?: boolean;
    /**
     *  Text color
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
export declare const Pre: FC<Props>;
export {};
