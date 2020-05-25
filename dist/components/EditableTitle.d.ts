import { FC } from "react";
interface Props {
    title?: string;
    value?: any;
    placeholder?: string;
    onChange?: (value: string) => void;
    /**
     * Data selector for testing
     */
    dataTest?: string;
}
export declare const EditableTitle: FC<Props>;
export {};
