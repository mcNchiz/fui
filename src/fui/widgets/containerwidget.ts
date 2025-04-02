import { IWidget, Widget } from "../widget";

export class ContainerWidget extends Widget{
  child: IWidget | null
  constructor({child=null}: {child: IWidget|null}){
    super();
    this.child = child;
    this.linkWidgets();
  }
  linkWidgets(){
    if(this.child instanceof Widget){
      this.child.setParentWidget(this);
    }
  }
  render(){
    super.render();
    if(this.child instanceof Widget){
      this.child.render();
    }
  }
}