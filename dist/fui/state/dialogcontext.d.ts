import { CupertinoDialog } from "../widgets";
export declare class DialogContext {
    static stack: CupertinoDialog[];
    static push(dialogInstance: CupertinoDialog): void;
    static pop(): void;
    static current(): CupertinoDialog;
    static clear(): void;
}
