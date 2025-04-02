import { IBoxDecoration } from "../../design";
import { Bounds } from "../../utils";
import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";
export type IContainerAlignment = "start" | "center" | "end";
export interface ContainerProps {
    tag?: string;
    bounds?: Bounds;
    className?: string;
    alignment?: IContainerAlignment;
    decoration?: IBoxDecoration;
}
export declare class Container extends ContainerWidget implements ContainerProps {
    tag?: string | undefined;
    bounds?: Bounds;
    alignment?: IContainerAlignment;
    className?: string | undefined;
    decoration?: IBoxDecoration;
    constructor({ child, tag, className, alignment, decoration, bounds }?: {
        child?: IWidget | null;
        tag?: string;
        className?: string;
        alignment?: IContainerAlignment;
        decoration?: IBoxDecoration;
        bounds?: Bounds;
    });
    widget(): JQuery<HTMLElement>;
}
