import { RegEx } from "../regex";

export class EmailValidateRegExp extends RegEx{
  constructor(str: string){
    super(str);
  }
  validate(){
    var exp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return exp.test(this.data);
  }
}