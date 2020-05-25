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
exports.Text = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.textAlign, textAlign = _d === void 0 ? "left" : _d, _e = _a.fontFamily, fontFamily = _e === void 0 ? "text" : _e, _f = _a.color, color = _f === void 0 ? "grayDark" : _f, _g = _a.to, to = _g === void 0 ? null : _g, _h = _a.onClick, onClick = _h === void 0 ? function () { } : _h, _j = _a.testid, testid = _j === void 0 ? false : _j;
    var _k = contexts_1.useTheme(), colors = _k.colors, textSizes = _k.textSizes, fontFamilies = _k.fontFamilies, fontWeights = _k.fontWeights, lineHeights = _k.lineHeights, textAligns = _k.textAligns;
    return (react_1.default.createElement("div", { "data-testid": testid, style: {
            fontFamily: fontFamilies[fontFamily],
            fontSize: textSizes[size],
            fontWeight: fontWeights.normal,
            lineHeight: lineHeights.normal,
            color: colors[color],
            textAlign: textAligns[textAlign],
        }, onClick: onClick }, children));
};
