import { Colors, IBoxDecoration, IFontWeight } from "../../design";
import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";
export interface IButton {
    centeredItems?: boolean;
    decoration: IBoxDecoration;
    weight?: IFontWeight;
    size?: number;
    color?: Colors | string;
    onClick: (e: any) => void;
    type?: string;
}
export interface IButtonProps {
    child: IWidget | null;
    centeredItems?: boolean;
    decoration?: IBoxDecoration;
    weight?: IFontWeight;
    size?: number;
    color?: Colors | string;
    onClick?: (e: any) => void;
    type?: string;
}
export declare class Button extends ContainerWidget implements IButton {
    centeredItems?: boolean | undefined;
    decoration: IBoxDecoration;
    weight?: IFontWeight | undefined;
    size?: number | undefined;
    color?: string | Colors | undefined;
    onClick: (e: any) => void;
    type?: string | undefined;
    constructor({ child, centeredItems, type, onClick, color, weight, size, decoration }: IButtonProps);
    widget(): JQuery<HTMLElement>;
}
