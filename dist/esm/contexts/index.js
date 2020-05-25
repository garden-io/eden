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
import React, { createContext, useContext, useState } from "react";
import merge from "lodash.merge";
import { theme } from "../themes";
export var ThemeContext = createContext({
    theme: theme,
    toggleMode: function () { },
});
export var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = __read(useState(theme), 1), currentTheme = _b[0];
    var _c = __read(useState(false), 2), darkMode = _c[0], setDarkMode = _c[1];
    var value = {
        theme: merge(currentTheme, {
            colors: darkMode ? currentTheme.darkColors : currentTheme.lightColors,
        }),
        toggleMode: function () {
            setDarkMode(!darkMode);
        },
    };
    return React.createElement(ThemeContext.Provider, { value: value }, children);
};
export var useTheme = function () {
    var _a = useContext(ThemeContext), themeFromContext = _a.theme, toggleMode = _a.toggleMode;
    return __assign(__assign({}, themeFromContext), { toggleMode: toggleMode });
};
