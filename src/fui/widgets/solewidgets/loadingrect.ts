import { BoxDecoration, Colors, IBoxDecoration } from "../../design";
import { SoleWidget } from "../solewidget";

export class LoadingRect extends SoleWidget{
  decoration: IBoxDecoration
  constructor(decoration: IBoxDecoration=new BoxDecoration({width: 400, height: 40, radius: 4, backgroundColor: Colors.gray200})){
    super({});
    this.decoration = decoration;
    this.create();
  }
  widget(){
    return this._renderer.createLoadingRect(this.decoration); 
  }
}