import { InputTextProps } from "../widgets/solewidgets/inputtext";
import { BootstrapIcon } from "../design/icons";
import { ITextStyle } from "../design/textstyle";
import { ContainerProps, CreateDropdownProps, CreateDropdownSelectProps, IButton, IChildren, Line } from "../widgets";
import { IBoxDecoration } from "../design";
import { PositionedProps } from "../widgets/containerwidgets/positioned";
import { IForm } from "../services";
import { SpinnerProps } from "../widgets/solewidgets/spinner";
export interface IRenderer {
    canvas: any;
    createSpinner(props: SpinnerProps): JQuery<HTMLElement>;
    createDropdown(props: CreateDropdownProps): JQuery<HTMLElement>;
    createDropdownSelect<T>(props: CreateDropdownSelectProps<T>): JQuery<HTMLElement>;
    defaultWidget(): JQuery<HTMLElement>;
    createApiForm(props: IForm, onEnter: (data: any) => void): JQuery<HTMLElement>;
    hide(element: JQuery<HTMLElement>): void;
    show(element: JQuery<HTMLElement>): void;
    triggerFocus(element: JQuery<HTMLElement>): void;
    createIcon(icon: BootstrapIcon, spin: boolean): JQuery<HTMLElement>;
    createText(text: string, style: ITextStyle): JQuery<HTMLElement>;
    createLoadingRect(decoration: IBoxDecoration): JQuery<HTMLElement>;
    createLine(line: Line): JQuery<HTMLElement>;
    createInput(props: InputTextProps): JQuery<HTMLElement>;
    createContainer(props: ContainerProps): JQuery<HTMLElement>;
    createButton(props: IButton): JQuery<HTMLElement>;
    createPositionedContainer(props: PositionedProps): JQuery<HTMLElement>;
    createListContainer(props: IChildren, direction: "row" | "column"): JQuery<HTMLElement>;
}
export declare abstract class Renderer implements IRenderer {
    canvas: null;
    abstract createSpinner(props: SpinnerProps): JQuery<HTMLElement>;
    abstract createDropdown(props: CreateDropdownProps): JQuery<HTMLElement>;
    abstract createDropdownSelect<T>(props: CreateDropdownSelectProps<T>): JQuery<HTMLElement>;
    abstract createApiForm(props: IForm, onEnter: (data: any) => void): JQuery<HTMLElement>;
    abstract hide(element: JQuery<HTMLElement>): void;
    abstract show(element: JQuery<HTMLElement>): void;
    abstract triggerFocus(element: JQuery<HTMLElement>): void;
    abstract createListContainer(props: IChildren, direction: "row" | "column"): JQuery<HTMLElement>;
    abstract createButton(props: IButton): JQuery<HTMLElement>;
    abstract createPositionedContainer(props: PositionedProps): JQuery<HTMLElement>;
    abstract createIcon(icon: BootstrapIcon, spin: boolean): JQuery<HTMLElement>;
    abstract createContainer(props: ContainerProps): JQuery<HTMLElement>;
    abstract createLoadingRect(decoration: IBoxDecoration): JQuery<HTMLElement>;
    abstract createLine(line: Line): JQuery<HTMLElement>;
    abstract createText(text: string, style: ITextStyle): JQuery<HTMLElement>;
    abstract defaultWidget(): JQuery<HTMLElement>;
    abstract createInput(props: InputTextProps): JQuery<HTMLElement>;
}
