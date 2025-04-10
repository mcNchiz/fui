import { BoxDecoration, Colors, EdgeInsets, TextStyle } from "../../design"
import { DialogContext } from "../../state"
import { IWidget } from "../../widget"
import { Container, Flex, SizedBox } from "../containerwidgets"
import { ListView, Padding } from "../layoutwidgets"
import { CupertinoDialogButton } from "../layoutwidgets/cupertinobutton"
import { Column } from "../multiwidgets"
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
    DialogContext.push(this)
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
                padding: EdgeInsets.symmetric(16, 24),
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
                decoration: new BoxDecoration({padding: EdgeInsets.symmetric(24, 16)}),
                child: this.body,
              }),
              new Line(),
              new Container({
                child: new ListView({
                  iterable: [...this.actions, new CupertinoDialogButton({label: "Close", onClick: ()=>this.closeDialog()})],
                  builder: (button, index)=>{
                    return new Column({
                      children: [
                        button,
                        (this.actions.length!=index)?new Line():null
                      ]
                    })
                  },
                }),
              })
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