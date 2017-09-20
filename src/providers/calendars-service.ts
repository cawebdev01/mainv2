import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CalendarsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalendarsService {

  constructor(public http: Http) {}
  getCals(sessionid){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilecal?ActSearch=1&FromWebmail=1&tpl=calendarlist&ID='+sessionid).map((res:Response) => res.json());
  }
  getCal(dessionid, calid){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/')
  }
}
