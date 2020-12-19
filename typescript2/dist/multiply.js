"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = void 0;
// named export by default in ts
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
// making it 'default' export
function multiplyByTwo(num) {
    return multiply(num, 2);
}
exports.default = multiplyByTwo;
