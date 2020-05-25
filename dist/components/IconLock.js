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
exports.IconLock = function (_a) {
    var _b = _a.testid, testid = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "gray" : _c, _d = _a.size, size = _d === void 0 ? "medium" : _d, _e = _a.debug, debug = _e === void 0 ? false : _e;
    var _f = contexts_1.useTheme(), colors = _f.colors, iconSizes = _f.iconSizes;
    return (react_1.default.createElement("svg", { "data-testid": testid, role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", style: {
            width: iconSizes[size] + "px",
            height: iconSizes[size] + "px",
            display: "block",
            border: debug ? "1px dashed red" : "",
        } },
        react_1.default.createElement("rect", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
        react_1.default.createElement("path", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 11V7a5 5 0 0 1 10 0v4" })));
};
