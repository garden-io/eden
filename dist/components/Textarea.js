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
var themes_1 = require("../themes");
exports.Textarea = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.value, value = _c === void 0 ? "" : _c, _d = _a.onChange, onChange = _d === void 0 ? function () { return null; } : _d;
    var _e = contexts_1.useTheme(), colors = _e.colors, space = _e.space, textSizes = _e.textSizes;
    return (react_1.default.createElement("div", null,
        title && (react_1.default.createElement("div", { style: {
                fontFamily: themes_1.fontFamilies.text,
                fontSize: textSizes.medium,
                color: colors.gray,
                marginBottom: space.small,
            } }, title)),
        react_1.default.createElement("textarea", { value: value, rows: 10, style: {
                display: "block",
                background: colors.white,
                borderRadius: "1px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: colors.grayLight,
                color: colors.gray,
                paddingTop: space.medium,
                paddingRight: "calc(" + space.medium + " * 1.25)",
                paddingBottom: space.medium,
                paddingLeft: "calc(" + space.medium + " * 1.25)",
                fontFamily: themes_1.fontFamilies.text,
                fontSize: textSizes.medium,
                outline: "none",
                width: "100%",
            }, onChange: onChange })));
};