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
var __1 = require("..");
exports.Bullet = function (_a) {
    var _b = _a.testid, testid = _b === void 0 ? null : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.background, background = _d === void 0 ? "grayDark" : _d;
    var _e = contexts_1.useTheme(), colors = _e.colors, space = _e.space;
    return (react_1.default.createElement("div", { "data-testid": testid, style: {
            width: "calc(" + space.largest + " * 0.4)",
            height: "calc(" + space.largest + " * 0.4)",
            borderRadius: "100%",
            backgroundColor: colors[background],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        } },
        react_1.default.createElement(__1.Title, { size: "large", color: "white" }, children)));
};
