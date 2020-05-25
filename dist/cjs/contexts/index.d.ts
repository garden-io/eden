import React from "react";
export declare const ThemeContext: React.Context<{
    theme: {
        colors: import("../themes").Colors;
        lightColors: import("../themes").Colors;
        darkColors: import("../themes").Colors;
        brandColors: {
            black: string;
            gray: string;
            grayLight: string;
            grayLighter: string;
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
        logoColors: import("../themes").LogoColors;
        spacer: number;
        space: import("../themes").Whitespaces;
        breakpoints: import("../themes").Breakpoints;
        fontFamilies: import("../themes").FontFamilies;
        fontWeights: import("../themes").FontWeights;
        lineHeights: import("../themes").LineHeights;
        titleSizes: import("../themes").TitleSizes;
        titleTags: {
            smaller: string;
            small: string;
            medium: string;
            large: string;
            larger: string;
        };
        textSizes: import("../themes").TextSizes;
        textAligns: import("../themes").TextAligns;
        codeSizes: import("../themes").CodeSizes;
        iconSizes: import("../themes").IconSizes;
        borderRadiuses: import("../themes").BorderRadiuses;
    };
    toggleMode: () => void;
}>;
export declare const ThemeProvider: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const useTheme: () => {
    toggleMode: () => void;
    colors: import("../themes").Colors;
    lightColors: import("../themes").Colors;
    darkColors: import("../themes").Colors;
    brandColors: {
        black: string;
        gray: string;
        grayLight: string;
        grayLighter: string;
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
    logoColors: import("../themes").LogoColors;
    spacer: number;
    space: import("../themes").Whitespaces;
    breakpoints: import("../themes").Breakpoints;
    fontFamilies: import("../themes").FontFamilies;
    fontWeights: import("../themes").FontWeights;
    lineHeights: import("../themes").LineHeights;
    titleSizes: import("../themes").TitleSizes;
    titleTags: {
        smaller: string;
        small: string;
        medium: string;
        large: string;
        larger: string;
    };
    textSizes: import("../themes").TextSizes;
    textAligns: import("../themes").TextAligns;
    codeSizes: import("../themes").CodeSizes;
    iconSizes: import("../themes").IconSizes;
    borderRadiuses: import("../themes").BorderRadiuses;
};
