"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const solewidget_1 = require("../solewidget");
class Icon extends solewidget_1.SoleWidget {
    constructor(icon, spin = false) {
        super({});
        this.icon = icon;
        this.spin = spin;
        this.create();
    }
    widget() {
        return this._renderer.createIcon(this.icon, this.spin);
    }
}
exports.Icon = Icon;
