import { AsyncValidator, SyncValidator, ValidationMessageWidget, ValidationResult } from "../../services";
import { ValueNotifier } from "../../state";
import { BuilderWidget } from "../builderwidget";
import { Container } from "../containerwidgets";
export declare class ValueValidator<T> extends BuilderWidget<T> {
    validationResult: ValidationResult;
    validationWidget?: ValidationMessageWidget;
    inputTimeout?: number;
    valueNotifier: ValueNotifier<T>;
    stateNotifier?: ValueNotifier<any>;
    syncValidators: SyncValidator[];
    asyncValidators: AsyncValidator[];
    value: T | null;
    constructor({ valueNotifier, stateNotifier, syncValidators, asyncValidators }: {
        valueNotifier: ValueNotifier<T>;
        stateNotifier?: ValueNotifier<T>;
        syncValidators: SyncValidator[];
        asyncValidators: AsyncValidator[];
    });
    listener(newValue: T | null): Promise<void>;
    triggerStateNotifier(value: any): void;
    initialize(): void;
    flashMessage(widget: ValidationMessageWidget): void;
    setValue(value: T | null): void;
    validate(): Promise<unknown>;
    postValidate(): void;
    build(): Container;
}
