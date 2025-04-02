import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";
import { AlignItems, JustifyContent } from "../multiwidgets";
export interface FlexProps {
    alignItems: AlignItems;
    justifyContent: JustifyContent;
}
export declare class Flex extends ContainerWidget implements FlexProps {
    alignItems: AlignItems;
    justifyContent: JustifyContent;
    width?: string;
    height?: string;
    constructor({ child, alignItems, height, width, justifyContent }?: {
        child?: IWidget | null;
        alignItems?: AlignItems;
        width?: string;
        height?: string;
        justifyContent?: JustifyContent;
    });
    widget(): JQuery<HTMLElement>;
}
