import { ButtonSize, Color } from "../themes";
import React, { FC } from "react";
interface Props {
    /**
     * Button children
     */
    children?: any;
    /**
     * Callback function executed while button is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    /**
     * Button background color
     */
    color?: Color;
    /**
     * Button size
     */
    size?: ButtonSize;
    /**
     * Is it a secondary button on terms of importance?
     */
    secondary?: boolean;
    /**
     * Should the button submit the form?
     */
    type?: "button" | "submit";
    /**
     * Should the button have the width of the container?
     */
    wide?: boolean;
    /**
     * Router link to navigate to
     */
    to?: string;
    /**
     * Data selector for testing
     */
    dataTest?: string;
}
export declare const Button: FC<Props>;
export {};
