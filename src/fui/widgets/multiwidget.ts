import { IWidget, Widget } from "../widget";

export class MultiWidget extends Widget{
  children: (IWidget|null)[] = [];
  constructor({children}: {children: (IWidget|null)[]}){
    super();
    this.children = children;
    this.linkWidgets();
  }
  linkWidgets(){
    for(let child of this.children){
      if(child instanceof Widget){
        child.setParentWidget(this);
      }
    }
  }
  render(){
    super.render();
    for(let child of this.children){
      if(child instanceof Widget){
        child.render();
      }
    }
  }
}