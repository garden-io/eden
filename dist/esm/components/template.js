/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
export var Component = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.color, color = _c === void 0 ? "gray" : _c;
    var colors = useTheme().colors;
    return React.createElement("div", { style: { color: colors[color] } }, children);
};
