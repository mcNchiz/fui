"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidateRegExp = void 0;
const regex_1 = require("../regex");
class EmailValidateRegExp extends regex_1.RegEx {
    constructor(str) {
        super(str);
    }
    validate() {
        var exp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return exp.test(this.data);
    }
}
exports.EmailValidateRegExp = EmailValidateRegExp;
