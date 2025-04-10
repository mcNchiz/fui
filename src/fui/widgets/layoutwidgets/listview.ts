import { IWidget } from "../../widget";
import { ModifiedWidget } from "../modifiedwidget";
import { AlignItems, Column, JustifyContent } from "../multiwidgets/column";
import { Row } from "../multiwidgets/row";


interface ListViewProps{
  iterable: any[]
  builder: (item: any, index: number)=>IWidget
  gap?: number
  direction?: "row"|"column"
  alignItems?: AlignItems
  justifyContent?: JustifyContent
}

export class ListView extends ModifiedWidget{
  iterable: any[]
  builder: (item: any, index: number)=>IWidget
  gap: number
  direction: "row"|"column"
  alignItems?: AlignItems
  justifyContent?: JustifyContent

  constructor({iterable, builder, direction="column", alignItems, justifyContent, gap=0}: ListViewProps){
    super();
    this.iterable = iterable;
    this.gap = gap;
    this.direction = direction;
    this.alignItems = alignItems;
    this.justifyContent = justifyContent;
    this.builder = builder;
    this.create();
  }
  widget(){
    var widgetList = Array();
    for (let i = 0; i < this.iterable.length; i++) {
      const element = this.iterable[i];
      widgetList.push(this.builder(element, i));
    }
    let listView: IWidget 
    if(this.direction=="row"){
      listView = new Row({
        gap: this.gap,
        justifyContent: this.justifyContent??"start",
        alignItems: this.alignItems??"center",
        children: widgetList,
      });
    }else{
      listView = new Column({
        gap: this.gap,
        justifyContent: this.justifyContent??"start",
        alignItems: this.alignItems??"start",
        children: widgetList,
      });
    }
    this.linkWidgets(listView);
    let component = this._renderer.defaultWidget()
    return component;
  }
}