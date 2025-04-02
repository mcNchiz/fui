import { IWidget, Widget } from "../widget";

export type IValueBuilder<T> = (value:T)=>IWidget|null

export abstract class BuilderWidget<T> extends Widget{
  buildWidget: IWidget|null = null;
  child: IWidget|null = null;
  builder?: IValueBuilder<T>
  constructor({builder}:{builder?: IValueBuilder<T>}){
    super();
    this.builder = builder;
    this.initialize();
  }
  initialize(){
    this.create();
    this.linkWidgets();
  }
  linkWidgets(){
    this.buildWidget!.parentWidget = this;
  }
  render(){
    super.render();
    if(this.buildWidget){
      this.buildWidget.render();
    }
  }
  updateUI(){
    this.widget();
    this.render();
  }
  widget(){
    this.buildWidget = this.build();
    this.buildWidget.parentWidget = this;
    this.clear();
    if(this.buildWidget.component){
      return this.buildWidget.component;
    }
    return super.widget()
  }
  abstract build():IWidget
}