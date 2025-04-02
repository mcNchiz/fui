import { ITextStyle } from "../../design/textstyle";
import { SoleWidget } from "../solewidget";
export declare class Text extends SoleWidget {
    text: string;
    style: ITextStyle;
    constructor(text: string, style?: any);
    widget(): JQuery<HTMLElement>;
}
