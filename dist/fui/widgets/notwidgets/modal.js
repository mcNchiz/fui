"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CupertinoModal = void 0;
const apps_1 = require("../../apps");
const design_1 = require("../../design");
const containerwidgets_1 = require("../containerwidgets");
const multiwidgets_1 = require("../multiwidgets");
const solewidgets_1 = require("../solewidgets");
class CupertinoModal extends apps_1.FUIModalContent {
    constructor({ id }) {
        super();
        this.id = id;
        this.setup();
    }
    getContentSelector() {
        return `#${this.id} .fui-cupertino-modal`;
    }
    show() {
        $("#" + this.id).show();
    }
    hide() {
        $("#" + this.id).hide();
    }
    setup() {
        var _a;
        const widget = new containerwidgets_1.Container({
            tag: this.id,
            coords: { top: "0px" },
            decoration: new design_1.BoxDecoration({ backgroundColor: "rgba(0,0,0,.5)", position: "fixed", width: "100%", height: "100%" }),
            child: new containerwidgets_1.Flex({
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                child: new containerwidgets_1.Container({
                    className: "fui-cupertino-modal",
                    decoration: new design_1.BoxDecoration({ backgroundColor: design_1.Colors.white, width: "400px", radius: 12 }),
                    child: new containerwidgets_1.Flex({
                        height: "200px",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        child: new multiwidgets_1.Column({
                            alignItems: "center",
                            children: [
                                new solewidgets_1.Text("404", new design_1.TextStyle({ weight: "700", size: 28 })),
                                new containerwidgets_1.SizedBox({ height: 8 }),
                                new solewidgets_1.Text("Content unavailable", new design_1.TextStyle({ alignment: "center" })),
                                new containerwidgets_1.SizedBox({ height: 16 }),
                                new containerwidgets_1.Button({
                                    onClick: () => this.hide(),
                                    decoration: design_1.greyButton,
                                    child: new solewidgets_1.Text("Close", new design_1.TextStyle({ color: design_1.Colors.white }))
                                }),
                            ]
                        })
                    })
                })
            })
        });
        widget.render();
        widget.component.get(0).style.display = "none";
        (_a = widget.component) === null || _a === void 0 ? void 0 : _a.appendTo($("body"));
    }
}
exports.CupertinoModal = CupertinoModal;
