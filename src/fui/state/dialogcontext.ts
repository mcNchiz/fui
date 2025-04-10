import { CupertinoDialog } from "../widgets";

export class DialogContext {
  static stack: CupertinoDialog[] = [];

  static push(dialogInstance:CupertinoDialog) {
    DialogContext.stack.push(dialogInstance);
  }

  static pop() {
    const dialog = DialogContext.stack.pop();
    dialog?.closeDialog(); // Call your dialog's close method
  }

  static current() {
    return DialogContext.stack[DialogContext.stack.length - 1];
  }

  static clear() {
    DialogContext.stack = [];
  }
}