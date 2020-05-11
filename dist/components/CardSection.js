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
exports.CardSection = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.padding, padding = _c === void 0 ? "medium" : _c, _d = _a.background, background = _d === void 0 ? "white" : _d, _e = _a.fill, fill = _e === void 0 ? false : _e;
    var _f = contexts_1.useTheme(), colors = _f.colors, space = _f.space;
    return (react_1.default.createElement("div", { style: {
            padding: space[padding],
            background: colors[background] ? colors[background] : colors[background],
            height: fill ? "100%" : "",
        } }, children));
};
