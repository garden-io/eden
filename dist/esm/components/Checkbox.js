/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { Flex } from "./Flex";
import { useTheme } from "../contexts";
import { fontFamilies } from "../themes";
export var Checkbox = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.value, value = _c === void 0 ? false : _c, _d = _a.onChange, onChange = _d === void 0 ? function () { return null; } : _d;
    var _e = useTheme(), colors = _e.colors, textSizes = _e.textSizes;
    return (React.createElement(Flex, { align: "flex-start" },
        React.createElement("input", { type: "checkbox", checked: value, onChange: onChange, style: {
                fontSize: textSizes.large,
            } }),
        React.createElement("div", { style: {
                color: colors.grayDark,
                fontFamily: fontFamilies.text,
                fontSize: textSizes.medium,
            } }, title)));
};
