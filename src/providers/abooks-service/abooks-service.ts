import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AbooksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AbooksService {

  constructor(public http: Http) {  }
  getAbooks(sessionid){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilepab?ACT_CL_TB=1&FVAL=4&SENS=0&ONLYCT=1&ABID=&tpl=contact_list_light&ID='+sessionid+'&allowAccessMode=&nocache=94064.26919116017&_=1505736101984').map((res:Response) => res.json());
  }
}
