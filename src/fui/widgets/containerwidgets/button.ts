import { BoxDecoration, Colors, EdgeInsets, IBoxDecoration, IFontWeight } from "../../design";
import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";

export interface IButton{
  centeredItems?: boolean;
  decoration: IBoxDecoration;
  weight?: IFontWeight
  size?: number
  color?: Colors|string
  onClick: (e: any)=>void
  type?: string
}
export interface IButtonProps{
  child: IWidget | null
  centeredItems?: boolean;
  decoration?: IBoxDecoration;
  weight?: IFontWeight
  size?: number
  color?: Colors|string
  onClick?: (e: any)=>void
  type?: string
}
export class Button extends ContainerWidget implements IButton{
  centeredItems?: boolean | undefined;
  decoration: IBoxDecoration;
  weight?: IFontWeight | undefined;
  size?: number | undefined;
  color?: string | Colors | undefined;
  onClick: (e: any) => void;
  type?: string | undefined;

  constructor({child=null, centeredItems=false, type, onClick=()=>{console.log("onClick not defined")}, color, weight, size, decoration = new BoxDecoration({width: "auto", border: 0, padding: EdgeInsets.zero})}: IButtonProps){
    super({child});
    this.centeredItems = centeredItems;
    this.type = type;
    this.color = color;
    this.onClick = onClick;
    this.size = size;
    this.weight = weight;
    this.decoration = decoration,
    this.create();
  }
  widget(){
    return this._renderer.createButton({
      centeredItems: this.centeredItems,
      type: this.type,
      onClick: (v:any)=>this.onClick(v),
      color: this.color,
      weight: this.weight,
      size: this.size,
      decoration: this.decoration,
    });
  }
}