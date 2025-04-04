"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CupertinoDialogButton = void 0;
const design_1 = require("../../design");
const advancewidget_1 = require("../advancewidget");
const containerwidgets_1 = require("../containerwidgets");
const solewidgets_1 = require("../solewidgets");
class CupertinoDialogButton extends advancewidget_1.LayoutWidget {
    constructor({ label = "Button", onClick }) {
        super({ child: new containerwidgets_1.SizedBox() });
        this.onClick = onClick !== null && onClick !== void 0 ? onClick : (() => { console.log("onClick not defined"); });
        this.label = label;
        this.create();
    }
    build() {
        return new containerwidgets_1.Button({
            onClick: () => this.onClick(),
            decoration: new design_1.BoxDecoration({
                padding: design_1.EdgeInsets.symmetric(12, 20),
            }),
            child: new solewidgets_1.Text(this.label, new design_1.TextStyle({ color: design_1.Colors.blue, size: 18, alignment: "center" })),
        });
    }
}
exports.CupertinoDialogButton = CupertinoDialogButton;
