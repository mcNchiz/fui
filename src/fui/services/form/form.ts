import { animate } from "motion";
import { MultiWidget, Text } from "../../widgets";
import { FormSection } from "./formsection";
import { delay, formatClassName } from "../../utils";
import { IWidget } from "../../widget";

export interface IForm{
  action: string
  name: string
  method: string
  onSubmit: (restart: (errorMsgs: string[])=>void, success: (message: string)=>void)=>void
}
export class Form extends MultiWidget implements IForm{
  action: string
  name: string;
  
  activeIndex = 0;
  sectionDisplacement = 40
  method: string
  onSubmit: (restart: (errorMsgs: string[]) => void, success: (message: string) => void) => void;

  constructor({action="#", name, method="GET", children, onSubmit}:{onSubmit: (restart: (errorMsgs: string[])=>void, success: (message: string)=>void)=>void, children: (IWidget|null)[], method?: string, name?: string, action?: string}){
    super({children: children.filter(c=>c instanceof FormSection)});
    this.action = action;
    this.name = formatClassName(name??"form");
    this.onSubmit = onSubmit;
    this.method = method;
    this.create();
  }
  async back(){
    let section = this.children[this.activeIndex];
    if(section instanceof FormSection){
      if(this.activeIndex>0){
        this.activeIndex--;
        
        animate(section.component!.get(), {opacity: [1,0]}, {duration: 1});
        animate(section.component!.get(), {x: [0, this.sectionDisplacement]})
        let prevSection = this.children[this.activeIndex];
        await delay(50);
        section.hide();
        if(prevSection instanceof FormSection){
          prevSection.show();
          animate(prevSection.component!.get(), {opacity: [0,1]})
          animate(prevSection.component!.get(), {x: [this.sectionDisplacement*-1, 0]})
          prevSection.triggerFocus();
        }
      }else{
        animate(section.component!.get(), {x: [0,10]})
        await delay(200);
        animate(section.component!.get(), {x: [10,0]})
      }
    }
  }

  async restart(errorMsgs: string[]){
    this.activeIndex=0;
    let prevSection = this.children[this.activeIndex];
    await delay(50);
    if(prevSection instanceof FormSection){
      prevSection.show();
      prevSection.submit.value = "Sub";
      animate(prevSection.component!.get(), {opacity: [0,1]})
      animate(prevSection.component!.get(), {x: [this.sectionDisplacement*-1, 0]})
      prevSection.triggerFocus();
    }
    let activeSection = this.children[this.activeIndex]
    if(activeSection instanceof FormSection){
      activeSection.submit.value = this.activeIndex==this.children.length-1?"Submit":"Next";
    }
  }
  success(msg: string){}

  async next(){
    let section = this.children[this.activeIndex];
    if(section instanceof FormSection){
      let isSectionAccomplished = section.accomplishedNotifier.value==true;
      if(isSectionAccomplished){
        if(this.activeIndex==this.children.length-1){
          let activeSection = this.children[this.activeIndex]
          if(activeSection instanceof FormSection){
            // animate(section.component!.get(), {opacity: [1,0]})
            // await delay(400);
            // section.hide();
            if(activeSection.submit.value!="Submitting"){
              this.onSubmit((errorMsgs)=>this.restart(errorMsgs), (msg)=>this.success(msg));
            }
            activeSection.submit.value = "Submitting";
          }
        }else{
          this.activeIndex++;
          animate(section.component!.get(), {opacity: [1,0]})
          animate(section.component!.get(), {x: [0, this.sectionDisplacement*-1]})
          let nextSection = this.children[this.activeIndex];
          await delay(50);
          section.hide();
          if(nextSection instanceof FormSection){
            nextSection.show();
            animate(nextSection.component!.get(), {opacity: [0,1]})
            animate(nextSection.component!.get(), {x: [this.sectionDisplacement, 0]})
            nextSection.triggerFocus();
          }
        }
      }
    }
  }
  enter(data: any){
    this.next();
  }
  render(){
    let i = 0;
    super.render();
    for(let section of this.children){
      if(section instanceof FormSection){
        if(section===this.children[this.children.length-1]){
          section.submit.value = "Submit";
        }
        if(i!=this.activeIndex){
          section.hide();
        }else{
          section.triggerFocus();
        }
        let className = `${this.name}-fs-${i}`;
        section.index = i;
        section.goBack = (i)=>this.back();
        section.proceed = (i)=>this.next();
        section.name = className;
        section.component!.addClass(className);
        i++;
      }
    }
  }
  widget(){
    var component = this._renderer.createApiForm({action: this.action, onSubmit: this.onSubmit, name: this.name, method: this.method}, (data:any)=>this.enter(data));
    return component;
  }
}