import { SyncValidator } from "../validator";

export class MinMaxLengthRequirement extends SyncValidator{
  min: number
  max: number
  constructor({min=0, max=9999999999999}){
    super();
    this.min = min;
    this.max = max;
  }
  validate(inputValue: any){
    super.validate(inputValue);
    if(inputValue.length<this.min){
      this.result.pushError("Minimum length required: "+this.min);
    }else if(inputValue.length>this.max){
      this.result.pushError("You have reached the maximum input length.");
    }else if(this.min>this.max){
      this.result.pushError("Range Error: Invalid defined length");
    }
    return this.result;
  }
}