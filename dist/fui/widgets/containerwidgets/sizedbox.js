"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizedBox = void 0;
const design_1 = require("../../design");
const containerwidget_1 = require("../containerwidget");
class SizedBox extends containerwidget_1.ContainerWidget {
    constructor({ child = null, width = undefined, height = undefined, unit = "px" }) {
        super({ child: child !== null && child !== void 0 ? child : null });
        this.width = width;
        this.height = height;
        this.unit = unit;
        this.create();
    }
    widget() {
        return this._renderer.createContainer({
            decoration: new design_1.BoxDecoration({
                width: this.width + this.unit,
                height: this.height + this.unit,
            }),
        });
    }
}
exports.SizedBox = SizedBox;
