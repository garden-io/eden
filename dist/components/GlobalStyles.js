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
exports.GlobalStyles = function () {
    var _a = contexts_1.useTheme(), colors = _a.colors, fontWeights = _a.fontWeights;
    return (react_1.default.createElement("style", { dangerouslySetInnerHTML: {
            __html: "\n      @import url(\"https://fonts.googleapis.com/css?family=Cousine|Nunito+Sans:400,400i,700,700i&display=swap\");\n      @import url(\"/fonts/fonts.css\");\n      * {\n        box-sizing: border-box;\n        transition: color 0.3s;\n        transition: background-color 0.3s;\n      }\n      body {\n        margin: 0;\n        background-color: " + colors.white + ";\n      }\n      a {\n        color: inherit;\n        text-decoration: none;\n      }\n      p {\n        margin-top: 0;\n      }\n      p:last-child {\n        margin-bottom: 0;\n      }\n      mark {\n        background: none;\n        color: " + colors.pink + ";\n        font-weight: " + fontWeights.bold + ";\n      }\n      ::placeholder {\n        color: " + colors.grayLight + "\n      }\n    ",
        } }));
};
