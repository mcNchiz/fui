import { IWidget, Widget } from "../widget";
export declare class ModifiedWidget extends Widget {
    child?: IWidget;
    constructor();
    linkWidgets(child: IWidget): void;
    render(): void;
}
