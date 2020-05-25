import React, { FC } from "react";
interface TextareaProps {
    title?: string;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * Data selector for testing
     */
    testid?: string;
}
export declare const Textarea: FC<TextareaProps>;
export {};
