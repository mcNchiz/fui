import { ValidationResult } from "../form/validation-result";

export abstract class Validators{
  result = new ValidationResult();
  validatingMessage = "Just a moment...";
  abstract validate(data:any):ValidationResult|Promise<ValidationResult>
  reset(){
    this.result.clear();
  }
}
export class SyncValidator extends Validators{
  constructor(){
    super();
  }
  validate(data:any): ValidationResult{
    this.reset();
    return this.result
  }
}
export class AsyncValidator extends Validators{
  constructor(){
    super();
  }
  async validate(data:any):Promise<ValidationResult>{
    this.reset();
    return this.result
  }
}