import { SoleWidget } from "../solewidget";
export interface SpinnerProps {
    size: number;
    thickness: number;
    color: string;
}
export declare class Spinner extends SoleWidget implements SpinnerProps {
    size: number;
    thickness: number;
    color: string;
    constructor({ color, size, thickness }?: {
        color?: string;
        size?: number;
        thickness?: number;
    });
    widget(): JQuery<HTMLElement>;
}
