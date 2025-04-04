import { LayoutWidget } from "../advancewidget";
import { Button } from "../containerwidgets";
export declare class CupertinoDialogButton extends LayoutWidget {
    label: string;
    onClick: () => void;
    constructor({ label, onClick }: {
        label?: string;
        onClick?: () => void;
    });
    build(): Button;
}
