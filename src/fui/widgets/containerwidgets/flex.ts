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
  width?: string
  height?: string

  constructor({child=null, alignItems="start", height, width, justifyContent="start"}:{child?: IWidget|null, alignItems?: AlignItems, width?:string, height?:string, justifyContent?: JustifyContent}={}){
    super({child});
    this.alignItems = alignItems
    this.width= width
    this.height= height
    this.justifyContent = justifyContent
    this.create();
  }
  widget(){
    return this._renderer.createListContainer({alignItems: this.alignItems, height: this.height, width: this.width, justifyContent: this.justifyContent, gap: 0, children: []}, "column");
  }
}