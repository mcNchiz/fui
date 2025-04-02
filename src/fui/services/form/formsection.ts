import { BootstrapIcon, BoxDecoration, Colors, EdgeInsets, TextStyle } from "../../design";
import { ValueNotifier } from "../../state";
import { IWidget } from "../../widget";
import { BuilderWidget, Button, Column, Container, ContainerWidget, Icon, LayoutWidget, Line, ModifiedWidget, MultiWidget, Padding, Row, SizedBox, Spinner, Text, ValueListener, ValueValidator } from "../../widgets";

export class FormSection extends LayoutWidget{
  name = "fs";
  index: number|null = null;
  goBack?: (index:number)=>void
  proceed?:(index:number)=>void
  label: string
  isActive: boolean
  stateNotifier: ValueNotifier<any>
  accomplishedNotifier: ValueNotifier<boolean>

  submit= new ValueNotifier("Continue");
  constructor({child=new Container(), label, isActive=false, stateNotifier}: {child?: IWidget, label: string, isActive: boolean, stateNotifier: ValueNotifier<any>}){
    super({child});
    this.isActive = isActive;
    this.label = label;
    this.stateNotifier = stateNotifier;
    this.accomplishedNotifier = new ValueNotifier(true, true);
    this.create();
    
    this.stateNotifier.addListener((v)=>this.setState(v));
  }
  hide(){
    if(this.component) this._renderer.hide(this.component);
  }
  show(){
    if(this.component) this._renderer.show(this.component);
  }
  triggerFocus(){
    if(this.component) this._renderer.triggerFocus(this.component);
  }
  build(){
    return new Column({
      alignItems: "start",
      children: [
        new Row({
          gap: 8,
          children: [
            new Icon(new BootstrapIcon({name: "journal-bookmark-fill", color: Colors.gray900, size: 24})),
            new Text(this.label, new TextStyle({size: 16, color: Colors.gray900})),
          ],
        }),
        new SizedBox({height: 16}),
        new Container({
          child: this.child,
        }),
        new SizedBox({height: 32}),
        new Column({
          justifyContent: "end",
          children: [
            new Line({}),
            new Container({
              child: new ValueListener({
                notifier: this.accomplishedNotifier,
                builder: (proceed)=>{
                  return new Button({
                    type: this.submit?"submit":"button",
                    onClick: (e)=>{
                      if(this.proceed) this.proceed(this.index??0)
                    },
                    decoration: new BoxDecoration({
                      radius: 6,
                      padding: EdgeInsets.symmetric(14, 12),
                    }),
                    color: proceed?Colors.white: Colors.gray700,
                    size: 18,
                    child: new ValueListener({
                      notifier: this.submit,
                      builder: (v)=>{
                        return new Column({
                          alignItems: "center",
                          children: [
                            new Row({gap: 8, justifyContent: "center", children: [
                              v=="Submitting"?new Spinner():null,
                              new Text(v, new TextStyle({size: 18, color: proceed?Colors.blue: Colors.gray700, alignment: "center"})),
                            ]}),
                            !proceed?new Text("Some required fields are missing. Please provide the necessary details.", new TextStyle({size: 14, color: proceed?Colors.blue: Colors.gray450, alignment: "center"})):null
                          ]
                        });
                      }
                    }),
                  });
                }
              }),
            }),
            new Line({}),
            new Button({
              type: "button",
              decoration: new BoxDecoration({
                radius: 6,
                padding: EdgeInsets.symmetric(14, 12),
              }),
              onClick: (e)=>{
                if(this.goBack) this.goBack(this.index??0)
              },
              color: Colors.gray700,
              size: 18,
              child: new Text("Back", new TextStyle({size: 18, alignment: "center"})),
            }),
          ],
        }),
      ],
    });
  }
  setState(value: any){
    this.accomplishedNotifier.value = false;
    let tree = new Array();
    let queue:IWidget[] = new Array(this);
    while(queue.length){
      var widget = queue.shift();
      tree.push(widget);
      if(widget instanceof ContainerWidget){
        if(widget.child) queue.push(widget.child);
      }else if(widget instanceof MultiWidget){
        for(let childWidget of widget.children){
          if(childWidget) queue.push(childWidget);
        }
      }else if(widget instanceof LayoutWidget){
        queue.push(widget.child);
      }else if(widget instanceof BuilderWidget){
        if(widget.buildWidget) queue.push(widget.buildWidget);
      }else if(widget instanceof ModifiedWidget){
        if(widget.child) queue.push(widget.child);
      }
    }
    let validatorWidgets = tree.filter(f=>f instanceof ValueValidator);
    var errorCheckingProcess = validatorWidgets.map(v=>v.validationResult.hasError());
    var validatingProcess = validatorWidgets.map(v=>v.validationResult.onProgress());
    if(!errorCheckingProcess.includes(true) && !validatingProcess.includes(true)){
      this.accomplishedNotifier.value = true;
    }else{
      this.accomplishedNotifier.value = false;
    }
  }
}