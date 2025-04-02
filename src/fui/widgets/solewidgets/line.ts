import { Colors, EdgeInsets, IPadding } from "../../design";
import { SoleWidget } from "../solewidget";

export interface ILine{
  color?: string | Colors;
  width?: number;
  padding?: IPadding;
}
export class Line extends SoleWidget{
  color: string | Colors;
  width: number;
  padding: IPadding;
  constructor(props: ILine){
    super({});
    this.color = props.color??Colors.gray300;
    this.padding = props.padding??EdgeInsets.zero;
    this.width = props.width??1;
    this.create();
  }
  widget(){
    return this._renderer.createLine(this); 
  }
}