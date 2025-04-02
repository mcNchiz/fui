import { SyncValidator } from "../validator";
export declare class MinMaxLengthRequirement extends SyncValidator {
    min: number;
    max: number;
    constructor({ min, max }: {
        min?: number | undefined;
        max?: number | undefined;
    });
    validate(inputValue: any): import("../..").ValidationResult;
}
