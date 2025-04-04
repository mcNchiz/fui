import { IWidget } from "../../widget";
export declare function showDialog(dialog: CupertinoDialog): void;
export declare class CupertinoDialog {
    widget?: IWidget;
    component?: JQuery<HTMLElement>;
    actions: any[];
    title: string;
    subtitle?: string;
    body: IWidget | null;
    constructor({ actions, title, subtitle, body }: {
        actions?: any[];
        title?: string;
        subtitle?: string;
        body: IWidget | null;
    });
    show(): IWidget;
    closeDialog(): void;
}
