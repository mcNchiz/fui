export interface IPadding{left:number; top:number; right:number; bottom:number}

export class EdgeInsets{
  static zero: IPadding = {left: 0, top: 0, right: 0, bottom: 0};
  static all(px:number): IPadding{
    return {left: px, top: px, right: px, bottom: px};
  }
  static symmetric(vertical:number, horizontal:number): IPadding{
    return {left: horizontal, top: vertical, right: horizontal, bottom: vertical};
  }
  static LTRB(left:any, top:any, right:any, bottom:any): IPadding{
    return {left, top, right, bottom};
  }
  static toCSS({left, top, right, bottom}: IPadding): string{
    return `${top}px ${right}px ${bottom}px ${left}px`;
  }
}