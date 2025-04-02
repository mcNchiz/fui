import { IWidget, Widget } from "../widget";

export class ModifiedWidget extends Widget{
  child?: IWidget
  constructor(){
    super();
  }
  linkWidgets(child: IWidget){
    this.child = child;
    if(child instanceof Widget){
      child.setParentWidget(this);
    }
  }
  render(){
    super.render();
    if(this.child instanceof Widget){
      this.child.render();
    }
  }
}