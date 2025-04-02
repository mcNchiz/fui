"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
const multiwidget_1 = require("../multiwidget");
class Row extends multiwidget_1.MultiWidget {
    constructor({ children = [], gap = 0, alignItems = "center", justifyContent }) {
        super({ children });
        this.gap = gap;
        this.alignItems = alignItems;
        this.justifyContent = justifyContent;
        this.create();
    }
    widget() {
        return this._renderer.createListContainer({
            children: [],
            gap: this.gap,
            alignItems: this.alignItems,
            justifyContent: this.justifyContent
        }, "row");
    }
}
exports.Row = Row;
