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
    testid?: string;
}
export declare const Space: FC<Props>;
export {};
