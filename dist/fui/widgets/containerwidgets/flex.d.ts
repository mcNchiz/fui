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
    constructor({ child, alignItems, justifyContent }?: {
        child?: IWidget | null;
        alignItems?: AlignItems;
        justifyContent?: JustifyContent;
    });
    widget(): JQuery<HTMLElement>;
}
