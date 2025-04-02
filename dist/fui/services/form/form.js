"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const motion_1 = require("motion");
const widgets_1 = require("../../widgets");
const formsection_1 = require("./formsection");
const utils_1 = require("../../utils");
class Form extends widgets_1.MultiWidget {
    constructor({ action = "#", name, method = "GET", children, onSubmit }) {
        super({ children: children.filter(c => c instanceof formsection_1.FormSection) });
        this.activeIndex = 0;
        this.sectionDisplacement = 40;
        this.action = action;
        this.name = (0, utils_1.formatClassName)(name !== null && name !== void 0 ? name : "form");
        this.onSubmit = onSubmit;
        this.method = method;
        this.create();
    }
    async back() {
        let section = this.children[this.activeIndex];
        if (section instanceof formsection_1.FormSection) {
            if (this.activeIndex > 0) {
                this.activeIndex--;
                (0, motion_1.animate)(section.component.get(), { opacity: [1, 0] }, { duration: 1 });
                (0, motion_1.animate)(section.component.get(), { x: [0, this.sectionDisplacement] });
                let prevSection = this.children[this.activeIndex];
                await (0, utils_1.delay)(50);
                section.hide();
                if (prevSection instanceof formsection_1.FormSection) {
                    prevSection.show();
                    (0, motion_1.animate)(prevSection.component.get(), { opacity: [0, 1] });
                    (0, motion_1.animate)(prevSection.component.get(), { x: [this.sectionDisplacement * -1, 0] });
                    prevSection.triggerFocus();
                }
            }
            else {
                (0, motion_1.animate)(section.component.get(), { x: [0, 10] });
                await (0, utils_1.delay)(200);
                (0, motion_1.animate)(section.component.get(), { x: [10, 0] });
            }
        }
    }
    async restart(errorMsgs) {
        this.activeIndex = 0;
        let prevSection = this.children[this.activeIndex];
        await (0, utils_1.delay)(50);
        if (prevSection instanceof formsection_1.FormSection) {
            prevSection.show();
            prevSection.submit.value = "Sub";
            (0, motion_1.animate)(prevSection.component.get(), { opacity: [0, 1] });
            (0, motion_1.animate)(prevSection.component.get(), { x: [this.sectionDisplacement * -1, 0] });
            prevSection.triggerFocus();
        }
        let activeSection = this.children[this.activeIndex];
        if (activeSection instanceof formsection_1.FormSection) {
            activeSection.submit.value = this.activeIndex == this.children.length - 1 ? "Submit" : "Next";
        }
    }
    success(msg) { }
    async next() {
        let section = this.children[this.activeIndex];
        if (section instanceof formsection_1.FormSection) {
            let isSectionAccomplished = section.accomplishedNotifier.value == true;
            if (isSectionAccomplished) {
                if (this.activeIndex == this.children.length - 1) {
                    let activeSection = this.children[this.activeIndex];
                    if (activeSection instanceof formsection_1.FormSection) {
                        // animate(section.component!.get(), {opacity: [1,0]})
                        // await delay(400);
                        // section.hide();
                        if (activeSection.submit.value != "Submitting") {
                            this.onSubmit((errorMsgs) => this.restart(errorMsgs), (msg) => this.success(msg));
                        }
                        activeSection.submit.value = "Submitting";
                    }
                }
                else {
                    this.activeIndex++;
                    (0, motion_1.animate)(section.component.get(), { opacity: [1, 0] });
                    (0, motion_1.animate)(section.component.get(), { x: [0, this.sectionDisplacement * -1] });
                    let nextSection = this.children[this.activeIndex];
                    await (0, utils_1.delay)(50);
                    section.hide();
                    if (nextSection instanceof formsection_1.FormSection) {
                        nextSection.show();
                        (0, motion_1.animate)(nextSection.component.get(), { opacity: [0, 1] });
                        (0, motion_1.animate)(nextSection.component.get(), { x: [this.sectionDisplacement, 0] });
                        nextSection.triggerFocus();
                    }
                }
            }
        }
    }
    enter(data) {
        this.next();
    }
    render() {
        let i = 0;
        super.render();
        for (let section of this.children) {
            if (section instanceof formsection_1.FormSection) {
                if (section === this.children[this.children.length - 1]) {
                    section.submit.value = "Submit";
                }
                if (i != this.activeIndex) {
                    section.hide();
                }
                else {
                    section.triggerFocus();
                }
                let className = `${this.name}-fs-${i}`;
                section.index = i;
                section.goBack = (i) => this.back();
                section.proceed = (i) => this.next();
                section.name = className;
                section.component.addClass(className);
                i++;
            }
        }
    }
    widget() {
        var component = this._renderer.createApiForm({ action: this.action, onSubmit: this.onSubmit, name: this.name, method: this.method }, (data) => this.enter(data));
        return component;
    }
}
exports.Form = Form;
