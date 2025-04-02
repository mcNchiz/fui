"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Padding = void 0;
const design_1 = require("../../design");
const advancewidget_1 = require("../advancewidget");
const containerwidgets_1 = require("../containerwidgets");
class Padding extends advancewidget_1.LayoutWidget {
    constructor({ child = new containerwidgets_1.Container(), padding = design_1.EdgeInsets.symmetric(4, 8) }) {
        super({ child });
        this.padding = padding;
        this.create();
    }
    build() {
        return new containerwidgets_1.Container({
            decoration: new design_1.BoxDecoration({
                padding: this.padding,
            }),
            child: this.child,
        });
    }
}
exports.Padding = Padding;
