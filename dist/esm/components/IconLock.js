/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
export var IconLock = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "gray" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.debug, debug = _d === void 0 ? false : _d;
    var _e = useTheme(), colors = _e.colors, iconSizes = _e.iconSizes;
    return (React.createElement("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", style: {
            width: iconSizes[size] + "px",
            height: iconSizes[size] + "px",
            display: "block",
            border: debug ? "1px dashed red" : "",
        } },
        React.createElement("rect", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
        React.createElement("path", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 11V7a5 5 0 0 1 10 0v4" })));
};
