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
exports.IconDocs = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "gray" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.debug, debug = _d === void 0 ? false : _d;
    var _e = __1.useTheme(), colors = _e.colors, iconSizes = _e.iconSizes;
    return (react_1.default.createElement("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", style: {
            width: iconSizes[size] + "px",
            height: iconSizes[size] + "px",
            display: "block",
            border: debug ? "1px dashed red" : "",
        } },
        react_1.default.createElement("path", { d: "M13.1672 18.3672H2.01329C1.74449 18.367 1.48676 18.2602 1.29675 18.0701C1.10674 17.8801 1 17.6224 1 17.3538V2.01654C0.999748 1.88337 1.02577 1.75147 1.07658 1.62837C1.12739 1.50527 1.20199 1.39339 1.2961 1.29914C1.39022 1.20489 1.50201 1.13012 1.62508 1.0791C1.74814 1.02808 1.88006 1.00182 2.01329 1.00182H12.0161C12.0071 0.927181 14.2532 3.17217 14.1786 3.16316V17.3538C14.1786 17.6221 14.0721 17.8795 13.8825 18.0694C13.6929 18.2594 13.4357 18.3665 13.1672 18.3672V18.3672Z", fill: "white", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M11.5435 1.15369L11.5576 3.77252H13.9537", stroke: colors[color], "stroke-linejoin": "round", fill: "white" }),
        react_1.default.createElement("path", { d: "M2.59668 7.98901H4.63098", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M5.08643 7.98901H7.35571", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M7.81787 7.98901H9.85218", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M2.59668 5.79422H9.96524", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M7.38916 10.1844H11.9818", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M2.59668 10.1844H6.79018", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M2.59668 12.3799H12.0079", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M21.9865 23H10.8326C10.5638 22.9999 10.3061 22.893 10.1161 22.703C9.92607 22.5129 9.81934 22.2553 9.81934 21.9866V6.64938C9.81908 6.51622 9.84511 6.38431 9.89591 6.26121C9.94672 6.13811 10.0213 6.02623 10.1154 5.93198C10.2096 5.83773 10.3213 5.76296 10.4444 5.71194C10.5675 5.66092 10.6994 5.63466 10.8326 5.63466H20.8355C20.8265 5.56002 23.0726 7.80501 22.9979 7.796V21.9866C22.9979 22.2549 22.8914 22.5123 22.7018 22.7023C22.5122 22.8923 22.255 22.9993 21.9865 23Z", fill: "white", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M20.3628 5.78653L20.377 8.40536H22.7731", stroke: colors[color], "stroke-linejoin": "round", fill: "white" }),
        react_1.default.createElement("path", { d: "M11.4165 12.6219H13.4508", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M13.9062 12.6219H16.1755", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M16.6372 12.6219H18.6715", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M11.4165 10.4271H18.7851", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M16.209 14.8173H20.8016", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M11.4165 14.8173H15.61", stroke: colors[color], "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M11.4165 17.0127H20.8277", stroke: colors[color], "stroke-linejoin": "round" })));
};
