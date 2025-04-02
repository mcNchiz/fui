import { SoleWidget } from "../solewidget";
export declare class Image extends SoleWidget {
    url: string;
    width: string;
    height: string;
    constructor(url: string, width?: string, height?: string);
    widget(): JQuery<HTMLElement>;
}
