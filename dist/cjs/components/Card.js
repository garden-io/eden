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
exports.Card = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.borderRadius, borderRadius = _c === void 0 ? "medium" : _c, _d = _a.borderColor, borderColor = _d === void 0 ? "grayLight" : _d;
    var _e = contexts_1.useTheme(), colors = _e.colors, borderRadiuses = _e.borderRadiuses;
    return (react_1.default.createElement("div", { style: {
            borderRadius: borderRadiuses[borderRadius],
            borderColor: colors[borderColor],
            borderStyle: "solid",
            borderWidth: "1px",
            overflow: "hidden",
        } }, children));
};
