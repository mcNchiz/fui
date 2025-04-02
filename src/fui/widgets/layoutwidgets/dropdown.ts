import { IWidget } from "../../widget"
import { Button } from "../containerwidgets"
import { ModifiedWidget } from "../modifiedwidget"
import { Text } from "../solewidgets"

export interface IDropdown{
  child?: IWidget
  triggerWidget?: IWidget
}
export interface CreateDropdownProps{
  contentElement: IWidget
  triggerElement: IWidget
}
export class Dropdown extends ModifiedWidget implements IDropdown{
  triggerWidget?: IWidget | undefined
  constructor({triggerWidget=new Button({child: new Text("Dropdown")}), child=new Text("Dropdown Content")}: IDropdown){
    super()
    this.child = child
    this.triggerWidget = triggerWidget
    this.create()
  }
  widget(){
    if(this.child) this.child.render()
    if(this.triggerWidget) this.triggerWidget.render()
    let component = this._renderer.createDropdown({contentElement: this.child!, triggerElement: this.triggerWidget!})
    return component
  }
}