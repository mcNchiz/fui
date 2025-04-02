"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownSelect = exports.SelectOption = void 0;
const modifiedwidget_1 = require("../modifiedwidget");
class SelectOption {
    constructor({ label, value }) {
        this.label = label;
        this.value = value;
    }
}
exports.SelectOption = SelectOption;
class DropdownSelect extends modifiedwidget_1.ModifiedWidget {
    constructor({ options = [], initialValue = new SelectOption({ label: "--Select", value: null }), onChange = (selectedOption, index) => { } }) {
        super();
        this.options = options;
        this.initialValue = initialValue;
        this.onChange = onChange;
        this.create();
    }
    widget() {
        // this.linkWidgets(selectInput)
        let component = this._renderer.createDropdownSelect({ options: this.options, initialValue: this.initialValue, onChange: (option, index) => this.onChange(option, index) });
        return component;
    }
}
exports.DropdownSelect = DropdownSelect;
