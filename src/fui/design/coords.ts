export interface IPosition{
  top?: string|number
  bottom?: string|number
  left?: string|number
  right?: string|number
}
export class Coordinates implements IPosition{
  top?: string | number
  bottom?: string | number
  left?: string | number
  right?: string | number

  constructor({top="auto", bottom="auto", left="auto", right="auto"}: IPosition){
    this.top=top
    this.bottom=bottom
    this.left=left
    this.right=right
  }
  static auto = new Coordinates({})
  static toCSS(c: IPosition): Record<string, any>{
    return {
      "top": c.top,
      "bottom": c.bottom,
      "left": c.left,
      "right": c.right
    };
  }
}