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
exports.IconDelete = function (_a) {
    var _b = _a.testid, testid = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "gray" : _c, _d = _a.size, size = _d === void 0 ? "medium" : _d, _e = _a.debug, debug = _e === void 0 ? false : _e;
    var _f = contexts_1.useTheme(), colors = _f.colors, iconSizes = _f.iconSizes;
    return (react_1.default.createElement("svg", { "data-testid": testid, role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", style: {
            width: iconSizes[size] + "px",
            height: iconSizes[size] + "px",
            display: "block",
            border: debug ? "1px dashed red" : "",
        } },
        react_1.default.createElement("polyline", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", points: "3 6 5 6 21 6" }),
        react_1.default.createElement("path", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
        react_1.default.createElement("line", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", x1: "10", y1: "11", x2: "10", y2: "17" }),
        react_1.default.createElement("line", { fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", x1: "14", y1: "11", x2: "14", y2: "17" })));
};
