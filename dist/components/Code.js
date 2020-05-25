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
var themes_1 = require("../themes");
var react_1 = __importDefault(require("react"));
var contexts_1 = require("../contexts");
exports.Code = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.color, color = _d === void 0 ? "grayDark" : _d, _e = _a.background, background = _e === void 0 ? "none" : _e, _f = _a.onClick, onClick = _f === void 0 ? function () { } : _f, _g = _a.dataTest, dataTest = _g === void 0 ? null : _g;
    var _h = contexts_1.useTheme(), colors = _h.colors, codeSizes = _h.codeSizes, fontWeights = _h.fontWeights, lineHeights = _h.lineHeights;
    return (react_1.default.createElement("code", { "data-test": dataTest, style: {
            display: "block",
            fontFamily: themes_1.fontFamilies.code,
            fontSize: codeSizes[size],
            fontWeight: fontWeights.normal,
            lineHeight: lineHeights.normal,
            color: colors[color],
            margin: 0,
            cursor: onClick ? "pointer" : "",
        }, onClick: onClick },
        react_1.default.createElement("span", { style: {
                background: colors[background],
                padding: background ? "0.15em" : "",
                borderRadius: background ? themes_1.borderRadiuses.small : "",
            } }, children)));
};
