import { BootstrapIcon } from "../../design";
import { SoleWidget } from "../solewidget";
export interface IICon {
    icon: BootstrapIcon;
    spin: boolean;
}
export declare class Icon extends SoleWidget implements IICon {
    icon: BootstrapIcon;
    spin: boolean;
    constructor(icon: BootstrapIcon, spin?: boolean);
    widget(): JQuery<HTMLElement>;
}
