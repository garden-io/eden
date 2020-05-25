/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
// Colors
export var brandColors = {
    black: "hsl(0, 0%, 0%)",
    gray: "hsl(180,0%,33%)",
    grayLight: "hsl(0,0%,83%)",
    grayLighter: "hsl(210,33%,100%)",
    blueDark: "hsl(205,100%,30%)",
    blue: "hsl(197,100%,46%)",
    blueLight: "hsl(197, 61%, 92%)",
    greenDarker: "hsl(180, 75%, 34%)",
    greenDark: "hsl(174, 100%, 40%)",
    greenBright: "hsl(157, 100%, 70%)",
    greenLight: "hsl(156, 100%, 88%)",
    pink: "hsl(319, 74%, 72%)",
    white: "hsl(0, 0%, 100%)",
};
export var lightColors = {
    grayLightest: "hsl(0,0%,97%)",
    grayLighter: "hsl(0,0%,93%)",
    grayLight: "hsl(0,0%,90%)",
    gray: "hsl(0,0%,50%)",
    grayDark: "hsl(0,0%,30%)",
    grayDarker: "hsl(0,0%,15%)",
    greenLight: brandColors.greenLight,
    greenDark: brandColors.greenDark,
    greenDarker: brandColors.greenDarker,
    blueLight: brandColors.blueLight,
    blue: brandColors.blue,
    blueDark: brandColors.blueDark,
    pink: brandColors.pink,
    green: "hsl(160, 75%, 34%)",
    red: "hsl(353, 85%, 44%)",
    yellow: "hsl(37, 100%, 64%)",
    white: brandColors.white,
    black: brandColors.black,
    none: "transparent",
};
export var darkColors = {
    grayLightest: lightColors.white,
    grayLighter: lightColors.white,
    grayLight: lightColors.white,
    gray: lightColors.grayLight,
    grayDark: lightColors.white,
    grayDarker: lightColors.white,
    greenLight: brandColors.greenLight,
    greenDark: brandColors.greenDark,
    greenDarker: brandColors.greenDarker,
    blueLight: brandColors.blueLight,
    blue: brandColors.blue,
    blueDark: brandColors.blueDark,
    pink: brandColors.pink,
    green: "hsl(160, 75%, 34%)",
    red: "hsl(353, 85%, 44%)",
    yellow: "hsl(37, 100%, 64%)",
    white: lightColors.grayDark,
    black: lightColors.white,
    none: "transparent",
};
export var colors = lightColors;
export var logoColors = {
    light: brandColors.greenLight,
    dark: brandColors.black,
};
// Whitespace
export var spacer = 12;
export var space = {
    none: "",
    small: spacer * 0.5 + "px",
    medium: spacer + "px",
    large: spacer * 2 + "px",
    larger: spacer * 4 + "px",
    largest: spacer * 10 + "px",
    huge: spacer * 30 + "px",
};
export var breakpoints = {
    small: "800px",
    medium: "1200px",
    large: "1500px",
    full: "100%",
};
export var fontFamilies = {
    garden: "Garden",
    title: "Garden",
    text: "Nunito Sans",
    code: "Cousine",
};
export var fontWeights = {
    normal: 400,
    bold: 700,
};
export var lineHeights = {
    small: "1.15em",
    normal: "1.75em",
};
export var titleSizes = {
    smaller: "calc(" + spacer + "px * 1.1666)",
    small: "calc(" + spacer + "px * 1.5)",
    medium: "calc(" + spacer + "px * 2.5)",
    large: "calc(" + spacer + "px * 3)",
    larger: "calc(" + spacer + "px * 4)",
    largest: "calc(" + spacer + "px * 6)",
};
export var titleTags = {
    smaller: "h5",
    small: "h4",
    medium: "h3",
    large: "h2",
    larger: "h1",
};
export var textSizes = {
    small: "calc(" + spacer + "px * 1.083)",
    medium: "calc(" + spacer + "px * 1.5)",
    large: "calc(" + spacer + "px * 2)",
};
export var codeSizes = {
    small: "calc(" + spacer + "px * 1)",
    medium: "calc(" + spacer + "px * 1.3)",
    large: "calc(" + spacer + "px * 1.6)",
};
export var textAligns = {
    left: "left",
    center: "center",
    right: "right",
};
export var iconSizes = {
    small: spacer * 1.5,
    medium: spacer * 2.5,
    large: spacer * 6,
};
export var borderRadiuses = {
    large: "4px",
    medium: "3px",
    small: "2px",
};
export var theme = {
    colors: colors,
    lightColors: lightColors,
    darkColors: darkColors,
    brandColors: brandColors,
    logoColors: logoColors,
    spacer: spacer,
    space: space,
    breakpoints: breakpoints,
    fontFamilies: fontFamilies,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    titleSizes: titleSizes,
    titleTags: titleTags,
    textSizes: textSizes,
    textAligns: textAligns,
    codeSizes: codeSizes,
    iconSizes: iconSizes,
    borderRadiuses: borderRadiuses,
};
