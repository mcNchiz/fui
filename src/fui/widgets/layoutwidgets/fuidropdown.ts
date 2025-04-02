import { BoxDecoration, Coordinates } from "../../design"
import { ValueNotifier } from "../../state"
import { Bounds } from "../../utils"
import { IWidget } from "../../widget"
import { ValueListener } from "../builderwidgets"
import { Button, Container, Positioned } from "../containerwidgets"
import { ModifiedWidget } from "../modifiedwidget"
import { Column } from "../multiwidgets"
import { Text } from "../solewidgets"

export interface FUIDropdownProps{
  builder: (toggleF: ()=>void)=>IWidget
  triggerWidget?: IWidget
}
export class FUIDropdown extends ModifiedWidget{
  _position = new ValueNotifier(new Coordinates({top:0, left:0}))
  _bounds = new ValueNotifier(Bounds.default())
  _hidden = new ValueNotifier(true)
  wrapper: IWidget = new Container()
  buttonWidget = new Container()
  builder: (toggleF: ()=>void)=>IWidget
  triggerWidget: IWidget
  constructor({triggerWidget=new Button({child: new Text("Dropdown")}), builder}: FUIDropdownProps){
    super()
    this.builder = builder
    this.triggerWidget = triggerWidget
    this.create()
  }
  toggle(){
    this._hidden.value = !this._hidden.value
  }
  getWindowSize(){
    return {
      height: $(window).height(),
      width: $(window).width()
    }
  }
  getBuilderBounds(){
    const builder = this.builder(()=>this.toggle())
    builder.component!.css({"width":"auto"})
    builder.render()
    builder.component!.appendTo("#backstage")
    const bounds = builder.component!.get(0)!.getBoundingClientRect()
    builder.component!.remove()
    return bounds
  }
  updatePosition(){
    this._bounds.clearListeners()
    this._position.clearListeners()

    const spacing = 8
    const buttonBounds = this.buttonWidget.component!.get(0)!.getBoundingClientRect()
    const windowSize = this.getWindowSize()

    let availableRightWidth = windowSize.width! - buttonBounds.left - spacing*2;
    let availableLeftWidth = buttonBounds.left + buttonBounds.width - spacing * 2;
    let availableBottomHeight = windowSize.height! - buttonBounds.bottom - spacing*2;
    let availableTopHeight = buttonBounds.top - spacing * 2;

    var finalHeight = availableBottomHeight>availableTopHeight?availableBottomHeight:availableTopHeight
    var finalWidth = availableRightWidth>availableLeftWidth?availableRightWidth:availableLeftWidth
    this._bounds.value = new Bounds({maxWidth: finalWidth+"px", maxHeight: finalHeight+"px"})
    
    this._position.value = new Coordinates({
      top: availableBottomHeight>availableTopHeight ? buttonBounds.bottom+spacing : buttonBounds.top-finalHeight-spacing,
      left: availableLeftWidth>availableRightWidth?"auto":buttonBounds.left,
      right: availableLeftWidth>availableRightWidth?windowSize.width! - buttonBounds.right:"auto"
    })
  }
  widget(){
    this.buttonWidget = new Button({
      onClick: (e)=>{
        this.toggle()
      },
      child: this.triggerWidget
    })

    this.wrapper = new Column({
      children: [
        this.buttonWidget,
        new Container({
          decoration: new BoxDecoration({width: "auto"}),
          child: new ValueListener({
            notifier: this._hidden,
            builder: (isHidden)=>{
              if(!isHidden){
                this.updatePosition()
                return new Container({
                  child: new ValueListener({
                    notifier: this._position,
                    builder: (coordinates)=>{
                      return new Positioned({
                        position: "fixed",
                        coordinates: new Coordinates({top: coordinates.top, left: coordinates.left, right: coordinates.right}),
                        child: new ValueListener({
                          notifier: this._bounds,
                          builder: (bounds)=>{
                            return new Container({
                              decoration: new BoxDecoration({radius: 4, overflow: "auto", customScrollBar: true, width: "auto"}),
                              bounds: bounds,
                              child: this.builder(()=>this.toggle())
                            })
                          }
                        })
                      })
                    }
                  }),
                })
              }
              return new Container({})
            }
          }),
        })
      ],
    })
    
    this.linkWidgets(this.wrapper)
    let component = this._renderer.defaultWidget()
    return component
  }
}