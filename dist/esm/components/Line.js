/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
export var Line = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "grayLight" : _b;
    var colors = useTheme().colors;
    return (React.createElement("div", { style: {
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: colors[color],
        } }));
};
