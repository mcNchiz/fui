"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidator = void 0;
const utils_1 = require("../../../utils");
const validator_1 = require("../validator");
class EmailValidator extends validator_1.SyncValidator {
    constructor() {
        super();
    }
    validate(inputValue) {
        super.validate(inputValue);
        let emailPreValidator = new utils_1.EmailValidateRegExp(inputValue);
        if (!emailPreValidator.validate()) {
            this.result.pushError("Invalid email.");
        }
        return this.result;
    }
}
exports.EmailValidator = EmailValidator;
