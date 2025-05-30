import { Coordinates, IBoxDecoration, IPosition } from "../../design";
import { Bounds } from "../../utils";
import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";

export type IContainerAlignment = "start"|"center"|"end"
export interface ContainerProps{
  tag?: string
  bounds?: Bounds
  width?: string
  coords?: IPosition
  height?: string
  className?: string
  alignment?: IContainerAlignment
  decoration?: IBoxDecoration
}
export class Container extends ContainerWidget implements ContainerProps{
  tag?: string | undefined
  bounds?: Bounds
  width?: string
  coords?: IPosition
  height?: string
  alignment?: IContainerAlignment
  className?: string | undefined
  decoration?: IBoxDecoration

  constructor({child=null, tag, className, width="100%", coords, height, alignment, decoration, bounds}:{child?: IWidget|null, width?: string, height?: string, tag?: string, className?: string, alignment?: IContainerAlignment, coords?: IPosition, decoration?: IBoxDecoration, bounds?: Bounds}={}){
    super({child})
    this.tag = tag
    this.height = height
    this.coords = coords
    this.width = width
    this.bounds = bounds
    this.className = className
    this.alignment = alignment
    this.decoration = decoration
    this.create()
  }
  widget(){
    return this._renderer.createContainer(this);
  }
}