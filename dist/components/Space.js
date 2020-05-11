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
exports.Space = function (_a) {
    var _b = _a.width, width = _b === void 0 ? "medium" : _b, _c = _a.height, height = _c === void 0 ? "medium" : _c;
    var space = contexts_1.useTheme().space;
    return react_1.default.createElement("div", { style: { height: space[height], width: space[width] } });
};
