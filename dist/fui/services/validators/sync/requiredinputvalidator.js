"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredValueValidator = void 0;
const validator_1 = require("../validator");
class RequiredValueValidator extends validator_1.SyncValidator {
    constructor() {
        super();
    }
    validate(inputValue) {
        super.validate(inputValue);
        if (!inputValue || !inputValue.length) {
            this.result.pushError("This is a required field");
        }
        return this.result;
    }
}
exports.RequiredValueValidator = RequiredValueValidator;
