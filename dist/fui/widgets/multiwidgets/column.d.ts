import { IWidget } from "../../widget";
import { MultiWidget } from "../multiwidget";
export type AlignItems = "start" | "end" | "center";
export type JustifyContent = "start" | "end" | "center" | "spaced-between" | "evenly-spaced";
export interface IChildren {
    children: (IWidget | null)[];
    gap?: number;
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
}
export declare class Column extends MultiWidget implements IChildren {
    gap?: number;
    alignItems: AlignItems;
    justifyContent: JustifyContent;
    constructor({ children, gap, alignItems, justifyContent }: IChildren);
    widget(): JQuery<HTMLElement>;
}
