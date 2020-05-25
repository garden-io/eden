/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { flatten } from "../utils";
import { useTheme } from "../contexts";
export var Grid = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.columns, columns = _c === void 0 ? 1 : _c, _d = _a.gap, gap = _d === void 0 ? "medium" : _d, _e = _a.debug, debug = _e === void 0 ? false : _e, _f = _a.justify, justify = _f === void 0 ? "start" : _f, _g = _a.align, align = _g === void 0 ? "stretch" : _g;
    var space = useTheme().space;
    return (React.createElement("div", { style: {
            display: "grid",
            gridTemplateColumns: typeof columns === "string" ? columns : "repeat(" + columns + ", 1fr)",
            gridGap: space[gap],
            justifyContent: justify,
            alignItems: align,
        } }, flatten([children]).map(function (Child, i) { return (React.createElement("div", { key: i, style: { border: debug ? "1px dashed red" : "" } }, Child)); })));
};
