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
var utils_1 = require("../utils");
var contexts_1 = require("../contexts");
exports.Grid = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.columns, columns = _c === void 0 ? 1 : _c, _d = _a.gap, gap = _d === void 0 ? "medium" : _d, _e = _a.debug, debug = _e === void 0 ? false : _e, _f = _a.justify, justify = _f === void 0 ? "start" : _f, _g = _a.align, align = _g === void 0 ? "stretch" : _g, _h = _a.dataTest, dataTest = _h === void 0 ? false : _h;
    var space = contexts_1.useTheme().space;
    return (react_1.default.createElement("div", { "data-test": dataTest, style: {
            display: "grid",
            gridTemplateColumns: typeof columns === "string" ? columns : "repeat(" + columns + ", 1fr)",
            gridGap: space[gap],
            justifyContent: justify,
            alignItems: align,
        } }, utils_1.flatten([children]).map(function (Child, i) { return (react_1.default.createElement("div", { key: i, style: { border: debug ? "1px dashed red" : "" } }, Child)); })));
};
