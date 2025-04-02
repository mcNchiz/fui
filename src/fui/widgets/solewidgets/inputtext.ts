import { BoxDecoration, Colors, EdgeInsets, IBoxDecoration, ITextStyle, TextStyle} from "../../design";
import { SoleWidget } from "../solewidget";


export interface InputTextProps{
  name: string
  value: string
  type: string
  onInput: (v: string)=>void
  style: ITextStyle
  decoration: IBoxDecoration
}
export class InputText extends SoleWidget implements InputTextProps{
  name: string;
  value: string;
  type: string;
  onInput: (v: string) => void;
  style: ITextStyle;
  decoration: IBoxDecoration;
  

  constructor({type, value, name, onInput=(v)=>null, style=new TextStyle({size: 18}), decoration = new BoxDecoration({
    border: 0,
    borderColor: Colors.gray300,
    backgroundColor: Colors.white,
    shadow: "none",
    // shadow: "0 3px 5px 1px rgba(50,50,50,.05)",
    // padding: EdgeInsets.symmetric(10, 12),
    width: "auto",
    padding: EdgeInsets.symmetric(4, 8),
    radius: 8,
  })}: InputTextProps){
    super({});
    this.name = name;
    this.type = type;
    this.onInput = onInput;
    this.value = value;
    this.decoration = decoration;
    this.style = style;
    this.create();
  }
  widget(){
    return this._renderer.createInput({
      name: this.name,
      value: this.value,
      style: this.style,
      onInput: (v:string)=>this.onInput(v),
      decoration: this.decoration,
      type: this.type,
    }); 
  }
}