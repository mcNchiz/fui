"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormSection = void 0;
const design_1 = require("../../design");
const state_1 = require("../../state");
const widgets_1 = require("../../widgets");
class FormSection extends widgets_1.LayoutWidget {
    constructor({ child = new widgets_1.Container(), label, isActive = false, stateNotifier }) {
        super({ child });
        this.name = "fs";
        this.index = null;
        this.submit = new state_1.ValueNotifier("Continue");
        this.isActive = isActive;
        this.label = label;
        this.stateNotifier = stateNotifier;
        this.accomplishedNotifier = new state_1.ValueNotifier(true, true);
        this.create();
        this.stateNotifier.addListener((v) => this.setState(v));
    }
    hide() {
        if (this.component)
            this._renderer.hide(this.component);
    }
    show() {
        if (this.component)
            this._renderer.show(this.component);
    }
    triggerFocus() {
        if (this.component)
            this._renderer.triggerFocus(this.component);
    }
    build() {
        return new widgets_1.Column({
            alignItems: "start",
            children: [
                new widgets_1.Row({
                    gap: 8,
                    children: [
                        new widgets_1.Icon(new design_1.BootstrapIcon({ name: "journal-bookmark-fill", color: design_1.Colors.gray900, size: 24 })),
                        new widgets_1.Text(this.label, new design_1.TextStyle({ size: 16, color: design_1.Colors.gray900 })),
                    ],
                }),
                new widgets_1.SizedBox({ height: 16 }),
                new widgets_1.Container({
                    child: this.child,
                }),
                new widgets_1.SizedBox({ height: 32 }),
                new widgets_1.Column({
                    justifyContent: "end",
                    children: [
                        new widgets_1.Line({}),
                        new widgets_1.Container({
                            child: new widgets_1.ValueListener({
                                notifier: this.accomplishedNotifier,
                                builder: (proceed) => {
                                    return new widgets_1.Button({
                                        type: this.submit ? "submit" : "button",
                                        onClick: (e) => {
                                            var _a;
                                            if (this.proceed)
                                                this.proceed((_a = this.index) !== null && _a !== void 0 ? _a : 0);
                                        },
                                        decoration: new design_1.BoxDecoration({
                                            radius: 6,
                                            padding: design_1.EdgeInsets.symmetric(14, 12),
                                        }),
                                        color: proceed ? design_1.Colors.white : design_1.Colors.gray700,
                                        size: 18,
                                        child: new widgets_1.ValueListener({
                                            notifier: this.submit,
                                            builder: (v) => {
                                                return new widgets_1.Column({
                                                    alignItems: "center",
                                                    children: [
                                                        new widgets_1.Row({ gap: 8, justifyContent: "center", children: [
                                                                v == "Submitting" ? new widgets_1.Spinner() : null,
                                                                new widgets_1.Text(v, new design_1.TextStyle({ size: 18, color: proceed ? design_1.Colors.blue : design_1.Colors.gray700, alignment: "center" })),
                                                            ] }),
                                                        !proceed ? new widgets_1.Text("Some required fields are missing. Please provide the necessary details.", new design_1.TextStyle({ size: 14, color: proceed ? design_1.Colors.blue : design_1.Colors.gray450, alignment: "center" })) : null
                                                    ]
                                                });
                                            }
                                        }),
                                    });
                                }
                            }),
                        }),
                        new widgets_1.Line({}),
                        new widgets_1.Button({
                            type: "button",
                            decoration: new design_1.BoxDecoration({
                                radius: 6,
                                padding: design_1.EdgeInsets.symmetric(14, 12),
                            }),
                            onClick: (e) => {
                                var _a;
                                if (this.goBack)
                                    this.goBack((_a = this.index) !== null && _a !== void 0 ? _a : 0);
                            },
                            color: design_1.Colors.gray700,
                            size: 18,
                            child: new widgets_1.Text("Back", new design_1.TextStyle({ size: 18, alignment: "center" })),
                        }),
                    ],
                }),
            ],
        });
    }
    setState(value) {
        this.accomplishedNotifier.value = false;
        let tree = new Array();
        let queue = new Array(this);
        while (queue.length) {
            var widget = queue.shift();
            tree.push(widget);
            if (widget instanceof widgets_1.ContainerWidget) {
                if (widget.child)
                    queue.push(widget.child);
            }
            else if (widget instanceof widgets_1.MultiWidget) {
                for (let childWidget of widget.children) {
                    if (childWidget)
                        queue.push(childWidget);
                }
            }
            else if (widget instanceof widgets_1.LayoutWidget) {
                queue.push(widget.child);
            }
            else if (widget instanceof widgets_1.BuilderWidget) {
                if (widget.buildWidget)
                    queue.push(widget.buildWidget);
            }
            else if (widget instanceof widgets_1.ModifiedWidget) {
                if (widget.child)
                    queue.push(widget.child);
            }
        }
        let validatorWidgets = tree.filter(f => f instanceof widgets_1.ValueValidator);
        var errorCheckingProcess = validatorWidgets.map(v => v.validationResult.hasError());
        var validatingProcess = validatorWidgets.map(v => v.validationResult.onProgress());
        if (!errorCheckingProcess.includes(true) && !validatingProcess.includes(true)) {
            this.accomplishedNotifier.value = true;
        }
        else {
            this.accomplishedNotifier.value = false;
        }
    }
}
exports.FormSection = FormSection;
