"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputText = void 0;
const design_1 = require("../../design");
const solewidget_1 = require("../solewidget");
class InputText extends solewidget_1.SoleWidget {
    constructor({ type, value, name, onInput = (v) => null, style = new design_1.TextStyle({ size: 18 }), decoration = new design_1.BoxDecoration({
        border: 0,
        borderColor: design_1.Colors.gray300,
        backgroundColor: design_1.Colors.white,
        shadow: "none",
        // shadow: "0 3px 5px 1px rgba(50,50,50,.05)",
        // padding: EdgeInsets.symmetric(10, 12),
        width: "auto",
        padding: design_1.EdgeInsets.symmetric(4, 8),
        radius: 8,
    }) }) {
        super({});
        this.name = name;
        this.type = type;
        this.onInput = onInput;
        this.value = value;
        this.decoration = decoration;
        this.style = style;
        this.create();
    }
    widget() {
        return this._renderer.createInput({
            name: this.name,
            value: this.value,
            style: this.style,
            onInput: (v) => this.onInput(v),
            decoration: this.decoration,
            type: this.type,
        });
    }
}
exports.InputText = InputText;
