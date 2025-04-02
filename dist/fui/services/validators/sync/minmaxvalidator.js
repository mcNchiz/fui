"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinMaxLengthRequirement = void 0;
const validator_1 = require("../validator");
class MinMaxLengthRequirement extends validator_1.SyncValidator {
    constructor({ min = 0, max = 9999999999999 }) {
        super();
        this.min = min;
        this.max = max;
    }
    validate(inputValue) {
        super.validate(inputValue);
        if (inputValue.length < this.min) {
            this.result.pushError("Minimum length required: " + this.min);
        }
        else if (inputValue.length > this.max) {
            this.result.pushError("You have reached the maximum input length.");
        }
        else if (this.min > this.max) {
            this.result.pushError("Range Error: Invalid defined length");
        }
        return this.result;
    }
}
exports.MinMaxLengthRequirement = MinMaxLengthRequirement;
