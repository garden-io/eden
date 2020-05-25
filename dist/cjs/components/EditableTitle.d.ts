import { FC } from "react";
interface Props {
    title?: string;
    value?: any;
    placeholder?: string;
    onChange?: (value: string) => void;
}
export declare const EditableTitle: FC<Props>;
export {};
