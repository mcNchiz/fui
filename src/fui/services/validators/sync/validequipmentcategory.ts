import { SyncValidator } from "../validator";

export class ValidEquipmentCategory extends SyncValidator{
  constructor(){
    super();
  }
  validate(inputValue: string){
    let categories = ["equipment", "facility"];
    super.validate(inputValue);
    if(!categories.includes(inputValue)){
      this.result.pushError("Invalid selection.");
    }
    return this.result;
  }
}