import { IWidget, Widget } from "../widget";
export declare abstract class LayoutWidget extends Widget {
    layoutWidget: IWidget;
    child: IWidget;
    constructor({ child }: {
        child: IWidget;
    });
    linkWidgets(): void;
    create(): void;
    render(): void;
    widget(): JQuery<HTMLElement>;
    abstract build(): IWidget;
}
