import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalService {
  myGlobalVar;
  constructor() {
    this.myGlobalVar = "";
  }
  setmyGlobalVar(value:any){
    this.myGlobalVar = value;
  }
  getmyGlobalVar(){
    return this.getmyGlobalVar;
  }
}
