import { IWidget } from "../../widget";
import { MultiWidget } from "../multiwidget";
import { IChildren } from "./column";

export class Row extends MultiWidget implements IChildren{
  gap?: number;
  alignItems?: "start" | "end" | "center" | undefined;
  justifyContent?: "start" | "end" | "center" | "spaced-between" | "evenly-spaced" | undefined;
  constructor({children=[], gap=0, alignItems="center", justifyContent}: IChildren){
    super({children});
    this.gap = gap;
    this.alignItems = alignItems;
    this.justifyContent = justifyContent;
    this.create();
  }
  widget(){
    return this._renderer.createListContainer({
      children: [],
      gap: this.gap,
      alignItems: this.alignItems,
      justifyContent: this.justifyContent
    }, "row");
  }
}