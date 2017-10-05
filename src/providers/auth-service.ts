import { Injectable } from '@angular/core';
import { Http, /*Response,*/ Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
export class User {
  password : string;
  email: string;
  lang: string;
 
  constructor(password: string, email: string, lang: string) {
    this.password = password;
    this.email = email;
    this.lang = lang;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  email;
  password;
  sessionid;
  constructor(public http: Http){}
  login(credentials){
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

    this.http.post(
      /*'https://webmailstafftest.aruba.it/authenticate.php?login='+credentials.email+'&password='+credentials.password+'&lang=en&service=leggera'*/ 'http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/authenticate.php?login='+credentials.email+'&password='+credentials.password+'&lang='+credentials.lang+'&NEWMOBILE='+credentials.NEWMOBILE, JSON.stringify(credentials), {headers:headers})
      /*'http://www1.dc.xandmail.com/ca/testbuild_leggera/cgi-bin/ajaxmail?Act_Msgs=1&Tpl=login&LOGIN='+credentials.email+'&PASSWD='+credentials.password+'&SG_Lang=en', JSON.stringify(credentials), {headers: headers})*/
      .subscribe(res => {
        resolve(res.json());
      }, (err) => { 
        reject(err);
      });
    });
  }
  
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    this.sessionid = localStorage.getItem('sessionid');
    this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilemail?Act_Logout=1&&CleanSession=1&ID='+this.sessionid)
    /*return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });*/
  }
}