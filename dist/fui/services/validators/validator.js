"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncValidator = exports.SyncValidator = exports.Validators = void 0;
const validation_result_1 = require("../form/validation-result");
class Validators {
    constructor() {
        this.result = new validation_result_1.ValidationResult();
        this.validatingMessage = "Just a moment...";
    }
    reset() {
        this.result.clear();
    }
}
exports.Validators = Validators;
class SyncValidator extends Validators {
    constructor() {
        super();
    }
    validate(data) {
        this.reset();
        return this.result;
    }
}
exports.SyncValidator = SyncValidator;
class AsyncValidator extends Validators {
    constructor() {
        super();
    }
    async validate(data) {
        this.reset();
        return this.result;
    }
}
exports.AsyncValidator = AsyncValidator;
