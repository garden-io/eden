/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import { fontFamilies, borderRadiuses } from "../themes";
import React from "react";
import { useTheme } from "../contexts";
export var Code = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.color, color = _d === void 0 ? "grayDark" : _d, _e = _a.background, background = _e === void 0 ? "none" : _e, _f = _a.onClick, onClick = _f === void 0 ? function () { } : _f;
    var _g = useTheme(), colors = _g.colors, codeSizes = _g.codeSizes, fontWeights = _g.fontWeights, lineHeights = _g.lineHeights;
    return (React.createElement("code", { style: {
            display: "block",
            fontFamily: fontFamilies.code,
            fontSize: codeSizes[size],
            fontWeight: fontWeights.normal,
            lineHeight: lineHeights.normal,
            color: colors[color],
            margin: 0,
            cursor: onClick ? "pointer" : "",
        }, onClick: onClick },
        React.createElement("span", { style: {
                background: colors[background],
                padding: background ? "0.15em" : "",
                borderRadius: background ? borderRadiuses.small : "",
            } }, children)));
};
