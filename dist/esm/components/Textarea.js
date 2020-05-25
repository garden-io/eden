/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
import { fontFamilies } from "../themes";
export var Textarea = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.value, value = _c === void 0 ? "" : _c, _d = _a.onChange, onChange = _d === void 0 ? function () { return null; } : _d;
    var _e = useTheme(), colors = _e.colors, space = _e.space, textSizes = _e.textSizes;
    return (React.createElement("div", null,
        title && (React.createElement("div", { style: {
                fontFamily: fontFamilies.text,
                fontSize: textSizes.medium,
                color: colors.gray,
                marginBottom: space.small,
            } }, title)),
        React.createElement("textarea", { value: value, rows: 10, style: {
                display: "block",
                background: colors.white,
                borderRadius: "1px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: colors.grayLight,
                color: colors.gray,
                paddingTop: space.medium,
                paddingRight: "calc(" + space.medium + " * 1.25)",
                paddingBottom: space.medium,
                paddingLeft: "calc(" + space.medium + " * 1.25)",
                fontFamily: fontFamilies.text,
                fontSize: textSizes.medium,
                outline: "none",
                width: "100%",
            }, onChange: onChange })));
};
