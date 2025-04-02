import { ValidationResult } from "../form/validation-result";
export declare abstract class Validators {
    result: ValidationResult;
    validatingMessage: string;
    abstract validate(data: any): ValidationResult | Promise<ValidationResult>;
    reset(): void;
}
export declare class SyncValidator extends Validators {
    constructor();
    validate(data: any): ValidationResult;
}
export declare class AsyncValidator extends Validators {
    constructor();
    validate(data: any): Promise<ValidationResult>;
}
