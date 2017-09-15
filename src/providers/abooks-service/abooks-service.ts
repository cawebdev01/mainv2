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
  getAbooks(){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_leggera/cgi-bin/ajaxpab?ACT_CL_TB=1&&FVAL=105&SENS=0&ABID=&tpl=main&ID=IeBAJjpkyZMWrUoVMmBALUq0_rRdq0alCqS.JXehS6_qAJ16da9A-&nocache=896865.9154971194').map((res:Response) => res.json());
  }
}
