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
exports.Box = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.padding, padding = _c === void 0 ? "large" : _c, _d = _a.borderColor, borderColor = _d === void 0 ? "none" : _d, _e = _a.background, background = _e === void 0 ? "none" : _e, _f = _a.justify, justify = _f === void 0 ? "flex-start" : _f, _g = _a.align, align = _g === void 0 ? "flex-start" : _g, _h = _a.height, height = _h === void 0 ? "" : _h, _j = _a.shadow, shadow = _j === void 0 ? false : _j, _k = _a.debug, debug = _k === void 0 ? false : _k, _l = _a.dataTest, dataTest = _l === void 0 ? null : _l;
    var _m = contexts_1.useTheme(), space = _m.space, colors = _m.colors;
    return (react_1.default.createElement("div", { "data-test": dataTest, style: {
            display: "flex",
            justifyContent: justify,
            alignItems: align,
            padding: space[padding],
            borderColor: colors[borderColor],
            borderStyle: borderColor ? "solid" : "",
            backgroundColor: colors[background],
            borderWidth: borderColor ? "1px" : "",
            height: Object(space).hasOwnProperty(height) ? space[height] : height,
            boxShadow: shadow ? "0 0 2px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.05)" : "",
        } },
        react_1.default.createElement("div", { style: {
                border: debug ? "1px dashed red" : "",
                flex: justify === "center" ? "" : 1,
                textAlign: justify === "center" ? "center" : undefined,
            } }, children)));
};
