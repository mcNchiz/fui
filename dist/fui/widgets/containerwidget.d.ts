import { IWidget, Widget } from "../widget";
export declare class ContainerWidget extends Widget {
    child: IWidget | null;
    constructor({ child }: {
        child: IWidget | null;
    });
    linkWidgets(): void;
    render(): void;
}
