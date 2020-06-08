"use strict";
/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var lodash_merge_1 = __importDefault(require("lodash.merge"));
var themes_1 = require("../themes");
exports.ThemeContext = react_1.createContext({
    theme: themes_1.theme,
    toggleMode: function () { },
});
exports.ThemeProvider = function (_a) {
    var children = _a.children, _b = _a.customTheme, customTheme = _b === void 0 ? {} : _b;
    var _c = __read(react_1.useState(themes_1.theme), 1), currentTheme = _c[0];
    // const [darkMode, setDarkMode] = useState(false)
    var value = {
        theme: lodash_merge_1.default(currentTheme, 
        // {
        //   colors: darkMode ? currentTheme.darkColors : currentTheme.lightColors,
        // },
        customTheme),
        toggleMode: function () {
            // setDarkMode(!darkMode)
        },
    };
    return react_1.default.createElement(exports.ThemeContext.Provider, { value: value }, children);
};
exports.useTheme = function () {
    var _a = react_1.useContext(exports.ThemeContext), themeFromContext = _a.theme, toggleMode = _a.toggleMode;
    return __assign(__assign({}, themeFromContext), { toggleMode: toggleMode });
};
