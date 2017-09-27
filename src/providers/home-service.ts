import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeService {

  constructor(public http: Http) {  }
  getNews(sessionid){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilemail?Act_Msgs_Unread_List=1&Tpl=mail_list&ID='+sessionid).map((res:Response)=> res.json());
  }
}
