export class App{
  app: any
  constructor(app:any){
    this.app = app;
  }
  buildContext = "AppContext";
  render(){
    this.app.render();
  }
}