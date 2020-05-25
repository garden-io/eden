/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import { fontWeights, fontFamilies } from "../themes";
import React from "react";
import { useTheme } from "../contexts";
export var Button = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = _a.color, color = _d === void 0 ? "greenDark" : _d, _e = _a.size, size = _e === void 0 ? "medium" : _e, _f = _a.secondary, secondary = _f === void 0 ? false : _f, _g = _a.wide, wide = _g === void 0 ? false : _g, _h = _a.type, type = _h === void 0 ? "button" : _h;
    var _j = useTheme(), colors = _j.colors, space = _j.space, textSizes = _j.textSizes;
    var sizingMap = {
        small: {
            height: "calc(" + space.large + " * 1.5)",
            padding: "calc(" + space.medium + " * 1.25)",
            fontSize: textSizes.small,
        },
        medium: {
            height: space.larger,
            padding: space.large,
            fontSize: textSizes.medium,
        },
        large: {
            height: "calc(" + space.larger + " * 1.25)",
            padding: "calc(" + space.large + " * 1.25)",
            fontSize: textSizes.large,
        },
    };
    return (React.createElement("button", { type: type, style: {
            display: wide ? "flex" : "inline-flex",
            width: wide ? "100%" : "",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            outline: "none",
            color: secondary ? colors[color] : colors.white,
            backgroundColor: secondary ? colors.none : colors[color],
            transition: "100ms ease",
            borderColor: colors[color],
            borderRadius: "1px",
            fontSize: sizingMap[size].fontSize,
            lineHeight: "1",
            fontWeight: fontWeights.bold,
            cursor: "pointer",
            height: sizingMap[size].height,
            padding: "0 " + sizingMap[size].padding,
            fontFamily: fontFamilies.text,
        }, onClick: onClick }, children));
};
