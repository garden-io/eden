/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
export var IconDelete = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "gray" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.debug, debug = _d === void 0 ? false : _d;
    var _e = useTheme(), colors = _e.colors, iconSizes = _e.iconSizes;
    return (React.createElement("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", style: {
            width: iconSizes[size] + "px",
            height: iconSizes[size] + "px",
            display: "block",
            border: debug ? "1px dashed red" : "",
        } },
        React.createElement("polyline", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", points: "3 6 5 6 21 6" }),
        React.createElement("path", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
        React.createElement("line", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", x1: "10", y1: "11", x2: "10", y2: "17" }),
        React.createElement("line", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", x1: "14", y1: "11", x2: "14", y2: "17" })));
};
