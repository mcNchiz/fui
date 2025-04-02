import { BoxDecoration } from "@fui/design/boxdecoration";
import { MultiWidget } from "../multiwidget";
import { Colors } from "@fui/design/color";
import { EdgeInsets } from "@fui/design/spacing";
import { InputTab } from "../solewidgets/inputtab";
import { Validatable } from "@fui/services/form/validatable";

export class TabSelection extends Validatable(MultiWidget){
  selectedTab = null;
  constructor({children=[], gap, onChange, syncValidators, asyncValidators, alignItems, direction="column", justifyContent, decoration = new BoxDecoration({
    backgroundColor: Colors.white,
    width: "auto",
    padding: EdgeInsets.all(12),
  })}){
    super({children, asyncValidators, syncValidators});
    this.gap = gap;
    this.onChange = onChange;
    this.direction = direction;
    this.alignItems = alignItems;
    this.decoration = decoration;
    this.justifyContent = justifyContent;
    this.create();
    this.initialize();
  }
  initialize(){
    for(let tab of this.children){
      if(tab instanceof InputTab && tab.checked){
        this.selectedTab = tab;
        break;
      }
    }
  }
  changeSelection(selected){
    this.onChange(selected.value);
  }
  widget(){
    let $component = this._renderer.createListContainer({
      direction: this.direction,
      gap: this.gap,
      alignItems: this.alignItems,
      decoration: this.decoration,
      justifyContent: this.justifyContent
    });
    return $component;
  }
}