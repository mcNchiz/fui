import { IWidget, Widget } from "../widget";
import { Text } from "./solewidgets/text";

export abstract class LayoutWidget extends Widget{
  layoutWidget: IWidget = new Text("")
  child: IWidget;
  constructor({child}:{child: IWidget}){
    super();
    this.child = child;
    this.linkWidgets();
  }
  linkWidgets(){
    this.layoutWidget.parentWidget = this;
    // if(this.child instanceof Widget){
    //   this.child.setParentWidget(this.layoutWidget);
    // }
  }
  create(){
    super.create();
    // if(this.child){
    //   this.child.render("ctx");
    // }
  }
  render(){
    super.render();
    this.layoutWidget.render();
    // if(this.child instanceof Widget){
    //   this.child.render(ctx);
    // }
  }
  widget(): JQuery<HTMLElement> {
    this.layoutWidget = this.build();
    return this.layoutWidget.component!;
  }
  abstract build(): IWidget
}