import { BoxDecoration } from "../../design";
import { AsyncValidator, ErrorVMW, ProgressVMW, ResetVMW, SuccessVMW, SyncValidator, ValidationMessageWidget, ValidationResult } from "../../services";
import { ValueNotifier } from "../../state";
import { BuilderWidget } from "../builderwidget";
import { Container } from "../containerwidgets";
import { Row } from "../multiwidgets";

export class ValueValidator<T> extends BuilderWidget<T>{
  validationResult: ValidationResult = new ValidationResult();
  validationWidget?: ValidationMessageWidget;
  inputTimeout?: number;
  valueNotifier: ValueNotifier<T>
  stateNotifier?: ValueNotifier<any>
  syncValidators: SyncValidator[]
  asyncValidators: AsyncValidator[]
  value: T|null
  
  constructor({valueNotifier, stateNotifier, syncValidators=[], asyncValidators=[]}: {valueNotifier: ValueNotifier<T>, stateNotifier?: ValueNotifier<T>, syncValidators: SyncValidator[], asyncValidators: AsyncValidator[]}){
    super({});
    this.syncValidators = syncValidators;
    this.asyncValidators = asyncValidators;
    this.valueNotifier = valueNotifier;
    this.stateNotifier = stateNotifier;
    this.value = this.valueNotifier.value;
    this.setValue(this.value);
    this.valueNotifier.addListener(async (v)=>await this.listener(v));
    this.listener(this.valueNotifier.value);
    this.initialize();
  }
  async listener(newValue: T|null){
    clearTimeout(this.inputTimeout);
    this.setValue(newValue);
    await this.validate();
    this.triggerStateNotifier("done from listener")
  }
  triggerStateNotifier(value: any){
    if(this.stateNotifier){
      this.stateNotifier.value = value
    }
  }
  initialize(){
    this.create();
    this.linkWidgets();
  }
  flashMessage(widget: ValidationMessageWidget){
    this.validationWidget = widget
    this.updateUI();
  }
  setValue(value: T|null){
    this.value = value;
  }
  async validate(){
    this.validationResult.wait();
    this.validationResult.clear();
    this.triggerStateNotifier("validating")
    return new Promise(async(resolve, reject) => {
      for(let syncvalidator of this.syncValidators){
        this.flashMessage(new ProgressVMW(syncvalidator.validatingMessage));
        var localResult = syncvalidator.validate(this.value);
        this.validationResult.merge(localResult);
        if(localResult.hasError()){
          this.flashMessage(new ErrorVMW(localResult.getFirstError()));
          this.postValidate();
          this.triggerStateNotifier("validation has error from syncvalidator")
          return resolve(true);
        }
      }
      if(this.asyncValidators.length){
        this.flashMessage(new ProgressVMW("Just a moment..."));
      }else{
        this.flashMessage(new ResetVMW("Just a moment..."));
        this.postValidate();
        this.triggerStateNotifier("done after sync")
        return resolve(true);
      }
      this.inputTimeout = setTimeout(async () => {
        for(let asyncvalidator of this.asyncValidators){
          this.flashMessage(new ProgressVMW(asyncvalidator.validatingMessage));
          var localResult = await asyncvalidator.validate(this.value);
          this.validationResult.merge(localResult);
          if(localResult.hasError()){
            this.flashMessage(new ErrorVMW(localResult.getFirstError()));
            this.validationResult.merge(localResult);
            this.postValidate();
            this.triggerStateNotifier("validation has error from async")
            return resolve(true);
          }else{
            this.flashMessage(new SuccessVMW(localResult.getFirstSuccess()));
            this.postValidate();
            this.triggerStateNotifier("done from else async")
            return resolve(true);
          }
        }
        this.postValidate();
        this.triggerStateNotifier("done from idk")
      }, 800);
    });
  }
  postValidate(){
    this.validationResult.validationDone();
  }
  build(){
    return new Container({
      decoration: new BoxDecoration({width: "auto"}),
      child: new Row({
        children: [
          this.validationWidget?this.validationWidget.getWidget():null
        ],
      }),
    });
  }
}