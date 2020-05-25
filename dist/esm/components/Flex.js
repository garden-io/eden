/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { flatten } from "../utils";
import { useTheme } from "../contexts";
export var Flex = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.gap, gap = _c === void 0 ? "medium" : _c, _d = _a.justify, justify = _d === void 0 ? "flex-start" : _d, _e = _a.align, align = _e === void 0 ? "center" : _e, _f = _a.wrap, wrap = _f === void 0 ? false : _f, _g = _a.debug, debug = _g === void 0 ? false : _g;
    var space = useTheme().space;
    return (React.createElement("div", { style: {
            display: "flex",
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap ? "wrap" : undefined,
        } }, flatten([children]).map(function (Child, i) { return (React.createElement("div", { key: i, style: {
            marginLeft: i === 0 ? "" : space[gap],
            border: debug ? "1px dashed red" : "",
        } }, Child)); })));
};
