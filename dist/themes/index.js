"use strict";
/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Colors
exports.brandColors = {
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
exports.lightColors = {
    grayLightest: "hsl(0,0%,97%)",
    grayLighter: "hsl(0,0%,93%)",
    grayLight: "hsl(0,0%,90%)",
    gray: "hsl(0,0%,50%)",
    grayDark: "hsl(0,0%,30%)",
    grayDarker: "hsl(0,0%,15%)",
    greenLight: exports.brandColors.greenLight,
    greenDark: exports.brandColors.greenDark,
    greenDarker: exports.brandColors.greenDarker,
    blueLight: exports.brandColors.blueLight,
    blue: exports.brandColors.blue,
    blueDark: exports.brandColors.blueDark,
    pink: exports.brandColors.pink,
    green: "hsl(160, 75%, 34%)",
    red: "hsl(353, 85%, 44%)",
    yellow: "hsl(37, 100%, 64%)",
    white: exports.brandColors.white,
    black: exports.brandColors.black,
    none: "transparent",
};
exports.darkColors = {
    grayLightest: exports.lightColors.white,
    grayLighter: exports.lightColors.white,
    grayLight: exports.lightColors.white,
    gray: exports.lightColors.grayLight,
    grayDark: exports.lightColors.white,
    grayDarker: exports.lightColors.white,
    greenLight: exports.brandColors.greenLight,
    greenDark: exports.brandColors.greenDark,
    greenDarker: exports.brandColors.greenDarker,
    blueLight: exports.brandColors.blueLight,
    blue: exports.brandColors.blue,
    blueDark: exports.brandColors.blueDark,
    pink: exports.brandColors.pink,
    green: "hsl(160, 75%, 34%)",
    red: "hsl(353, 85%, 44%)",
    yellow: "hsl(37, 100%, 64%)",
    white: exports.lightColors.grayDark,
    black: exports.lightColors.white,
    none: "transparent",
};
exports.colors = exports.lightColors;
exports.logoColors = {
    light: exports.brandColors.greenLight,
    dark: exports.brandColors.black,
};
// Space
exports.spacer = 12;
exports.space = {
    none: "",
    small: exports.spacer * 0.5 + "px",
    medium: exports.spacer + "px",
    large: exports.spacer * 2 + "px",
    larger: exports.spacer * 4 + "px",
    largest: exports.spacer * 10 + "px",
    huge: exports.spacer * 30 + "px",
};
exports.breakpoints = {
    small: "800px",
    medium: "1200px",
    large: "1500px",
    full: "100%",
};
exports.fontFamilies = {
    garden: "Garden",
    title: "Garden",
    text: "Nunito Sans",
    code: "Cousine",
};
exports.fontWeights = {
    normal: 400,
    bold: 700,
};
exports.lineHeights = {
    small: "1.15em",
    normal: "1.75em",
};
exports.titleSizes = {
    smaller: "calc(" + exports.spacer + "px * 1.1666)",
    small: "calc(" + exports.spacer + "px * 1.5)",
    medium: "calc(" + exports.spacer + "px * 2.5)",
    large: "calc(" + exports.spacer + "px * 3)",
    larger: "calc(" + exports.spacer + "px * 4)",
    largest: "calc(" + exports.spacer + "px * 6)",
};
exports.titleTags = {
    smaller: "h5",
    small: "h4",
    medium: "h3",
    large: "h2",
    larger: "h1",
};
exports.textSizes = {
    small: "calc(" + exports.spacer + "px * 1.083)",
    medium: "calc(" + exports.spacer + "px * 1.5)",
    large: "calc(" + exports.spacer + "px * 2)",
};
exports.codeSizes = {
    small: "calc(" + exports.spacer + "px * 1)",
    medium: "calc(" + exports.spacer + "px * 1.3)",
    large: "calc(" + exports.spacer + "px * 1.6)",
};
exports.textAligns = {
    left: "left",
    center: "center",
    right: "right",
};
exports.iconSizes = {
    small: exports.spacer * 1.5,
    medium: exports.spacer * 2.5,
    large: exports.spacer * 6,
};
exports.borderRadiuses = {
    large: "4px",
    medium: "3px",
    small: "2px",
};
exports.theme = {
    colors: exports.colors,
    lightColors: exports.lightColors,
    darkColors: exports.darkColors,
    brandColors: exports.brandColors,
    logoColors: exports.logoColors,
    spacer: exports.spacer,
    space: exports.space,
    breakpoints: exports.breakpoints,
    fontFamilies: exports.fontFamilies,
    fontWeights: exports.fontWeights,
    lineHeights: exports.lineHeights,
    titleSizes: exports.titleSizes,
    titleTags: exports.titleTags,
    textSizes: exports.textSizes,
    textAligns: exports.textAligns,
    codeSizes: exports.codeSizes,
    iconSizes: exports.iconSizes,
    borderRadiuses: exports.borderRadiuses,
};
