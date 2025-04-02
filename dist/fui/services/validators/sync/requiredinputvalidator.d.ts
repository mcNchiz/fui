import { ValidationResult } from "../../form";
import { SyncValidator } from "../validator";
export declare class RequiredValueValidator extends SyncValidator {
    constructor();
    validate(inputValue: any): ValidationResult;
}
