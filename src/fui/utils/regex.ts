export class RegEx{
  data: string
  constructor(data: string){
    this.data = data;
  }
  validate(){
    return false;
  }
  replace(){
    return this.data;
  }
}