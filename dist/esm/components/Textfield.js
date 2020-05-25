/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
import { fontFamilies } from "../themes";
export var Textfield = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.value, value = _c === void 0 ? "" : _c, _d = _a.placeholder, placeholder = _d === void 0 ? "" : _d, _e = _a.type, type = _e === void 0 ? "text" : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.onChange, onChange = _g === void 0 ? function () { return null; } : _g;
    var _h = useTheme(), colors = _h.colors, space = _h.space, textSizes = _h.textSizes;
    var handleChange = function (event) { return onChange(event.target.value); };
    return (
    /* TODO: Make opacity a thene variable */
    React.createElement("div", { style: { opacity: disabled ? 0.5 : 1 } },
        title && (React.createElement("div", { style: {
                fontFamily: fontFamilies.text,
                fontSize: textSizes.medium,
                color: colors.gray,
                marginBottom: space.small,
            } }, title)),
        React.createElement("input", { type: type, value: value, placeholder: placeholder, disabled: disabled, style: {
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
            }, onChange: handleChange })));
};
