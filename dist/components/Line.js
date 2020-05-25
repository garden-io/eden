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
exports.Line = function (_a) {
    var _b = _a.testid, testid = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "grayLight" : _c;
    var colors = contexts_1.useTheme().colors;
    return (react_1.default.createElement("div", { "data-testid": testid, style: {
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: colors[color],
        } }));
};
