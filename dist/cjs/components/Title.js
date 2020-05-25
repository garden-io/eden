"use strict";
/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var themes_1 = require("../themes");
var react_1 = __importDefault(require("react"));
var contexts_1 = require("../contexts");
exports.Title = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.textAlign, textAlign = _d === void 0 ? "left" : _d, _e = _a.color, color = _e === void 0 ? "grayDark" : _e, _f = _a.fontFamily, fontFamily = _f === void 0 ? "title" : _f, _g = _a.tag, tag = _g === void 0 ? "h3" : _g, _h = _a.to, to = _h === void 0 ? null : _h, _j = _a.onClick, onClick = _j === void 0 ? function () { } : _j;
    var _k = contexts_1.useTheme(), colors = _k.colors, titleSizes = _k.titleSizes, fontWeights = _k.fontWeights, lineHeights = _k.lineHeights, titleTags = _k.titleTags;
    var HeadingTag = tag ? tag : titleTags[size];
    return (react_1.default.createElement(HeadingTag, { style: {
            fontFamily: themes_1.fontFamilies[fontFamily],
            fontSize: titleSizes[size],
            fontWeight: fontWeights.bold,
            lineHeight: lineHeights.small,
            color: colors[color],
            margin: 0,
            cursor: to || onClick ? "pointer" : "",
            textAlign: themes_1.textAligns[textAlign],
        }, onClick: onClick }, children));
};
