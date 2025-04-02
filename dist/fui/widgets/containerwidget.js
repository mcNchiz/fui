"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerWidget = void 0;
const widget_1 = require("../widget");
class ContainerWidget extends widget_1.Widget {
    constructor({ child = null }) {
        super();
        this.child = child;
        this.linkWidgets();
    }
    linkWidgets() {
        if (this.child instanceof widget_1.Widget) {
            this.child.setParentWidget(this);
        }
    }
    render() {
        super.render();
        if (this.child instanceof widget_1.Widget) {
            this.child.render();
        }
    }
}
exports.ContainerWidget = ContainerWidget;
