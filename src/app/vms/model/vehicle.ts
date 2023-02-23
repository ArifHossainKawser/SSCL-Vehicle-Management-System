import { Injectable } from "@angular/core";

@Injectable()
export class Vehicle{
  public make?: string;
    public model?: string;
    public year?: number;
    public regNumber?: string;
    public engineNumber?: string;
    public vinNumber?: string;

  constructor(){}

  clear(){
    this.make = this.model = this.year = this.regNumber = this.engineNumber = this.vinNumber = undefined
  }
}
