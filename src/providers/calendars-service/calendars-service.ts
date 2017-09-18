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
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilecal?ActSearch=1&FromWebmail=1&tpl=eventlist&start_year_list=2017&start_month_list=9&start_day_list=1&end_year_list=2017&end_month_list=9&end_day_list=30&FullReload=&istitles=1&search_string=&search_class=1&ID='+sessionid+'&nocache=236183.06000376775&_=1505736101995').map((res:Response) => res.json());
  }

}
