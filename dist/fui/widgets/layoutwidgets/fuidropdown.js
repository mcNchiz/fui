"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FUIDropdown = void 0;
const design_1 = require("../../design");
const state_1 = require("../../state");
const utils_1 = require("../../utils");
const builderwidgets_1 = require("../builderwidgets");
const containerwidgets_1 = require("../containerwidgets");
const modifiedwidget_1 = require("../modifiedwidget");
const multiwidgets_1 = require("../multiwidgets");
const solewidgets_1 = require("../solewidgets");
class FUIDropdown extends modifiedwidget_1.ModifiedWidget {
    constructor({ triggerWidget = new containerwidgets_1.Button({ child: new solewidgets_1.Text("Dropdown") }), builder }) {
        super();
        this._position = new state_1.ValueNotifier(new design_1.Coordinates({ top: 0, left: 0 }));
        this._bounds = new state_1.ValueNotifier(utils_1.Bounds.default());
        this._hidden = new state_1.ValueNotifier(true);
        this.wrapper = new containerwidgets_1.Container();
        this.buttonWidget = new containerwidgets_1.Container();
        this.builder = builder;
        this.triggerWidget = triggerWidget;
        this.create();
    }
    toggle() {
        this._hidden.value = !this._hidden.value;
    }
    getWindowSize() {
        return {
            height: $(window).height(),
            width: $(window).width()
        };
    }
    getBuilderBounds() {
        const builder = this.builder(() => this.toggle());
        builder.component.css({ "width": "auto" });
        builder.render();
        builder.component.appendTo("#backstage");
        const bounds = builder.component.get(0).getBoundingClientRect();
        builder.component.remove();
        return bounds;
    }
    updatePosition() {
        this._bounds.clearListeners();
        this._position.clearListeners();
        const spacing = 8;
        const buttonBounds = this.buttonWidget.component.get(0).getBoundingClientRect();
        const windowSize = this.getWindowSize();
        let availableRightWidth = windowSize.width - buttonBounds.left - spacing * 2;
        let availableLeftWidth = buttonBounds.left + buttonBounds.width - spacing * 2;
        let availableBottomHeight = windowSize.height - buttonBounds.bottom - spacing * 2;
        let availableTopHeight = buttonBounds.top - spacing * 2;
        var finalHeight = availableBottomHeight > availableTopHeight ? availableBottomHeight : availableTopHeight;
        var finalWidth = availableRightWidth > availableLeftWidth ? availableRightWidth : availableLeftWidth;
        this._bounds.value = new utils_1.Bounds({ maxWidth: finalWidth + "px", maxHeight: finalHeight + "px" });
        this._position.value = new design_1.Coordinates({
            top: availableBottomHeight > availableTopHeight ? buttonBounds.bottom + spacing : buttonBounds.top - finalHeight - spacing,
            left: availableLeftWidth > availableRightWidth ? "auto" : buttonBounds.left,
            right: availableLeftWidth > availableRightWidth ? windowSize.width - buttonBounds.right : "auto"
        });
    }
    widget() {
        this.buttonWidget = new containerwidgets_1.Button({
            onClick: (e) => {
                this.toggle();
            },
            child: this.triggerWidget
        });
        this.wrapper = new multiwidgets_1.Column({
            children: [
                this.buttonWidget,
                new containerwidgets_1.Container({
                    decoration: new design_1.BoxDecoration({ width: "auto" }),
                    child: new builderwidgets_1.ValueListener({
                        notifier: this._hidden,
                        builder: (isHidden) => {
                            if (!isHidden) {
                                this.updatePosition();
                                return new containerwidgets_1.Container({
                                    child: new builderwidgets_1.ValueListener({
                                        notifier: this._position,
                                        builder: (coordinates) => {
                                            return new containerwidgets_1.Positioned({
                                                position: "fixed",
                                                coordinates: new design_1.Coordinates({ top: coordinates.top, left: coordinates.left, right: coordinates.right }),
                                                child: new builderwidgets_1.ValueListener({
                                                    notifier: this._bounds,
                                                    builder: (bounds) => {
                                                        return new containerwidgets_1.Container({
                                                            decoration: new design_1.BoxDecoration({ radius: 4, overflow: "auto", customScrollBar: true, width: "auto" }),
                                                            bounds: bounds,
                                                            child: this.builder(() => this.toggle())
                                                        });
                                                    }
                                                })
                                            });
                                        }
                                    }),
                                });
                            }
                            return new containerwidgets_1.Container({});
                        }
                    }),
                })
            ],
        });
        this.linkWidgets(this.wrapper);
        let component = this._renderer.defaultWidget();
        return component;
    }
}
exports.FUIDropdown = FUIDropdown;
