import { Coordinates, IPosition } from "../../design";
import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";

export interface PositionedProps{
  position: string
  coordinates: IPosition
}
export class Positioned extends ContainerWidget implements PositionedProps{
  position: string;
  coordinates: Coordinates;
  constructor({child=null, position="static", coordinates=Coordinates.auto}: {child: IWidget|null, position:string, coordinates: IPosition}){
    super({child});
    this.position = position;
    this.coordinates = coordinates;
    this.create();
  }
  widget(){
    return this._renderer.createPositionedContainer({
      position: this.position,
      coordinates: this.coordinates,
    });
  }
}