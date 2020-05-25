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
exports.Section = function (_a) {
    var _b = _a.dataTest, dataTest = _b === void 0 ? false : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.width, width = _d === void 0 ? "medium" : _d, _e = _a.background, background = _e === void 0 ? "none" : _e, _f = _a.contentBackground, contentBackground = _f === void 0 ? "none" : _f, _g = _a.padding, padding = _g === void 0 ? "" : _g, _h = _a.contentPadding, contentPadding = _h === void 0 ? "" : _h, _j = _a.debug, debug = _j === void 0 ? false : _j;
    var _k = contexts_1.useTheme(), colors = _k.colors, space = _k.space, breakpoints = _k.breakpoints;
    return (react_1.default.createElement("div", { "data-test": dataTest, style: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: colors[background],
            padding: space[padding],
        } },
        react_1.default.createElement("div", { style: {
                flex: 1,
                maxWidth: breakpoints[width],
                backgroundColor: colors[contentBackground],
                padding: space[contentPadding],
                border: debug ? "1px dashed red" : "",
            } }, children)));
};
