export interface IconProps{
  name?: string
  size?: string|number
  color?: any
}
export class BootstrapIcon implements IconProps{
  name: string;
  size: string | number;
  color: any;
  
  constructor({name="grid", size=16, color="inherit"}: IconProps){
    this.name = name;
    this.size = size;
    this.color = color;
  }
}