import { FC } from "react";
import { BorderWidth } from "..";
interface Props {
    title?: string;
    name?: string;
    value?: any;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    borderWidth?: BorderWidth;
    onChange?: (value: string) => void;
}
export declare const Textfield: FC<Props>;
export {};
