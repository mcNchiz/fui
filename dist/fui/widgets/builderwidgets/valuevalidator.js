"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueValidator = void 0;
const design_1 = require("../../design");
const services_1 = require("../../services");
const builderwidget_1 = require("../builderwidget");
const containerwidgets_1 = require("../containerwidgets");
const multiwidgets_1 = require("../multiwidgets");
class ValueValidator extends builderwidget_1.BuilderWidget {
    constructor({ valueNotifier, stateNotifier, syncValidators = [], asyncValidators = [] }) {
        super({});
        this.validationResult = new services_1.ValidationResult();
        this.syncValidators = syncValidators;
        this.asyncValidators = asyncValidators;
        this.valueNotifier = valueNotifier;
        this.stateNotifier = stateNotifier;
        this.value = this.valueNotifier.value;
        this.setValue(this.value);
        this.valueNotifier.addListener(async (v) => await this.listener(v));
        this.listener(this.valueNotifier.value);
        this.initialize();
    }
    async listener(newValue) {
        clearTimeout(this.inputTimeout);
        this.setValue(newValue);
        await this.validate();
        this.triggerStateNotifier("done from listener");
    }
    triggerStateNotifier(value) {
        if (this.stateNotifier) {
            this.stateNotifier.value = value;
        }
    }
    initialize() {
        this.create();
        this.linkWidgets();
    }
    flashMessage(widget) {
        this.validationWidget = widget;
        this.updateUI();
    }
    setValue(value) {
        this.value = value;
    }
    async validate() {
        this.validationResult.wait();
        this.validationResult.clear();
        this.triggerStateNotifier("validating");
        return new Promise(async (resolve, reject) => {
            for (let syncvalidator of this.syncValidators) {
                this.flashMessage(new services_1.ProgressVMW(syncvalidator.validatingMessage));
                var localResult = syncvalidator.validate(this.value);
                this.validationResult.merge(localResult);
                if (localResult.hasError()) {
                    this.flashMessage(new services_1.ErrorVMW(localResult.getFirstError()));
                    this.postValidate();
                    this.triggerStateNotifier("validation has error from syncvalidator");
                    return resolve(true);
                }
            }
            if (this.asyncValidators.length) {
                this.flashMessage(new services_1.ProgressVMW("Just a moment..."));
            }
            else {
                this.flashMessage(new services_1.ResetVMW("Just a moment..."));
                this.postValidate();
                this.triggerStateNotifier("done after sync");
                return resolve(true);
            }
            this.inputTimeout = setTimeout(async () => {
                for (let asyncvalidator of this.asyncValidators) {
                    this.flashMessage(new services_1.ProgressVMW(asyncvalidator.validatingMessage));
                    var localResult = await asyncvalidator.validate(this.value);
                    this.validationResult.merge(localResult);
                    if (localResult.hasError()) {
                        this.flashMessage(new services_1.ErrorVMW(localResult.getFirstError()));
                        this.validationResult.merge(localResult);
                        this.postValidate();
                        this.triggerStateNotifier("validation has error from async");
                        return resolve(true);
                    }
                    else {
                        this.flashMessage(new services_1.SuccessVMW(localResult.getFirstSuccess()));
                        this.postValidate();
                        this.triggerStateNotifier("done from else async");
                        return resolve(true);
                    }
                }
                this.postValidate();
                this.triggerStateNotifier("done from idk");
            }, 800);
        });
    }
    postValidate() {
        this.validationResult.validationDone();
    }
    build() {
        return new containerwidgets_1.Container({
            decoration: new design_1.BoxDecoration({ width: "auto" }),
            child: new multiwidgets_1.Row({
                children: [
                    this.validationWidget ? this.validationWidget.getWidget() : null
                ],
            }),
        });
    }
}
exports.ValueValidator = ValueValidator;
