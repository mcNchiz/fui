import { Colors, TextStyle } from "../../../design";
import { IWidget } from "../../../widget";
import { Container, Text } from "../../../widgets";

export class ValidationMessageWidget{
  _msg: string
  constructor(msg=""){
    this._msg = msg;
  }
  get msg(){
    return this._msg;
  }
  set msg(msg){
    this._msg = msg;
  }
  getWidget():IWidget{
    return new Container()
  }
}

export class ProgressVMW extends ValidationMessageWidget{
  constructor(msg: string){
    super(msg);
  }
  getWidget(){
    return new Text(this.msg, new TextStyle({size: 16, color: Colors.gray450}));
  }
}
export class ErrorVMW extends ValidationMessageWidget{
  constructor(msg: string){
    super(msg);
  }
  getWidget(){
    return new Text(this.msg, new TextStyle({size: 16, color: Colors.red}));
  }
}
export class SuccessVMW extends ValidationMessageWidget{
  constructor(msg: string){
    super(msg);
  }
  getWidget(){
    return new Text(this.msg, new TextStyle({size: 16, color: Colors.blue}));
  }
}
export class ResetVMW extends ValidationMessageWidget{
  constructor(msg: string){
    super(msg);
  }
  getWidget(){
    return new Container();
  }
}