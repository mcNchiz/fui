"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const design_1 = require("../../design");
const containerwidget_1 = require("../containerwidget");
class Button extends containerwidget_1.ContainerWidget {
    constructor({ child = null, centeredItems = false, type, onClick = () => { console.log("onClick not defined"); }, color, weight, size, decoration = new design_1.BoxDecoration({ width: "100%", border: 0, padding: design_1.EdgeInsets.zero }) }) {
        super({ child });
        this.centeredItems = centeredItems;
        this.type = type;
        this.color = color;
        this.onClick = onClick;
        this.size = size;
        this.weight = weight;
        this.decoration = decoration,
            this.create();
    }
    widget() {
        return this._renderer.createButton({
            centeredItems: this.centeredItems,
            type: this.type,
            onClick: (v) => this.onClick(v),
            color: this.color,
            weight: this.weight,
            size: this.size,
            decoration: this.decoration,
        });
    }
}
exports.Button = Button;
