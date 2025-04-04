import { BoxDecoration, Colors, EdgeInsets, TextStyle } from "../../design";
import { LayoutWidget } from "../advancewidget";
import { Button, SizedBox } from "../containerwidgets";
import { Text } from "../solewidgets";

export class CupertinoDialogButton extends LayoutWidget{
  label: string
  onClick: () => void;
  constructor({label="Button", onClick}: {label?:string, onClick?: ()=>void}){
    super({child: new SizedBox()});
    this.onClick = onClick??(()=>{console.log("onClick not defined")})
    this.label = label
    this.create();
  }
  build(){
    return new Button({
      onClick: ()=>this.onClick(),
      decoration: new BoxDecoration({
        padding: EdgeInsets.symmetric(12, 20),
      }),
      child: new Text(this.label, new TextStyle({color: Colors.blue, size: 18, alignment: "center"})),
    });
  }
}