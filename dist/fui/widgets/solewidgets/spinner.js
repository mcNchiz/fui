"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const design_1 = require("../../design");
const solewidget_1 = require("../solewidget");
class Spinner extends solewidget_1.SoleWidget {
    constructor({ color = design_1.Colors.black, size = 20, thickness = 2 } = {}) {
        super({});
        console.log();
        this.size = size;
        this.thickness = thickness;
        this.color = color;
        this.create();
    }
    widget() {
        return this._renderer.createSpinner({ color: this.color, size: this.size, thickness: this.thickness });
    }
}
exports.Spinner = Spinner;
