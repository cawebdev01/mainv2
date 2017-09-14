import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  file : '';
  constructor(public http: Http) {
   // console.log('Hello HttpProvider Provider');
  }

  getJsonData(file){
    return this.http.get('src/json/' + file + '.json').map(res => res.json());
  }

}
