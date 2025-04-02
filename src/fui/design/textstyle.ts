import { Colors } from "./color";

export type IFontWeight = "100"|"200"|"300"|"400"|"500"|"600"|"700"|"800"|"900"
export interface ITextStyle {
  color?: Colors|string;
  weight?: IFontWeight;
  size?: number;
  singleLine?: boolean;
  letterSpacing?: number | string;  // Accepts numbers for easier calculations
  lineHeight?: number | string;     // Accepts numbers too
  alignment?: "left" | "center" | "right" | "justify";
}

export class TextStyle implements ITextStyle{
  alignment?: "left" | "center" | "right" | "justify" | undefined;
  color?: Colors | string | undefined;
  letterSpacing?: string | number | undefined;
  lineHeight?: string | number | undefined;
  singleLine?: boolean | undefined;
  size?: number | undefined;
  weight?: IFontWeight | undefined;

  constructor({color="inherit", size=16, singleLine=false, letterSpacing="normal", lineHeight="130%", alignment="left", weight="400"}: ITextStyle){
    this.color = color;
    this.weight = weight;
    this.lineHeight = lineHeight;
    this.singleLine = singleLine;
    this.letterSpacing = letterSpacing;
    this.alignment = alignment;
    this.size = size;
  }
  static default(){
    return new TextStyle({
      color: "inherit",
      size: 16,
      weight: "400",
    });
  }
  static toCSS(style: ITextStyle){
    const styleCss: Record<string,any> = {}
    if(style.alignment){
      styleCss['alignment'] = style.alignment
    }
    if(style.color){
      styleCss['color'] = style.color
    }
    if(style.letterSpacing){
      styleCss['letter-spacing'] = style.letterSpacing
    }
    if(style.lineHeight){
      styleCss['line-height'] = style.lineHeight
    }
    if(style.size){
      styleCss['font-size'] = style.size+"px"
    }
    if(style.weight){
      styleCss['font-weight'] = style.weight
    }
    if(style.singleLine){
      styleCss['white-space'] = "nowrap"
      styleCss['overflow'] = "hidden"
      styleCss['text-overflow'] = "ellipsis"
    }
    return styleCss
  }
}