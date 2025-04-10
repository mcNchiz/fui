"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogContext = void 0;
class DialogContext {
    static push(dialogInstance) {
        DialogContext.stack.push(dialogInstance);
    }
    static pop() {
        const dialog = DialogContext.stack.pop();
        dialog === null || dialog === void 0 ? void 0 : dialog.closeDialog(); // Call your dialog's close method
    }
    static current() {
        return DialogContext.stack[DialogContext.stack.length - 1];
    }
    static clear() {
        DialogContext.stack = [];
    }
}
exports.DialogContext = DialogContext;
DialogContext.stack = [];
