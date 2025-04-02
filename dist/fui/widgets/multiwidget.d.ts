import { IWidget, Widget } from "../widget";
export declare class MultiWidget extends Widget {
    children: (IWidget | null)[];
    constructor({ children }: {
        children: (IWidget | null)[];
    });
    linkWidgets(): void;
    render(): void;
}
