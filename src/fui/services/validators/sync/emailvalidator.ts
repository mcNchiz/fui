import { EmailValidateRegExp } from "../../../utils";
import { SyncValidator } from "../validator";

export class EmailValidator extends SyncValidator{
  constructor(){
    super();
  }
  validate(inputValue: any){
    super.validate(inputValue);
    let emailPreValidator = new EmailValidateRegExp(inputValue);
    if(!emailPreValidator.validate()){
      this.result.pushError("Invalid email.");
    }
    return this.result;
  }
}