"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueListener = void 0;
const design_1 = require("../../design");
const builderwidget_1 = require("../builderwidget");
const containerwidgets_1 = require("../containerwidgets");
const multiwidgets_1 = require("../multiwidgets");
const solewidgets_1 = require("../solewidgets");
class ValueListener extends builderwidget_1.BuilderWidget {
    constructor({ notifier, builder }) {
        super({ builder });
        this.notifier = notifier;
        this.value = this.notifier.value;
        this.setValue(this.value);
        this.notifier.addListener((newValue) => {
            this.setValue(newValue);
            this.updateUI();
        });
        if (typeof builder !== "function") {
            throw new Error("ValueListener requires a function as builder.");
        }
        this.initialize();
    }
    initialize() {
        this.create();
        this.linkWidgets();
        if (this.value) {
        }
    }
    setValue(value) {
        this.value = value;
    }
    build() {
        return new containerwidgets_1.Container({
            decoration: new design_1.BoxDecoration({ width: "auto" }),
            child: this.value != null
                ? this.builder != null
                    ? this.builder(this.value)
                    : new solewidgets_1.Text("Builder undefined")
                : new containerwidgets_1.Container({
                    decoration: new design_1.BoxDecoration({
                        backgroundColor: design_1.Colors.red,
                        radius: 8,
                        padding: design_1.EdgeInsets.all(40),
                    }),
                    child: new multiwidgets_1.Column({
                        gap: 0,
                        children: [
                            new solewidgets_1.Icon(new design_1.BootstrapIcon({ name: "exclamation-triangle-fill", color: design_1.Colors.white, size: 40 })),
                            new solewidgets_1.Text("404", new design_1.TextStyle({ color: design_1.Colors.white, weight: "700", alignment: "center", size: 24 })),
                            new containerwidgets_1.SizedBox({ height: 8 }),
                            new solewidgets_1.Text("Valuenotifier not set", new design_1.TextStyle({ color: design_1.Colors.white, letterSpacing: "-0.2px", alignment: "center", size: 14 })),
                        ],
                    }),
                }),
        });
    }
}
exports.ValueListener = ValueListener;
