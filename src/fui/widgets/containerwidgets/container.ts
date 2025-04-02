import { IBoxDecoration } from "../../design";
import { Bounds } from "../../utils";
import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";

export type IContainerAlignment = "start"|"center"|"end"
export interface ContainerProps{
  tag?: string
  bounds?: Bounds
  className?: string
  alignment?: IContainerAlignment
  decoration?: IBoxDecoration
}
export class Container extends ContainerWidget implements ContainerProps{
  tag?: string | undefined
  bounds?: Bounds
  alignment?: IContainerAlignment
  className?: string | undefined
  decoration?: IBoxDecoration

  constructor({child=null, tag, className, alignment, decoration, bounds}:{child?: IWidget|null, tag?: string, className?: string, alignment?: IContainerAlignment, decoration?: IBoxDecoration, bounds?: Bounds}={}){
    super({child});
    this.tag = tag;
    this.bounds = bounds;
    this.className = className;
    this.alignment = alignment;
    this.decoration = decoration;
    this.create();
  }
  widget(){
    return this._renderer.createContainer(this);
  }
}