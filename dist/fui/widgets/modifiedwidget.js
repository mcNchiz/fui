"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifiedWidget = void 0;
const widget_1 = require("../widget");
class ModifiedWidget extends widget_1.Widget {
    constructor() {
        super();
    }
    linkWidgets(child) {
        this.child = child;
        if (child instanceof widget_1.Widget) {
            child.setParentWidget(this);
        }
    }
    render() {
        super.render();
        if (this.child instanceof widget_1.Widget) {
            this.child.render();
        }
    }
}
exports.ModifiedWidget = ModifiedWidget;
