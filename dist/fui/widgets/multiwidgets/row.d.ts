import { MultiWidget } from "../multiwidget";
import { IChildren } from "./column";
export declare class Row extends MultiWidget implements IChildren {
    gap?: number;
    alignItems?: "start" | "end" | "center" | undefined;
    justifyContent?: "start" | "end" | "center" | "spaced-between" | "evenly-spaced" | undefined;
    constructor({ children, gap, alignItems, justifyContent }: IChildren);
    widget(): JQuery<HTMLElement>;
}
