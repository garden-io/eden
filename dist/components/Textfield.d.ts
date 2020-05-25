import { FC } from "react";
interface Props {
    title?: string;
    value?: any;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    /**
     * Data selector for testing
     */
    dataTest?: string;
}
export declare const Textfield: FC<Props>;
export {};
