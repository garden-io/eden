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
exports.Textarea = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.placeholder, placeholder = _c === void 0 ? "" : _c, _d = _a.name, name = _d === void 0 ? "" : _d, _e = _a.value, value = _e === void 0 ? "" : _e, _f = _a.borderWidth, borderWidth = _f === void 0 ? "medium" : _f, _g = _a.onChange, onChange = _g === void 0 ? function () { return null; } : _g;
    var _h = __1.useTheme(), colors = _h.colors, space = _h.space, textSizes = _h.textSizes, borderRadiuses = _h.borderRadiuses, borderWidths = _h.borderWidths;
    return (react_1.default.createElement("div", null,
        title && (react_1.default.createElement("div", { style: {
                fontFamily: __1.fontFamilies.text,
                fontSize: textSizes.medium,
                color: colors.gray,
                marginBottom: space.small,
            } }, title)),
        react_1.default.createElement("textarea", { name: name, value: value, rows: 10, placeholder: placeholder, style: {
                display: "block",
                background: colors.white,
                borderRadius: borderRadiuses.small,
                borderWidth: borderWidths[borderWidth],
                borderStyle: "solid",
                borderColor: colors.grayLight,
                color: colors.gray,
                paddingTop: space.medium,
                paddingRight: "calc(" + space.medium + " * 1.25)",
                paddingBottom: space.medium,
                paddingLeft: "calc(" + space.medium + " * 1.25)",
                fontFamily: __1.fontFamilies.text,
                fontSize: textSizes.medium,
                outline: "none",
                width: "100%",
            }, onChange: onChange })));
};
