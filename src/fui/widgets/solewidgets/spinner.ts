import { Colors } from "../../design";
import { SoleWidget } from "../solewidget";

export interface SpinnerProps{
  size: number
  thickness: number
  color: string
}
export class Spinner extends SoleWidget implements SpinnerProps{
  size: number
  thickness: number;
  color: string;

  constructor({color=Colors.black, size=20, thickness=2}: {color?:string, size?: number, thickness?: number}={}){
    super({});
    console.log()
    this.size = size
    this.thickness = thickness
    this.color = color
    this.create();
  }
  widget(){
    return this._renderer.createSpinner({color: this.color, size: this.size, thickness: this.thickness});
  }
}