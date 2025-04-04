import { IBoxDecoration, IPosition } from "../../design";
import { Bounds } from "../../utils";
import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";
export type IContainerAlignment = "start" | "center" | "end";
export interface ContainerProps {
    tag?: string;
    bounds?: Bounds;
    width?: string;
    coords?: IPosition;
    height?: string;
    className?: string;
    alignment?: IContainerAlignment;
    decoration?: IBoxDecoration;
}
export declare class Container extends ContainerWidget implements ContainerProps {
    tag?: string | undefined;
    bounds?: Bounds;
    width?: string;
    coords?: IPosition;
    height?: string;
    alignment?: IContainerAlignment;
    className?: string | undefined;
    decoration?: IBoxDecoration;
    constructor({ child, tag, className, width, coords, height, alignment, decoration, bounds }?: {
        child?: IWidget | null;
        width?: string;
        height?: string;
        tag?: string;
        className?: string;
        alignment?: IContainerAlignment;
        coords?: IPosition;
        decoration?: IBoxDecoration;
        bounds?: Bounds;
    });
    widget(): JQuery<HTMLElement>;
}
