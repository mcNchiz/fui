import { BootstrapIcon } from "../../design";
import { SoleWidget } from "../solewidget";

export interface IICon{
  icon: BootstrapIcon
  spin: boolean
}
export class Icon extends SoleWidget implements IICon{
  icon: BootstrapIcon;
  spin: boolean;
  
  constructor(icon: BootstrapIcon, spin=false){
    super({});
    this.icon = icon;
    this.spin = spin;
    this.create();
  }
  widget(){
    return this._renderer.createIcon(this.icon, this.spin);
  }
}