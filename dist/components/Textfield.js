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
exports.Textfield = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.value, value = _c === void 0 ? "" : _c, _d = _a.placeholder, placeholder = _d === void 0 ? "" : _d, _e = _a.type, type = _e === void 0 ? "text" : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.onChange, onChange = _g === void 0 ? function () { return null; } : _g, _h = _a.testid, testid = _h === void 0 ? false : _h;
    var _j = contexts_1.useTheme(), colors = _j.colors, space = _j.space, textSizes = _j.textSizes;
    var handleChange = function (event) { return onChange(event.target.value); };
    return (
    /* TODO: Make opacity a thene variable */
    react_1.default.createElement("div", { style: { opacity: disabled ? 0.5 : 1 }, "data-testid": testid },
        title && (react_1.default.createElement("div", { style: {
                fontFamily: themes_1.fontFamilies.text,
                fontSize: textSizes.medium,
                color: colors.gray,
                marginBottom: space.small,
            } }, title)),
        react_1.default.createElement("input", { type: type, value: value, placeholder: placeholder, disabled: disabled, style: {
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
            }, onChange: handleChange })));
};
