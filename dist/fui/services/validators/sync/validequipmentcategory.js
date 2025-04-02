"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidEquipmentCategory = void 0;
const validator_1 = require("../validator");
class ValidEquipmentCategory extends validator_1.SyncValidator {
    constructor() {
        super();
    }
    validate(inputValue) {
        let categories = ["equipment", "facility"];
        super.validate(inputValue);
        if (!categories.includes(inputValue)) {
            this.result.pushError("Invalid selection.");
        }
        return this.result;
    }
}
exports.ValidEquipmentCategory = ValidEquipmentCategory;
