"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetVMW = exports.SuccessVMW = exports.ErrorVMW = exports.ProgressVMW = exports.ValidationMessageWidget = void 0;
const design_1 = require("../../../design");
const widgets_1 = require("../../../widgets");
class ValidationMessageWidget {
    constructor(msg = "") {
        this._msg = msg;
    }
    get msg() {
        return this._msg;
    }
    set msg(msg) {
        this._msg = msg;
    }
    getWidget() {
        return new widgets_1.Container();
    }
}
exports.ValidationMessageWidget = ValidationMessageWidget;
class ProgressVMW extends ValidationMessageWidget {
    constructor(msg) {
        super(msg);
    }
    getWidget() {
        return new widgets_1.Text(this.msg, new design_1.TextStyle({ size: 16, color: design_1.Colors.gray450 }));
    }
}
exports.ProgressVMW = ProgressVMW;
class ErrorVMW extends ValidationMessageWidget {
    constructor(msg) {
        super(msg);
    }
    getWidget() {
        return new widgets_1.Text(this.msg, new design_1.TextStyle({ size: 16, color: design_1.Colors.red }));
    }
}
exports.ErrorVMW = ErrorVMW;
class SuccessVMW extends ValidationMessageWidget {
    constructor(msg) {
        super(msg);
    }
    getWidget() {
        return new widgets_1.Text(this.msg, new design_1.TextStyle({ size: 16, color: design_1.Colors.blue }));
    }
}
exports.SuccessVMW = SuccessVMW;
class ResetVMW extends ValidationMessageWidget {
    constructor(msg) {
        super(msg);
    }
    getWidget() {
        return new widgets_1.Container();
    }
}
exports.ResetVMW = ResetVMW;
