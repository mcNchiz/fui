import { ContainerWidget } from "../containerwidget";


export class Collapsable extends ContainerWidget{
  constructor({child=null, centeredItems, decoration}){
    super({child});
    this.centeredItems = centeredItems;
    this.decoration = decoration;
    this.create();
  }
  widget(){
    return this._renderer.createContainer({
      border: this.border,
      centeredItems: this.centeredItems,
      decoration: this.decoration,
    });
  }
}