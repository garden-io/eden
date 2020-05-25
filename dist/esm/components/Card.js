/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
export var Card = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.borderRadius, borderRadius = _c === void 0 ? "medium" : _c, _d = _a.borderColor, borderColor = _d === void 0 ? "grayLight" : _d;
    var _e = useTheme(), colors = _e.colors, borderRadiuses = _e.borderRadiuses;
    return (React.createElement("div", { style: {
            borderRadius: borderRadiuses[borderRadius],
            borderColor: colors[borderColor],
            borderStyle: "solid",
            borderWidth: "1px",
            overflow: "hidden",
        } }, children));
};
