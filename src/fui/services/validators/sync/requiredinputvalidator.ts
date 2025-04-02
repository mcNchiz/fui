import { ValidationResult } from "../../form";
import { SyncValidator } from "../validator";

export class RequiredValueValidator extends SyncValidator{
  constructor(){
    super();
  }
  validate(inputValue: any): ValidationResult{
    super.validate(inputValue);
    if(!inputValue || !inputValue.length){
      this.result.pushError("This is a required field");
    }
    return this.result;
  }
}