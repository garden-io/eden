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
exports.Status = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "ok" : _b, _c = _a.children, children = _c === void 0 ? null : _c;
    var statusColors = __1.useTheme().statusColors;
    return (react_1.default.createElement(__1.Flex, { align: "center", gap: "small" },
        react_1.default.createElement("div", { style: {
                color: statusColors[color],
                fontSize: "0.7em",
                transform: "translate(0,-0.1em)",
            } }, "\u2B24"),
        children && (react_1.default.createElement("div", { style: { width: "80px" } },
            react_1.default.createElement(__1.Text, { color: "gray" }, children)))));
};
