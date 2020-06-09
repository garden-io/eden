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
var gradients = {
    green: "linear-gradient(163deg, hsl(174, 52%, 94%) 21%, rgba(255, 255, 255, 0) 88%), rgba(255, 255, 255, 0)",
    greenReverse: "linear-gradient(343deg, hsl(174, 52%, 94%) 21%, rgba(255, 255, 255, 0) 88%), rgba(255, 255, 255, 0)",
    blue: "linear-gradient(163deg, hsl(197, 52%, 94%) 3%, rgba(255, 255, 255, 0) 98%), rgba(255, 255, 255, 0)",
    blueReverse: "linear-gradient(334deg, hsl(196,86%,94%) -39%, rgba(255, 255, 255, 0) 79%)",
};
exports.Gradient = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "green" : _b, children = _a.children;
    return react_1.default.createElement("div", { style: { background: gradients[color] } }, children);
};
