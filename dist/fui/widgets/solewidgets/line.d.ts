import { Colors, IPadding } from "../../design";
import { SoleWidget } from "../solewidget";
export interface ILine {
    color?: string | Colors;
    width?: number;
    padding?: IPadding;
}
export declare class Line extends SoleWidget {
    color: string | Colors;
    width: number;
    padding: IPadding;
    constructor(props: ILine);
    widget(): JQuery<HTMLElement>;
}
