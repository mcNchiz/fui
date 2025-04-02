"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const containerwidget_1 = require("../containerwidget");
class Flex extends containerwidget_1.ContainerWidget {
    constructor({ child = null, alignItems = "start", justifyContent = "start" } = {}) {
        super({ child });
        this.alignItems = alignItems;
        this.justifyContent = justifyContent;
        this.create();
    }
    widget() {
        return this._renderer.createListContainer({ alignItems: this.alignItems, justifyContent: this.justifyContent, gap: 0, children: [] }, "column");
    }
}
exports.Flex = Flex;
