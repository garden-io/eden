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
exports.Textfield = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.name, name = _c === void 0 ? "" : _c, _d = _a.value, value = _d === void 0 ? "" : _d, _e = _a.placeholder, placeholder = _e === void 0 ? "" : _e, _f = _a.type, type = _f === void 0 ? "text" : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.borderWidth, borderWidth = _h === void 0 ? "medium" : _h, _j = _a.onChange, onChange = _j === void 0 ? function () { return null; } : _j;
    var _k = __1.useTheme(), colors = _k.colors, space = _k.space, textSizes = _k.textSizes, fontFamilies = _k.fontFamilies, borderWidths = _k.borderWidths, borderRadiuses = _k.borderRadiuses;
    var handleChange = function (event) { return onChange(event.target.value); };
    return (
    /* TODO: Make opacity a thene variable */
    react_1.default.createElement("div", { style: { opacity: disabled ? 0.5 : 1 } },
        title && (react_1.default.createElement("div", { style: {
                fontFamily: fontFamilies.text,
                fontSize: textSizes.medium,
                color: colors.gray,
                marginBottom: space.small,
            } }, title)),
        react_1.default.createElement("input", { name: name, type: type, value: value, placeholder: placeholder, disabled: disabled, style: {
                display: "block",
                background: colors.white,
                borderRadius: borderRadiuses.small,
                borderWidth: borderWidths[borderWidth],
                borderStyle: "solid",
                borderColor: colors.grayLight,
                color: colors.gray,
                paddingTop: "calc(" + space.medium + " * 0.9)",
                paddingRight: "calc(" + space.medium + " * 1.25)",
                paddingBottom: "calc(" + space.medium + " * 0.9)",
                paddingLeft: "calc(" + space.medium + " * 1.25)",
                fontFamily: fontFamilies.text,
                fontSize: textSizes.medium,
                outline: "none",
                width: "100%",
                // TODO: extract to a style
                boxShadow: "inset 2px 2px 4px rgba(224, 225, 237, 0.5)",
            }, onChange: handleChange })));
};
