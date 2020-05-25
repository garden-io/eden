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
exports.IconPlaceholder = function (_a) {
    var _b = _a.dataTest, dataTest = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "gray" : _c, _d = _a.size, size = _d === void 0 ? "medium" : _d, _e = _a.debug, debug = _e === void 0 ? false : _e;
    var _f = contexts_1.useTheme(), colors = _f.colors, iconSizes = _f.iconSizes;
    return (react_1.default.createElement("svg", { "data-test": dataTest, role: "img", viewBox: "0 0 " + iconSizes[size] + " " + iconSizes[size], xmlns: "http://www.w3.org/2000/svg", style: {
            width: iconSizes[size] + "px",
            height: iconSizes[size] + "px",
            display: "block",
            border: debug ? "1px dashed red" : "",
        } },
        react_1.default.createElement("circle", { stroke: colors[color], cx: iconSizes[size] / 2, cy: iconSizes[size] / 2, r: iconSizes[size] / 2 - 1, fill: "none", strokeDasharray: "2 1" })));
};
