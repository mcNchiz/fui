"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const containerwidget_1 = require("../containerwidget");
class Container extends containerwidget_1.ContainerWidget {
    constructor({ child = null, tag, className, width = "100%", height, alignment, decoration, bounds } = {}) {
        super({ child });
        this.tag = tag;
        this.height = height;
        this.width = width;
        this.bounds = bounds;
        this.className = className;
        this.alignment = alignment;
        this.decoration = decoration;
        this.create();
    }
    widget() {
        return this._renderer.createContainer(this);
    }
}
exports.Container = Container;
