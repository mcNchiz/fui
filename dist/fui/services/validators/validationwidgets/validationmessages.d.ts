import { IWidget } from "../../../widget";
import { Container, Text } from "../../../widgets";
export declare class ValidationMessageWidget {
    _msg: string;
    constructor(msg?: string);
    get msg(): string;
    set msg(msg: string);
    getWidget(): IWidget;
}
export declare class ProgressVMW extends ValidationMessageWidget {
    constructor(msg: string);
    getWidget(): Text;
}
export declare class ErrorVMW extends ValidationMessageWidget {
    constructor(msg: string);
    getWidget(): Text;
}
export declare class SuccessVMW extends ValidationMessageWidget {
    constructor(msg: string);
    getWidget(): Text;
}
export declare class ResetVMW extends ValidationMessageWidget {
    constructor(msg: string);
    getWidget(): Container;
}
