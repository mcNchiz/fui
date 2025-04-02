"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingRect = void 0;
const design_1 = require("../../design");
const solewidget_1 = require("../solewidget");
class LoadingRect extends solewidget_1.SoleWidget {
    constructor(decoration = new design_1.BoxDecoration({ width: 400, height: 40, radius: 4, backgroundColor: design_1.Colors.gray200 })) {
        super({});
        this.decoration = decoration;
        this.create();
    }
    widget() {
        return this._renderer.createLoadingRect(this.decoration);
    }
}
exports.LoadingRect = LoadingRect;
