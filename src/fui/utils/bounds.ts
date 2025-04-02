export class Bounds{
  maxWidth: string
  maxHeight: string
  minWidth: string
  minHeight: string
  constructor({maxWidth="auto", minWidth="auto", maxHeight="auto", minHeight="auto"}){
    this.maxWidth = maxWidth
    this.minWidth = minWidth
    this.maxHeight = maxHeight
    this.minHeight = minHeight
  }
  static default(){
    return new Bounds({})
  }
  static toCSS(bounds: Bounds){
    return {
      "max-width": bounds.maxWidth,
      "max-height": bounds.maxHeight,
      "min-width": bounds.minWidth,
      "min-height": bounds.minHeight,
    }
  }
}