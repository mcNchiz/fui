import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";
import { AlignItems, JustifyContent } from "../multiwidgets";
export interface FlexProps{
  alignItems: AlignItems
  justifyContent: JustifyContent
}
export class Flex extends ContainerWidget implements FlexProps{
  alignItems: AlignItems;
  justifyContent: JustifyContent;

  constructor({child=null, alignItems="start", justifyContent="start"}:{child?: IWidget|null, alignItems?: AlignItems, justifyContent?: JustifyContent}={}){
    super({child});
    this.alignItems = alignItems
    this.justifyContent = justifyContent
    this.create();
  }
  widget(){
    return this._renderer.createListContainer({alignItems: this.alignItems, justifyContent: this.justifyContent, gap: 0, children: []}, "column");
  }
}