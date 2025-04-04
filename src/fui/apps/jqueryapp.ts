import { Widget } from "../widget";

export abstract class FUIModalContent{
  abstract getContentSelector():string
}
export class JQueryApp{
  body: any
  appContainer: JQuery<HTMLElement|string>
  component: JQuery<HTMLElement|string>

  constructor({appContainer, body}:{appContainer: string|FUIModalContent, body: any}){
    this.component = $(appContainer instanceof FUIModalContent?appContainer.getContentSelector():appContainer);
    this.appContainer = this.component;
    this.appContainer.addClass("flexcolnogap");
    this.body = body;
  }
  render(){
    if(this.body instanceof Widget){
      this.body.setParentWidget(this as any);
      $(this.appContainer).empty()
      this.body.render();
    }else{
      this.appContainer.append(this.body);
    }
  }
}