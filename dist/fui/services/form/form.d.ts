import { MultiWidget } from "../../widgets";
import { IWidget } from "../../widget";
export interface IForm {
    action: string;
    name: string;
    method: string;
    onSubmit: (restart: (errorMsgs: string[]) => void, success: (message: string) => void) => void;
}
export declare class Form extends MultiWidget implements IForm {
    action: string;
    name: string;
    activeIndex: number;
    sectionDisplacement: number;
    method: string;
    onSubmit: (restart: (errorMsgs: string[]) => void, success: (message: string) => void) => void;
    constructor({ action, name, method, children, onSubmit }: {
        onSubmit: (restart: (errorMsgs: string[]) => void, success: (message: string) => void) => void;
        children: (IWidget | null)[];
        method?: string;
        name?: string;
        action?: string;
    });
    back(): Promise<void>;
    restart(errorMsgs: string[]): Promise<void>;
    success(msg: string): void;
    next(): Promise<void>;
    enter(data: any): void;
    render(): void;
    widget(): JQuery<HTMLElement>;
}
