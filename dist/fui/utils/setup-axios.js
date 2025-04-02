"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAxios = void 0;
const axios_1 = __importDefault(require("axios"));
const setupAxios = (token) => {
    console.log("token");
    if (token) {
        axios_1.default.defaults.headers.common["X-CSRF-TOKEN"] = token;
    }
    else {
        console.error("CSRF token not found in the document.");
    }
};
exports.setupAxios = setupAxios;
