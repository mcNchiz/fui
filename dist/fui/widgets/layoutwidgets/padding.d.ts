import { IPadding } from "../../design";
import { IWidget } from "../../widget";
import { LayoutWidget } from "../advancewidget";
import { Container } from "../containerwidgets";
export declare class Padding extends LayoutWidget {
    padding: IPadding;
    constructor({ child, padding }: {
        padding: IPadding;
        child?: IWidget;
    });
    build(): Container;
}
