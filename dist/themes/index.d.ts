export declare const brandColors: {
    black: string;
    blueDark: string;
    blue: string;
    blueLight: string;
    greenDarker: string;
    greenDark: string;
    greenBright: string;
    greenLight: string;
    pink: string;
    white: string;
};
export declare const grayColors: {
    grayLightest: string;
    grayLighter: string;
    grayLight: string;
    gray: string;
    grayDark: string;
    grayDarker: string;
};
export declare const statusColors: {
    statusGreen: string;
    statusRed: string;
    statusYellow: string;
};
export interface Colors {
    grayLightest: string;
    grayLighter: string;
    grayLight: string;
    gray: string;
    grayDark: string;
    grayDarker: string;
    greenLight: string;
    greenDark: string;
    greenDarker: string;
    blueLight: string;
    blue: string;
    blueDark: string;
    pink: string;
    statusGreen: string;
    statusRed: string;
    statusYellow: string;
    white: string;
    black: string;
    none: string;
    shadow: string;
}
export declare type Color = keyof Colors;
export declare const colors: Colors;
export interface LogoColors {
    light: string;
    dark: string;
}
export declare type LogoColor = keyof LogoColors;
export declare const logoColors: LogoColors;
export declare const spacer: number;
export interface Whitespaces {
    none: string;
    small: string;
    medium: string;
    large: string;
    larger: string;
    largest: string;
    huge: string;
}
export declare type Whitespace = keyof Whitespaces;
export declare const space: Whitespaces;
export interface Breakpoints {
    small: string;
    medium: string;
    large: string;
    full: string;
}
export declare type Breakpoint = keyof Breakpoints;
export declare const breakpoints: Breakpoints;
export interface FontFamilies {
    garden: string;
    title: string;
    text: string;
    code: string;
}
export declare type FontFamily = keyof FontFamilies;
export declare const fontFamilies: FontFamilies;
export interface FontWeights {
    normal: number;
    bold: number;
}
export declare type FontWeight = keyof FontWeights;
export declare const fontWeights: FontWeights;
export interface LineHeights {
    small: string;
    normal: string;
}
export declare type LineHeight = keyof LineHeights;
export declare const lineHeights: LineHeights;
export interface TitleSizes {
    small: string;
    medium: string;
    large: string;
    larger: string;
    largest: string;
}
export declare type TitleSize = keyof TitleSizes;
export declare const titleSizes: TitleSizes;
export declare type TitleTags = "h1" | "h2" | "h3" | "h4" | "h5";
export declare const titleTags: {
    small: string;
    medium: string;
    large: string;
    larger: string;
    largest: string;
};
export interface TextSizes {
    small: string;
    medium: string;
    large: string;
}
export declare type TextSize = keyof TextSizes;
export declare const textSizes: TextSizes;
export interface TextAligns {
    left: string;
    center: string;
    right: string;
}
export interface CodeSizes {
    small: string;
    medium: string;
    large: string;
}
export declare type CodeSize = keyof CodeSizes;
export declare const codeSizes: CodeSizes;
export interface TextAligns {
    left: string;
    center: string;
    right: string;
}
export declare type TextAlign = keyof TextAligns;
export declare const textAligns: TextAligns;
export interface ButtonSizes {
    small: string;
    medium: string;
    large: string;
}
export declare type ButtonSize = keyof ButtonSizes;
export interface IconSizes {
    small: number;
    medium: number;
    large: number;
}
export declare type IconSize = keyof IconSizes;
export declare const iconSizes: IconSizes;
export interface BorderRadiuses {
    large: string;
    medium: string;
    small: string;
    none: string;
}
export declare type BorderRadius = keyof BorderRadiuses;
export declare const borderRadiuses: BorderRadiuses;
export interface BorderWidths {
    large: string;
    medium: string;
    none: string;
}
export declare type BorderWidth = keyof BorderWidths;
export declare const borderWidths: BorderWidths;
export declare const theme: {
    colors: Colors;
    brandColors: {
        black: string;
        blueDark: string;
        blue: string;
        blueLight: string;
        greenDarker: string;
        greenDark: string;
        greenBright: string;
        greenLight: string;
        pink: string;
        white: string;
    };
    grayColors: {
        grayLightest: string;
        grayLighter: string;
        grayLight: string;
        gray: string;
        grayDark: string;
        grayDarker: string;
    };
    statusColors: {
        statusGreen: string;
        statusRed: string;
        statusYellow: string;
    };
    logoColors: LogoColors;
    spacer: number;
    space: Whitespaces;
    breakpoints: Breakpoints;
    fontFamilies: FontFamilies;
    fontWeights: FontWeights;
    lineHeights: LineHeights;
    titleSizes: TitleSizes;
    titleTags: {
        small: string;
        medium: string;
        large: string;
        larger: string;
        largest: string;
    };
    textSizes: TextSizes;
    textAligns: TextAligns;
    codeSizes: CodeSizes;
    iconSizes: IconSizes;
    borderRadiuses: BorderRadiuses;
    borderWidths: BorderWidths;
};
