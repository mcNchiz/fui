import { ModifiedWidget } from "../modifiedwidget";
import { Column } from "../multiwidgets/column";
import { Row } from "../multiwidgets/row";

export class GridView extends ModifiedWidget{
  constructor({iterable, builder, direction="column", alignItems, justifyContent, context="default context", gap=0}){
    super();
    this.iterable = iterable;
    this.gap = gap;
    this.direction = direction;
    this.alignItems = alignItems;
    this.justifyContent = justifyContent;
    this.context = context;
    this.builder = builder;
    this.create();
  }
  widget(){
    var widgetList = Array();
    for (let i = 0; i < this.iterable.length; i++) {
      const element = this.iterable[i];
      widgetList.push(this.builder(element, i));
    }
    if(this.direction=="row"){
      var listView = new Row({
        gap: this.gap,
        justifyContent: this.justifyContent??"start",
        alignItems: this.alignItems??"center",
        children: widgetList,
      });
    }else{
      var listView = new Column({
        gap: this.gap,
        justifyContent: this.justifyContent??"start",
        alignItems: this.alignItems??"center",
        children: widgetList,
      });
    }
    this.linkWidgets(listView);
    let component = this._renderer.defaultWidget().append(listView);
    return component;
  }
}