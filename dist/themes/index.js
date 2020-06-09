"use strict";
/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var h = 206;
var s = 5;
exports.grayColors = {
    grayLightest: "hsl(" + h + "," + s + "%,93%)",
    grayLighter: "hsl(" + h + "," + s + "%,90%)",
    grayLight: "hsl(" + h + ", " + s + "%, 72%)",
    gray: "hsl(" + h + "," + s + "%,50%)",
    grayDark: "hsl(" + h + "," + s + "%,30%)",
    grayDarker: "hsl(" + h + "," + s + "%,15%)",
};
exports.statusColors = {
    statusGreen: "hsl(165, 75%, 34%)",
    statusRed: "hsl(0, 91%, 42%)",
    statusYellow: "hsl(37, 100%, 64%)",
};
exports.colors = __assign(__assign(__assign(__assign({}, exports.grayColors), { greenLight: exports.brandColors.greenLight, greenDark: exports.brandColors.greenDark, greenDarker: exports.brandColors.greenDarker, blueLight: exports.brandColors.blueLight, blue: exports.brandColors.blue, blueDark: exports.brandColors.blueDark, pink: exports.brandColors.pink }), exports.statusColors), { white: exports.brandColors.white, black: exports.brandColors.black, none: "transparent" });
exports.logoColors = {
    light: exports.brandColors.greenLight,
    dark: exports.brandColors.black,
};
// Whitespace
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
    garden: "Garden, Nunito Sans",
    title: "Garden, Nunito Sans",
    text: "Nunito Sans",
    code: "Cousine",
};
exports.fontWeights = {
    normal: 300,
    bold: 700,
};
exports.lineHeights = {
    small: "1.25em",
    normal: "1.75em",
};
exports.titleSizes = {
    small: "calc(" + exports.spacer + "px * 1.75)",
    medium: "calc(" + exports.spacer + "px * 2.5)",
    large: "calc(" + exports.spacer + "px * 3)",
    larger: "calc(" + exports.spacer + "px * 4)",
    largest: "calc(" + exports.spacer + "px * 5)",
};
exports.titleTags = {
    small: "h5",
    medium: "h4",
    large: "h3",
    larger: "h2",
    largest: "h1",
};
exports.textSizes = {
    small: "calc(" + exports.spacer + "px * 1.2)",
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
    none: "0px",
};
exports.borderWidths = {
    medium: "2px",
    small: "1px",
    none: "0px",
};
exports.theme = {
    colors: exports.colors,
    brandColors: exports.brandColors,
    grayColors: exports.grayColors,
    statusColors: exports.statusColors,
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
    borderWidths: exports.borderWidths,
};
