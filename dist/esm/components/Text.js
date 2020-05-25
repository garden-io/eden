/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
export var Text = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.textAlign, textAlign = _d === void 0 ? "left" : _d, _e = _a.fontFamily, fontFamily = _e === void 0 ? "text" : _e, _f = _a.color, color = _f === void 0 ? "grayDark" : _f, _g = _a.to, to = _g === void 0 ? null : _g, _h = _a.onClick, onClick = _h === void 0 ? function () { } : _h;
    var _j = useTheme(), colors = _j.colors, textSizes = _j.textSizes, fontFamilies = _j.fontFamilies, fontWeights = _j.fontWeights, lineHeights = _j.lineHeights, textAligns = _j.textAligns;
    return (React.createElement("div", { style: {
            fontFamily: fontFamilies[fontFamily],
            fontSize: textSizes[size],
            fontWeight: fontWeights.normal,
            lineHeight: lineHeights.normal,
            color: colors[color],
            textAlign: textAligns[textAlign],
        }, onClick: onClick }, children));
};
