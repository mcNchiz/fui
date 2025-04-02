import { Colors } from "./color";
export type IFontWeight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
export interface ITextStyle {
    color?: Colors | string;
    weight?: IFontWeight;
    size?: number;
    singleLine?: boolean;
    letterSpacing?: number | string;
    lineHeight?: number | string;
    alignment?: "left" | "center" | "right" | "justify";
}
export declare class TextStyle implements ITextStyle {
    alignment?: "left" | "center" | "right" | "justify" | undefined;
    color?: Colors | string | undefined;
    letterSpacing?: string | number | undefined;
    lineHeight?: string | number | undefined;
    singleLine?: boolean | undefined;
    size?: number | undefined;
    weight?: IFontWeight | undefined;
    constructor({ color, size, singleLine, letterSpacing, lineHeight, alignment, weight }: ITextStyle);
    static default(): TextStyle;
    static toCSS(style: ITextStyle): Record<string, any>;
}
