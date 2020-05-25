/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
import React from "react";
import { IconDelete } from "./IconDelete";
export var IconDeleteButton = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "gray" : _b, _c = _a.onClick, onClick = _c === void 0 ? function () { return null; } : _c;
    var handleClick = function (event) {
        // TODO: Replace with inline confirmation next to the button
        if (window.confirm("Are you sure to delete?")) {
            onClick(event);
        }
    };
    return (React.createElement("div", { onClick: handleClick, style: { cursor: "pointer" } },
        React.createElement(IconDelete, { size: "small", color: color })));
};
