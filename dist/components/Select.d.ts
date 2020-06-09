import { FC } from "react";
import { BorderWidth } from "..";
export interface SelectOption {
    value: string | number;
    title?: string;
    selected?: boolean;
    disabled?: boolean;
}
interface Props {
    name?: string;
    options: SelectOption[];
    onChange?: (value: string) => void;
    selectedValue?: string | number;
    borderWidth?: BorderWidth;
}
export declare const Select: FC<Props>;
export {};
