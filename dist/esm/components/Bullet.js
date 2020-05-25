/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { useTheme } from "../contexts";
import { Title } from "..";
export var Bullet = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.background, background = _c === void 0 ? "grayDark" : _c;
    var _d = useTheme(), colors = _d.colors, space = _d.space;
    return (React.createElement("div", { style: {
            width: "calc(" + space.largest + " * 0.4)",
            height: "calc(" + space.largest + " * 0.4)",
            borderRadius: "100%",
            backgroundColor: colors[background],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        } },
        React.createElement(Title, { size: "large", color: "white" }, children)));
};
