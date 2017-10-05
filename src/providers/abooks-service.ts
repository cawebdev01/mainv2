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
  url;
  constructor(public http: Http) {
    this.url = localStorage.getItem('url');
    }
  getAbooks(sessionid){
    return this.http.get(this.url+'/cgi-bin/ajaxpab?ACT_CL_TB=1&FVAL=4&SENS=0&ONLYCT=1&ABID=&tpl=contact_list_light&ID='+sessionid).map((res:Response) => res.json());
  }
  getAbook(sessionid, abid){
    return this.http.get(this.url+'/cgi-bin/ajaxpab?ACT_CL_TB=1&FVAL=4&SENS=0&ONLYCT=1&ABID='+abid+'&tpl=contact_list&ID='+sessionid).map((res: Response)=> res.json());
  }
  getContact(sessionid, abid, cid){
    return this.http.get(this.url+'/cgi-bin/ajaxpab?ACT_CT_LEDIT=1&tpl=contact_edit&CUID='+cid+'&ABID='+abid+'&ID='+sessionid).map((res: Response)=> res.json());
  }
}
