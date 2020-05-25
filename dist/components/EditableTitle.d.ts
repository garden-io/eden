import { FC } from "react";
import { TitleSize } from "../themes";
interface Props {
    title?: string;
    size?: TitleSize;
    value?: any;
    placeholder?: string;
    onChange?: (value: string) => void;
}
export declare const EditableTitle: FC<Props>;
export {};
