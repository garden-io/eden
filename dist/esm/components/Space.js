/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
export var Space = function (_a) {
    var _b = _a.width, width = _b === void 0 ? "medium" : _b, _c = _a.height, height = _c === void 0 ? "medium" : _c;
    var space = useTheme().space;
    return React.createElement("div", { style: { height: space[height], width: space[width] } });
};
