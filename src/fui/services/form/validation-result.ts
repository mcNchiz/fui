export class ValidationResult{
  errors: string[] = [];
  success: string[] = [];
  done = true;

  pushError(msg:string){
    this.errors.push(msg);
  }
  pushSuccess(msg: string){
    this.success.push(msg);
  }
  clear(){
    this.errors = [];
    this.success = [];
  }
  valid(){
    return this.errors.length==0 && this.done;
  }
  hasError(){
    return this.errors.length>0;
  }
  getFirstError(){
    return this.errors[0];
  }
  getFirstSuccess(){
    return this.success[0]??"Success";
  }
  merge(validationResult: ValidationResult){
    this.errors = [...this.errors, ...validationResult.errors];
    this.success = [...this.success, ...validationResult.success];
  }
  onProgress(){
    return !this.done;
  }
  wait(){
    this.done = false;
  }
  validationDone(){
    this.done = true;
  }
}