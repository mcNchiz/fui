"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueNotifier = void 0;
class ValueNotifier {
    constructor(initialValue = null, force = false) {
        this._value = initialValue;
        this.force = force;
        this.listeners = [];
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (this.force || this._value !== newValue) {
            this._value = newValue;
            this.notifyListeners();
        }
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    removeListener(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }
    notifyListeners() {
        if (this._value != null) {
            this.listeners.forEach(listener => listener(this._value));
        }
    }
    clearListeners() {
        this.listeners = [];
    }
    dispose() {
        this.value = null;
        this.clearListeners();
    }
}
exports.ValueNotifier = ValueNotifier;
