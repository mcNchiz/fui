import { FUIModalContent } from "../../apps";
export interface ICupertinoModal {
    id: string;
    component?: JQuery<HTMLElement>;
}
export declare class CupertinoModal extends FUIModalContent implements ICupertinoModal {
    id: string;
    component?: JQuery<HTMLElement>;
    constructor({ id }: ICupertinoModal);
    getContentSelector(): string;
    show(): void;
    hide(): void;
    setup(): void;
}
