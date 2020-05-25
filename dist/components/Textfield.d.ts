import { FC } from "react";
interface Props {
    title?: string;
    name?: string;
    value?: any;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
export declare const Textfield: FC<Props>;
export {};
