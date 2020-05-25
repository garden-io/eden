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
    var _b = _a.testid, testid = _b === void 0 ? null : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.borderRadius, borderRadius = _d === void 0 ? "medium" : _d, _e = _a.borderColor, borderColor = _e === void 0 ? "grayLight" : _e;
    var _f = contexts_1.useTheme(), colors = _f.colors, borderRadiuses = _f.borderRadiuses;
    return (react_1.default.createElement("div", { "data-testid": testid, style: {
            borderRadius: borderRadiuses[borderRadius],
            borderColor: colors[borderColor],
            borderStyle: "solid",
            borderWidth: "1px",
            overflow: "hidden",
        } }, children));
};
