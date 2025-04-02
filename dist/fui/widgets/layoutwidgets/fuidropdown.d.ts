import { Coordinates } from "../../design";
import { ValueNotifier } from "../../state";
import { Bounds } from "../../utils";
import { IWidget } from "../../widget";
import { Container } from "../containerwidgets";
import { ModifiedWidget } from "../modifiedwidget";
export interface FUIDropdownProps {
    builder: (toggleF: () => void) => IWidget;
    triggerWidget?: IWidget;
}
export declare class FUIDropdown extends ModifiedWidget {
    _position: ValueNotifier<Coordinates>;
    _bounds: ValueNotifier<Bounds>;
    _hidden: ValueNotifier<boolean>;
    wrapper: IWidget;
    buttonWidget: Container;
    builder: (toggleF: () => void) => IWidget;
    triggerWidget: IWidget;
    constructor({ triggerWidget, builder }: FUIDropdownProps);
    toggle(): void;
    getWindowSize(): {
        height: number | undefined;
        width: number | undefined;
    };
    getBuilderBounds(): DOMRect;
    updatePosition(): void;
    widget(): JQuery<HTMLElement>;
}
