"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueTransitionListener = exports.MotionTransition = void 0;
const motion_1 = require("motion");
const design_1 = require("../../design");
const utils_1 = require("../../utils");
const builderwidget_1 = require("../builderwidget");
const containerwidgets_1 = require("../containerwidgets");
const multiwidgets_1 = require("../multiwidgets");
const solewidgets_1 = require("../solewidgets");
class MotionTransition {
    constructor({ animateOut = { opacity: 0 }, // Shrink effect
    animateOutFrom = { from: 1 }, animateIn = { opacity: 1 }, // Restore effect
    animateInFrom = { from: 0 }, delay = 0, } = MotionTransition.default) {
        this.delay = delay;
        this.animateOut = animateOut;
        this.animateOutFrom = animateOutFrom;
        this.animateIn = animateIn;
        this.animateInFrom = animateInFrom;
    }
}
exports.MotionTransition = MotionTransition;
MotionTransition.default = {
    delay: 200,
    animateOut: { opacity: 0 },
    animateOutFrom: { from: 1 },
    animateIn: { opacity: 1, },
    animateInFrom: { from: 0 },
};
MotionTransition.scaleOut = {
    delay: 0,
    animateOut: { scale: 0.5, opacity: 0 },
    animateOutFrom: { scale: 1, opacity: 1 },
    animateIn: { scale: 1, opacity: 1 },
    animateInFrom: { scale: 0.5, opacity: 0 },
};
MotionTransition.popUp = {
    animateOut: { opacity: 0, y: -5 },
    animateOutFrom: { opacity: 1, y: 0 },
    animateIn: { y: 0, opacity: 1 },
    animateInFrom: { y: 5, opacity: 0 },
};
class ValueTransitionListener extends builderwidget_1.BuilderWidget {
    constructor({ notifier, builder, transition = new MotionTransition({
        animateOut: { opacity: 0 },
        animateOutFrom: { from: 1 },
        animateIn: { opacity: 1 },
        delay: 0,
        animateInFrom: { from: 0 },
    }) }) {
        super({ builder });
        this.notifier = notifier;
        this.transition = transition;
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
    async updateUI() {
        var _a;
        let component = this.component.get();
        if (component)
            await (0, motion_1.animate)(component, this.transition.animateOut, this.transition.animateOutFrom);
        await (0, utils_1.delay)((_a = this.transition.delay) !== null && _a !== void 0 ? _a : 0);
        this.widget();
        this.render();
        if (component)
            await (0, motion_1.animate)(component, this.transition.animateIn, this.transition.animateInFrom);
    }
    build() {
        return new containerwidgets_1.Container({
            decoration: new design_1.BoxDecoration({ width: "auto" }),
            child: this.value != null
                ? this.builder
                    ? this.builder(this.value)
                    : null
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
exports.ValueTransitionListener = ValueTransitionListener;
