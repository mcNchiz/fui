"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const containerwidget_1 = require("../containerwidget");
class Flex extends containerwidget_1.ContainerWidget {
    constructor({ child = null, alignItems = "start", height, width, justifyContent = "start" } = {}) {
        super({ child });
        this.alignItems = alignItems;
        this.width = width;
        this.height = height;
        this.justifyContent = justifyContent;
        this.create();
    }
    widget() {
        return this._renderer.createListContainer({ alignItems: this.alignItems, height: this.height, width: this.width, justifyContent: this.justifyContent, gap: 0, children: [] }, "row");
    }
}
exports.Flex = Flex;
