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
exports.Pill = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "grayLight" : _b, children = _a.children;
    var _c = __1.useTheme(), colors = _c.colors, space = _c.space;
    return (react_1.default.createElement("div", { style: {
            background: colors[color],
            padding: "0 " + space.medium,
            borderRadius: "100px",
        } },
        react_1.default.createElement(__1.Text, { size: "small", textAlign: "center" }, children)));
};
