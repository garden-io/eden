"use strict";
/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var contexts_1 = require("../contexts");
exports.IconBranch = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "gray" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.debug, debug = _d === void 0 ? false : _d;
    var _e = contexts_1.useTheme(), colors = _e.colors, iconSizes = _e.iconSizes;
    return (react_1.default.createElement("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", style: {
            width: iconSizes[size] + "px",
            height: iconSizes[size] + "px",
            display: "block",
            border: debug ? "1px dashed red" : "",
        } },
        react_1.default.createElement("line", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", x1: "6", y1: "3", x2: "6", y2: "15" }),
        react_1.default.createElement("circle", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", cx: "18", cy: "6", r: "3" }),
        react_1.default.createElement("circle", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", cx: "6", cy: "18", r: "3" }),
        react_1.default.createElement("path", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 9a9 9 0 0 1-9 9" })));
};
