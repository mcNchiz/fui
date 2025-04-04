import { Colors } from "./color"
import { EdgeInsets, IPadding } from "./spacing"

export interface IBoxDecoration{
  customScrollBar?: boolean
  backgroundColor?: string
  width?: string | number
  height?: string | number
  border?: number
  borderColor?: string
  overflow?: string
  radius?: number
  shadow?: string
  padding?: IPadding
  position?: string
}

export class BoxDecoration implements IBoxDecoration{
  customScrollBar?: boolean
  backgroundColor?: string
  width?: string | number
  height?: string | number
  border?: number
  borderColor?: string
  overflow?: string
  radius?: number
  shadow?: string
  padding?: IPadding
  position?: string

  constructor({backgroundColor, customScrollBar=false, overflow, position, width="100%", height, border=0, shadow="none", borderColor, radius, padding}: IBoxDecoration){
    this.customScrollBar = customScrollBar;
    this.backgroundColor = backgroundColor;
    this.width = width;
    this.height = height;
    this.border = border;
    this.overflow = overflow;
    this.borderColor = borderColor;
    this.radius = radius;
    this.shadow = shadow;
    this.padding = padding;
    this.position = position;
  }
  static default(){
    return new BoxDecoration({
      width: "100%",
    });
  }
  static emptyCSS(){
    return {"width": "100%"};
  }
  static toCSS(decoration: IBoxDecoration){
    const cssStyle: Record<string, any> = {}
    if(decoration.overflow){
      cssStyle['overflow'] = decoration.overflow
    }
    if(decoration.shadow!=null){
      cssStyle['box-shadow'] = decoration.shadow
    }
    if(decoration.padding){
      cssStyle['padding'] = EdgeInsets.toCSS(decoration.padding)
    }
    if(decoration.position){
      cssStyle['position'] = decoration.position
    }
    if(decoration.backgroundColor){
      cssStyle['background-color'] = decoration.backgroundColor
    }
    if(decoration.border!=null){
      cssStyle['border-width'] = decoration.border+"px"
      cssStyle['border-color'] = Colors.gray200
    }
    if(decoration.borderColor){
      cssStyle['border-color'] = decoration.borderColor
    }
    if(decoration.radius!=null){
      cssStyle['border-radius'] = decoration.radius
    }
    if(decoration.width!=null){
      cssStyle['width'] = decoration.width
    }
    if(decoration.height){
      cssStyle['height'] = decoration.height
    }
    return cssStyle
  }
}

export var blueButton = new BoxDecoration({backgroundColor: Colors.blue, radius: 4, padding: EdgeInsets.symmetric(8,16), width: "auto"});
export var greyButton = new BoxDecoration({backgroundColor: Colors.gray450, radius: 4, padding: EdgeInsets.symmetric(8,16), width: "auto"});