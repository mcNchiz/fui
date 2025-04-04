import { IWidget } from "../../widget";
import { MultiWidget } from "../multiwidget";
export type AlignItems = "start" | "end" | "center";
export type JustifyContent = "start" | "end" | "center" | "space-between" | "evenly-spaced";
export interface IChildren {
    children: (IWidget | null)[];
    gap?: number;
    width?: string;
    height?: string;
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
}
export declare class Column extends MultiWidget implements IChildren {
    gap?: number;
    alignItems: AlignItems;
    justifyContent: JustifyContent;
    constructor({ children, gap, alignItems, justifyContent, width, height }: IChildren);
    widget(): JQuery<HTMLElement>;
}
