/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
export var IconPlaceholder = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "gray" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.debug, debug = _d === void 0 ? false : _d;
    var _e = useTheme(), colors = _e.colors, iconSizes = _e.iconSizes;
    return (React.createElement("svg", { role: "img", viewBox: "0 0 " + iconSizes[size] + " " + iconSizes[size], xmlns: "http://www.w3.org/2000/svg", style: {
            width: iconSizes[size] + "px",
            height: iconSizes[size] + "px",
            display: "block",
            border: debug ? "1px dashed red" : "",
        } },
        React.createElement("circle", { stroke: colors[color], cx: iconSizes[size] / 2, cy: iconSizes[size] / 2, r: iconSizes[size] / 2 - 1, fill: "none", strokeDasharray: "2 1" })));
};
