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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
export var flatten = function (list) { return list.reduce(function (a, b) { return a.concat(Array.isArray(b) ? flatten(b) : b); }, []); };
export var chunk = function (arr, length) {
    return Array.from({ length: Math.ceil(arr.length / length) }).map(function (_, n) { return arr.slice(n * length, n * length + length); });
};
export var unique = function (arr) { return __spread(new Set(arr)); };
export var intersection = function (arr1, arr2) { return arr1.filter(function (n) { return arr2.includes(n); }); };
export var shuffle = function (arr) { return arr.sort(function () { return Math.random() - 0.5; }); };
export var isLast = function (index, array) { return index === array.length - 1; };
export var sleep = function (delay) { return new Promise(function (resolve) { return setTimeout(resolve, delay); }); };
