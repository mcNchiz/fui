export type IListenerCallback<T> = (value: T) => void;
export interface IValueNotifier<T> {
    _value: T | null;
    force: boolean;
    listeners: IListenerCallback<T>[];
    value: T | null;
}
export declare class ValueNotifier<T> implements IValueNotifier<T> {
    _value: T | null;
    force: boolean;
    listeners: IListenerCallback<T>[];
    constructor(initialValue?: T | null, force?: boolean);
    get value(): T | null;
    set value(newValue: T | null);
    addListener(listener: IListenerCallback<T>): void;
    removeListener(listener: IListenerCallback<T>): void;
    notifyListeners(): void;
    clearListeners(): void;
    dispose(): void;
}
