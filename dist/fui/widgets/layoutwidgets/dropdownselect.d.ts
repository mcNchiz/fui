import { ModifiedWidget } from "../modifiedwidget";
export declare class SelectOption<T> {
    label: string;
    value: T | null;
    constructor({ label, value }: {
        label: string;
        value: T | null;
    });
}
export interface CreateDropdownSelectProps<T> {
    options: SelectOption<T>[];
    initialValue: SelectOption<T>;
    onChange: (selectedOption: SelectOption<T>, index: number) => void;
}
export declare class DropdownSelect<T> extends ModifiedWidget {
    options: SelectOption<T>[];
    initialValue: SelectOption<T>;
    onChange: (selectedOption: SelectOption<T>, index: number) => void;
    constructor({ options, initialValue, onChange }: {
        options?: never[] | undefined;
        initialValue?: SelectOption<T> | undefined;
        onChange?: ((selectedOption: SelectOption<T>, index: number) => void) | undefined;
    });
    widget(): JQuery<HTMLElement>;
}
