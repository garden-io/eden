import { FC } from "react";
import { Whitespace } from "../themes";
interface Props {
    /**
     * Component children
     */
    children?: any;
    /**
     * Gap between columns
     */
    gap?: Whitespace;
    /**
     * Gap between columns
     */
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    align?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
    /**
     * Wrap the contents to the new lines?
     */
    wrap?: boolean;
    /**
     * Show border around content for debugging?
     */
    debug?: boolean;
}
export declare const Flex: FC<Props>;
export {};
