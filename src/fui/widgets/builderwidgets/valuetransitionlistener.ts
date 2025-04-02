import { animate } from "motion";
import { BootstrapIcon, BoxDecoration, Colors, EdgeInsets, TextStyle } from "../../design";
import { ValueNotifier } from "../../state";
import { delay } from "../../utils";
import { BuilderWidget, IValueBuilder } from "../builderwidget";
import { Container, SizedBox } from "../containerwidgets";
import { Column } from "../multiwidgets";
import { Icon, Text } from "../solewidgets";
import { IValueListener } from "./valuelistener";

export class MotionTransition {
  delay?: number
  animateOut: any
  animateOutFrom: any
  animateIn: any
  animateInFrom: any

  constructor({
    animateOut = { opacity: 0 }, // Shrink effect
    animateOutFrom= { from: 1}, 
    animateIn = { opacity: 1}, // Restore effect
    animateInFrom = { from: 0},  
    delay = 0,
  } = MotionTransition.default) {
    this.delay = delay;
    this.animateOut = animateOut;
    this.animateOutFrom = animateOutFrom;
    this.animateIn = animateIn;
    this.animateInFrom = animateInFrom;
  }
  
  static default = {
    delay: 200,
    animateOut: { opacity: 0 },
    animateOutFrom: { from: 1},
    animateIn: { opacity: 1,},
    animateInFrom: { from: 0},
  };
  static scaleOut = {
    delay:0,
    animateOut: { scale: 0.5, opacity: 0 },
    animateOutFrom: { scale: 1, opacity: 1},
    animateIn: { scale: 1, opacity: 1},
    animateInFrom: { scale: 0.5, opacity: 0},
  };
  static popUp = {
    animateOut: {opacity: 0, y: -5},
    animateOutFrom: {opacity: 1, y: 0},
    animateIn: { y: 0, opacity: 1},
    animateInFrom: { y: 5, opacity: 0},
  };
}


export class ValueTransitionListener<T> extends BuilderWidget<T>{
  // transition = new MotionTransition();
  notifier: ValueNotifier<T>;
  transition: MotionTransition
  value: T|null
  constructor({notifier, builder, transition = new MotionTransition({
    animateOut: {opacity: 0},
    animateOutFrom: {from: 1},
    animateIn: {opacity: 1},
    delay: 0,
    animateInFrom: {from: 0},
  })}: {transition: MotionTransition, notifier: ValueNotifier<T>, builder: IValueBuilder<T>}){
    super({builder});
    this.notifier = notifier;
    this.transition = transition;
    this.value = this.notifier.value;
    this.setValue(this.value);
    this.notifier.addListener((newValue)=>{
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
  async updateUI(){
    let component = this.component!.get()
    if(component) await animate(component, this.transition.animateOut, this.transition.animateOutFrom)
    await delay(this.transition.delay??0);
    this.widget();
    this.render();
    if(component) await animate(component, this.transition.animateIn, this.transition.animateInFrom)
  }
  build(){
    return new Container({
      decoration: new BoxDecoration({width: "auto"}),
      child: this.value!=null
        ?this.builder
          ?this.builder(this.value)
          :null
        :new Container({
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

