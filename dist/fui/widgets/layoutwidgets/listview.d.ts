import { IWidget } from "../../widget";
import { ModifiedWidget } from "../modifiedwidget";
import { AlignItems, JustifyContent } from "../multiwidgets/column";
interface ListViewProps {
    iterable: any[];
    builder: (item: any, index: number) => IWidget;
    gap?: number;
    direction?: "row" | "column";
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
}
export declare class ListView extends ModifiedWidget {
    iterable: any[];
    builder: (item: any, index: number) => IWidget;
    gap: number;
    direction: "row" | "column";
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
    constructor({ iterable, builder, direction, alignItems, justifyContent, gap }: ListViewProps);
    widget(): JQuery<HTMLElement>;
}
export {};
