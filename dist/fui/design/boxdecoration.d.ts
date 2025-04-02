import { IPadding } from "./spacing";
export interface IBoxDecoration {
    customScrollBar?: boolean;
    backgroundColor?: string;
    width?: string | number;
    height?: string | number;
    border?: number;
    borderColor?: string;
    overflow?: string;
    radius?: number;
    shadow?: string;
    padding?: IPadding;
    position?: string;
}
export declare class BoxDecoration implements IBoxDecoration {
    customScrollBar?: boolean;
    backgroundColor?: string;
    width?: string | number;
    height?: string | number;
    border?: number;
    borderColor?: string;
    overflow?: string;
    radius?: number;
    shadow?: string;
    padding?: IPadding;
    position?: string;
    constructor({ backgroundColor, customScrollBar, overflow, position, width, height, border, shadow, borderColor, radius, padding }: IBoxDecoration);
    static default(): BoxDecoration;
    static emptyCSS(): {
        width: string;
    };
    static toCSS(decoration: IBoxDecoration): Record<string, any>;
}
export declare var blueButton: BoxDecoration;
export declare var greyButton: BoxDecoration;
