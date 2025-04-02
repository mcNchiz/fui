"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const multiwidget_1 = require("../multiwidget");
class Column extends multiwidget_1.MultiWidget {
    constructor({ children = [], gap = 0, alignItems = "start", justifyContent = "start" }) {
        super({ children });
        this.gap = gap;
        this.alignItems = alignItems;
        this.justifyContent = justifyContent;
        this.create();
    }
    widget() {
        return this._renderer.createListContainer({ gap: this.gap, alignItems: this.alignItems, children: [], justifyContent: this.justifyContent }, "column");
    }
}
exports.Column = Column;
