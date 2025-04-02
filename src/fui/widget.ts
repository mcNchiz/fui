import { Renderer } from "./renderers/base-renderer";
import { JQueryDOM } from "./renderers/jquerydom";

export interface IWidget{
  _renderer: Renderer
  component: JQuery<HTMLElement>|null
  parentWidget: IWidget|null
  create(): void
  render(): void
  setParentWidget(parentWidget: IWidget): void
  renderToParentComponent(childWidget: IWidget): void
  clear(): void
}

export class Widget implements IWidget{
  _renderer = new JQueryDOM();
  component:JQuery<HTMLElement>|null = null;
  parentWidget: IWidget|null = null;
  constructor(){
    this.component = this._renderer.defaultWidget();
  }
  create(){
    this.component = this.widget();
  }
  widget(){
    return this._renderer.defaultWidget();
  }
  render(){
    this.renderToParentComponent(this);
  }
  setParentWidget(parentWidget: IWidget){
    this.parentWidget = parentWidget;
  }
  renderToParentComponent(childWidget: IWidget){
    if(this.parentWidget){
      this._renderer.append(childWidget, this.parentWidget);
    }
  }
  clear(){
    this.component!.empty();
  }
}