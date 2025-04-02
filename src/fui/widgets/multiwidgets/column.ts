import { IWidget } from "../../widget";
import { MultiWidget } from "../multiwidget";

export type AlignItems = "start" | "end" | "center"
export type JustifyContent = "start" | "end" | "center" | "spaced-between" | "evenly-spaced"
export interface IChildren{
  children: (IWidget|null)[]
  gap?: number
  alignItems?: AlignItems
  justifyContent?: JustifyContent
}
export class Column extends MultiWidget implements IChildren{
  gap?: number;
  alignItems: AlignItems
  justifyContent: JustifyContent

  constructor({children=[], gap=0, alignItems="start", justifyContent="start"}: IChildren){
    super({children});
    this.gap = gap;
    this.alignItems = alignItems;
    this.justifyContent = justifyContent;
    this.create();
  }
  widget(){
    return this._renderer.createListContainer(
      {gap: this.gap, alignItems: this.alignItems, children: [], justifyContent: this.justifyContent},
      "column"
    );
  }
}