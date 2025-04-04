import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";
export interface ISizedBox {
    width?: number;
    height?: number;
    unit?: string;
    child?: IWidget | null;
}
export declare class SizedBox extends ContainerWidget implements ISizedBox {
    width?: number;
    height?: number;
    unit: string;
    constructor({ child, width, height, unit }?: ISizedBox);
    widget(): JQuery<HTMLElement>;
}
