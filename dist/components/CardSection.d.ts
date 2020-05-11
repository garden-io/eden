import { FC } from "react";
import { Color, Space } from "../themes";
interface Props {
    /**
     * Body
     */
    children?: any;
    /**
     * Padding
     */
    padding?: Space;
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
