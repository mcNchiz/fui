import { ModifiedWidget } from "../modifiedwidget";

export class SelectOption<T>{
  label: string
  value: T|null
  constructor({label, value}: {label: string, value: T|null}){
    this.label = label
    this.value = value
  }
}
export interface CreateDropdownSelectProps<T>{
  options: SelectOption<T>[]
  initialValue: SelectOption<T>
  onChange: (selectedOption: SelectOption<T>, index:number)=>void
}
export class DropdownSelect<T> extends ModifiedWidget{
  options: SelectOption<T>[]
  initialValue: SelectOption<T>
  onChange: (selectedOption: SelectOption<T>, index:number)=>void
  constructor({options=[], initialValue=new SelectOption({label: "--Select", value: null}) as SelectOption<T>, onChange=(selectedOption: SelectOption<T>, index: number)=>{}}){
    super();
    this.options = options;
    this.initialValue = initialValue;
    this.onChange = onChange;
    this.create();
  }
  widget(){
    // this.linkWidgets(selectInput)
    let component = this._renderer.createDropdownSelect<T>({options: this.options, initialValue: this.initialValue, onChange: (option, index)=>this.onChange(option, index)});
    return component;
  }
}