"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderWidget = void 0;
const widget_1 = require("../widget");
class BuilderWidget extends widget_1.Widget {
    constructor({ builder }) {
        super();
        this.buildWidget = null;
        this.child = null;
        this.builder = builder;
        this.initialize();
    }
    initialize() {
        this.create();
        this.linkWidgets();
    }
    linkWidgets() {
        this.buildWidget.parentWidget = this;
    }
    render() {
        super.render();
        if (this.buildWidget) {
            this.buildWidget.render();
        }
    }
    updateUI() {
        this.widget();
        this.render();
    }
    widget() {
        this.buildWidget = this.build();
        this.buildWidget.parentWidget = this;
        this.clear();
        if (this.buildWidget.component) {
            return this.buildWidget.component;
        }
        return super.widget();
    }
}
exports.BuilderWidget = BuilderWidget;
