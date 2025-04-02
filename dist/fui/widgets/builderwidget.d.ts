import { IWidget, Widget } from "../widget";
export type IValueBuilder<T> = (value: T) => IWidget | null;
export declare abstract class BuilderWidget<T> extends Widget {
    buildWidget: IWidget | null;
    child: IWidget | null;
    builder?: IValueBuilder<T>;
    constructor({ builder }: {
        builder?: IValueBuilder<T>;
    });
    initialize(): void;
    linkWidgets(): void;
    render(): void;
    updateUI(): void;
    widget(): JQuery<HTMLElement>;
    abstract build(): IWidget;
}
