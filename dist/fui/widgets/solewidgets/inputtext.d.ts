import { IBoxDecoration, ITextStyle } from "../../design";
import { SoleWidget } from "../solewidget";
export interface InputTextProps {
    name: string;
    value: string;
    type: string;
    onInput: (v: string) => void;
    style: ITextStyle;
    decoration: IBoxDecoration;
}
export declare class InputText extends SoleWidget implements InputTextProps {
    name: string;
    value: string;
    type: string;
    onInput: (v: string) => void;
    style: ITextStyle;
    decoration: IBoxDecoration;
    constructor({ type, value, name, onInput, style, decoration }: InputTextProps);
    widget(): JQuery<HTMLElement>;
}
