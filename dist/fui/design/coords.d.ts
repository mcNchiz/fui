export interface IPosition {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
}
export declare class Coordinates implements IPosition {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    constructor({ top, bottom, left, right }: IPosition);
    static auto: Coordinates;
    static toCSS(c: IPosition): Record<string, any>;
}
