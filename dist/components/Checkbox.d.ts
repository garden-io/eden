import React, { FC } from "react";
interface Props {
    title?: string;
    value?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Data selector for testing
     */
    testid?: string;
}
export declare const Checkbox: FC<Props>;
export {};
