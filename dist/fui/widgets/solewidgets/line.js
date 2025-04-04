"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
const design_1 = require("../../design");
const solewidget_1 = require("../solewidget");
class Line extends solewidget_1.SoleWidget {
    constructor(props = {}) {
        var _a, _b, _c;
        super({});
        this.color = (_a = props.color) !== null && _a !== void 0 ? _a : design_1.Colors.gray300;
        this.padding = (_b = props.padding) !== null && _b !== void 0 ? _b : design_1.EdgeInsets.zero;
        this.width = (_c = props.width) !== null && _c !== void 0 ? _c : 1;
        this.create();
    }
    widget() {
        return this._renderer.createLine(this);
    }
}
exports.Line = Line;
