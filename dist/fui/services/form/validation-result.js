"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationResult = void 0;
class ValidationResult {
    constructor() {
        this.errors = [];
        this.success = [];
        this.done = true;
    }
    pushError(msg) {
        this.errors.push(msg);
    }
    pushSuccess(msg) {
        this.success.push(msg);
    }
    clear() {
        this.errors = [];
        this.success = [];
    }
    valid() {
        return this.errors.length == 0 && this.done;
    }
    hasError() {
        return this.errors.length > 0;
    }
    getFirstError() {
        return this.errors[0];
    }
    getFirstSuccess() {
        var _a;
        return (_a = this.success[0]) !== null && _a !== void 0 ? _a : "Success";
    }
    merge(validationResult) {
        this.errors = [...this.errors, ...validationResult.errors];
        this.success = [...this.success, ...validationResult.success];
    }
    onProgress() {
        return !this.done;
    }
    wait() {
        this.done = false;
    }
    validationDone() {
        this.done = true;
    }
}
exports.ValidationResult = ValidationResult;
