import { ValueNotifier } from "../../state";
import { IWidget } from "../../widget";
import { Column, LayoutWidget } from "../../widgets";
export declare class FormSection extends LayoutWidget {
    name: string;
    index: number | null;
    goBack?: (index: number) => void;
    proceed?: (index: number) => void;
    label: string;
    isActive: boolean;
    stateNotifier: ValueNotifier<any>;
    accomplishedNotifier: ValueNotifier<boolean>;
    submit: ValueNotifier<string>;
    constructor({ child, label, isActive, stateNotifier }: {
        child?: IWidget;
        label: string;
        isActive: boolean;
        stateNotifier: ValueNotifier<any>;
    });
    hide(): void;
    show(): void;
    triggerFocus(): void;
    build(): Column;
    setState(value: any): void;
}
