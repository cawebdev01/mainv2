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
  constructor(public http: Http){}
  login(credentials){
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

    this.http.post('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/authenticate.php?login='+credentials.email+'&password='+credentials.password+'&lang='+credentials.lang+'&NEWMOBILE='+credentials.NEWMOBILE, JSON.stringify(credentials), {headers:headers})
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
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}