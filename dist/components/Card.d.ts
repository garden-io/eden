import { FC } from "react";
import { BorderRadius, Color } from "../themes";
interface Props {
    /**
     * Header
     */
    /**
     * Body
     */
    children?: any;
    /**
     * Border radius
     */
    borderRadius?: BorderRadius;
    /**
     * Border color
     */
    borderColor?: Color;
}
export declare const Card: FC<Props>;
export {};
