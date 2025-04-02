"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatClassName = formatClassName;
function formatClassName(str) {
    return str.toLowerCase().replace(/\s+/g, ""); // Remove spaces
}
