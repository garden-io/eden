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
var react_use_1 = require("react-use");
var contexts_1 = require("../contexts");
exports.Pre = function (_a) {
    var _b = _a.dataTest, dataTest = _b === void 0 ? false : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.color, color = _d === void 0 ? "grayDark" : _d, _e = _a.background, background = _e === void 0 ? "grayLight" : _e, _f = _a.copy, copy = _f === void 0 ? false : _f;
    var _g = contexts_1.useTheme(), colors = _g.colors, fontFamilies = _g.fontFamilies, textSizes = _g.textSizes, codeSizes = _g.codeSizes, space = _g.space, borderRadiuses = _g.borderRadiuses;
    var statuses = ["Copy", "Copied", "Error"];
    var _h = __read(react_1.useState(0), 2), status = _h[0], setStatus = _h[1];
    var _j = __read(react_use_1.useCopyToClipboard(), 2), copyToClipboard = _j[1];
    var handleClick = function () {
        copyToClipboard(children);
        setStatus(1);
    };
    react_use_1.useInterval(function () {
        setStatus(0);
    }, status > 0 ? 1000 : null);
    return (react_1.default.createElement("div", { "data-test": dataTest, style: {
            borderRadius: borderRadiuses.small,
            backgroundColor: colors[background],
            fontFamily: fontFamilies.code,
            color: colors[color],
            fontSize: codeSizes.medium,
            lineHeight: 1.5,
            padding: space.medium,
            paddingLeft: background === "none" ? "" : space.medium,
            paddingRight: "8ch",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            position: "relative",
        } },
        children,
        copy && typeof children === "string" && (react_1.default.createElement("div", { style: {
                position: "absolute",
                top: space.medium,
                right: space.medium,
                fontSize: textSizes.small,
                fontFamily: fontFamilies.text,
                color: colors.grayDark,
                textTransform: "uppercase",
                opacity: 0.5,
                cursor: "pointer",
            }, onClick: handleClick }, statuses[status]))));
};
