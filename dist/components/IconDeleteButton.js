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
var IconDelete_1 = require("./IconDelete");
exports.IconDeleteButton = function (_a) {
    var _b = _a.dataTest, dataTest = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "gray" : _c, _d = _a.onClick, onClick = _d === void 0 ? function () { return null; } : _d;
    var handleClick = function (event) {
        // TODO: Replace with inline confirmation next to the button
        if (window.confirm("Are you sure to delete?")) {
            onClick(event);
        }
    };
    return (react_1.default.createElement("div", { "data-test": dataTest, onClick: handleClick, style: { cursor: "pointer" } },
        react_1.default.createElement(IconDelete_1.IconDelete, { size: "small", color: color })));
};
