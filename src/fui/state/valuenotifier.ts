
export type IListenerCallback<T> = (value:T)=>void
export interface IValueNotifier<T>{
  _value: T|null,
  force: boolean
  listeners: IListenerCallback<T>[]
  value: T | null
}

export class ValueNotifier<T> implements IValueNotifier<T>{
  _value: T|null;
  force: boolean;
  listeners: IListenerCallback<T>[];

  constructor(initialValue:T|null=null, force:boolean=false) {
    this._value = initialValue;
    this.force = force;
    this.listeners = [];
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this.force || this._value !== newValue) {
      this._value = newValue;
      this.notifyListeners();
    }
  }
  addListener(listener:IListenerCallback<T>) {
    this.listeners.push(listener);
  }
  removeListener(listener:IListenerCallback<T>) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }
  notifyListeners() {
    if(this._value!=null){
      this.listeners.forEach(listener => listener(this._value!));
    }
  }
  clearListeners(){
    this.listeners = [];
  }
  dispose(){
    this.value = null;
    this.clearListeners()
  }
}