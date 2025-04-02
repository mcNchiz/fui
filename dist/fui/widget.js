"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
const jquerydom_1 = require("./renderers/jquerydom");
class Widget {
    constructor() {
        this._renderer = new jquerydom_1.JQueryDOM();
        this.component = null;
        this.parentWidget = null;
        this.component = this._renderer.defaultWidget();
    }
    create() {
        this.component = this.widget();
    }
    widget() {
        return this._renderer.defaultWidget();
    }
    render() {
        this.renderToParentComponent(this);
    }
    setParentWidget(parentWidget) {
        this.parentWidget = parentWidget;
    }
    renderToParentComponent(childWidget) {
        if (this.parentWidget) {
            this._renderer.append(childWidget, this.parentWidget);
        }
    }
    clear() {
        this.component.empty();
    }
}
exports.Widget = Widget;
