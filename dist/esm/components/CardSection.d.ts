import { FC } from "react";
import { Color, Whitespace } from "../themes";
interface Props {
    /**
     * Body
     */
    children?: any;
    /**
     * Padding
     */
    padding?: Whitespace;
    /**
     * Background
     */
    background?: Color;
    /**
     *  Is it filling the height of the parent?
     */
    fill?: boolean;
}
export declare const CardSection: FC<Props>;
export {};
