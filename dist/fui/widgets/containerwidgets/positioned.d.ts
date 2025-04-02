import { Coordinates, IPosition } from "../../design";
import { IWidget } from "../../widget";
import { ContainerWidget } from "../containerwidget";
export interface PositionedProps {
    position: string;
    coordinates: IPosition;
}
export declare class Positioned extends ContainerWidget implements PositionedProps {
    position: string;
    coordinates: Coordinates;
    constructor({ child, position, coordinates }: {
        child: IWidget | null;
        position: string;
        coordinates: IPosition;
    });
    widget(): JQuery<HTMLElement>;
}
