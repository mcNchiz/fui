"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutWidget = void 0;
const widget_1 = require("../widget");
const text_1 = require("./solewidgets/text");
class LayoutWidget extends widget_1.Widget {
    constructor({ child }) {
        super();
        this.layoutWidget = new text_1.Text("");
        this.child = child;
        this.linkWidgets();
    }
    linkWidgets() {
        this.layoutWidget.parentWidget = this;
        // if(this.child instanceof Widget){
        //   this.child.setParentWidget(this.layoutWidget);
        // }
    }
    create() {
        super.create();
        // if(this.child){
        //   this.child.render("ctx");
        // }
    }
    render() {
        super.render();
        this.layoutWidget.render();
        // if(this.child instanceof Widget){
        //   this.child.render(ctx);
        // }
    }
    widget() {
        this.layoutWidget = this.build();
        return this.layoutWidget.component;
    }
}
exports.LayoutWidget = LayoutWidget;
