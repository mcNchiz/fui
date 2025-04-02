"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiWidget = void 0;
const widget_1 = require("../widget");
class MultiWidget extends widget_1.Widget {
    constructor({ children }) {
        super();
        this.children = [];
        this.children = children;
        this.linkWidgets();
    }
    linkWidgets() {
        for (let child of this.children) {
            if (child instanceof widget_1.Widget) {
                child.setParentWidget(this);
            }
        }
    }
    render() {
        super.render();
        for (let child of this.children) {
            if (child instanceof widget_1.Widget) {
                child.render();
            }
        }
    }
}
exports.MultiWidget = MultiWidget;
