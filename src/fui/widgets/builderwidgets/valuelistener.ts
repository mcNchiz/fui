import { BootstrapIcon, BoxDecoration, Colors, EdgeInsets, TextStyle } from "../../design";
import { ValueNotifier } from "../../state";
import { BuilderWidget, IValueBuilder } from "../builderwidget";
import { Container, SizedBox } from "../containerwidgets";
import { Column } from "../multiwidgets";
import { Icon, Text } from "../solewidgets";

export interface IValueListener<T>{
  notifier: ValueNotifier<T>
  builder: IValueBuilder<T>
}
export class ValueListener<T> extends BuilderWidget<T>{
  notifier: ValueNotifier<T>;
  builder?: IValueBuilder<T> | undefined;
  value: T|null
  
  constructor({notifier, builder}: IValueListener<T>){
    super({builder});
    this.notifier = notifier;
    this.value = this.notifier.value;
    this.setValue(this.value);
    this.notifier.addListener((newValue: T)=>{
      this.setValue(newValue);
      this.updateUI();
    });
    if (typeof builder !== "function") {
      throw new Error("ValueListener requires a function as builder.");
    }
    this.initialize();
  }
  initialize(){
    this.create();
    this.linkWidgets();
    if(this.value){
    }
  }
  setValue(value: T|null){
    this.value = value;
  }
  build(){
    return new Container({
      decoration: new BoxDecoration({width: "auto"}),
      child: this.value!=null
        ?this.builder!=null
          ?this.builder(this.value)
          :new Text("Builder undefined")
        : new Container({
        decoration: new BoxDecoration({
          backgroundColor: Colors.red,
          radius: 8,
          padding: EdgeInsets.all(40),
        }),
        child: new Column({
          gap: 0,
          children: [
            new Icon(new BootstrapIcon({name: "exclamation-triangle-fill", color: Colors.white, size: 40})),
            new Text("404", new TextStyle({color: Colors.white, weight: "700", alignment: "center", size: 24})),
            new SizedBox({height: 8}),
            new Text("Valuenotifier not set", new TextStyle({color: Colors.white, letterSpacing: "-0.2px", alignment: "center", size: 14})),
          ],
        }),
      }),
    });
  }
}

