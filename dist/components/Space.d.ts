import { FC } from "react";
import { Whitespace } from "../themes";
interface Props {
    /**
     * Whitespace width
     */
    width?: Whitespace;
    /**
     * Whitespace height
     */
    height?: Whitespace;
    /**
     * Data selector for testing
     */
    dataTest?: string;
}
export declare const Space: FC<Props>;
export {};
