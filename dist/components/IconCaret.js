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
var __1 = require("..");
exports.IconCaret = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "gray" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.debug, debug = _d === void 0 ? false : _d, _e = _a.direction, direction = _e === void 0 ? "up" : _e;
    var _f = __1.useTheme(), colors = _f.colors, iconSizes = _f.iconSizes;
    var directions = {
        up: 0,
        right: 90,
        down: 180,
        left: 270,
    };
    return (react_1.default.createElement("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", style: {
            width: iconSizes[size] + "px",
            height: iconSizes[size] + "px",
            display: "block",
            border: debug ? "1px dashed red" : "",
        } },
        react_1.default.createElement("polyline", { transform: "rotate(" + directions[direction] + " 12 12)", fill: "none", stroke: colors[color], strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", points: "18 15 12 9 6 15" })));
};
