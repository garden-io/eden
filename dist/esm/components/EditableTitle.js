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
import React, { useState } from "react";
import { Button } from "./Button";
import { Flex } from "./Flex";
import { Grid } from "./Grid";
import { Textfield } from "./Textfield";
import { Title } from "./Title";
import { useTheme } from "../contexts";
export var EditableTitle = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.value, value = _c === void 0 ? "" : _c, _d = _a.onChange, onChange = _d === void 0 ? function () { return undefined; } : _d;
    var _e = __read(useState(false), 2), editing = _e[0], setEditing = _e[1];
    var _f = __read(useState(value), 2), currentValue = _f[0], setCurrentValue = _f[1];
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
    var _g = useTheme(), colors = _g.colors, space = _g.space, textSizes = _g.textSizes;
    return (React.createElement("div", null,
        title && (React.createElement("div", { style: {
                fontSize: textSizes.medium,
                color: colors.gray,
                marginBottom: space.small,
            } }, title)),
        !editing && (React.createElement(Flex, { align: "center" },
            React.createElement(Title, { size: "large" }, currentValue),
            !editing && (React.createElement(Button, { secondary: true, size: "small", onClick: onEdit }, "Edit")))),
        editing && (React.createElement(Grid, { columns: "1fr auto auto" },
            React.createElement(Textfield, { value: currentValue, onChange: handleCurrentChange }),
            React.createElement(Button, { onClick: onSave }, "Save"),
            React.createElement(Button, { secondary: true, color: "red", onClick: onCancel }, "Cancel")))));
};
