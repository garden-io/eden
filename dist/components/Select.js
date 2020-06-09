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
exports.Select = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "" : _b, _c = _a.options, options = _c === void 0 ? [] : _c, _d = _a.onChange, onChange = _d === void 0 ? function () { return null; } : _d, _e = _a.selectedValue, selectedValue = _e === void 0 ? undefined : _e, _f = _a.borderWidth, borderWidth = _f === void 0 ? "medium" : _f;
    var _g = __1.useTheme(), colors = _g.colors, space = _g.space, textSizes = _g.textSizes, fontFamilies = _g.fontFamilies;
    var handleChange = function (event) { return onChange(event.target.value); };
    return (react_1.default.createElement("div", { style: {
            borderRadius: __1.borderRadiuses.small,
            borderWidth: __1.borderWidths[borderWidth],
            borderStyle: "solid",
            paddingTop: "calc(" + space.medium + " * 0.88)",
            paddingRight: space.medium,
            paddingBottom: "calc(" + space.medium + " * 0.88)",
            paddingLeft: space.medium,
            background: colors.white,
            borderColor: colors.grayLight,
            // TODO: extract to a style
            boxShadow: "inset 2px 2px 4px rgba(224, 225, 237, 0.5)",
        } }, options.length && (react_1.default.createElement("select", { name: name, onChange: handleChange, style: {
            display: "block",
            color: colors.gray,
            background: colors.white,
            fontFamily: fontFamilies.text,
            fontSize: textSizes.medium,
            outline: "none",
            width: "100%",
            MozAppearance: "none",
            border: 0,
        } }, options.map(function (opt) { return (react_1.default.createElement("option", { key: opt.value, value: opt.value, disabled: opt.disabled, selected: selectedValue === opt.value }, opt.title || opt.value)); })))));
};
