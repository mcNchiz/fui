import { IWidget } from "../../widget";
import { ModifiedWidget } from "../modifiedwidget";
export interface IDropdown {
    child?: IWidget;
    triggerWidget?: IWidget;
}
export interface CreateDropdownProps {
    contentElement: IWidget;
    triggerElement: IWidget;
}
export declare class Dropdown extends ModifiedWidget implements IDropdown {
    triggerWidget?: IWidget | undefined;
    constructor({ triggerWidget, child }: IDropdown);
    widget(): JQuery<HTMLElement>;
}
