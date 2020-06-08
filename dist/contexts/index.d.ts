import React from "react";
export declare const ThemeContext: React.Context<{
    theme: {
        colors: import("../themes").Colors;
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
        logoColors: import("../themes").LogoColors;
        spacer: number;
        space: import("../themes").Whitespaces;
        breakpoints: import("../themes").Breakpoints;
        fontFamilies: import("../themes").FontFamilies;
        fontWeights: import("../themes").FontWeights;
        lineHeights: import("../themes").LineHeights;
        titleSizes: import("../themes").TitleSizes;
        titleTags: {
            small: string;
            medium: string;
            large: string;
            larger: string;
            largest: string;
        };
        textSizes: import("../themes").TextSizes;
        textAligns: import("../themes").TextAligns;
        codeSizes: import("../themes").CodeSizes;
        iconSizes: import("../themes").IconSizes;
        borderRadiuses: import("../themes").BorderRadiuses;
    };
    toggleMode: () => void;
}>;
export declare const ThemeProvider: ({ children, customTheme }: {
    children: any;
    customTheme?: {};
}) => JSX.Element;
export declare const useTheme: () => {
    toggleMode: () => void;
    colors: import("../themes").Colors;
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
    logoColors: import("../themes").LogoColors;
    spacer: number;
    space: import("../themes").Whitespaces;
    breakpoints: import("../themes").Breakpoints;
    fontFamilies: import("../themes").FontFamilies;
    fontWeights: import("../themes").FontWeights;
    lineHeights: import("../themes").LineHeights;
    titleSizes: import("../themes").TitleSizes;
    titleTags: {
        small: string;
        medium: string;
        large: string;
        larger: string;
        largest: string;
    };
    textSizes: import("../themes").TextSizes;
    textAligns: import("../themes").TextAligns;
    codeSizes: import("../themes").CodeSizes;
    iconSizes: import("../themes").IconSizes;
    borderRadiuses: import("../themes").BorderRadiuses;
};
