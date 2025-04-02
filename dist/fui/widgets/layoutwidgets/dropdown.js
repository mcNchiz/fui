"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const containerwidgets_1 = require("../containerwidgets");
const modifiedwidget_1 = require("../modifiedwidget");
const solewidgets_1 = require("../solewidgets");
class Dropdown extends modifiedwidget_1.ModifiedWidget {
    constructor({ triggerWidget = new containerwidgets_1.Button({ child: new solewidgets_1.Text("Dropdown") }), child = new solewidgets_1.Text("Dropdown Content") }) {
        super();
        this.child = child;
        this.triggerWidget = triggerWidget;
        this.create();
    }
    widget() {
        if (this.child)
            this.child.render();
        if (this.triggerWidget)
            this.triggerWidget.render();
        let component = this._renderer.createDropdown({ contentElement: this.child, triggerElement: this.triggerWidget });
        return component;
    }
}
exports.Dropdown = Dropdown;
