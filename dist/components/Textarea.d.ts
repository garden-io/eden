import React, { FC } from "react";
interface TextareaProps {
    title?: string;
    name?: string;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export declare const Textarea: FC<TextareaProps>;
export {};