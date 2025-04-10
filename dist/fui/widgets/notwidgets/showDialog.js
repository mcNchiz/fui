"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CupertinoDialog = void 0;
exports.showDialog = showDialog;
const design_1 = require("../../design");
const state_1 = require("../../state");
const containerwidgets_1 = require("../containerwidgets");
const layoutwidgets_1 = require("../layoutwidgets");
const cupertinobutton_1 = require("../layoutwidgets/cupertinobutton");
const multiwidgets_1 = require("../multiwidgets");
const solewidgets_1 = require("../solewidgets");
function showDialog(dialog) {
    dialog.show();
}
class CupertinoDialog {
    constructor({ actions = [], title = "Dialog", subtitle, body }) {
        this.actions = actions;
        this.title = title;
        this.subtitle = subtitle;
        this.body = body;
    }
    show() {
        var _a;
        state_1.DialogContext.push(this);
        this.widget = new containerwidgets_1.Container({
            coords: { top: "0px" },
            decoration: new design_1.BoxDecoration({ backgroundColor: "rgba(0,0,0,.5)", position: "fixed", width: "100%", height: "100%" }),
            child: new containerwidgets_1.Flex({
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                child: new containerwidgets_1.Container({
                    decoration: new design_1.BoxDecoration({ backgroundColor: design_1.Colors.white, width: "400px", radius: 12 }),
                    child: new multiwidgets_1.Column({
                        alignItems: "center",
                        children: [
                            new containerwidgets_1.SizedBox({ height: 8 }),
                            new layoutwidgets_1.Padding({
                                padding: design_1.EdgeInsets.symmetric(16, 24),
                                child: new multiwidgets_1.Column({
                                    gap: 4,
                                    alignItems: "center",
                                    children: [
                                        new solewidgets_1.Text(this.title, new design_1.TextStyle({ size: 20, alignment: "center", weight: "600" })),
                                        this.subtitle ? new solewidgets_1.Text(this.subtitle, new design_1.TextStyle({ color: design_1.Colors.gray500, alignment: "center", size: 14 })) : null,
                                    ],
                                })
                            }),
                            new solewidgets_1.Line(),
                            new containerwidgets_1.Container({
                                decoration: new design_1.BoxDecoration({ padding: design_1.EdgeInsets.symmetric(24, 16) }),
                                child: this.body,
                            }),
                            new solewidgets_1.Line(),
                            new containerwidgets_1.Container({
                                child: new layoutwidgets_1.ListView({
                                    iterable: [...this.actions, new cupertinobutton_1.CupertinoDialogButton({ label: "Close", onClick: () => this.closeDialog() })],
                                    builder: (button, index) => {
                                        return new multiwidgets_1.Column({
                                            children: [
                                                button,
                                                (this.actions.length != index) ? new solewidgets_1.Line() : null
                                            ]
                                        });
                                    },
                                }),
                            })
                        ],
                    })
                })
            })
        });
        this.widget.render();
        (_a = this.widget.component) === null || _a === void 0 ? void 0 : _a.appendTo($("body"));
        return this.widget;
    }
    closeDialog() {
        var _a, _b;
        (_b = (_a = this.widget) === null || _a === void 0 ? void 0 : _a.component) === null || _b === void 0 ? void 0 : _b.hide();
    }
}
exports.CupertinoDialog = CupertinoDialog;
