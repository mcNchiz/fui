import { Renderer } from "./renderers/base-renderer";
import { JQueryDOM } from "./renderers/jquerydom";
export interface IWidget {
    _renderer: Renderer;
    component: JQuery<HTMLElement> | null;
    parentWidget: IWidget | null;
    create(): void;
    render(): void;
    setParentWidget(parentWidget: IWidget): void;
    renderToParentComponent(childWidget: IWidget): void;
    clear(): void;
}
export declare class Widget implements IWidget {
    _renderer: JQueryDOM;
    component: JQuery<HTMLElement> | null;
    parentWidget: IWidget | null;
    constructor();
    create(): void;
    widget(): JQuery<HTMLElement>;
    render(): void;
    setParentWidget(parentWidget: IWidget): void;
    renderToParentComponent(childWidget: IWidget): void;
    clear(): void;
}
