import { ValueNotifier } from "../../state";
import { BuilderWidget, IValueBuilder } from "../builderwidget";
import { Container } from "../containerwidgets";
export interface IValueListener<T> {
    notifier: ValueNotifier<T>;
    builder: IValueBuilder<T>;
}
export declare class ValueListener<T> extends BuilderWidget<T> {
    notifier: ValueNotifier<T>;
    builder?: IValueBuilder<T> | undefined;
    value: T | null;
    constructor({ notifier, builder }: IValueListener<T>);
    initialize(): void;
    setValue(value: T | null): void;
    build(): Container;
}
