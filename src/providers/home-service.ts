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
  url;
  constructor(public http: Http) {
    this.url = localStorage.getItem('url');
    }
  getNews(sessionid){
    return this.http.get(this.url+'/cgi-bin/ajaxmail?Act_Msgs_Unread_List=1&Tpl=mail_list&ID='+sessionid).map((res:Response)=> res.json());
  }
}
