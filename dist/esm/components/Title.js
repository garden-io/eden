/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import { textAligns, fontFamilies } from "../themes";
import React from "react";
import { useTheme } from "../contexts";
export var Title = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.textAlign, textAlign = _d === void 0 ? "left" : _d, _e = _a.color, color = _e === void 0 ? "grayDark" : _e, _f = _a.fontFamily, fontFamily = _f === void 0 ? "title" : _f, _g = _a.tag, tag = _g === void 0 ? "h3" : _g, _h = _a.to, to = _h === void 0 ? null : _h, _j = _a.onClick, onClick = _j === void 0 ? function () { } : _j;
    var _k = useTheme(), colors = _k.colors, titleSizes = _k.titleSizes, fontWeights = _k.fontWeights, lineHeights = _k.lineHeights, titleTags = _k.titleTags;
    var HeadingTag = tag ? tag : titleTags[size];
    return (React.createElement(HeadingTag, { style: {
            fontFamily: fontFamilies[fontFamily],
            fontSize: titleSizes[size],
            fontWeight: fontWeights.bold,
            lineHeight: lineHeights.small,
            color: colors[color],
            margin: 0,
            cursor: to || onClick ? "pointer" : "",
            textAlign: textAligns[textAlign],
        }, onClick: onClick }, children));
};
