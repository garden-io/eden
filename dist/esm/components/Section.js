/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
export var Section = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.width, width = _c === void 0 ? "medium" : _c, _d = _a.background, background = _d === void 0 ? "none" : _d, _e = _a.contentBackground, contentBackground = _e === void 0 ? "none" : _e, _f = _a.padding, padding = _f === void 0 ? "" : _f, _g = _a.contentPadding, contentPadding = _g === void 0 ? "" : _g, _h = _a.debug, debug = _h === void 0 ? false : _h;
    var _j = useTheme(), colors = _j.colors, space = _j.space, breakpoints = _j.breakpoints;
    return (React.createElement("div", { style: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: colors[background],
            padding: space[padding],
        } },
        React.createElement("div", { style: {
                flex: 1,
                maxWidth: breakpoints[width],
                backgroundColor: colors[contentBackground],
                padding: space[contentPadding],
                border: debug ? "1px dashed red" : "",
            } }, children)));
};
