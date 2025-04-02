import { BoxDecoration, EdgeInsets, IPadding } from "../../design";
import { IWidget } from "../../widget";
import { LayoutWidget } from "../advancewidget";
import { Container } from "../containerwidgets";

export class Padding extends LayoutWidget{
  padding: IPadding
  constructor({child=new Container(), padding = EdgeInsets.symmetric(4, 8)}: {padding: IPadding, child?: IWidget}){
    super({child});
    this.padding = padding;
    this.create();
  }
  build(){
    return new Container({
      decoration: new BoxDecoration({
        padding: this.padding,
      }),
      child: this.child,
    });
  }
}