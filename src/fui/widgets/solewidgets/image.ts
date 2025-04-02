import { SoleWidget } from "../solewidget";

export class Image extends SoleWidget{
  url: string
  width: string
  height: string
  constructor(url: string, width="100%", height="auto"){
    super({});
    this.url = url;
    this.width = width;
    this.height = height;
    this.create();
  }
  widget(){
    return this._renderer.createImage(this.url, this.width, this.height);
  }
}