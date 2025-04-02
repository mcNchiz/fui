"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const textstyle_1 = require("../../design/textstyle");
const solewidget_1 = require("../solewidget");
class Text extends solewidget_1.SoleWidget {
    constructor(text, style = textstyle_1.TextStyle.default()) {
        super({});
        this.text = text;
        this.style = style;
        this.create();
    }
    widget() {
        return this._renderer.createText(this.text, this.style);
    }
}
exports.Text = Text;
