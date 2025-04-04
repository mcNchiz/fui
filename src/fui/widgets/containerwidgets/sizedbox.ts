import { BoxDecoration } from "../../design";
import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";

export interface ISizedBox{
  width?: number
  height?: number
  unit?: string
  child?: IWidget|null
}
export class SizedBox extends ContainerWidget implements ISizedBox{
  width?: number;
  height?: number;
  unit: string;
  
  constructor({child=null, width=undefined, height=undefined, unit="px"}: ISizedBox={unit: "px"}){
    super({child: child??null});
    this.width = width;
    this.height = height;
    this.unit = unit;
    this.create();
  }
  widget(){
    return this._renderer.createContainer({
      decoration: new BoxDecoration({
        width: this.width+this.unit,
        height: this.height+this.unit,
      }),
    });
  }
}