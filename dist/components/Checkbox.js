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
var Flex_1 = require("./Flex");
var contexts_1 = require("../contexts");
var themes_1 = require("../themes");
exports.Checkbox = function (_a) {
    var _b = _a.testid, testid = _b === void 0 ? null : _b, _c = _a.title, title = _c === void 0 ? "" : _c, _d = _a.value, value = _d === void 0 ? false : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { return null; } : _e;
    var _f = contexts_1.useTheme(), colors = _f.colors, textSizes = _f.textSizes;
    return (react_1.default.createElement(Flex_1.Flex, { align: "flex-start", "data-testid": testid },
        react_1.default.createElement("input", { type: "checkbox", checked: value, onChange: onChange, style: {
                fontSize: textSizes.large,
            } }),
        react_1.default.createElement("div", { style: {
                color: colors.grayDark,
                fontFamily: themes_1.fontFamilies.text,
                fontSize: textSizes.medium,
            } }, title)));
};
