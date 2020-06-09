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
var __1 = require("..");
var IconCaret_1 = require("./IconCaret");
exports.Expandable = function (_a) {
    var title = _a.title, _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.isExpanded, isExpanded = _c === void 0 ? false : _c;
    var _d = __read(react_1.useState(isExpanded), 2), expanded = _d[0], setExpanded = _d[1];
    var handleClick = function () { return setExpanded(!expanded); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { onClick: handleClick, style: { cursor: "pointer" } },
            react_1.default.createElement(__1.Flex, { justify: "space-between" },
                react_1.default.createElement(__1.Title, { size: "small" }, title),
                react_1.default.createElement(IconCaret_1.IconCaret, { direction: expanded ? "up" : "down" }))),
        expanded && children));
};
