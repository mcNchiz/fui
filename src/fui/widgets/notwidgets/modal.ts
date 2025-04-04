import { FUIModalContent } from "../../apps"
import { BoxDecoration, Colors, greyButton, TextStyle } from "../../design"
import { Button, Container, Flex, SizedBox } from "../containerwidgets"
import { Column } from "../multiwidgets"
import { Text } from "../solewidgets"

export interface ICupertinoModal{
  id:string
  component?: JQuery<HTMLElement>
}

export class CupertinoModal extends FUIModalContent implements ICupertinoModal{
  id: string
  component?: JQuery<HTMLElement>

  constructor({id}:ICupertinoModal){
    super()
    this.id = id
    this.setup()
  }

  getContentSelector(){
    return `#${this.id} .fui-cupertino-modal`
  }
  show(){
    $("#"+this.id).show()
  }
  hide(){
    $("#"+this.id).hide()
  }

  setup(){
    const widget = new Container({
      tag: this.id,
      coords: {top: "0px"},
      decoration: new BoxDecoration({backgroundColor: "rgba(0,0,0,.5)", position: "fixed", width: "100%", height: "100%"}),
      child: new Flex({
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        child: new Container({
          className: "fui-cupertino-modal",
          decoration: new BoxDecoration({backgroundColor: Colors.white, width: "400px", radius: 12}),
          child: new Flex({
            height: "200px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            child: new Column({
              alignItems: "center",
              children: [
                new Text("404", new TextStyle({weight: "700", size: 28})),
                new SizedBox({height: 8}),
                new Text("Content unavailable", new TextStyle({alignment: "center"})),
                new SizedBox({height: 16}),
                new Button({
                  onClick: ()=>this.hide(),
                  decoration: greyButton,
                  child: new Text("Close", new TextStyle({color: Colors.white}))
                }),
              ]
            })
          })
        })
      })
    })
    widget.render()
    widget.component!.get(0)!.style.display = "none"
    widget.component?.appendTo($("body"))
  }
}