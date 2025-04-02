import { ITextStyle, TextStyle } from "../../design/textstyle";
import { SoleWidget } from "../solewidget";

export class Text extends SoleWidget{
  text: string
  style: ITextStyle
  constructor(text: string, style:any=TextStyle.default()){
    super({});
    this.text = text;
    this.style = style;
    this.create();
  }
  widget(){
    return this._renderer.createText(this.text, this.style); 
  }
}