import { BoxDecoration, Colors, EdgeInsets, TextStyle } from "../../design"
import { IWidget } from "../../widget"
import { Button, Container, Flex, SizedBox } from "../containerwidgets"
import { Padding } from "../layoutwidgets"
import { CupertinoDialogButton } from "../layoutwidgets/cupertinobutton"
import { Column, Row } from "../multiwidgets"
import { Line, Text } from "../solewidgets"

export function showDialog(dialog: CupertinoDialog){
  dialog.show()
}

export class CupertinoDialog{
  widget?: IWidget
  component?: JQuery<HTMLElement>
  actions: any[]
  title: string
  subtitle?: string
  body: IWidget|null
  constructor({actions=[], title="Dialog", subtitle, body}: {actions?: any[], title?: string, subtitle?: string, body: IWidget|null}){
    this.actions = actions
    this.title = title
    this.subtitle = subtitle
    this.body = body
  }
  show(){
    this.widget = new Container({
      coords: {top: "0px"},
      decoration: new BoxDecoration({backgroundColor: "rgba(0,0,0,.5)", position: "fixed", width: "100%", height: "100%"}),
      child: new Flex({
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        child: new Container({
          decoration: new BoxDecoration({backgroundColor: Colors.white, width: "400px", radius: 12}),
          child: new Column({
            alignItems: "center",
            children: [
              new SizedBox({height: 8}),
              new Padding({
                padding: EdgeInsets.symmetric(8, 24),
                child: new Column({
                  gap: 4,
                  alignItems: "center",
                  children: [
                    new Text(this.title, new TextStyle({size: 20, alignment:"center", weight: "600"})),
                    this.subtitle?new Text(this.subtitle, new TextStyle({color: Colors.gray500, alignment: "center", size: 14})):null,
                  ],
                })
              }),
              new Line(),
              new Container({
                decoration: new BoxDecoration({padding: EdgeInsets.all(16)}),
                child: this.body,
              }),
              new Line(),
              new Row({
                children: [
                  new CupertinoDialogButton({label: "Okay", onClick: ()=>this.closeDialog()}),
                  new Container({decoration: new BoxDecoration({backgroundColor: Colors.gray300, width: "0.8px", height: "40px"})}),
                  new CupertinoDialogButton({label: "Close", onClick: ()=>this.closeDialog()}),
                ],
              }),
            ],
          })
        })
      })
    })
    this.widget.render()
    this.widget.component?.appendTo($("body"))
    return this.widget
  }
  closeDialog(){
    this.widget?.component?.hide()
  }
}