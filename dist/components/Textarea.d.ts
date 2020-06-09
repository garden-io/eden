import React, { FC } from "react";
import { BorderWidth } from "..";
interface TextareaProps {
    title?: string;
    placeholder?: string;
    name?: string;
    value?: any;
    borderWidth?: BorderWidth;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export declare const Textarea: FC<TextareaProps>;
export {};
