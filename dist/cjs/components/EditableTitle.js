"use strict";
/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Button_1 = require("./Button");
var Flex_1 = require("./Flex");
var Grid_1 = require("./Grid");
var Textfield_1 = require("./Textfield");
var Title_1 = require("./Title");
var contexts_1 = require("../contexts");
exports.EditableTitle = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.value, value = _c === void 0 ? "" : _c, _d = _a.onChange, onChange = _d === void 0 ? function () { return undefined; } : _d;
    var _e = __read(react_1.useState(false), 2), editing = _e[0], setEditing = _e[1];
    var _f = __read(react_1.useState(value), 2), currentValue = _f[0], setCurrentValue = _f[1];
    var handleCurrentChange = function (val) {
        if (editing) {
            setCurrentValue(val);
        }
    };
    var onEdit = function () { return setEditing(true); };
    var onSave = function () {
        onChange(currentValue);
        setEditing(false);
    };
    var onCancel = function () {
        setCurrentValue(value);
        setEditing(false);
    };
    var _g = contexts_1.useTheme(), colors = _g.colors, space = _g.space, textSizes = _g.textSizes;
    return (react_1.default.createElement("div", null,
        title && (react_1.default.createElement("div", { style: {
                fontSize: textSizes.medium,
                color: colors.gray,
                marginBottom: space.small,
            } }, title)),
        !editing && (react_1.default.createElement(Flex_1.Flex, { align: "center" },
            react_1.default.createElement(Title_1.Title, { size: "large" }, currentValue),
            !editing && (react_1.default.createElement(Button_1.Button, { secondary: true, size: "small", onClick: onEdit }, "Edit")))),
        editing && (react_1.default.createElement(Grid_1.Grid, { columns: "1fr auto auto" },
            react_1.default.createElement(Textfield_1.Textfield, { value: currentValue, onChange: handleCurrentChange }),
            react_1.default.createElement(Button_1.Button, { onClick: onSave }, "Save"),
            react_1.default.createElement(Button_1.Button, { secondary: true, color: "red", onClick: onCancel }, "Cancel")))));
};
