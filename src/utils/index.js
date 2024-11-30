"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanAndUnique = exports.cleanArray = exports.getUniqueValues = void 0;
const getUniqueValues = (arr) => {
    return [...new Set(arr)];
};
exports.getUniqueValues = getUniqueValues;
const cleanArray = (arr) => {
    return arr.filter((value) => value !== null);
};
exports.cleanArray = cleanArray;
const cleanAndUnique = (arr) => {
    return (0, exports.getUniqueValues)((0, exports.cleanArray)(arr));
};
exports.cleanAndUnique = cleanAndUnique;
