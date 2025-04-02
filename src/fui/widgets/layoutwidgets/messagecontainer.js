import { EdgeInsets } from "@fui/design/spacing";
import { LayoutWidget } from "../advancewidget";
import { Container } from "../containerwidgets/container";
import { Column } from "../multiwidgets/column";
import { TextStyle } from "@fui/design/textstyle";
import { Colors } from "@fui/design/color";
import { Text } from "../solewidgets/text";


export class MessageContainer extends LayoutWidget{
  constructor({child=null, message=null, notifier, padding = EdgeInsets.all(4, 8)}){
    super({child});
    this.notifier = notifier;
    this.message = message;
    this.padding = padding;
    this.create();
    if(this.notifier){
      this.notifier.addListener((newValue)=>{
        this.notify(newValue);
      });
    }
  }
  notify(newValue){
    
  }
  build(){
    return new Column({
      gap: 4,
      alignItems: "start",
      children: [
        this.message?new Text(this.message, new TextStyle({size: 14, color: Colors.red})):null
      ],
    });
  }
}