export declare class ValidationResult {
    errors: string[];
    success: string[];
    done: boolean;
    pushError(msg: string): void;
    pushSuccess(msg: string): void;
    clear(): void;
    valid(): boolean;
    hasError(): boolean;
    getFirstError(): string;
    getFirstSuccess(): string;
    merge(validationResult: ValidationResult): void;
    onProgress(): boolean;
    wait(): void;
    validationDone(): void;
}
