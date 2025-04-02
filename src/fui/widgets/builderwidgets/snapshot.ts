import axios from "axios";
import { BuilderWidget, IValueBuilder } from "../builderwidget";
import { IWidget } from "../../widget";
import { Container } from "../containerwidgets";
import { Text } from "../solewidgets";



export class SnapshotBuilder<T> extends BuilderWidget<T>{
  snapshot = null;
  builder?: IValueBuilder<T> | undefined;
  type: string
  url: string
  data?: any
  value?: any
  blueprintWidget?: IWidget
  constructor({builder, refreshNotifier=null, type="POST", url, data=null, blueprintWidget}: {blueprintWidget?:IWidget, url: string, data: any, type: string, refreshNotifier?: any, builder?:IValueBuilder<T>}){
    super({builder});
    this.type = type;
    this.url = url;
    this.data = data;
    this.blueprintWidget = blueprintWidget;
    if (typeof builder !== "function") {
      throw new Error("SnapshotBuilder require functions as builder.");
    }
    if(refreshNotifier){
      refreshNotifier.addListener((value:any)=>{
        this.beginRequest(url)
      })
    }
    this.beginRequest(url);
    this.initialize();
  }
  initialize(){
    this.create();
    this.linkWidgets();
  }
  setValue(value:any){
    this.value = value;
  }
  build(){
    return new Container({
      child: this.value!=null
        ?this.builder
          ?this.builder(this.value)
          :new Text("Builder missing")
        :this.blueprintWidget
          ?this.blueprintWidget
          :new Text("Loading"),
    });
  }
  getRequestType(url: string){
    if(this.type=="POST"){
      return axios.post(url, this.data);
    }else{
      return axios.get(url);
    }
  }
  beginRequest(url: string){
    this.getRequestType(url).then((response)=>{
      this.setValue(response);
      this.updateUI();
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function(){});
  }
}

