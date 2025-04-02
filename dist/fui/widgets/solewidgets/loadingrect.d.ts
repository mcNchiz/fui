import { IBoxDecoration } from "../../design";
import { SoleWidget } from "../solewidget";
export declare class LoadingRect extends SoleWidget {
    decoration: IBoxDecoration;
    constructor(decoration?: IBoxDecoration);
    widget(): JQuery<HTMLElement>;
}
